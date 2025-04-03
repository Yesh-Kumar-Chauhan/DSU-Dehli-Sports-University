import React, { useState, useEffect, use } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import useCode from '../../../hooks/Setting/useCode';
import useUserCounter from '../../../hooks/useUserCounter';
import useStudnetBasicDetails from '../../../hooks/Student/useStudnetBasicDetails';
import { MotherTongue, Gender, States, Class, SportsOffered } from '../../../const/mastercodes';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import moment from "moment";

const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.matches(/^[a-zA-Z\s]+$/, 'Only Alphabets (A-Z, a-z) are allowed')
		.required('First Name is required')
		.max(60, 'First Name should not exceed 60 characters.'),
	lastName: Yup.string()
		.matches(/^[a-zA-Z\s]+$/, 'Only Alphabets (A-Z, a-z) are allowed')
		.max(60, 'Last Name should not exceed 60 characters.'),
	gender: Yup.string().required('Gender is required'),
	email: Yup.string().email('Invalid Confirm email Id')
		.max(80, 'Confirm Email Id should not exceed 80 characters.')
		.matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email Id')
		.required('Confirm Email Id is required'),
	emailOption: Yup.string().required('Email option is required'),
	testemail: Yup.string()
		.max(80, 'Email Id should not exceed 80 characters.')
		.required('Email Id is required'),
	mobileNo: Yup.string().matches(/^\d{10}$/, 'Invalid Mobile Number.').required('10 Digit Mobile Number is required').test(
		'not-all-digits-same',
		'Phone cannot have all digits the same',
		value => {
			return !/^(\d)\1+$/.test(value);
		}
	),
	adharNumber: Yup.string()
		.required('12 Digit Aadhar Number is required')
		.matches(/^\d{12}$/, 'Invalid Aadhar Number')
		.test(
			'not-all-digits-same',
			'Aadhaar Number cannot have all digits the same',
			value => {
				return !/^(\d)\1+$/.test(value);
			}
		),
	addresslineone: Yup.string().required('Present Residential Address is required').max(250, 'Present Residential Address should not exceed 250 characters.'),
	state: Yup.string().required('Present Residential State is required'),
	pinCode: Yup.string().matches(/^\d{6}$/, 'Pincode must be 6 digits').required('Pincode is required').test(
		'not-all-digits-same',
		'Pincode cannot have all digits the same',
		value => {
			return !/^(\d)\1+$/.test(value);
		}
	),
	mothertongue: Yup.string().required('Mother Tongue is required'),
	fatherMobileNo: Yup.string()
		.when('fatherName', {
			is: name => name && name.trim().length > 0,
			then: () => Yup.string()
				.required('Father Mobile Number is required')
				.matches(/^\d{10}$/, 'Please enter a valid mobile number with exactly 10 digits.')
				.test(
					'not-all-digits-same',
					'Phone cannot have all digits the same',
					value => !/^(\d)\1+$/.test(value)
				),
			otherwise: () => Yup.string().notRequired(),
		}),
	motherMobileNo: Yup.string()
		.when('motherName', {
			is: name => name && name.trim().length > 0,
			then: () => Yup.string()
				.required('Mother Mobile Number is required')
				.matches(/^\d{10}$/, 'Please enter a valid mobile number with exactly 10 digits.')
				.test(
					'not-all-digits-same',
					'Phone cannot have all digits the same',
					value => !/^(\d)\1+$/.test(value)
				),
			otherwise: () => Yup.string().notRequired(),
		}),
	schoolname: Yup.string().required('Present School Name is required').max(100, 'Present School Name should not exceed 100 characters.'),
	class: Yup.string().required('Present Class is required'),
	schooladdress: Yup.string().required('Present School Address is required').max(250, 'Present School Address should not exceed 250 characters.'),
	schoolSate: Yup.string().required('Present School State is required'),
	schoolPinCode: Yup.string().matches(/^\d{6}$/, 'Pincode must be exactly 6 digits').required('Present School Pincode is required').test(
		'not-all-digits-same',
		'Pincode cannot have all digits the same',
		value => {
			return !/^(\d)\1+$/.test(value);
		}
	),
	dateofbirth: Yup.string().required('Date Of Birth is required'),
	applyingAdmission: Yup.string().required('Applying Admission Class is required'),
	preferredSport: Yup.string().required('Preferred Sport is required'),
	readhindi: Yup.string().required('Please select whether you can read and understand Hindi.'),
	understandenglish: Yup.string().required('Please select whether you can read and understand English.'),
}).test('at-least-one', "Either Mother's or Father's/Guardian's Name is required", function (values) {
	const { motherName, fatherName } = values;
	if (!motherName && !fatherName) {
		return this.createError({
			path: 'fatherName',
			message: "Either Mother's or Father's/Guardian's Name is required",
		});
	}
	return true;
})


const initialValues = {
	firstName: "",
	lastName: "",
	gender: "",
	testemail: '',
	emailOption: '@gmail.com',
	email: "",
	mobileNo: "",
	adharNumber: "",
	addresslineone: "",
	state: "",
	pinCode: "",
	mothertongue: "",
	fatherName: "",
	fatherMobileNo: "",
	motherName: "",
	motherMobileNo: "",
	schoolname: "",
	class: "",
	schooladdress: "",
	schoolSate: "",
	schoolPinCode: "",
	dateofbirth: "",
	applyingAdmission: "",
	preferredSport: "",
	readhindi: "",
	understandenglish: "",
	addressLine2: "",
};

validationSchema.validate(initialValues)
	.then(valid => console.log('Validation successful:', valid))
	.catch(errors => console.error('Validation failed:', errors));


