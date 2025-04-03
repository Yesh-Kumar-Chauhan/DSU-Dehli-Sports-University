import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
// import { ApiEndPoint } from "./helper/common";
// import useMedicalDetails from "@/hooks/useMedicalDetails";
import useMedicalDetails from "../../../hooks/useMedicalDetails";
// import useCode from "@//hooks/Setting/useCode";
import useCode from "../../../hooks/Setting/useCode";
import { BloodGroup } from "../../../const/mastercodes";
import * as Yup from "yup";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';


export const validationSchema = Yup.object({
  height: Yup.string().required("Please enter your Height"),
  weight: Yup.string().required("Please enter your Weight"),
  bloodGroup: Yup.string().required("Please select your Blood Group"),
  medicalHistory: Yup.boolean().required("Please Select Medical History"),
  injuriesSuffered: Yup.string().when('medicalHistory', {
    is: true,
    then: () => Yup.string()
      .matches(/^[a-zA-Z0-9\s.,]*$/, 'Only Alphanumeric characters are allowed in Injuries Suffered')
      .max(500, 'Injuries Suffered should not exceed 500 characters.')
      .required('Please specify Injuries suffered'),
  }),
  medicalAdvice: Yup.string().when('medicalHistory', {
    is: true,
    then: () => Yup.string()
      .required('Please specify medical advice')
      .matches(/^[a-zA-Z0-9\s.,]*$/, 'Only Alphanumeric characters are allowed in medical history')
      .max(500, 'Medical history should not exceed 500 characters.'),
  }),
})

const initialValues = {
  height: "",
  weight: "",
  bloodGroup: "",
  medicalHistory: "",
  injuriesSuffered: "",
  medicalAdvice: "",
};

