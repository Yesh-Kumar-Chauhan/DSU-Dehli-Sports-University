import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link'
import useTalentscoutingregistration from "../../../hooks/useTalent-scouting-registration-form";
import Registeration from "../../../pages/onsite-registration/registrationform";
import useStudnetBasicDetails from "../../../hooks/Student/useStudnetBasicDetails";
import useMedicalDetails from "../../../hooks/useMedicalDetails";
import useAchivementsForm from '../../../hooks/Achievement/useAchivementsForm';
import useUploadDocuments from '../../../hooks/useUploadDocuments';
import { useRouter } from 'next/router';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Modal, Button } from "react-bootstrap";
import { ApiEndPoint } from "../../../helpers/common";
import { toast } from 'react-toastify';


const initialValues = {
  checke1: '',
  checke2: '',
  checke3: '',
};
const validationSchema = Yup.object({
  checke1: Yup.boolean().required("Please Select"),
  checke2: Yup.boolean().required("Please Select"),
  checke3: Yup.boolean().required("Please Select"),

})
const PreviewAndSubmit = () => {
  const { getBasicdetails, allsessions } = useStudnetBasicDetails();
  const { getMedicaldata } = useMedicalDetails();
  const { getAchievementdata } = useAchivementsForm();
  const { getApplicationdocs } = useUploadDocuments();
  const { submitapplication, add_dsu_athlete_data } = useTalentscoutingregistration();
  const [BasicData, setBasicData] = useState('')
  const [getMedicalData, setGetMedicalData] = useState('')
  const [AllAchievementData, setAllAchievementData] = useState('')
  const [AllDocs, setAllDocs] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [UrlPath, setUrlPath] = useState([]);
  const [SessionValue, setSessionValue] = useState([])
  const [showConformationModal, setShowConformationModal] = useState(false)
  const [BirthImgPrint, setBirthImgPrint] = useState();
  const router = useRouter();
  const handleShow = () => setShowModal(true);
  const modalRef = useRef();
  const { tab } = router.query;
  const tabName = { tab };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await allsessions();
        const filteredData = data.filter(
          (filterdata) => filterdata.isValid === true && filterdata.isRegistrationOpen === true
        );
        setSessionValue(filteredData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  // const handlePrint = useReactToPrint({
  //   content: () => modalRef.current,
  // });
  const targetUrl = 'dsu.ac.in';



  const formik = useFormik({
    initialValues: {
      checke1: false,
      checke2: false,
      checke3: false,
    },
    validationSchema: Yup.object({
      checke1: Yup.boolean().oneOf([true], 'Please accept the declaration.'),
      checke2: Yup.boolean().oneOf([true], 'Please accept the declaration.'),
      checke3: Yup.boolean().oneOf([true], 'Please accept the declaration.'),
    }),
    onSubmit: (values) => {
      const registrationStartDate = new Date(`${SessionValue[0]?.registrationStartDate}T${SessionValue[0]?.registrationStartTime}`);
      const registrationEndDate = new Date((`${SessionValue[0]?.registrationEndDate}T${SessionValue[0]?.registrationEndTime}`));
      const today = new Date();

      if (registrationStartDate < today) {
        if (registrationEndDate > today) {
          // submitapplication()
          setShowConformationModal(true)
          // router.push('/print-details');
        } else {
          toast.warning("Registration is Over")
        }
      } else {
        toast.warning("Registration not started yet")
      }
    },
  });
  const handleApiHit = async () => {
    const classNumber = parseInt(BasicData?.registrationClassTitle?.replace('Class ', ''), 10)
    const studentDetails = JSON.parse(localStorage.getItem('studentDetails'));
    const birthDate = new Date(BasicData?.dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    const TotalAge = age;
    await add_dsu_athlete_data({
      registrationid: studentDetails?.returnId,
      first_name: BasicData?.firstName + BasicData?.lastName,
      age: TotalAge,
      gender: BasicData?.genderDesc,
      date_of_birth: BasicData?.dob,
      tid_class: classNumber,
      address: BasicData?.addressLine1,
      mobile_number: BasicData?.mobileNo,
      email: BasicData?.emailId,
      photo: AllDocs?.photo,
      signature: AllDocs?.signature,
    })
  }
  const handleSubmitApplication = async () => {
    handleApiHit()
    submitapplication()
    router.push('/print-details');
  }

  const handlePrevious = () => {
    router.push({
      pathname: '/onsite-registration/registrationform',
      query: { tab: 'Achivements' },
    });
  }
  useEffect(() => {
    setUrlPath([router.asPath])
    if (tab == 'Preview and Submit') {
      const studentDetails = JSON.parse(localStorage.getItem('studentDetails'));
      if (studentDetails !== '') {
        getBasicdetails(studentDetails?.returnId)
          .then((getValue) => {
            setBasicData(getValue)
          })
        getMedicaldata(studentDetails?.returnId)
          .then((getValue) => {
            setGetMedicalData(getValue)
          })
        getAchievementdata(studentDetails?.returnId)
          .then((getValue) => {
            setAllAchievementData(getValue)
          })
        getApplicationdocs(studentDetails?.returnId)
          .then((getValue) => {
            setAllDocs(getValue)
            const birthvalue = `${ApiEndPoint}${getValue && getValue?.birthCertificate}`
            setBirthImgPrint(birthvalue)
          })
      }
    }
  }, [tab])

  useEffect(() => {
    const handleNavigation = (event) => {
      const shouldPreventNavigation = true;

      if (shouldPreventNavigation) {
        event.preventDefault();
        const stateObj = { page: 'example' };
        window.history.pushState(stateObj, '', window.location.href);

      }
    };
    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('pushstate', handleNavigation);
    const stateObj = { page: 'example' };
    window.history.pushState(stateObj, '', window.location.href);
    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('pushstate', handleNavigation);
    };
  }, []);

  const handlePdfOpen = (data) => {
    window.open(`${ApiEndPoint}${data && data?.fileUploaded}`, '_blank');
  }




  // let data = {
  //   registrationid : "your data(character Varying)",
  //   first_name : "your data(character Varying)",
  //   age:Integer,
  //   gender:"Male/Female",
  //   date_of_birth:"YYY:MM:DD",
  //   tid_class:"6/7/8/9....(Charcter Varying)",
  //   address:"your data(Text)",
  //   mobile_number:"your data(character Varying)",
  //   email:"your data(character Varying)",
  //   photo:"In binary data",
  //   signature:"In binary data"
  //   }


  //   Note:
  //   Gender Format:gender can only be "Male" or "Female".
  //   Date Format :date format Must be in YYYY-MM-DD for date_of_birth.
  //   photo : In binary Format only
  //   signature :In binary Format only


  return (
    <div className="row flex-lg-row  flex-md-column-reverse  flex-column-reverse">
      <div className="col-12">
        <div className="row gy-3">
          <div className="col-12">
            <div className="form_header">
              <h3 className="message_data">Student Basic Details</h3>
              <hr className="mb-0" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">First Name / पहला नाम</label>
              <h6>{BasicData && BasicData?.firstName}</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">Last Name / उपनाम</label>
              <h6>{BasicData && BasicData?.lastName}</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">Gender / लिंग</label>
              <h6>{BasicData && BasicData?.genderDesc}</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">Email Id / ईमेल आईडी</label>
              <h6>{BasicData && BasicData?.emailId}</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">Mobile Number / मोबाइल नंबर</label>
              <h6>{BasicData && BasicData?.mobileNo}</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Aadhar Card Number / आधार कार्ड संख्या
              </label>
              <h6>{BasicData && BasicData?.aadharNo}</h6>
            </div>
          </div>
          <div className="col-12">
            <div className="preview_fields">
              <label className="form-label">
                Full Residential Address / घर का पता
              </label>
              <h6>
                {BasicData && BasicData?.addressLine1}
              </h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">State / राज्य</label>
              <h6>{BasicData && BasicData?.stateName}</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">Pincode / पिन कोड</label>
              <h6>{BasicData && BasicData?.pincode}</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">Mother Tongue / मातृभाषा</label>
              <h6>{BasicData && BasicData?.motherTongueDesc}</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Father&apos;s/Guardian&apos;s Name / पिता/अभिभावक का नाम
              </label>
              <h6>{BasicData && BasicData?.fatherName}</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Father&apos;s/Guardian&apos;s Contact Number / पिता/अभिभावक का फोन नंबर
              </label>
              <h6>{BasicData && BasicData?.fatherMobile}</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">Mother&apos;s Name / माता का नाम</label>
              <h6>{BasicData && BasicData?.motherName}</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Mother&apos;s Contact Number / माता का फो न नंबर
              </label>
              <h6>{BasicData && BasicData?.motherMobile}</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">Date Of Birth / जन्म तिथि</label>
              <h6>{BasicData && BasicData?.dob}</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">Preferred Sport / मुख्य खेल</label>
              <h6>{BasicData && BasicData?.primarySportTitle}</h6>
            </div>
          </div>







          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Present School / वर्तमान विद्यालय
              </label>
              <h6>{BasicData && BasicData?.currentSchool}</h6>
            </div>
          </div>
          <div className="col-12">
            <div className="preview_fields">
              <label className="form-label">
                Present School Address / वर्तमान विद्यालय का पता
              </label>
              <h6>
                {BasicData && BasicData?.currentSchoolAddress}
              </h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Present School State / वर्तमान विद्यालय राज्य
              </label>
              <h6>{BasicData && BasicData?.currentSchoolStateName}</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Present School Pincode / वर्तमान विद्यालय पिन कोड
              </label>
              <h6>{BasicData && BasicData?.schoolStatePincode}</h6>
            </div>
          </div>





          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Present Class / वर्तमान कक्षा
              </label>
              <h6>{BasicData && BasicData?.currentClassDesc}</h6>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Applying For Admission In Class / कक्षा के लिए आवेदन
              </label>
              <h6>{BasicData && BasicData?.registrationClassTitle}</h6>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Can you read and understand Hindi? / क्या आप हिंदी पढ़ व समझ
                सकते हैं?
              </label>
              <h6>{BasicData && BasicData?.canUnderstandHindi === true ? "Yes" : "No"}</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Can you read and understand English? / क्या आप अंग्रेज़ी पढ़ व
                समझ सकते हैं?
              </label>
              <h6>{BasicData && BasicData?.canUnderstandEnglish === true ? "Yes" : "No"}</h6>
            </div>
          </div>
          <div className="col-12">
            <div className="form_header">
              <h3 className="message_data">Medical Details</h3>
              <hr className="mb-0" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Height(In CMs) / लंबाई (सेंटीमीटर में)
              </label>
              <h6>{getMedicalData && getMedicalData?.height}</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Weight (IN KGs) / वज़न (किलोग्राम में)
              </label>
              <h6>{getMedicalData && getMedicalData?.weight}</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">Blood Group / ब्लड ग्रुप</label>
              <h6>{getMedicalData && getMedicalData?.bloodGroupDesc}</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="preview_fields">
              <label className="form-label">
                Medical History / चिकित्सा का इतिहास
              </label>
              <h6>{getMedicalData && getMedicalData?.medicalHistory === true ? "Yes" : "No"}</h6>
            </div>
          </div>


          {getMedicalData && getMedicalData?.medicalHistory === true ? (
            <>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="preview_fields">
                  <label className="form-label">
                    Injuries Suffered / कोई चोट लगी हो
                  </label>
                  <h6>{getMedicalData && getMedicalData?.injurySuffered}</h6>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="preview_fields">
                  <label className="form-label">
                    Medical Advice / चिकित्सा सलाह
                  </label>
                  <h6>{getMedicalData && getMedicalData?.medicalAdvice}</h6>
                </div>
              </div>
            </>) : ""}


          <div className="col-12">
            <div className="form_header">
              <h3 className="message_data">Achievements</h3>
              <hr className="mb-0" />
            </div>
          </div>


          <div className="col-12">
            <div className="achivemen_list_table">
              <table className="table major_table">
                <thead>
                  <tr>
                    <th className="text-nowrap">Sr.No</th>
                    <th className="text-nowrap" style={{ width: "15%" }}>
                      Sport Achievement
                    </th>
                    <th className="text-nowrap" style={{ width: "15%" }}>
                      Other  Sport Achievement
                    </th>
                    <th className="text-nowrap" style={{ width: "15%" }}>
                      Tournament Name
                    </th>
                    <th className="text-nowrap" style={{ width: "15%" }}>
                      Conducted By
                    </th>
                    <th className="text-nowrap" style={{ width: "15%" }}>
                      Event Title
                    </th>

                    <th className="text-nowrap" style={{ width: "15%" }}>
                      Position
                    </th>
                    <th className="text-nowrap" style={{ width: "15%" }}>
                      Other Position
                    </th>
                    <th className="text-nowrap" style={{ width: "15%" }}>
                      Document
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {AllAchievementData && AllAchievementData.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.primarySportAchievementDesc}</td>
                      <td>{data.otherAchievement == null ? "-" : data.otherAchievement}</td>
                      <td>{data.tournamentName}</td>
                      <td>{data.conductedBy}</td>
                      <td>{data.eventTitle}</td>
                      <td>{data.positionDesc}</td>
                      <td>{data.otherPosition == null ? "-" : data.otherPosition}</td>
                      <td className="text-nowrap">
                        <div className="pdf" onClick={() => { handlePdfOpen(data) }} style={{ cursor: "pointer" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">
                            <path d="M5.523 12.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572l-.035.012a.3.3 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548m2.455-1.647q-.178.037-.356.078a21 21 0 0 0 .5-1.05 12 12 0 0 0 .51.858q-.326.048-.654.114m2.525.939a4 4 0 0 1-.435-.41q.344.007.612.054c.317.057.466.147.518.209a.1.1 0 0 1 .026.064.44.44 0 0 1-.06.2.3.3 0 0 1-.094.124.1.1 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256M8.278 6.97c-.04.244-.108.524-.2.829a5 5 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.5.5 0 0 1 .145-.04c.013.03.028.092.032.198q.008.183-.038.465z" />
                            <path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.7 11.7 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.86.86 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.84.84 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.8 5.8 0 0 0-1.335-.05 11 11 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.24 1.24 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a20 20 0 0 1-1.062 2.227 7.7 7.7 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103" />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12">
            <div className="form_header">
              <h3 className="message_data">Upload Documents</h3>
              <hr className="mb-0" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="form-label">
              <b>Image</b>
            </label>
            <div className="upload_images">
              <img src={AllDocs && AllDocs?.photoImageString} alt='' />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="form-label">
              <b>Signature</b>
            </label>
            <div className="upload_images">
              <img src={AllDocs && AllDocs?.signImageString} alt />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="form-label">
              <b>Birth Certificate</b>
            </label>
            <div className="upload_images">
              <iframe src={BirthImgPrint && BirthImgPrint} alt width="100%" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="form-label">
              <b>School ID Card/Present Class Marksheet/Report Card</b>
            </label>
            <div className="upload_images">
              <iframe src={`${ApiEndPoint}${AllDocs && AllDocs?.marksheet}`} alt width="100%" />
            </div>
          </div>

          <div className="col-12 mt-4">
            <div className="form_header">
              <h3 className="message_data">Declarations:</h3>
              <hr className="mb-0" />
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-0">
            <div>
              <div className="d-flex align-items-center gap-3 mt-3">
                <label className="decelration d-flex align-items-lg-center align-items-md-center align-items-start flex-lg-row flex-md-row flex-column gap-2 w-auto">
                  <input
                    // name="checke1"
                    // type="checkbox"
                    // id="medicalHistoryYes"
                    // value="true"
                    // onChange={formik.handleChange}
                    // isValid={formik.isValid}
                    // checked={formik.values.checke1}
                    // isTouched={formik.touched.checke1}
                    // invalidFeedback={formik.errors.checke1}
                    type="checkbox"
                    name="checke1"
                    class="w-auto"
                    checked={formik.values.checke1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <div className='section-content text-center'>
                    <h5 className='m-0 text-start'>
                      I declare that all the information mentioned in this registration form is correct to the best of my knowledge./<br />
                      मैं घोषणा करता/करती हूँ कि इस पंजीकरण प्रपत्र में उल्लिखित सभी जानकारी मेरी जानकारी के अनुसार सही है।
                    </h5>
                  </div>

                </label>


              </div>
            </div>
          </div>
          {formik.touched.checke1 && formik.errors.checke1 && (
            <div style={{ color: 'red' }}>{formik.errors.checke1}</div>
          )}
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
            <div>
              <div className="d-flex align-items-center gap-3">
                <label className="decelration d-flex align-items-lg-center align-items-md-center align-items-start flex-lg-row flex-md-row flex-column gap-2 w-auto">
                  <input
                    type="checkbox"
                    // id="medicalHistoryYes"
                    // value="true"
                    name="checke2"
                    class="w-auto"
                    checked={formik.values.checke2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className='section-content text-center'>
                    <h5 className='m-0 text-start'>

                      I hereby give the consent for my ward to undergo age-specific medical and physical tests, as required by the University.<br />
                      मैं घोषणा करता/करती हूँ कि मैं समझता/समझती हूं कि मेरे बच्चे को दिल्ली स्पोर्ट्स स्कूल परिसर में रहने के लिए दिल्ली स्थानांतरित करना होगा और वह सभी खेल प्रतियोगिताओं में दिल्ली राज्य का प्रतिनिधित्व करेगा। <br />
                      मैं अपने बच्चे को विश्वविद्यालय द्वारा अपेक्षित आयु-विशिष्ट चिकित्सा और शारीरिक परीक्षण करवाने की सहमति देता/देती हूँ।


                    </h5>
                  </div>
                </label>
              </div>
            </div>
            {formik.touched.checke2 && formik.errors.checke2 && (
              <div style={{ color: 'red' }}>{formik.errors.checke2}</div>
            )}

          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
            <div>
              <div className="d-flex align-items-center gap-3">
                <label className="decelration d-flex align-items-lg-center align-items-md-center align-items-start flex-lg-row flex-md-row flex-column gap-2 w-auto">
                  <input
                    // name="checke3"
                    type="checkbox"
                    // id="medicalHistoryYes"
                    // value="true"
                    name="checke3"
                    class="w-auto"
                    checked={formik.values.checke3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div className='section-content text-center'>
                    <h5 className='m-0 text-start'>
                      I hearby give my consent for Photography and Videography of my ward, by Delhi Sports University, during the process of Talent Scouting. <br />
                      मैं टैलेंट स्काउटिंग की प्रक्रिया के दौरान दिल्ली स्पोर्ट्स यूनिवर्सिटी द्वारा अपने बच्चे की फोटोग्राफी और वीडियोग्राफी के लिए अपनी सहमति देता/देती हूँ।
                    </h5>
                  </div>
                </label>

              </div>
            </div>
          </div>
          {formik.touched.checke3 && formik.errors.checke3 && (
            <div style={{ color: 'red' }}>{formik.errors.checke3}</div>
          )}



          <div className="col-lg-2 col-md-6 col-sm-6 col-5 d-flex align-items-end">
            <button className="btn btn-primary" type="button" onClick={handlePrevious}>
              <span>Previous</span>
            </button>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-7 d-flex align-items-end justify-content-end ms-auto">
            <button
              className="btn btn-primary px-3"

              onClick={() => {
                
                formik.handleSubmit()
              }}
              type="button"
            >
              <span>Submit Application</span>
            </button>
          </div>
          <Modal className="preview_modal" show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Preview and Submit Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <PrintComponent ref={modalRef} content={<PrintModal />} /> */}
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={handlePrint}>
                Print
              </Button> */}
            </Modal.Footer>
          </Modal>
          {showConformationModal && (
            <div class="modal fade gallery_img video_popup show"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body register_id confirmation_modal">
                    <div>
                      <h3 className='w-100 m-0 text-center'>
                        Once the application is submitted, <span className='id-text-red'><b>No modification will be allowed.</b></span></h3>
                      <h2 className="mb-4"><b>Are you sure to submit the application ?</b></h2>
                      <div class="row justify-content-center">
                        <div class="col-12 justify-content-center d-flex">
                          <button className='btn btn-primary'
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                              setShowConformationModal(false)
                              handleSubmitApplication()
                            }}
                            type='button'>
                            <span>Yes</span>
                          </button>
                          <button className='btn btn-primary bg-danger'
                            style={{ cursor: 'pointer', marginLeft: '10px' }}
                            onClick={() => setShowConformationModal(false)}
                            type='button'>
                            <span>No</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewAndSubmit;
