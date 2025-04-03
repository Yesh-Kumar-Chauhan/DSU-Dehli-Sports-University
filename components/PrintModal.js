import React, { useState, useEffect, useRef } from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
// import useTalentscoutingregistration from "@/hooks/useTalent-scouting-registration-form";
import useTalentscoutingregistration from '../hooks/useTalent-scouting-registration-form';
import registration from '../pages/onsite-registration/home';
import useStudnetBasicDetails from '../hooks/Student/useStudnetBasicDetails';
import useMedicalDetails from '../hooks/useMedicalDetails';
import useAchivementsForm from '../hooks/Achievement/useAchivementsForm';
import useUploadDocuments from '../hooks/useUploadDocuments';
import { useRouter } from 'next/router';


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

const PrintModal = () => {
  const { getBasicdetails } = useStudnetBasicDetails();
  const { getMedicaldata } = useMedicalDetails();
  const { getAchievementdata } = useAchivementsForm();
  const { getApplicationdocs } = useUploadDocuments()
  const { submitapplication } = useTalentscoutingregistration()
  const [BasicData, setBasicData] = useState('')
  const [getMedicalData, setGetMedicalData] = useState('')
  const [AllAchievementData, setAllAchievementData] = useState('')
  const [AllDocs, setAllDocs] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [UrlPath, setUrlPath] = useState([]);
  const router = useRouter();

  const targetUrl = 'dsu.ac.in';
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const studentDetails = JSON.parse(localStorage.getItem('studentDetails'));
        await submitapplication(studentDetails?.returnId);
        setShowModal(true)
      } catch (error) {
        console.error("Submission failed:", error);
        toast.warning('Failed to submit student details. Please Check Box.');
      }
    }
  });


  useEffect(() => {
    setUrlPath([router.asPath])
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
        })
    }
  }, []);
  const isIncluded = UrlPath.some(path => path.includes(targetUrl));
  return (
    <div>
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
                <h6>+{BasicData && BasicData?.mobileNo}</h6>
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
                  Father s/Guardian s Name / पिता/अभिभावक का नाम
                </label>
                <h6>{BasicData && BasicData?.fatherName}</h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">
                  Father s/Guardian s Contact Number / पिता/अभिभावक का फोन नंबर
                </label>
                <h6>{BasicData && BasicData?.fatherMobile}</h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">Mother s Name / माता का नाम</label>
                <h6>{BasicData && BasicData?.motherName}</h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">
                  Mother s Contact Number / माता का फो न नंबर
                </label>
                <h6>{BasicData && BasicData?.motherMobile}</h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">
                  Current School / वर्तमान विद्यालय
                </label>
                <h6>{BasicData && BasicData?.currentSchool}</h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">
                  Current Class / वर्तमान कक्षा
                </label>
                <h6>{BasicData && BasicData?.currentClassDesc}</h6>
              </div>
            </div>
            <div className="col-12">
              <div className="preview_fields">
                <label className="form-label">
                  Current School Address / वर्तमान विद्यालय का पता3
                </label>
                <h6>
                  {BasicData && BasicData?.currentSchoolAddress}
                </h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">
                  Current School State / वर्तमान विद्यालय राज्य
                </label>
                <h6>{BasicData && BasicData?.currentSchoolStateName}</h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">
                  Current School Pincode / वर्तमान विद्यालय पिन कोड
                </label>
                <h6>{BasicData && BasicData?.schoolStatePincode}</h6>
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
                <label className="form-label">
                  Applying For Admission In Class / कक्षा के लिए आवेदन
                </label>
                <h6>{BasicData && BasicData?.registrationClassTitle}</h6>
              </div>
            </div>
            <div className="col-12">
              <div className="preview_fields">
                <label className="form-label">Preferred Sport / मुख्य खेल</label>
                <h6>{BasicData && BasicData?.primarySportTitle}</h6>
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
            <div className="col-12">
              <div className="form_header">
                <h3 className="message_data">Achivements</h3>
                <hr className="mb-0" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">
                  Preferred Sport Best Achievement / मुख्य खेल में सर्वश्रेष्ठ
                  उपलब्धि
                </label>
                <h6>{AllAchievementData && AllAchievementData.otherAchievement}</h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">
                  Name of The Tournament / टूर्नामेंट का नाम
                </label>
                <h6>{AllAchievementData && AllAchievementData.tournamentName}</h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">Conducted By / आयोजक संस्थान</label>
                <h6>{AllAchievementData && AllAchievementData.conductedBy}</h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">
                  Competed in which Event/s (of Preferred Sports) / मुख्य खेल की
                  किन प्रतियोगिताओं में प्रदर्शन
                </label>
                <h6>{AllAchievementData && AllAchievementData.eventTitle}</h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">Position / पद</label>
                <h6>{AllAchievementData && AllAchievementData.positionDesc}</h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">Other Position / अन्य पद</label>
                <h6>{AllAchievementData && AllAchievementData.otherPosition}</h6>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="preview_fields">
                <label className="form-label">
                  Next Sporting Goal To Achieve / खेल में अगला लक्ष्य
                </label>
                <h6>{AllAchievementData && AllAchievementData.nextSportingGoal}</h6>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="form_header">
                <h3 className="message_data">Competitions Played</h3>
                <hr className="mb-0" />
              </div>
            </div>

            <div className="col-12">
              <table className="table major_table m-0">
                <thead>
                  <tr>
                    <th className="text-nowrap">Sr. No.</th>
                    <th className="text-nowrap">Title</th>
                    <th className="text-nowrap">Upload Document</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="preview_fields">
                        <label className="form-label">Competitions Title</label>
                        <h6>Kabaddi</h6>
                      </div>
                    </td>
                    <td>
                      <div className="view_doc">
                        View File
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-file-earmark-pdf"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                          <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <div className="preview_fields">
                        <label className="form-label">Competitions Title</label>
                        <h6>Kabaddi</h6>
                      </div>
                    </td>
                    <td>
                      <div className="view_doc">
                        View File
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-file-earmark-pdf"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                          <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>





            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <label className="d-flex align-items-center gap-2">
                    <input
                      name="checke1"
                      type="radio"
                      id="medicalHistoryYes"
                      value="true"
                      onChange={formik.handleChange}
                      isValid={formik.isValid}
                      checked={true}
                      isTouched={formik.touched.checke1}
                      invalidFeedback={formik.errors.checke1}
                    />
                    I declare that all the information mentioned in this registration form is correct to the best of my knowledge./
                    मैं घोषणा करता/करती हूँ कि इस पंजीकरण प्रपत्र में उल्लिखित सभी जानकारी मेरी जानकारी के अनुसार सही है।
                  </label>

                  <div className="invalid-feedback">{formik.errors.medicalHistory}</div>
                </div>
                {/* <label className="form-label">
              
              </label> */}
              </div>

            </div>




            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
              <div>
                <div className="d-flex align-items-center gap-3">
                  <label className="d-flex align-items-center gap-2">
                    <input
                      name="checke2"
                      type="radio"
                      id="medicalHistoryYes"
                      value="true"
                      onChange={formik.handleChange}
                      isValid={formik.isValid}
                      checked={true}
                      isTouched={formik.touched.checke2}
                      invalidFeedback={formik.errors.checke2}
                    />
                    I hereby give the consent for my ward to undergo age-specific medical and physical tests, as required by the University.<br />
                    मैं घोषणा करता/करती हूँ कि मैं समझता/समझती हूं कि मेरे बच्चे को दिल्ली स्पोर्ट्स स्कूल परिसर में रहने के लिए दिल्ली स्थानांतरित करना होगा और वह सभी खेल प्रतियोगिताओं में दिल्ली राज्य का प्रतिनिधित्व करेगा। <br />
                    मैं अपने बच्चे को विश्वविद्यालय द्वारा अपेक्षित आयु-विशिष्ट चिकित्सा और शारीरिक परीक्षण करवाने की सहमति देता/देती हूँ।
                  </label>

                  <div className="invalid-feedback">{formik.errors.medicalHistory}</div>
                </div>
              </div>

            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
              <div>
                <div className="d-flex align-items-center gap-3">
                  <label className="d-flex align-items-center gap-2">
                    <input
                      name="checke3"
                      type="radio"
                      id="medicalHistoryYes"
                      value="true"
                      onChange={formik.handleChange}
                      isValid={formik.isValid}
                      checked={true}
                      isTouched={formik.touched.checke3}
                      invalidFeedback={formik.errors.checke3}

                    />
                    I hearby give my consent for Photography and Videography of my ward, by Delhi Sports University, during the process of Talent Scouting.<br />
                    मैं टैलेंट स्काउटिंग की प्रक्रिया के दौरान दिल्ली स्पोर्ट्स यूनिवर्सिटी द्वारा अपने बच्चे की फोटोग्राफी और वीडियोग्राफी के लिए अपनी सहमति देता/देती हूँ।
                  </label>
                  <div className="invalid-feedback">{formik.errors.medicalHistory}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PrintModal
