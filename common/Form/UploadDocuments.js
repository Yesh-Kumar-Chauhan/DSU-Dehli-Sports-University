import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
// import useUploadDocuments from "@/hooks/useUploadDocuments";
import useUploadDocuments from "../../../hooks/useUploadDocuments";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';
// import { ApiEndPoint } from "../../../helper/common";
import { ApiEndPoint } from "../../../helpers/common";
const initialValues = {
    uploadyourImage: "",
    uploadSignature: "",
    uploadBirthCertificate: "",
    previousClassMarkSheet: "",
};

const UploadDocuments = () => {
    const fileInputRef = useRef(null);
    const fileInputRefSing = useRef(null);
    const fileInputRefBirth = useRef(null);
    const fileInputRefMark = useRef(null);

    const {
        postUploadDocuments,
        uploadsign,
        postUploadMarksheet,
        uploadbirthcert,
    } = useUploadDocuments();
    const [selectedFile, setSelectedFile] = useState();
    const [uploadsignFile, setUploadsignFile] = useState();
    const [uploadBirthFile, setUploadBirthFile] = useState();
    const [uploadMarkFile, setUploadMarkFile] = useState();
    const [imagePreview, setImagePreview] = useState(null);
    const [signaturePreview, setSignaturePreview] = useState(null);
    const [birthCertificatePreview, setBirthCertificatePreview] = useState(null);
    const [birthPDF, setBirthPDF] = useState("");
    const [markSheetPreview, setMarkSheetPreview] = useState(null);
    const { getApplicationdocs } = useUploadDocuments()
    const [markPDF, setMarkPDF] = useState(false);
    const [AllDocs, setAllDocs] = useState('')
    const router = useRouter();


    const handleFileChange = async (event) => {
        setImagePreview(null)
        const selectedFile = fileInputRef.current.files[0];
        formik.setFieldValue("uploadyourImage", event.target.value);
        setSelectedFile(selectedFile);
        if (selectedFile) {
            const studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
            try {
                await postUploadDocuments(studentDetails.returnId, {
                    photofile: selectedFile,
                });
                toast.success("Image Uploaded Successfully!");
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImagePreview(reader.result);
                };
                reader.readAsDataURL(selectedFile);
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
    };

    const handleUploadSignature = async (event) => {
        const uploadsignFile = fileInputRefSing.current.files[0];
        formik.setFieldValue("uploadSignature", event.target.value);
        setUploadsignFile(uploadsignFile);
        if (uploadsignFile) {
            const studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
            try {
                await uploadsign(studentDetails.returnId, { signfile: uploadsignFile });
                toast.success("Signature Uploaded Successfully!");
                const reader = new FileReader();
                reader.onloadend = () => {
                    setSignaturePreview(reader.result);
                };
                reader.readAsDataURL(uploadsignFile);
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
    };
    const handleUploadBirth = async (event) => {
        setBirthCertificatePreview(null);
        const uploadBirthFile = fileInputRefBirth.current.files[0];
        formik.setFieldValue("uploadBirthCertificate", event.target.value);
        setUploadBirthFile(uploadBirthFile);
        if (uploadBirthFile) {
            const studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
            try {
                await uploadbirthcert(studentDetails.returnId, {
                    birthCertFile: uploadBirthFile,
                });
                toast.success("Birth Certificate Uploaded Successfully!");
                const reader = new FileReader();
                reader.onloadend = () => {
                    setBirthCertificatePreview(reader.result);
                    setBirthPDF(true);
                };
                reader.readAsDataURL(uploadBirthFile);
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
    };
    const handleUploadMarksheet = async (event) => {
        setMarkSheetPreview(null);
        const uploadMarkFile = fileInputRefMark.current.files[0];
        formik.setFieldValue("previousClassMarkSheet", event.target.value);
        setUploadMarkFile(uploadMarkFile);
        if (uploadMarkFile) {
            const studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
            try {
                await postUploadMarksheet(studentDetails.returnId, {
                    marksheetfile: uploadMarkFile,
                });
                toast.success("Marksheet Uploaded Successfully!");

                const reader = new FileReader();
                reader.onloadend = () => {
                    setMarkSheetPreview(reader.result);
                    setMarkPDF(true);
                };
                reader.readAsDataURL(uploadMarkFile);
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
    };


    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {

            const studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
            // if (!selectedFile || !uploadBirthFile || !uploadMarkFile) {
            //     if (!selectedFile) {
            //         toast.error("Photo is required.");
            //     }
            //     if (!uploadBirthFile) {
            //         toast.error("Birth certificate is required.");
            //     }
            //     if (!uploadMarkFile) {
            //         toast.error("School ID Card/Present Class Marksheet/Report Card is required.");
            //     }
            //     return;
            // }
            getApplicationdocs(studentDetails.returnId)
            router.push(`/onsite-registration/registrationform?tab=${'Achivements'}`);
        },
    });
    const handlePrevious = () => {

        router.push({
            pathname: '/onsite-registration/registrationform',
            query: { tab: 'Medical Details' },
        });
    }
    useEffect(() => {
        const studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
        if (studentDetails !== null) {
            getApplicationdocs(studentDetails?.returnId)
                .then((getValue) => {

                    setImagePreview(getValue?.photoImageString)
                    setSelectedFile(getValue?.photoImageString)
                    setSignaturePreview(getValue?.signImageString)
                    const birthvalue = `${ApiEndPoint}${getValue && getValue?.birthCertificate}`
                    setUploadBirthFile(getValue && getValue?.birthCertificate)
                    setBirthCertificatePreview(birthvalue)
                    const marksheetValue = `${ApiEndPoint}${getValue && getValue?.marksheet}`
                    setUploadMarkFile(getValue && getValue?.marksheet)
                    setMarkSheetPreview(marksheetValue)
                })
        } else {
            setImagePreview(null)
            setSelectedFile('')
            setSignaturePreview(null)
            setUploadBirthFile()
            setBirthCertificatePreview(null)
            setUploadMarkFile('')
            setMarkSheetPreview(null)
        }
    }, [])

    const handleDivClick = () => {
        window.open('https://www.adobe.com/in/acrobat/online/compress-pdf.html', '_blank');
    };

    const handlephotoClick = () => {
        window.open('https://www.freeonlinephotoeditor.com/', '_blank');
    }
    return (
        <div className="row flex-lg-row  flex-md-column-reverse  flex-column-reverse">
            <div className="col-12">
                <div className="row gy-3">
                    <div className="col-12">
                        <div className="form_header">
                            <h3 className="message_data">Upload Documents</h3>
                            <hr className="mb-0" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="upload_images">
                            <h5>
                                Upload your Image
                                <span className="text-danger"></span>
                            </h5>
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Uploaded Preview"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            )}
                            <label>(Width:480px,
                                Height:672px,
                                Format:JPG/JPEG,
                                Max.Size:50KB)</label>
                            <input
                                name="uploadyourImage"
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                    handleFileChange(e), formik.handleChange(e);
                                }}
                                ref={fileInputRef}
                                onBlur={formik.handleBlur}
                                value={formik.values.uploadyourImage}
                                isValid={formik.isValid}
                                isTouched={formik.touched.uploadyourImage}
                                invalidFeedback={formik.errors.uploadyourImage}
                            />
                        </div>
                        <div className="upload_noe">
                            Note:
                            Upload scanned / digital image of coloured postcard size photograph of the candidate and should be in JPEG format and image be less then 50 kb.<br />
                            <label> <span onClick={handlephotoClick} style={{ cursor: "pointer" }}> <b>Crop Photo Online </b></span></label>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="upload_images">
                            <h5>
                                Upload Signature
                                <span className="text-danger"></span>
                            </h5>
                            {signaturePreview && (
                                <img
                                    src={signaturePreview}
                                    alt="Signature Preview"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            )}
                            <label>(Width:480px,
                                Height:672px,
                                Format:JPG/JPEG,
                                Max.Size:20KB)</label>
                            <input
                                name="uploadSignature"
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                    handleUploadSignature(e), formik.handleChange(e);
                                }}
                                ref={fileInputRefSing}
                                onBlur={formik.handleBlur}
                                value={formik.values.uploadSignature}
                                isValid={formik.isValid}
                                isTouched={formik.touched.uploadSignature}
                                invalidFeedback={formik.errors.uploadSignature}
                            />
                        </div>

                        <div className="upload_noe">
                            Note:
                            Upload image of the candidate signature should be in JPEG format and image must be less then 20 kb.<br />
                            <label><span onClick={handlephotoClick} style={{ cursor: "pointer" }}> <b>Crop Signature Online </b> </span></label>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="upload_images">
                            <h5>
                                Upload Birth Certificate
                                <span className="text-danger"></span>
                            </h5>
                            {birthCertificatePreview && (
                                <iframe
                                    title="PDF Preview"
                                    src={birthCertificatePreview}
                                    width="100%"
                                    // height="500px"
                                    style={{ border: "1px solid #888" }}
                                />
                            )}
                            <label>(JPG,PDF,PNG) (Width:140px,
                                Height:60px,
                                Max.Size:500KB)</label>
                            <input
                                name="uploadBirthCertificate"
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                    handleUploadBirth(e), formik.handleChange(e);
                                }}
                                ref={fileInputRefBirth}
                                onBlur={formik.handleBlur}
                                value={formik.values.uploadBirthCertificate}
                                isValid={formik.isValid}
                                isTouched={formik.touched.uploadBirthCertificate}
                                invalidFeedback={formik.errors.uploadBirthCertificate}
                            />
                        </div>

                        <div className="upload_noe">
                            <label>(JPG,PDF,PNG) (Width:480px,
                                Height:672px,
                                Max.Size:500KB) <br /><span onClick={handleDivClick} style={{ cursor: "pointer" }}> <b>Compress Pdf Online</b> </span></label>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="upload_images">
                            <h5>
                                Upload School ID Card/Present Class Marksheet/Report Card
                                <span className="text-danger"></span>
                            </h5>
                            {markSheetPreview && (
                                <iframe
                                    title="PDF Preview"
                                    src={markSheetPreview}
                                    width="100%"
                                    // height="500px"
                                    style={{ border: "1px solid #888" }}
                                />
                            )}
                            <label>(JPG,PDF,PNG) (Width:140px,
                                Height:60px,
                                Max.Size:500KB)</label>
                            <input
                                name="previousClassMarkSheet"
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                    handleUploadMarksheet(e), formik.handleChange(e);
                                }}
                                ref={fileInputRefMark}
                                onBlur={formik.handleBlur}
                                value={formik.values.previousClassMarkSheet}
                                isValid={formik.isValid}
                                isTouched={formik.touched.previousClassMarkSheet}
                                invalidFeedback={formik.errors.previousClassMarkSheet}
                            />
                        </div>
                        <div className="upload_noe">
                            <label>(JPG,PDF,PNG) (Max Size 500kb) <br /> <span onClick={handleDivClick} style={{ cursor: "pointer" }}><b>Compress Pdf Online</b> </span></label>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex align-items-end">
                        <button className="btn btn-primary" type="button" onClick={handlePrevious}>
                            <span>Previous</span>
                        </button>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex align-items-end justify-content-end ms-auto">
                        <button
                            className="btn btn-primary px-3"
                            onClick={formik.handleSubmit}
                            type="submit"
                        >
                            <span>Save & Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadDocuments;