const MedicalDetails = () => {
  const { getCodeDetails } = useCode();
  const { medicalDetails, postMedicalDetails, isLoading, getMedicaldata } = useMedicalDetails();
  const [IndexValue, setIndexValue] = useState(0)
  const [SingleSportsData, setSingleSportsData] = useState([])
  const [blood, setBlood] = useState([])
  const router = useRouter();


  const getDropdownValue = async () => {
    try {
      let retrievedblood = await getCodeDetails(BloodGroup);
      setBlood(retrievedblood);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };
  useEffect(() => {
    const studentDetails = JSON.parse(localStorage.getItem('studentDetails'));
    if (studentDetails !== null) {
      getMedicaldata(studentDetails?.returnId)
        .then((getValue) => {
          initialValues.height = getValue?.height;
          initialValues.weight = getValue?.weight;
          initialValues.bloodGroup = getValue?.bloodGroup;
          initialValues.medicalHistory = getValue?.medicalHistory.toString();
          initialValues.injuriesSuffered = getValue?.injurySuffered;
          initialValues.medicalAdvice = getValue?.medicalAdvice;
        })
    } else {
      initialValues.height = '',
        initialValues.weight = '',
        initialValues.bloodGroup = '';
      initialValues.medicalHistory = '';
      initialValues.injuriesSuffered = '';
      initialValues.medicalAdvice = '';
    }
  }, []);


  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const studentDetails = JSON.parse(localStorage.getItem('studentDetails'));
        await postMedicalDetails({
          applicationId: studentDetails.returnId,
          height: parseInt(formik.values.height),
          weight: parseInt(formik.values.weight),
          bloodGroup: parseInt(formik.values.bloodGroup),
          medicalHistory: formik.values.medicalHistory === 'false' ? false : true,
          injurySuffered: formik.values.injuriesSuffered,
          medicalAdvice: formik.values.medicalAdvice
        });

        // formik.resetForm();
        toast.success('Medical Add Successfully!');

        // router.push(`/onsite-registration/registrationform?tab=${'Uploads'}`);
        router.push({
          pathname: '/onsite-registration/registrationform',
          query: { tab: 'Uploads' },
        });
      } catch (error) {
        console.error('Error submitting medical details:', error);
        toast.error('Failed to submit medical details. Please try again.');
      }
    }
  });


  useEffect(() => {
    getDropdownValue();
  }, []);

  const handlePrevious = () => {
    router.push(`/onsite-registration/registrationform?tab=${'Student Basic Details'}`);
  }
  const handleValueEmpty = () => {
    formik.setValues({
      ...formik.values,
      injuriesSuffered: '',
      medicalAdvice: '',
    });
  }
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
  return (
    <div>
      <div className="row flex-lg-row  flex-md-column-reverse  flex-column-reverse">
        <div className="col-12">
          <div className="row gy-3">
            <div className="col-12">
              <div className="form_header">
                <h3 className="message_data">Medical Details</h3>
                <hr className="mb-0" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div>
                <label className="form-label">
                  Height(In CMs) / लंबाई (सेंटीमीटर में)
                  <span className="text-danger">*</span>
                </label>

                <select
                  id='height'
                  className={`form-control ${formik.touched.height && formik.errors.height ? 'is-invalid' : ''}`}
                  name='height'
                  onChange={(e) => {
                    formik.handleChange(e);
                    formik.setFieldValue('height', e.target.value.replace('cm', ''));
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.height}
                  isValid={formik.isValid}
                  isTouched={formik.touched.height}
                  invalidFeedback={formik.errors.height}
                >
                  <option value="" disabled hidden>
                    Select
                  </option>
                  {Array
                    .from({ length: 100 }, (_, index) => (
                      <option key={index} value={`${index + 100}`}>
                        {`${index + 100}`}
                      </option>
                    ))}
                </select>

                <div className="invalid-feedback">{formik.errors.height}</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div>
                <label className="form-label">
                  Weight (IN KGs) / वज़न (किलोग्राम में)
                  <span className="text-danger">*</span>
                </label>
                <select
                  id='weight'
                  className={`form-control ${formik.touched.weight && formik.errors.weight ? 'is-invalid' : ''}`}
                  name='weight'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.weight}
                  isValid={formik.isValid}
                  isTouched={formik.touched.weight}
                  invalidFeedback={formik.errors.weight}
                >
                  <option value="" disabled hidden>
                    Select
                  </option>
                  {Array.from({ length: 121 }, (_, index) => (
                    <option key={index} value={index + 30}>
                      {index + 30}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">{formik.errors.weight}</div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div>
                <label className="form-label">
                  <label className="form-label">
                    Blood Group / ब्लड ग्रुप
                  </label>
                  <span className="text-danger">*</span>
                </label>
                <select
                  id='bloodGroup'
                  className={`form-control ${formik.touched.bloodGroup && formik.errors.bloodGroup ? 'is-invalid' : ''}`}
                  name='bloodGroup'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bloodGroup}
                  isValid={formik.isValid}
                  isTouched={formik.touched.bloodGroup}
                  invalidFeedback={formik.errors.bloodGroup}
                >
                  <option value="" disabled hidden>
                    Select Your Blood Group
                  </option>
                  {blood && blood
                    .filter((bloodGroup) => bloodGroup.isActive === true)
                    .map((bloodGroup, index) => (
                      <option key={index}
                        value={bloodGroup.subCode}
                      >
                        {bloodGroup.subCodeDescription}
                      </option>
                    ))}
                </select>
                <div className="invalid-feedback">{formik.errors.bloodGroup}</div>

              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div>
                <label className="form-label">
                  Medical History / चिकित्सा का इतिहास
                  <span className="text-danger">*</span>
                </label>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <label className="d-flex align-items-center gap-2">
                    <input
                      name="medicalHistory"
                      type="radio"
                      id="medicalHistoryYes"
                      value="true"
                      onChange={formik.handleChange}
                      onBlur={handleValueEmpty}
                      isValid={formik.isValid}
                      checked={formik.values.medicalHistory == 'true'}
                      isTouched={formik.touched.medicalHistory}
                      invalidFeedback={formik.errors.medicalHistory}
                    />
                    Yes
                  </label>
                  <label className="d-flex align-items-center gap-2">
                    <input
                      name="medicalHistory"
                      type="radio"
                      id="medicalHistoryNo"
                      value="false"
                      onChange={formik.handleChange}
                      onBlur={handleValueEmpty}
                      // onBlur={formik.handleBlur}
                      isValid={formik.isValid}
                      isTouched={formik.touched.medicalHistory}
                      checked={formik.values.medicalHistory == 'false'}
                      invalidFeedback={formik.errors.medicalHistory}
                    />
                    No
                  </label>
                  <div style={{ color: 'var(--bs-form-invalid-color)', fontSize: '.875em' }}>{formik.errors.medicalHistory}</div>
                </div>
              </div>

            </div>

            {/* {formik.values.medicalHistory === 'false' ? " " : (
              <div className="row g-3 mt-0 hide_fileds" id="nameInputContainer">
                <div className="col-12">
                  <div>
                    <label className="form-label">
                      Injuries Suffered / कोई चोट लगी हो
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id='injuriesSuffered'
                      name='injuriesSuffered'
                      className={`form-control ${formik.touched.injuriesSuffered && formik.errors.injuriesSuffered ? 'is-invalid' : ''}`}
                      placeholder='Please Specify Injuries Suffered'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.injuriesSuffered}
                      isValid={formik.isValid}
                      isTouched={formik.touched.injuriesSuffered}
                      invalidFeedback={formik.errors.injuriesSuffered}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                        }
                      }}
                    />
                    <div className="invalid-feedback">{formik.errors.injuriesSuffered}</div>
                  </div>
                </div>

                <div className="col-12">
                  <div>
                    <label className="form-label">
                      Medical Advice / चिकित्सा सलाह
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id='medicalAdvice'
                      name='medicalAdvice'
                      placeholder=' Please Specify Medical Advice'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.medicalAdvice}
                      isValid={formik.isValid}
                      isTouched={formik.touched.medicalAdvice}
                      className={`form-control ${formik.touched.medicalAdvice && formik.errors.medicalAdvice ? 'is-invalid' : ''}`}
                      invalidFeedback={formik.errors.medicalAdvice}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                        }
                      }}
                    />
                    {formik.touched.medicalAdvice && formik.errors.medicalAdvice ? (
                      <div className="invalid-feedback">{formik.errors.medicalAdvice}</div>
                    ) : null}
                  </div>
                </div>
              </div>)
            } */}
            {formik.values.medicalHistory === 'true' && (
              <div className="row g-3 mt-0 hide_fileds" id="nameInputContainer">
                {/* Injuries Suffered Field */}
                <div className="col-12">
                  <div>
                    <label className="form-label">
                      Injuries Suffered / कोई चोट लगी हो
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id='injuriesSuffered'
                      name='injuriesSuffered'
                      className={`form-control ${formik.touched.injuriesSuffered && formik.errors.injuriesSuffered ? 'is-invalid' : ''}`}
                      placeholder='Please Specify Injuries Suffered'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.injuriesSuffered}
                      isValid={formik.isValid}
                      isTouched={formik.touched.injuriesSuffered}
                      invalidFeedback={formik.errors.injuriesSuffered}
                      maxLength={500}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                        }
                      }}
                    />
                    <div className="invalid-feedback">{formik.errors.injuriesSuffered}</div>
                  </div>
                </div>

                {/* Medical Advice Field */}
                <div className="col-12">
                  <div>
                    <label className="form-label">
                      Medical Advice / चिकित्सा सलाह
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id='medicalAdvice'
                      name='medicalAdvice'
                      placeholder=' Please Specify Medical Advice'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.medicalAdvice}
                      isValid={formik.isValid}
                      isTouched={formik.touched.medicalAdvice}
                      className={`form-control ${formik.touched.medicalAdvice && formik.errors.medicalAdvice ? 'is-invalid' : ''}`}
                      invalidFeedback={formik.errors.medicalAdvice}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                        }
                      }}
                      maxLength={500}
                    />
                    {formik.touched.medicalAdvice && formik.errors.medicalAdvice ? (
                      <div className="invalid-feedback">{formik.errors.medicalAdvice}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            )}

            <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex align-items-end">
              <button className="btn btn-primary" type="button" onClick={handlePrevious}>
                <span>Previous</span>
              </button>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex align-items-end justify-content-end ms-auto">
              <button className="btn btn-primary" type="button" onClick={formik.handleSubmit}>
                <span>Save & Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDetails;