const StudnetBasicDetails = () => {
	const { postStudnetBasicDetails, ClassByAge, getBasicdetails, ApplicationId, updatebasicdetails, SessionData, checkemail,
		allsessions, checkaadhar, allowedclassesbyage, classespermitted, getPresentClass } = useStudnetBasicDetails();
	const { addPagesCount } = useUserCounter()
	const { getCodeDetails } = useCode();
	const [MotherTongueValue, setMotherTongueValue] = useState([]);
	const [genders, setGenders] = useState([]);
	const [state, setState] = useState([]);
	const [classes, setClasses] = useState([]);
	const [sports, setSports] = useState([]);
	const [showIDModal, setShowIDModal] = useState(false)
	const [Continue, setContinue] = useState(false)
	const [ApplyClassEgible, setApplyClassEgible] = useState(true)
	const [CheckEgiableForClass, setCheckEgiableForClass] = useState(true)
	const [showIDModalForField, setShowIDModalForField] = useState(false)
	const [TotalAge, setTotalAge] = useState('')
	const [SessionValue, setSessionValue] = useState([])
	const [FilterClassValue, setFilterClassValue] = useState([])
	const [InValidEmail, setInValidEmail] = useState(false)
	const [PresentClass, setPresentClass] = useState([])

	const router = useRouter();
	const getDropdownValue = async () => {
		try {
			let retrievedtongue = await getCodeDetails(MotherTongue);
			setMotherTongueValue(retrievedtongue);
			let retrievedGender = await getCodeDetails(Gender);
			setGenders(retrievedGender);
			let retrievedstate = await getCodeDetails(States);
			setState(retrievedstate);
			let retrievedclasses = await getCodeDetails(Class);
			setClasses(retrievedclasses);
			let retrievedsports = await getCodeDetails(SportsOffered);
			setSports(retrievedsports);
			getPresentClass().then((data) => {
				setPresentClass(data)
			})
		} catch (error) {
			console.error('Error fetching classes:', error);
		}
	};



	const hanldeSubmitForm = async () => {
		setShowIDModalForField(false)
		try {
			if (Continue === false) {
				await postStudnetBasicDetails({
					firstName: formik.values.firstName,
					lastName: formik.values.lastName,
					gender: parseInt(formik.values.gender),
					emailId: formik.values.email,
					mobileNo: formik.values.mobileNo.toString(),
					aadharNo: formik.values.adharNumber.toString(),
					fatherName: formik.values.fatherName,
					fatherMobile: formik.values.fatherMobileNo.toString(),
					motherName: formik.values.motherName,
					motherMobile: formik.values.motherMobileNo.toString(),
					addressLine1: formik.values.addresslineone,
					addressLine2: formik.values.addressLine2,
					state: parseInt(formik.values.state),
					pincode: formik.values.pinCode.toString(),
					currentClass: parseInt(formik.values.class),
					currentSchool: formik.values.schoolname,
					currentSchoolAddress: formik.values.schooladdress,
					currentSchoolState: parseInt(formik.values.schoolSate),
					schoolStatePincode: formik.values.schoolPinCode.toString(),
					dob: formik.values.dateofbirth,
					registrationClass: parseInt(formik.values.applyingAdmission),
					primarySport: parseInt(formik.values.preferredSport),
					motherTongue: parseInt(formik.values.mothertongue),
					canUnderstandHindi: formik.values.readhindi === 'false' ? false : true,
					canUnderstandEnglish: formik.values.understandenglish === 'false' ? false : true,
				}).then((response) => console.log(response.data.success))
				setShowIDModal(true)
			} else {
				const studentDetails = JSON.parse(localStorage.getItem('studentDetails'));
				await updatebasicdetails(studentDetails.returnId, {
					firstName: formik.values.firstName,
					lastName: formik.values.lastName,
					gender: parseInt(formik.values.gender),
					emailId: formik.values.email,
					mobileNo: formik.values.mobileNo.toString(),
					aadharNo: formik.values.adharNumber.toString(),
					fatherName: formik.values.fatherName,
					fatherMobile: formik.values.fatherMobileNo.toString(),
					motherName: formik.values.motherName,
					motherMobile: formik.values.motherMobileNo.toString(),
					addressLine1: formik.values.addresslineone,
					addressLine2: formik.values.addressLine2,
					state: parseInt(formik.values.state),
					pincode: formik.values.pinCode.toString(),
					currentClass: parseInt(formik.values.class),
					currentSchool: formik.values.schoolname,
					currentSchoolAddress: formik.values.schooladdress,
					currentSchoolState: parseInt(formik.values.schoolSate),
					schoolStatePincode: formik.values.schoolPinCode.toString(),
					dob: formik.values.dateofbirth,
					registrationClass: parseInt(formik.values.applyingAdmission),
					primarySport: parseInt(formik.values.preferredSport),
					motherTongue: parseInt(formik.values.mothertongue),
					canUnderstandHindi: formik.values.readhindi === 'false' ? false : true,
					canUnderstandEnglish: formik.values.understandenglish === 'false' ? false : true,
				});
				toast.success('Student Details Added Successfully!');
				router.push(`/onsite-registration/registrationform?tab=${'Medical Details'}`);
			}
		} catch (error) {
			console.error('Error submitting student details:', error);
		}
	}

	const handleConformation = () => {
		if (Continue == false) {
			setShowIDModalForField(true)
		} else {
			hanldeSubmitForm()
		}
	}


	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: handleConformation
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await allsessions();
				const filteredData = data.filter(
					(filterdata) => filterdata.isValid === true && filterdata.isRegistrationOpen === true
				);
				setSessionValue(filteredData)

				getDropdownValue();
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);


	useEffect(() => {
		const studentDetails = JSON.parse(localStorage.getItem('studentDetails'));
		if (studentDetails !== null) {
			setShowIDModal(false)
			setContinue(true)
			getBasicdetails(studentDetails?.returnId)
				.then((getValue) => {
					calculateAge(getValue?.dob)
					if (getValue?.applicationStatus === 1003) {
						router.push('/print-details');
					} else {
						setFilterClassValue([{ "subCodeDescription": getValue?.registrationClassTitle }])
						initialValues.firstName = getValue?.firstName;
						initialValues.lastName = getValue?.lastName;
						initialValues.gender = getValue?.gender;
						initialValues.email = getValue?.emailId;
						initialValues.testemail = getValue?.emailId;
						initialValues.mobileNo = getValue?.mobileNo;
						initialValues.adharNumber = getValue?.aadharNo;
						initialValues.addresslineone = getValue?.addressLine1;
						initialValues.state = getValue?.state;
						initialValues.pinCode = getValue?.pincode;
						initialValues.mothertongue = getValue?.motherTongue;
						initialValues.fatherName = getValue?.fatherName;
						initialValues.fatherMobileNo = getValue?.fatherMobile;
						initialValues.motherName = getValue?.motherName;
						initialValues.motherMobileNo = getValue?.motherMobile;
						initialValues.schoolname = getValue?.currentSchool;
						initialValues.class = getValue?.currentClass;
						initialValues.schooladdress = getValue?.currentSchoolAddress;
						initialValues.schoolSate = getValue?.currentSchoolState;
						initialValues.schoolPinCode = getValue?.schoolStatePincode;
						initialValues.dateofbirth = getValue?.dob;
						initialValues.applyingAdmission = getValue?.registrationClass;
						initialValues.preferredSport = getValue?.primarySport;
						initialValues.readhindi = getValue?.canUnderstandHindi.toString();
						initialValues.understandenglish = getValue?.canUnderstandEnglish.toString();
						initialValues.addressLine2 = getValue?.addressLine2;
					}
				})
		} else {
			formik.resetForm();
			initialValues.firstName = '';
			initialValues.lastName = '';
			initialValues.gender = '';
			initialValues.email = '';
			initialValues.testemail = '';
			initialValues.mobileNo = '';
			initialValues.adharNumber = '';
			initialValues.addresslineone = '';
			initialValues.state = '';
			initialValues.pinCode = '';
			initialValues.mothertongue = '';
			initialValues.fatherName = '';
			initialValues.fatherMobileNo = '';
			initialValues.motherName = '';
			initialValues.motherMobileNo = '';
			initialValues.schoolname = '';
			initialValues.class = '';
			initialValues.schooladdress = '';
			initialValues.schoolSate = '';
			initialValues.schoolPinCode = '';
			initialValues.dateofbirth = '';
			initialValues.applyingAdmission = '';
			initialValues.preferredSport = '';
			initialValues.readhindi = '';
			initialValues.understandenglish = '';
			initialValues.addressLine2 = '';
		}
	}, []);

	// function getAge(dateString) {
	// 	var today = new Date(SessionValue[0]?.reg_AgeAsOnDate);
	// 	var DOB = new Date(dateString);

	// 	var years = today.getFullYear() - DOB.getFullYear();
	// 	var months = today.getMonth() - DOB.getMonth();
	// 	var days = today.getDate() - DOB.getDate();

	// 	if (days < 0) {
	// 		months -= 1;
	// 		// Calculate the remaining days
	// 		var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, DOB.getDate());
	// 		days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
	// 	}

	// 	if (months < 0) {
	// 		years -= 1;
	// 		months += 12;
	// 	}

	// 	var age = years + ' years ' + months + ' months ' + days + ' days';
	// 	console.log("age", age);
	// 	return age;
	// }



	const calculateAge = (birthdate) => {
		setApplyClassEgible(true);
		var today = new Date();
		var DOB = new Date(birthdate);
		// alert(today)
		var years = today.getFullYear() - DOB.getFullYear();
		var months = today.getMonth() - DOB.getMonth();
		var days = today.getDate() - DOB.getDate();

		if (days < 0) {
			months -= 1;
			var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, DOB.getDate());
			days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
		}

		if (months < 0) {
			years -= 1;
			months += 12;
		}

		var age = years + ' years ' + months + ' months ' + days + ' days';


		// const today = new Date(SessionValue[0]?.reg_AgeAsOnDate)
		// const dob = new Date(birthdate);
		// const ageInMilliseconds = today - dob;
		// const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
		// const year = Math.floor(ageInDays / 365);
		// const remainingDaysInYear = ageInDays % 365;
		// const monthAge = Math.floor(remainingDaysInYear / 31); // Assuming an average month is 30 days
		// const days = remainingDaysInYear % 31;
		// const dayAge = days
		// const age = `${year} years ${monthAge} months ${dayAge} days`;
		setTotalAge(age);
		classespermitted(birthdate).then((data) => {
			if (data && Object.keys(data).length == 0) {
				setApplyClassEgible(false);
				setCheckEgiableForClass(false)
			} else {
				setCheckEgiableForClass(true)
			}
		})

		return age;
	};




	const handleAge = (values) => {
		const userFullAge = calculateAge(formik.values.dateofbirth);
		const ageArray = userFullAge.split(' ');
		const userAge = parseInt(ageArray[0])
		formik.setFieldValue('applyingAdmission', '');
		formik.setFieldValue('class', '');
		setFilterClassValue([])
	}
	const filteredClasses = classes && classes.filter(data => {
		return ClassByAge && ClassByAge.map(classObj => classObj.classCode).includes(data.subCode);
	});


	const handleNext = () => {
		setShowIDModal(false)
		setContinue(true)
		router.push(`/onsite-registration/registrationform?tab=${'Medical Details'}`);
	}


	//check email id 

	const handleCheckEmaildId = (userEmailId) => {
		setInValidEmail(false)
		const optionValue = formik.values.emailOption === 'others' ? '' : formik.values.emailOption
		const joinedValue = `${formik.values.testemail}${optionValue}`
		if (joinedValue === userEmailId) {
			checkemail(userEmailId.toString()).then((data) => {
				if (data == '403') {
					toast.error("Candidate with same email id is already registered!")
					const updatedValues = {
						...formik.values,
						email: " ",
						testemail: '',
					};
					formik.setValues(updatedValues);
				}
			})
		} else {
			if (userEmailId != '') {
				setInValidEmail(true)
			}
			else {
				setInValidEmail(false)
			}
		}
	}

	//check aadhar number 

	const handleAdharCheck = (numbers) => {
		checkaadhar(numbers.toString()).then((data) => {
			if (data == '403') {
				toast.error("Candidate with same Aadhar Card Number id is already registered!")
				const updatedValues = {
					...formik.values,
					adharNumber: " ",
				};
				formik.setValues(updatedValues);
			}
		})
	}


	const handleClassValue = () => {
		const Data = filteredClasses.filter((data) => formik.values.class == data.subCode || data.subCode == parseInt(formik.values.class) + 1)
		if (Data.length == 0) {
			setApplyClassEgible(false);
		} else {
			setApplyClassEgible(true);
		}
		setFilterClassValue(Data)
		formik.setFieldValue('applyingAdmission', '');
	}
	const handleKeyPress = (e) => {
		const regex = /^[A-Za-z\s\-]+$/;
		if (!regex.test(e.key)) {
			e.preventDefault();
		}
	};
	// user count on form 
	useEffect(() => {
		fetch('https://api.ipify.org?format=json')
			.then(response => response.json())
			.then(data => addPagesCount({
				pageID: 1302,
				ipAddress: data.ip.toString()
			})
			)
			.catch(error => console.log(error))
	}, []);

	useEffect(() => {
		const studentDetails = JSON.parse(localStorage.getItem('studentDetails'));

		if (SessionValue != ' ') {
			getBasicdetails(studentDetails?.returnId)
				.then((getValue) => {
					calculateAge(getValue?.dob)
				})
		}
	}, [SessionValue])

	return (
		<div>
			<div
				className={showIDModal == true ? " " : "row flex-lg-row  flex-md-column-reverse  flex-column-reverse"}>
				<div
					className="col-12">
					<div
						className="row gy-3">
						<div
							className="col-12">
							<div
								className="form_header">
								<h3
									className="message_data">Student
									Basic
									Details</h3>
								<hr
									className="mb-0" />
							</div>
						</div>
						<div
							className="col-lg-4 col-md-12 col-sm-12 col-12">
							<div>
								<label className="form-label">
									First Name / पहला नाम
									<span className="text-danger">*</span>
								</label>
								<input
									name="firstName"
									type="text"
									placeholder="First Name"
									id="firstName"
									className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onPaste={(e) => e.preventDefault()}
									onBlur={formik.handleBlur}
									value={formik.values.firstName}
									maxLength={60}
								/>
								{formik.touched.firstName && formik.errors.firstName ? (
									<div className="invalid-feedback">{formik.errors.firstName}</div>
								) : null}
							</div>
						</div>
						<div
							className="col-lg-4 col-md-12 col-sm-12 col-12">
							<div>
								<label
									className="form-label">Last
									Name
									/
									उपनाम</label>
								<input
									name="lastName"
									type="text"
									placeholder="Last Name"
									className={`form-control ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.lastName}
									isValid={formik.isValid}
									onPaste={(e) => e.preventDefault()}
									isTouched={formik.touched.lastName}
									invalidFeedback={formik.errors.lastName}
									maxLength={60}
								/>
								{formik.touched.lastName && formik.errors.lastName ? (
									<div className="invalid-feedback">{formik.errors.lastName}</div>
								) : null}
							</div>
						</div>
						<div
							className="col-lg-4 col-md-12 col-sm-12 col-12">
							<div>
								<label
									className="form-label">Gender
									/
									लिंग
									<span
										className="text-danger">*</span></label>
								<select
									name="gender"
									id="gender"
									placeholder="Select"
									className={`form-control ${formik.touched.gender && formik.errors.gender ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.gender}
									isValid={formik.isValid}
									disabled={Continue}
									isTouched={formik.touched.gender}
									invalidFeedback={formik.errors.gender}>

									<option value="" disabled hidden>
										Select
									</option>
									{genders && genders
										.filter((gender) => gender.isActive === true)
										.map((gender, index) => (
											<option key={index}
												value={gender.subCode}
											>
												{gender.subCodeDescription}
											</option>
										))}
								</select>
								<div className="invalid-feedback">{formik.errors.gender}</div>
							</div>
						</div>

						{Continue === false ? (<>
							<div
								className="col-lg-4 col-md-8 col-sm-12 col-12 pe-0">
								<div><label
									className="form-label">Email
									Id
									/
									ईमेल
									आईडी
									<span
										className="text-danger">*</span></label>
									<input
										type="text"
										id="testemail"
										name="testemail"
										placeholder='Email Id'
										style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, }}
										className={`form-control ${formik.touched.testemail && formik.errors.testemail ? 'is-invalid' : ''}`}
										onChange={formik.handleChange}
										onBlur={(e) => {
											formik.handleBlur(e)
											handleCheckEmaildId(formik.values.email)
										}}
										disabled={Continue}
										value={formik.values.testemail}
										isValid={formik.isValid}
										isTouched={formik.touched.testemail}
										invalidFeedback={formik.errors.testemail}
										onPaste={(e) => e.preventDefault()}
										maxLength={80} />
									{formik.values.testemail}{formik.values.emailOption === 'others' ? '' : formik.values.emailOption}
									{formik.touched.testemail && formik.errors.testemail ? (
										<div className="invalid-feedback">{formik.errors.testemail}</div>
									) : null}
								</div>
							</div>

							<div className="col-lg-2 col-md-4 col-sm-12 col-12 ps-0" style={{ marginLeft: '0px' }}>
								<label className="form-label text-nowrap">Select Domain/डोमेन चुनें<span
									className="text-danger">*</span></label>
								<select
									name="emailOption"
									id="emailOption"
									style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, height: '52px' }}
									placeholder="Select"
									className={`form-control ${formik.touched.emailOption && formik.errors.emailOption ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={(e) => {
										formik.handleBlur(e)
										handleCheckEmaildId(formik.values.email)
									}}
									value={formik.values.emailOption}
									isValid={formik.isValid}
									disabled={Continue}
									isTouched={formik.touched.emailOption}
									invalidFeedback={formik.errors.emailOption} >
									<option value="@gmail.com">@gmail.com</option>
									<option value="@yahoo.com">@yahoo.com</option>
									<option value="@hotmail.com">@hotmail.com</option>
									<option value="@ymail.com">@ymail.com</option>
									<option value="@yahoo.co.in">@yahoo.co.in</option>
									<option value="@live.com">@live.com</option>
									<option value="@rediffmail.com">@rediffmail.com</option>
									<option value="others">Others</option>
								</select>
								<div className="invalid-feedback">{formik.errors.emailOption}</div>

							</div>
						</>
						) : ''}

						<div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div><label
								className="form-label">Confirm Email
								Id
								/
								ईमेल आईडी की पुष्टि करें
								<span
									className="text-danger">*</span></label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder='Confirm Email Id (xyz@example.com)'
									className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={(e) => {
										formik.handleBlur(e);
										handleCheckEmaildId(e.target.value);
									}}
									disabled={Continue}
									value={formik.values.email}
									isValid={formik.isValid}
									onPaste={(e) => e.preventDefault()}
									isTouched={formik.touched.email}
									invalidFeedback={formik.errors.email}
									maxLength={80} />
								{InValidEmail === true ? (<div style={{ color: 'var(--bs-form-invalid-color)' }}>Email id doesn&apos;t match</div>) : (formik.touched.email && formik.errors.email ? (
									<div className="invalid-feedback">{formik.errors.email}</div>
								) : null)}
								{/* {formik.touched.email && formik.errors.email ? (
									<div className="invalid-feedback">{formik.errors.email}</div>
								) : null} */}
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div><label
								className="form-label">Mobile
								Number
								/
								मोबाइल
								नंबर
								<span
									className="text-danger">*</span></label><input
									name="mobileNo"
									type="text"
									id="mobileNo"
									placeholder="Mobile Number"
									maxLength={10}
									pattern="[0-9]*"
									className={`form-control ${formik.touched.mobileNo && formik.errors.mobileNo ? 'is-invalid' : ''}`}
									// onChange={formik.handleChange}
									onChange={(e) => {
										const numericValue = e.target.value.replace(/[^0-9]/g, '');
										formik.handleChange({
											target: {
												name: 'mobileNo',
												value: numericValue,
											},
										});
									}}
									onBlur={formik.handleBlur}
									value={formik.values.mobileNo}
									onPaste={(e) => e.preventDefault()}
									isValid={formik.isValid}
									isTouched={formik.touched.mobileNo}
									invalidFeedback={formik.errors.mobileNo}

								/>
								{formik.touched.mobileNo && formik.errors.mobileNo ? (
									<div className="invalid-feedback">{formik.errors.mobileNo}</div>
								) : null}
							</div>

						</div>
						<div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div>
								<label
									className="form-label">Aadhar
									Card
									Number
									/
									आधार
									कार्ड
									संख्या <span
										className="text-danger">*</span></label>
								<input
									name="adharNumber"
									type="text"
									id="adharNumber"
									placeholder="Aadhar Card Number"
									className={`form-control ${formik.touched.adharNumber && formik.errors.adharNumber ? 'is-invalid' : ''}`}
									onChange={(e) => {
										const numericValue = e.target.value.replace(/[^0-9]/g, '');
										formik.handleChange({
											target: {
												name: 'adharNumber',
												value: numericValue,
											},
										});
									}}
									onBlur={(e) => {
										formik.handleBlur(e);
										handleAdharCheck(e.target.value);
									}}
									disabled={Continue}
									value={formik.values.adharNumber}
									onPaste={(e) => e.preventDefault()}
									isValid={formik.isValid}
									isTouched={formik.touched.adharNumber}
									invalidFeedback={formik.errors.adharNumber}
									maxLength={12}
									pattern="[0-9]*"
								/>
								{formik.touched.adharNumber && formik.errors.adharNumber ? (
									<div className="invalid-feedback">{formik.errors.adharNumber}</div>
								) : null}
							</div>
						</div>
						<div
							className="col-lg-12 col-md-12 col-sm-12 col-12">
							<div><label
								className="form-label">Full
								Residential
								Address
								/
								घर
								का
								पता
								<span
									className="text-danger">*</span></label>
								<input
									name="addresslineone"
									type="text"
									id="addresslineone"
									placeholder="Address"
									className={`form-control ${formik.touched.addresslineone && formik.errors.addresslineone ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.addresslineone}
									isValid={formik.isValid}
									onPaste={(e) => e.preventDefault()}
									isTouched={formik.touched.addresslineone}
									invalidFeedback={formik.errors.addresslineone}
									maxLength={250}
								/>
								{formik.touched.addresslineone && formik.errors.addresslineone ? (
									<div className="invalid-feedback">{formik.errors.addresslineone}</div>
								) : null}
							</div>


						</div>
						<div
							className="col-lg-4 col-md-12 col-sm-12 col-12">
							<div><label
								className="form-label">State
								/
								राज्य
								<span
									className="text-danger">*</span></label>
								<select
									name="state"
									id="state"
									aria-label="Default select example"
									className={`form-control ${formik.touched.state && formik.errors.state ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.state}
									disabled={Continue}
									isValid={formik.isValid}
									isTouched={formik.touched.state}
									invalidFeedback={formik.errors.state}>

									<option value="" disabled hidden>
										Select
									</option>
									{state && state
										.filter((state) => state.isActive === true)
										.map((state, index) => (
											<option key={index}
												value={state.subCode}
											>
												{state.subCodeDescription}
											</option>
										))}
								</select>

								<div className="invalid-feedback">{formik.errors.state}</div>
							</div>
						</div>
						<div
							className="col-lg-4 col-md-12 col-sm-12 col-12">
							<div><label
								className="form-label">Pincode
								/
								पिन
								कोड
								<span
									className="text-danger">*</span></label>
								<input
									name="pinCode"
									type="text"
									inputMode="numeric"
									id="pinCode"
									placeholder="Pincode"
									className={`form-control ${formik.touched.pinCode && formik.errors.pinCode ? 'is-invalid' : ''}`}
									// onChange={formik.handleChange}
									onChange={(e) => {
										const numericValue = e.target.value.replace(/[^0-9]/g, '');
										formik.handleChange({
											target: {
												name: 'pinCode',
												value: numericValue,
											},
										});
									}}
									onBlur={formik.handleBlur}
									value={formik.values.pinCode}
									isValid={formik.isValid}
									isTouched={formik.touched.pinCode}
									invalidFeedback={formik.errors.pinCode}
									onPaste={(e) => e.preventDefault()}
									maxLength={6}
									pattern="[0-9]*"
								/>
								{formik.touched.pinCode && formik.errors.pinCode ? (
									<div className="invalid-feedback">{formik.errors.pinCode}</div>
								) : null}
							</div>
						</div>
						<div
							className="col-lg-4 col-md-12 col-sm-12 col-12">
							<div><label
								className="form-label">Mother
								Tongue
								/
								मातृभाषा
								<span
									className="text-danger">*</span></label>
								<select
									name='mothertongue'
									id='mothertongue'
									ariaLabel='Mother Tongue'
									className={`form-control ${formik.touched.mothertongue && formik.errors.mothertongue ? 'is-invalid' : ''}`}
									placeholder='Choose...'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.mothertongue}
									isValid={formik.isValid}
									isTouched={formik.touched.mothertongue}
									invalidFeedback={formik.errors.mothertongue}
								>

									<option value="" disabled hidden>
										Select
									</option>
									{MotherTongueValue && MotherTongueValue
										.filter((mothertongue) => mothertongue.isActive === true)
										.map((mothertongue, index) => (
											<option key={index}
												value={mothertongue.subCode}
											>
												{mothertongue.subCodeDescription}
											</option>
										))}
								</select>
								<div className="invalid-feedback">{formik.errors.mothertongue}</div>
							</div>
						</div>
						<div
							className="col-lg-4 col-md-4 col-sm-12 col-12">
							<div><label
								className="form-label">Date
								Of
								Birth
								/
								जन्म
								तिथि
								<span
									className="text-danger">*</span></label>
								<input
									name="dateofbirth"
									style={{ textTransform: 'uppercase' }}
									type="date"
									id="dateofbirth"
									placeholder="Date Of Birth(DD/MM/YYYY)"
									className={`form-control ${formik.touched.dateofbirth && formik.errors.dateofbirth ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={() => {
										handleAge()
										formik.handleBlur
									}}
									disabled={Continue}
									value={formik.values.dateofbirth}
									isValid={formik.isValid}
									isTouched={formik.touched.dateofbirth}
									invalidFeedback={formik.errors.dateofbirth}
									max={new Date().toISOString().split("T")[0]}
									onKeyDown={(e) => e.preventDefault()}
								/>
								{formik.touched.dateofbirth && formik.errors.dateofbirth ? (
									<div className="invalid-feedback">{formik.errors.dateofbirth}</div>
								) : null}
								<label>(As
									mentioned
									in
									birth
									certificate/school
									document)</label>
							</div>
						</div>
						<div
							className="col-lg-4 col-md-4 col-sm-12 col-12">
							<div><label
								className="form-label">Age/आयु
							</label>
								<input
									className={`form-control ${formik.touched.dateofbirth && formik.errors.dateofbirth ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={() => {
										handleAge()
										formik.handleBlur
									}}
									disabled={true}
									value={TotalAge && TotalAge === 'NaN years NaN months NaN days' ? '' : TotalAge}
									readOnly
								/>
								<label>(Auto Calculate age as on {moment(SessionValue && SessionValue[0]?.reg_AgeAsOnDate).format('DD-MM-YYYY')})
									{CheckEgiableForClass == false ? (
										<div style={{ color: 'var(--bs-form-invalid-color)' }}>Not Eligible For Any Class</div>
									) : (''
									)}
								</label>
							</div>

						</div>
						<div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div>
								<label
									className="form-label">  Father&apos;s/Guardian&apos;s Name
									<span
										className="text-danger">*</span>
									पिता/अभिभावक
									का
									नाम</label>
								<input
									name="fatherName"
									type="text"
									id="fatherName"
									className={`form-control ${formik.touched.fatherName && formik.errors.fatherName ? 'is-invalid' : ''}`}
									placeholder="Father's/Guardian's Name"
									onChange={formik.handleChange}
									onPaste={(e) => e.preventDefault()}
									onBlur={formik.handleBlur}
									value={formik.values.fatherName}
									onKeyPress={handleKeyPress}
									isValid={formik.isValid}
									isTouched={formik.touched.fatherName}
									invalidFeedback={formik.errors.fatherName}
									maxLength={80}
								/>
								{formik.touched.fatherName && formik.errors.fatherName ? (
									<div className="invalid-feedback">{formik.errors.fatherName}</div>
								) : null}
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div>
								<label
									className="form-label">Father&apos;s/Guardian&apos;s
									Contact
									Number/
									<span
										className="text-danger">*</span>
									पिता/अभिभावक
									का
									फोन
									नंबर</label>
								<input
									name="fatherMobileNo"
									type="text"
									id="fatherMobileNo"
									placeholder="Father's/Guardian's Contact Number"
									className={`form-control ${formik.touched.fatherMobileNo && formik.errors.fatherMobileNo ? 'is-invalid' : ''}`}
									// onChange={formik.handleChange}
									onChange={(e) => {
										const numericValue = e.target.value.replace(/[^0-9]/g, '');
										formik.handleChange({
											target: {
												name: 'fatherMobileNo',
												value: numericValue,
											},
										});
									}}
									onBlur={formik.handleBlur}
									value={formik.values.fatherMobileNo}
									isValid={formik.isValid}
									onPaste={(e) => e.preventDefault()}
									isTouched={formik.touched.fatherMobileNo}
									invalidFeedback={formik.errors.fatherMobileNo}
									maxLength={10}
									pattern="[0-9]*"
								/>
								<div style={{ color: 'var(--bs-form-invalid-color)', fontSize: '.875em' }}>{formik.errors.fatherMobileNo}</div>
								{/* {formik.touched.fatherMobileNo && formik.errors.fatherMobileNo ? (
									<div className="invalid-feedback">{formik.errors.fatherMobileNo}</div>
								) : null} */}
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div>
								<label
									className="form-label">Mother&apos;s
									Name
									/
									माता
									का
									नाम</label>
								<input
									name="motherName"
									type="text"
									id="motherName"
									placeholder="Mother's Name"
									className={`form-control ${formik.touched.fatherName && formik.errors.fatherName ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.motherName}
									onKeyPress={handleKeyPress}
									isValid={formik.isValid}
									isTouched={formik.touched.fatherName}
									onPaste={(e) => e.preventDefault()}
									invalidFeedback={formik.errors.fatherName}
									maxLength={80}
								/>
								{formik.touched.fatherName && formik.errors.fatherName ? (
									<div className="invalid-feedback">{formik.errors.fatherName}</div>
								) : null}
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div>
								<label
									className="form-label">Mother&apos;s
									Contact
									Number
									/
									माता
									का
									फोन
									नंबर</label>
								<input
									name="motherMobileNo"
									type="text"
									id="motherMobileNo"
									placeholder="Mother's Contact Number"
									className={`form-control ${formik.touched.fatherMobileNo && formik.errors.fatherMobileNo ? 'is-invalid' : ''}`}
									// onChange={formik.handleChange}
									onChange={(e) => {
										const numericValue = e.target.value.replace(/[^0-9]/g, '');
										formik.handleChange({
											target: {
												name: 'motherMobileNo',
												value: numericValue,
											},
										});
									}}
									onBlur={formik.handleBlur}
									value={formik.values.motherMobileNo}
									isValid={formik.isValid}
									isTouched={formik.touched.fatherMobileNo}
									invalidFeedback={formik.errors.fatherMobileNo}
									onPaste={(e) => e.preventDefault()}
									maxLength={10}
									pattern="[0-9]*"
								/>
								<div style={{ color: 'var(--bs-form-invalid-color)', fontSize: '.875em' }}>{formik.errors.motherMobileNo}</div>
								{/* {formik.touched.fatherMobileNo && formik.errors.fatherMobileNo ? (
									<div className="invalid-feedback">{formik.errors.fatherMobileNo}</div>
								) : null} */}
							</div>
						</div>

						<div
							className="col-lg-12 col-md-12 col-sm-12 col-12">
							<div>
								<label
									className="form-label">Present
									School
									/
									वर्तमान
									विद्यालय
									<span
										className="text-danger">*</span></label>
								<input
									type="text"
									placeholder="Present School Name"
									id="schoolname"
									name="schoolname"
									className={`form-control ${formik.touched.schoolname && formik.errors.schoolname ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.schoolname}
									isValid={formik.isValid}
									isTouched={formik.touched.schoolname}
									onPaste={(e) => e.preventDefault()}
									maxLength={100}
									invalidFeedback={formik.errors.schoolname} />
								{formik.touched.schoolname && formik.errors.schoolname ? (
									<div className="invalid-feedback">{formik.errors.schoolname}</div>
								) : null}
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div>
								<label
									className="form-label">Present
									Class
									/
									वर्तमान
									कक्षा
									<span
										className="text-danger">*</span></label>
								<select
									name="class"
									id="class"
									aria-label="Default select example"
									className={`form-control ${formik.touched.class && formik.errors.class ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={() => {
										handleClassValue()
										formik.handleBlur
									}}
									value={formik.values.class}
									disabled={Continue}
									isValid={formik.isValid}
									isTouched={formik.touched.class}

									invalidFeedback={formik.errors.class} >

									<option value="" disabled hidden>
										Select
									</option>
									{PresentClass && PresentClass.map((data, index) => (
										<option key={index}
											value={data.subCode}
										>
											{data.subCodeDescription}
										</option>
									))}
								</select>
								<div className="invalid-feedback">{formik.errors.class}</div>
							</div>
						</div>

						<div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div><label
								className="form-label">Applying
								For
								Admission
								In
								Class
								/
								कक्षा
								के
								लिए
								आवेदन
								<span
									className="text-danger">*</span></label>
								<select
									name="applyingAdmission"
									id="applyingAdmission"
									className={`form-control ${formik.touched.applyingAdmission && formik.errors.applyingAdmission ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.applyingAdmission}
									isValid={formik.isValid}
									disabled={Continue}
									isTouched={formik.touched.applyingAdmission}
									invalidFeedback={formik.errors.applyingAdmission}
								>
									<option value="" disabled hidden>
										Select
									</option>
									{FilterClassValue &&
										FilterClassValue
											.map((data, index) => {
												return (
													<option key={index}
														value={data.subCode}
													>
														{data.subCodeDescription}
													</option>
												)
											})}
								</select>
								{/* <div className="invalid-feedback">{formik.errors.applyingAdmission}</div> */}
								{ApplyClassEgible && ApplyClassEgible == true ? (
									<div className="invalid-feedback">{formik.errors.applyingAdmission}</div>
								) : <div className="invalid-feedback">{
									`Admission to selected class is not allowed as per the calculated age (${TotalAge}) as on ${moment(SessionValue && SessionValue[0]?.reg_AgeAsOnDate).format('DD-MM-YYYY')}. / No Class is available as per age criteria`}.</div>}
							</div>
						</div>
						<div
							className="col-lg-12 col-md-12 col-sm-12 col-12">
							<div><label
								className="form-label">Present
								School
								Address
								/
								वर्तमान
								विद्यालय
								का
								पता
								<span
									className="text-danger">*</span></label>
								<input
									name="schooladdress"
									type="text"
									id="schooladdress"
									placeholder="Your Present School Complete Address"
									className={`form-control ${formik.touched.schooladdress && formik.errors.schooladdress ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.schooladdress}
									isValid={formik.isValid}
									onPaste={(e) => e.preventDefault()}
									isTouched={formik.touched.schooladdress}
									invalidFeedback={formik.errors.schooladdress}
									maxLength={250}
								/>
								{formik.touched.schooladdress && formik.errors.schooladdress ? (
									<div className="invalid-feedback">{formik.errors.schooladdress}</div>
								) : null}
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div><label
								className="form-label">Present
								School
								State
								/
								वर्तमान
								विद्यालय
								राज्य
								<span
									className="text-danger">*</span></label>
								<select
									name="schoolSate"
									id="schoolSate"
									className={`form-control ${formik.touched.schoolSate && formik.errors.schoolSate ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.schoolSate}
									isValid={formik.isValid}
									onPaste={(e) => e.preventDefault()}
									isTouched={formik.touched.schoolSate}
									invalidFeedback={formik.errors.schoolSate}>

									<option value="" disabled hidden>
										Select
									</option>
									{state && state
										.filter((schoolSate) => schoolSate.isActive === true)
										.map((state, index) => (
											<option key={index}
												value={state.subCode}
											>
												{state.subCodeDescription}
											</option>
										))}
								</select>
								<div className="invalid-feedback">{formik.errors.schoolSate}</div>
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div><label
								className="form-label">Present
								School
								Pincode
								/
								वर्तमान
								विद्यालय
								पिन
								कोड
								<span
									className="text-danger">*</span></label>
								<input
									name="schoolPinCode"
									type="text"
									inputMode="numeric"
									pattern="[0-9]*"
									id="schoolPinCode"
									placeholder="Pincode"
									className={`form-control ${formik.touched.schoolPinCode && formik.errors.schoolPinCode ? 'is-invalid' : ''}`}
									// onChange={formik.handleChange}
									onChange={(e) => {
										// Use a regular expression to allow only numeric values
										const numericValue = e.target.value.replace(/[^0-9]/g, '');
										formik.handleChange({
											target: {
												name: 'schoolPinCode',
												value: numericValue,
											},
										});
									}}
									onBlur={formik.handleBlur}
									value={formik.values.schoolPinCode}
									isValid={formik.isValid}
									onPaste={(e) => e.preventDefault()}
									isTouched={formik.touched.schoolPinCode}
									invalidFeedback={formik.errors.schoolPinCode}
									maxLength={6}
								/>
								{formik.touched.schoolPinCode && formik.errors.schoolPinCode ? (
									<div className="invalid-feedback">{formik.errors.schoolPinCode}</div>
								) : null}
							</div>
						</div>

						<div
							className="col-lg-12 col-md-12 col-sm-12 col-12">
							<div>
								<label
									className="form-label">Preferred
									Sport
									/
									मुख्य
									खेल
									<span
										className="text-danger">*</span></label>
								<select
									name="preferredSport"
									id="preferredSport"
									className={`form-control ${formik.touched.preferredSport && formik.errors.preferredSport ? 'is-invalid' : ''}`}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.preferredSport}
									isValid={formik.isValid}
									disabled={Continue}
									isTouched={formik.touched.preferredSport}
									invalidFeedback={formik.errors.preferredSport}>

									<option value="" disabled hidden>
										Select
									</option>
									{sports && sports.filter((x) => x.isActive === true).map((preferredSport, index) => (
										<option key={index}
											value={preferredSport.subCode}
										>
											{preferredSport.subCodeDescription}
										</option>
									))}
								</select>
								<div className="invalid-feedback">{formik.errors.preferredSport}</div>
							</div>
						</div>

						<div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div>
								<label
									className="form-label">Can
									you
									read
									and
									understand
									Hindi?
									<span
										className="text-danger">*</span><br />
									क्या
									आप
									हिंदी
									पढ़
									व
									समझ
									सकते
									हैं?
								</label>
								<div
									className="d-flex align-items-center gap-3">
									<label
										className="d-flex align-items-center gap-2">
										<input
											name="readhindi"
											type="radio"
											id="readhindi"
											value='true'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											isValid={formik.isValid}
											isTouched={formik.touched.readhindi}
											checked={formik.values.readhindi == 'true'}
											invalidFeedback={formik.errors.readhindi} />
										Yes
									</label>
									<label
										className="d-flex align-items-center gap-2">
										<input
											name="readhindi"
											type="radio"
											id="readhindi"
											value='false'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											isValid={formik.isValid}
											isTouched={formik.touched.readhindi}
											checked={formik.values.readhindi == 'false'}
											invalidFeedback={formik.errors.readhindi} />
										No
									</label>
								</div>
								{formik.touched.readhindi && formik.errors.readhindi ? (
									<div style={{ color: 'var(--bs-form-invalid-color)', fontSize: '.875em' }} >{formik.errors.readhindi}</div>
								) : null}
							</div>
						</div>


						<div className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div>
								<label className="form-label">
									Can you read and understand English?
									<span className="text-danger">*</span>
									<br />
									क्या आप अंग्रेज़ी पढ़ व समझ सकते हैं?
								</label>
								<div className="d-flex align-items-center gap-3">
									<label className="d-flex align-items-center gap-2">
										<input
											name="understandenglish"
											type="radio"
											value="true"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											checked={formik.values.understandenglish === 'true'}
										/>

										Yes
									</label>
									<label className="d-flex align-items-center gap-2">
										<input
											name="understandenglish"
											type="radio"
											value="false"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											checked={formik.values.understandenglish === 'false'}
										/>
										No
									</label>
								</div>
								{formik.touched.understandenglish && formik.errors.understandenglish ? (
									<div style={{ color: 'var(--bs-form-invalid-color)', fontSize: '.875em' }}>{formik.errors.understandenglish}</div>
								) : null}
							</div>
						</div>





						{/* <div
							className="col-lg-6 col-md-12 col-sm-12 col-12">
							<div><label
								className="form-label">Can
								you
								read
								and
								understand
								English?
								<span
									className="text-danger">*</span><br />
								क्या
								आप
								अंग्रेज़ी
								पढ़
								व
								समझ
								सकते
								हैं?</label>
								<div
									className="d-flex align-items-center gap-3">
									<label
										className="d-flex align-items-center gap-2">
										<input
											name="understandenglish"
											type="radio"
											id="understandenglish"
											value='true'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											isValid={formik.isValid}
											isTouched={formik.touched.understandenglish}
											checked={formik.values.understandenglish == 'true'}
											invalidFeedback={formik.errors.understandenglish} />
										Yes
									</label>
									<label
										className="d-flex align-items-center gap-2">
										<input
											name="understandenglish"
											type="radio"
											id="understandenglish"
											value='false'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											isValid={formik.isValid}
											checked={formik.values.understandenglish == 'false'}
											isTouched={formik.touched.understandenglish}
											invalidFeedback={formik.errors.understandenglish} />
										No
									</label>
								</div>
								{formik.touched.understandenglish && formik.errors.understandenglish ? (
									<div className="invalid-feedback">{formik.errors.understandenglish}</div>
								) : null}
							</div>
						</div> */}
						<div
							className="col-lg-2 col-md-12 col-sm-12 d-flex align-items-end">
							<button
								disabled={InValidEmail === true ? true : false}
								className="btn btn-primary" onClick={formik.handleSubmit}
								type="submit"><span>{Continue === true ? "Save / Continue" : "Register"}</span></button>
						</div>
						<div
							className="col-12 mt-4 d-lg-block d-md-block d-none">
							<hr
								className="mb-0" />
						</div>
						{showIDModal && (
							<div class="modal fade gallery_img mt-0 video_popup show"
							>
								{/* <div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-body register_id confirmation_modal">
											<div>
												<h3 className="justify-content-center text-center">Dear Candidate, Please keep a note of your Registration ID :- <span className='id-text-red'> @343354546666{ApplicationId && ApplicationId?.returnId}</span></h3>
												<h3 className='w-100 text-center'><b> Click "Continue" to fill other required details of your registration for Talent Scouting Camps of DELHI SPORTS SCHOOL. </b></h3>
												<div class="row justify-content-center">
													<div class="col-12 justify-content-center d-flex">
														<button className='btn btn-primary'
															style={{ cursor: 'pointer' }}
															onClick={handleNext}
															type='button'>
															<span>Continue</span>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div> */}

								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-body can_changed register_id confirmation_modal p-0">
											<div className='w-100 student_basic_detail p-3'>
												<h3 className="justify-content-center text-center m-0">Dear Candidate,
													Please keep a note of your Registration ID :- <span className='id-text-red'>{ApplicationId &&
														ApplicationId?.returnId}</span></h3>
											</div>
											<div className='p-3'>
												<span className='id-text-red student_instruction registration_id'>
													<h4> Click &quot;Continue&quot; to fill other required details of your registration
														for Talent Scouting Camps of DELHI SPORTS SCHOOL.</h4>
												</span>
											</div>
											<div class="row justify-content-center p-3 modal_confirmation m-0">
												<div class="col-12 justify-content-center d-flex">
													<button className='btn btn-primary'
														style={{ cursor: 'pointer' }}
														onClick={handleNext}
														type='button'>
														<span>Continue</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
						{showIDModalForField && (
							<div class="modal fade gallery_img mt-0 video_popup show"
							>
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-body can_changed register_id confirmation_modal p-0">
											<div className='w-100 student_basic_detail p-3'>
												<h3 className="justify-content-center text-center m-0">Following fields cannot be changed after submitting/<br />सबमिट करने के बाद निम्नलिखित फ़ील्ड बदले नहीं जा सकते: </h3>
											</div>
											<div className='p-3'>
												<span className='id-text-red student_instruction'>
													<h3 className='m-0'>1. Email Id/ईमेल आईडी<br />
														2. Aadhar Card Number/आधार कार्ड संख्या<br />
														3. Gender/लिंग<br />
														4. Date Of Birth/ जन्मतिथि<br />
														5. Present Class/वर्तमान कक्षा<br />
														6. Applying For Admission In Class/कक्षा के लिए आवेदन<br />
														7. Preferred Sport/ मुख्य खेल<br />
													</h3>
												</span>
											</div>
											<div class="row justify-content-center p-3 modal_confirmation">
												<span className='id-text-red student_instruction'>
													<h3 className="justify-content-center text-center mb-2 mt-0">
														Are you sure to continue?/क्या आप निश्चित रूप से जारी रखेंगे?
													</h3>
												</span>
												<div class="col-12 justify-content-center d-flex">
													<button className='btn btn-primary'
														style={{ cursor: 'pointer' }}
														onClick={hanldeSubmitForm}
														type='button'>
														<span>Continue</span>
													</button>
													<button className='btn btn-primary bg-danger'
														style={{ cursor: 'pointer', marginLeft: '5px' }}
														onClick={() => setShowIDModalForField(false)}
														type='button'>
														<span>Cancel</span>
													</button>
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

		</div >
	)
}

export default StudnetBasicDetails
