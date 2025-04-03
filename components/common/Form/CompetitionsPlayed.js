import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
// import useCompetitions from "../hooks/useCompetitions";
import useCompetitions from "../../../hooks/useCompetitions";
import * as Yup from "yup";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
const initialValues = {
  competitionsTitle: "",
  sportsCertificate: "",
  competitions: [],
};

const CompetitionsPlayed = () => {
  const fileInputRef = useRef(null);
  const fileInputRefadd = useRef(null);
  const { postCompetions } = useCompetitions();
  const [selectedFile, setSelectedFile] = useState([]);
  const [Addrowbutton, setAddrowbutton] = useState(true)
  const [CompitionTextValue, setCompitionTextValue] = useState([])
  const [CompitionFileValue, setCompitionFileValue] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(true);


  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {

      try {
        const val = await postCompetions(values.competitionsTitle_0, values.sportsCertificate_0);
        // const val = await postCompetions(CompitionTextValue, CompitionFileValue);
        formik.resetForm();
        setCompitionTextValue([]);
        setCompitionFileValue([]);
        toast.success('Competitions Added Successfully!');

      } catch (error) {
        console.error('Error submitting competitions:', error);
        toast.error('Failed to submit competitions. Please try again.');
      }
    },
  });

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
      <div className="row flex-lg-row flex-md-column-reverse flex-column-reverse">
        <div className="col-12">
          <div className="row gy-3">
            <div className="col-12">
              <div className="form_header">
                <h3 className="message_data">Competitions Played</h3>
                <hr className="mb-0" />
              </div>
            </div>
            <div className="col-12">
              <div>
                <label className="form-label">
                  Other Major Competitions Played (Top 5) / अन्य प्रमुख खेली गई प्रतियोगिताएं (मुख्य 5)
                  <span className="text-danger">*</span>
                </label>
                <table className="table major_table m-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th style={{ width: "20%" }}>
                        <input
                          type="text"
                          id="competitionsTitle_0"
                          name="competitionsTitle_0"
                          className={`form-control ${formik.touched.competitions?.competitionsTitle && formik.errors.competitions?.competitionsTitle ? 'is-invalid' : ''}`}
                          placeholder='Competitions Title'
                          aria-label="Default select example"
                          onChange={formik.handleChange}
                          onBlur={(e) => {
                            formik.handleBlur(e);
                            setCompitionTextValue([e.target.value]);
                          }}
                        // value={formik.values.competitions?. || ''}competitionsTitle
                        />
                        <div className="invalid-feedback">{formik.errors.competitions?.competitionsTitle}</div>
                      </th>
                      <th style={{ width: "30%" }}>
                        <input
                          type="file"
                          id="sportsCertificate_0"
                          name="sportsCertificate_0"
                          placeholder="sports Certificate"
                          aria-label="Default select example"
                          accept=".pdf"
                          onChange={(e) => {
                            formik.handleChange(e);
                            formik.setFieldValue("competitions.sportsCertificate", e.target.files[0]);
                          }}
                          onBlur={formik.handleBlur}
                        />
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-12 d-flex align-items-end justify-content-end ms-auto">
              <button className="btn btn-primary px-3" type="submit" onClick={formik.handleSubmit}>
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default CompetitionsPlayed;



