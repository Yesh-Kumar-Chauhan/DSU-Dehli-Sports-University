import React, { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import useAchivementsForm from "../../../hooks/Achievement/useAchivementsForm";
import useCode from "../../../hooks/Setting/useCode";
import { SportPositions, SportsOffered, PrimarySportBestAchievement } from "../../../const/mastercodes";
import * as Yup from "yup";
import { useRouter } from 'next/router';
import CompetitionsPlayed from './CompetitionsPlayed';
import { toast } from 'react-toastify';
import { ApiEndPoint } from "../../../helpers/common";


const initialValues = {
  sports: "",
  specify: "",
  tournament: "",
  conduct: "",
  events: "",
  position: "",
  otherPosition: "",
  nextSporting: "",
  competitionsTitle: "",

};
const Achivements = () => {
  const fileInputRefMark = useRef(null);

  const validationSchema = Yup.object({
    sports: Yup.string().required("Preferred Sport Best Achievement is required"),
    specify: Yup.string().when("sports", {
      is: '605',
      then: () => Yup.string()
        .trim()
        .required("Other preferred sport achievement is required!")
        .max(50, 'Specify not exceed 50 characters.')
        .matches(/^[a-zA-Z0-9\s]*$/, 'Only Alphanumeric characters are allowed'),
    }),
    tournament: Yup.string().required("Tournament name is required").matches(/^[a-zA-Z0-9\s.,]*$/, 'Only Alphanumeric characters are allowed in Tournament').max(120, 'Tournament Name should not exceed 120 characters.'),
    conduct: Yup.string().required("Conducted By authority name is required")
      .matches(/^[a-zA-Z0-9\s.,]*$/, 'Only Alphanumeric characters are allowed in Conducted by')
      .max(120, 'Conduct by should not exceed 120 characters.'),
    events: Yup.string().required("Please enter your event")
      .matches(/^[a-zA-Z0-9\s.,]*$/, 'Only Alphanumeric characters are allowed in Events')
      .max(120, 'Event should not exceed 120 characters.'),
    position: Yup.string().required("Please select your position"),
    otherPosition: Yup.string().when("position", {
      is: '804',
      then: () => Yup.string()
        .trim()
        .required("Other position is required!")
        .max(50, 'Other Position not exceed 50 characters.')
        .matches(/^[a-zA-Z0-9\s]*$/, 'Only Alphanumeric characters are allowed'),
    }),
    competitionsTitle: Yup.mixed().test('required', 'Certificate is Required', function (value) {
      if (this.parent.competitionsTitle) {
        return true;
      }
      return this.createError({ message: 'Certificate is Required' });
    }),
  })

  const { getCodeDetails } = useCode();
  const { medicalDetails, postachivementsForm, getAchievementdata, AchivementsData, deleteAchievement } = useAchivementsForm();
  const [sportPosition, setSportPosition] = useState([])
  const [sportsOffer, setSportsOffer] = useState([])
  const [showIDModal, setShowIDModal] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [FieldValue, setFieldValue] = useState("")
  const [showConformationModal, setShowConformationModal] = useState(false)
  const [RowIdData, setRowIdData] = useState('')

  const router = useRouter();

  const getDropdownValue = async () => {
    try {
      let retrievedsportPosition = await getCodeDetails(SportPositions);
      setSportPosition(retrievedsportPosition);
      let retrievedSportsOffered = await getCodeDetails(PrimarySportBestAchievement);
      setSportsOffer(retrievedSportsOffered);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handlePrevious = () => {
    router.push({
      pathname: '/onsite-registration/registrationform',
      query: { tab: 'Uploads' },
    });
  }
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const studentDetails = JSON.parse(localStorage.getItem('studentDetails'));
        await postachivementsForm({
          ApplicationId: studentDetails.returnId,
          LoggedInUserId: studentDetails.returnId,
          TournamentName: formik.values.tournament,
          DocumentFile: FieldValue,
          OtherPosition: formik.values.otherPosition,
          ConductedBy: formik.values.conduct,
          PrimarySportAchievement: parseInt(formik.values.sports),
          Postition: parseInt(formik.values.position),
          EventTitle: formik.values.events,
          OtherAchievement: formik.values.specify,
        });
        getAchievementdata(studentDetails?.returnId)
        formik.resetForm();
        setIsModalOpen(false);
        toast.success('Achievement Added Successfully!');

      } catch (error) {
        console.error('Error submitting achievements:', error);
        toast.error(error.response.data.message);
      }
    },
  });

  useEffect(() => {
    const studentDetails = JSON.parse(localStorage.getItem('studentDetails'));
    if (studentDetails !== null) {
      getAchievementdata(studentDetails?.returnId)
        .then((getValue) => {

          initialValues.sports = getValue?.primarySportAchievement;
          initialValues.specify = getValue?.otherAchievement;
          initialValues.tournament = getValue?.tournamentName;
          initialValues.conduct = getValue?.conductedBy;
          initialValues.events = getValue?.eventTitle;
          initialValues.position = getValue?.postition;
          initialValues.nextSporting = getValue?.nextSportingGoal;
        })
    } else {
      initialValues.sports = '';
      initialValues.specify = '';
      initialValues.tournament = '';
      initialValues.conduct = '';
      initialValues.events = '';
      initialValues.position = '';
      initialValues.nextSporting = '';
    }

  }, []);
  useEffect(() => {
    getDropdownValue();
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
    formik.resetForm();
  };

  const handleNextpage = () => {
    // if (AchivementsData.length > 0) {
    router.push(`/onsite-registration/registrationform?tab=${'Preview and Submit'}`)
    // } else {
    //   toast.warning('At least one Achievement is required');
    // }
  };

  const handleUploadMarksheet = async (event) => {
    const uploadMarkFile = fileInputRefMark.current.files[0];
    formik.setFieldValue("competitionsTitle", event.target.value);
    setFieldValue(uploadMarkFile)
  };
  const handleDivClick = () => {
    router.push('https://www.adobe.com/in/acrobat/online/compress-pdf.html', '_blank');
    // window.open('https://www.adobe.com/in/acrobat/online/compress-pdf.html', '_blank');
  };
  const hanldeDeleteRow = (data) => {
    setRowIdData(data)
    setShowConformationModal(true)
  }

  const hanldeDelete = async (data) => {
    try {
      await deleteAchievement(RowIdData.applicationId, RowIdData.recordId);
      getAchievementdata(RowIdData?.applicationId)
      toast.success('Achievement deleted successfully!');
    } catch (error) {
      toast.error('Error deleting achievement: ' + error.message);
    }
  };
  const handleValueEmpty = () => {
    formik.setValues({
      ...formik.values,
      specify: '',
    });
  }

  const handlePositionValueEmpty = () => {
    formik.setValues({
      ...formik.values,
      otherPosition: '',
    });
  }

  const handlePdfOpen = (data) => {
    window.open(`${ApiEndPoint}${data && data?.fileUploaded}`, '_blank');
  }
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);
  return (
    <div>
      <div className="row flex-lg-row  flex-md-column-reverse  flex-column-reverse">
        <div className="col-12">
          <div className="row gy-3">
            <div className="col-lg-2 col-md-4 col-sm-12 d-flex align-items-end justify-content-end ms-auto mt-2" >
              <button className="btn btn-primary px-3" type="button" onClick={openModal}>
                <span>Add Achievement</span>
              </button>
            </div>

            {isModalOpen && (
              <div class="modal fade gallery_img add_achivement_modal video_popup show " >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body register_id confirmation_modal add_achivements_modal">

                      {/* <div className="col-lg-2 col-md-4 col-sm-12 d-flex align-items-end justify-content-end ms-auto">
                        <button className="btn btn-secondary me-2 px-3" type="button" onClick={handleCancel}>
                          Cancel
                        </button>
                      </div> */}
                      <div className="row g-3">
                        <div className="col-12">
                          <div className="form_header">
                            <h3 className="message_data">Achievements</h3>
                            <hr className="mb-0" />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div>
                            <label className="form-label">
                              Preferred Sport Best Achievement /मुख्य खेल में सर्वश्रेष्ठ
                              उपलब्धि <span className="text-danger">*</span>
                            </label>
                            <select
                              id='sports'
                              name='sports'
                              className={`form-control ${formik.touched.sports && formik.errors.sports ? 'is-invalid' : ''}`}
                              placeholder='Select Preferred Sport Best Achievement'
                              onChange={formik.handleChange}
                              onBlur={(e) => {
                                formik.handleBlur(e)
                                handleValueEmpty()
                              }}
                              value={formik.values.sports}
                              isValid={formik.isValid}
                              isTouched={formik.touched.sports}
                              invalidFeedback={formik.errors.sports}
                            >
                              <option value="" hidden>
                                Select
                              </option>
                              {sportsOffer && sportsOffer
                                .filter((sports) => sports.isActive === true)
                                .map((sports, index) => (
                                  <option key={index}
                                    value={sports.subCode}
                                  >
                                    {sports.subCodeDescription}
                                  </option>
                                ))}
                            </select>
                            <div className="invalid-feedback">{formik.errors.sports}</div>


                          </div>
                        </div>

                        {formik.values.sports == 605 ? (
                          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div>
                              <label className="form-label">
                                Please Specify If Other / यदि अन्य हैं तो उल्लिखित करें
                              </label>
                              <input
                                id='specify'
                                name='specify'
                                className={`form-control ${formik.touched.specify && formik.errors.specify ? 'is-invalid' : ''}`}
                                placeholder='Please Specify If Other'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.specify}
                                isValid={formik.isValid}
                                isTouched={formik.touched.specify}
                                maxLength={50}

                                invalidFeedback={formik.errors.specify}
                              />
                              <div className="invalid-feedback">{formik.errors.specify}</div>
                            </div>
                          </div>
                        ) : (
                          <div className="col-lg-6 col-md-12 col-sm-12 col-12"></div>
                        )
                        }
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div>
                            <label className="form-label">
                              Name of The Tournament /टूर्नामेंट का नाम <span className="text-danger">*</span>
                            </label>
                            <input
                              id='tournament'
                              name='tournament'
                              className={`form-control ${formik.touched.tournament && formik.errors.tournament ? 'is-invalid' : ''}`}
                              placeholder='Name of The Tournament'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.tournament}
                              isValid={formik.isValid}
                              isTouched={formik.touched.tournament}
                              invalidFeedback={formik.errors.tournament}
                              maxLength={120}
                            />
                            <div className="invalid-feedback">{formik.errors.tournament}</div>

                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div>
                            <label className="form-label">
                              Conducted By  <br />आयोजक संस्थान <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id='conduct'
                              name='conduct'
                              className={`form-control ${formik.touched.conduct && formik.errors.conduct ? 'is-invalid' : ''}`}
                              placeholder='Conducted By'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.conduct}
                              isValid={formik.isValid}
                              isTouched={formik.touched.conduct}
                              invalidFeedback={formik.errors.conduct}
                              maxLength={120}
                            />
                            <div className="invalid-feedback">{formik.errors.conduct}</div>

                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div>
                            <label className="form-label">
                              Competed in which Event (of Preferred Sports) <br />
                              मुख्य खेल की किन प्रतियोगिताओं में प्रदर्शन
                              <span className="text-danger">*</span>
                              {/* <br /> */}
                            </label>
                            <input
                              type="text"
                              id='events'
                              name='events'
                              className={`form-control ${formik.touched.events && formik.errors.events ? 'is-invalid' : ''}`}
                              placeholder='Competed in which Event'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.events}
                              isValid={formik.isValid}
                              isTouched={formik.touched.events}
                              invalidFeedback={formik.errors.events}
                              maxLength={120}
                            />
                            <div className="invalid-feedback">{formik.errors.events}</div>

                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div>
                            <label className="form-label">
                              Position/पद <span className="text-danger">*</span>
                            </label>
                            <select
                              id='position'
                              name='position'
                              className={`form-control ${formik.touched.position && formik.errors.position ? 'is-invalid' : ''}`}
                              placeholder='Position'
                              onChange={formik.handleChange}
                              // onBlur={formik.handleBlur}
                              onBlur={(e) => {
                                formik.handleBlur(e)
                                handlePositionValueEmpty()
                              }}
                              value={formik.values.position}
                              isValid={formik.isValid}
                              isTouched={formik.touched.position}
                              invalidFeedback={formik.errors.position}
                            >
                              <option value="" hidden>
                                Select
                              </option>
                              {sportPosition && sportPosition
                                .filter((position) => position.isActive === true)
                                .filter((data) => data.subCode != 805)
                                .map((position, index) => (
                                  <option key={index}
                                    value={position.subCode}
                                  >
                                    {position.subCodeDescription}
                                  </option>
                                ))}
                            </select>
                            <div className="invalid-feedback">{formik.errors.position}</div>

                          </div>
                        </div>
                        {formik.values.position == 804 ? (
                          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div>
                              <label className="form-label">
                                Please Specify If Other/यदि अन्य हैं तो उल्लिखित करें <span className="text-danger">*</span>
                              </label>
                              <input
                                id='otherPosition'
                                name='otherPosition'
                                className={`form-control ${formik.touched.otherPosition && formik.errors.otherPosition ? 'is-invalid' : ''}`}
                                placeholder=' Please Specify of Other Position'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.otherPosition}
                                isValid={formik.isValid}
                                isTouched={formik.touched.otherPosition}
                                invalidFeedback={formik.errors.otherPosition}
                                maxLength={50}
                              />
                              <div className="invalid-feedback">{formik.errors.otherPosition}</div>

                            </div>
                          </div>
                        ) :
                          <div className="col-lg-6 col-md-12 col-sm-12 col-12"></div>}


                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div>
                            <label className="form-label">
                              Certificate/प्रमाणपत्र
                            </label>
                            <input
                              name="competitionsTitle"
                              type="file"
                              className="form-control"
                              onChange={(e) => {
                                handleUploadMarksheet(e), formik.handleChange(e);
                              }}
                              ref={fileInputRefMark}
                              onBlur={formik.handleBlur}
                              value={formik.values.competitionsTitle}
                              isValid={formik.isValid}
                              isTouched={formik.touched.competitionsTitle}
                              invalidFeedback={formik.errors.competitionsTitle}
                            />
                            {/* <div className="invalid-feedback">{formik.errors.competitionsTitle}</div> */}

                            <label>(JPG,PDF,PNG) (Max Size 500kb) You may also use Adobe application to compress pdf. <span onClick={handleDivClick} style={{ cursor: "pointer" }}>Compress PDF Online </span></label>

                            <div style={{ color: 'var(--bs-form-invalid-color)', fontSize: '.875em' }}>
                              {formik.touched.competitionsTitle && formik.errors.competitionsTitle}
                            </div>

                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex align-items-start justify-content-start ms-auto">
                          <button className="btn btn-primary bg-danger px-3" type="button" onClick={handleCancel}>
                            <span>Cancel</span>
                          </button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex align-items-end justify-content-end ms-auto">
                          <button className="btn btn-primary px-3" type="submit" onClick={formik.handleSubmit}>
                            <span>Add Achievement</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
                        Event
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
                      <th className="text-nowrap">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {AchivementsData && AchivementsData.map((data, index) => (
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

                          <div className="action d-flex align-items-center gap-2 justify-content-center" onClick={() => { handlePdfOpen(data) }} style={{ cursor: "pointer" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">
                              <path d="M5.523 12.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572l-.035.012a.3.3 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548m2.455-1.647q-.178.037-.356.078a21 21 0 0 0 .5-1.05 12 12 0 0 0 .51.858q-.326.048-.654.114m2.525.939a4 4 0 0 1-.435-.41q.344.007.612.054c.317.057.466.147.518.209a.1.1 0 0 1 .026.064.44.44 0 0 1-.06.2.3.3 0 0 1-.094.124.1.1 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256M8.278 6.97c-.04.244-.108.524-.2.829a5 5 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.5.5 0 0 1 .145-.04c.013.03.028.092.032.198q.008.183-.038.465z" />
                              <path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.7 11.7 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.86.86 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.84.84 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.8 5.8 0 0 0-1.335-.05 11 11 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.24 1.24 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a20 20 0 0 1-1.062 2.227 7.7 7.7 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103" />
                            </svg>
                          </div>
                        </td>
                        <td>
                          <div className="action d-flex align-items-center gap-2 justify-content-center">
                            {/* <div className="edit">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#204988" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                              </svg>
                            </div> */}
                            <div className="delete" onClick={() => { hanldeDeleteRow(data) }} style={{ cursor: "pointer" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#A61B32" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex align-items-end">
              <button className="btn btn-primary" type="button" onClick={handlePrevious}>
                <span>Previous</span>
              </button>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex align-items-end justify-content-end ms-auto">
              <button className="btn btn-primary px-3" type="button" onClick={handleNextpage}>
                <span>{AchivementsData.length > 0 ? "Continue" : (<>Skip</>)}</span>
              </button>
            </div>
            <span style={{ marginTop: "20px" }}>
              <span className="text-danger">*</span>
              It is advisable to upload the achievement data if the student has participated in International/National/State/District or other competitions. However, if there is no participation or achievement, this section may be skipped./
              यदि छात्र ने अंतर्राष्ट्रीय/राष्ट्रीय/राज्य/जिला या अन्य प्रतियोगिताओं में भाग लिया है तो उपलब्धि डेटा अपलोड करने की सलाह दी जाती है। हालाँकि, यदि कोई भागीदारी या उपलब्धि नहीं है, तो इस भाग को छोड़ दिया जा सकता है।

            </span>
          </div>
        </div>
        {showConformationModal && (
          <div class="modal fade gallery_img video_popup show"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body register_id confirmation_modal">
                  <div>
                    <h3 className='w-100 text-center'>
                      Are you sure to delete the selected achievement ?<span className='id-text-red'> <h2> </h2></span></h3>
                    <div class="row justify-content-center mt-4">
                      <div class="col-12 justify-content-center d-flex">
                        <button className='btn btn-primary bg-danger'
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            setShowConformationModal(false)
                            hanldeDelete()
                          }}
                          type='button'>
                          <span>Yes</span>
                        </button>
                        <button className='btn btn-primary'
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
    </div >
  );
};

export default Achivements;
