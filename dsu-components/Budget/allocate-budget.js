import React, { useRef, useState, useEffect } from 'react';
import PaginationButtons, { dataPagination, PER_COUNT, } from '../../components/PaginationButtons';
import useSortableData from '../../hooksnew/useSortableData';
import Input from '../../components/bootstrap/forms/Input';
import { useFormik } from 'formik';
import Button from '../../components/bootstrap/Button';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Card, { CardBody, CardHeader, CardTitle, } from '../../components/bootstrap/Card';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Checks, { ChecksGroup } from '../../components/bootstrap/forms/Checks';
import Head from 'next/head';
import LoadingImage from '../../public/frontend/images/loader_icon.png';
import LoadingImage2 from '../../public/frontend/images/loader_icon_inner.png';
import Select from '../../components/bootstrap/forms/Select';
import useBudgetHead from '../../hooks/Accounts/useBudgetHaed';
import useBudgetAllocation from '../../hooks/Accounts/useBudgetAllocation';
import useSession from '../../hooks/useSession';
import { BudgetTransaction } from '../../const/mastercodes';
import useCode from '../../hooks/Setting/useCode';


const validationSchema = Yup.object().shape({
	// financialYear: Yup.string().required('Please Select Financial Year'),
	majorBudgetHead: Yup.string().required('Please Select Major Head'),
	subMajorHead: Yup.string().required('Please Select Sub Major Head'),
	minorHead: Yup.string().required('Please Select Minor Head'),
	subMinorHead: Yup.string().required('Please Select Sub Minor Head'),
	detailHead: Yup.string().required('Please Select Detail Head'),
	objectHead: Yup.string().required('Please Select Object Head'),
	amountAllocation: Yup.string().required('Amount Allocation is required'),
});

const AllocateBudget = () => {
	const { getCodeDetails } = useCode();
	const { getAllMajorHeads, AllMajorHeadsData,
		AllDetailHeadsData, getAllDetailHeads, SetLoading, Loading,
		SubMajorDrop,
		getAllMajorHeadDetails,
		AllSubMajorDrop,
		getAllSubMajorHeadDetails,
		AllMinorDrop,
		getAllMinorHeadDetails,
		AllSubMinorDrop,
		getAllSubMinorHeadDetails,
		AllDetailHeadDrop,
		getAllDetailHeadDetails, } = useBudgetHead()
	const { addAmount, getAllocated_amount, AllHeadAllocated_amount, getHeads_allocated_amount, setAllHeadAllocated_amount, allocated_amount_forsession, AllAllocatedAmountForSession } = useBudgetAllocation()
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['10']);
	const { items, requestSort, getClassNamesFor } = useSortableData(AllDetailHeadsData);
	const [searchQuery, setSearchQuery] = useState('');
	const [Edit, setEdit] = useState();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoader, setIsLoader] = useState(true);
	const [toggleConfrimAttendanceSubmit, setToggleConfrimAttendanceSubmit] = useState(false);
	const [BudgetTypeData, setBudgetTypeData] = useState([])
	const { getSession, sessionCode } = useSession();
	const [Session, setSession] = useState();


	const getDropdownValue = async () => {
		let getBudgetType = await getCodeDetails(BudgetTransaction);
		setBudgetTypeData(getBudgetType);
		let sessionValues = await getSession();
		let getCurrenSession = sessionValues.find((x) => x.isCurrent).forSession;
		setSession(getCurrenSession);
		formik.values.sessionCode = getCurrenSession
	}

	const filteredItems = items.filter((item) => {
		const searchLower = searchQuery.toLowerCase();
		return (
			// item.codehead.toLowerCase().includes(searchLower)
			<></>
		);
	});

	useEffect(() => {
		getDropdownValue()
		getAllMajorHeads(true);
		const loaderTimeout = setTimeout(() => {
			setIsLoader(false);
		}, 3000);
		return () => {
			clearTimeout(loaderTimeout);
		};
	}, []);

	const paginatedItems = dataPagination(filteredItems, currentPage, perPage);

	const initialValues = {
		objectHead: '',
		detailHead: '',
		subMinorHead: '',
		description: '',
		isActive: true,
		minorHead: '',
		subMajorHead: '',
		amountAllocation: '',
		budgetType: "6601",
		majorBudgetHead: "",
	};

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			try {

				await addAmount({
					financialYear: Session,
					objectHeadId: parseInt(formik.values.objectHead),
					budgetType: parseInt(formik.values.budgetType),
					amount: parseInt(formik.values.amountAllocation),
					referenceDocNo: formik.values.referenceDocNo,
					// transactionDate: "2024-09-11",
				});
				formik.setFieldValue("majorBudgetHead", "")
				getAllDetailHeads(false);
				toast.success('Budget Allocation Added Successfully!');
				formik.resetForm();
				setAllHeadAllocated_amount([])
			} catch (error) {
				toast.error(error.response.data.message);
				setEdit('');
			} finally {
				setIsModalOpen(false);   // Ensure the modal closes
				SetLoading(false);        // Always stop loading, even on error
			}
		},
	});


	const headers = [
		{ label: 'Sr.No', key: 'index' },
		{ label: 'BudgetHead', key: 'BudgetHead' },
		{ label: 'Description', key: 'description' },
	];


	const csvData = AllDetailHeadsData.map((student, index) => ({
		index: index + 1,
		BudgetHead: student.BudgetHead,
		description: student.description,
	}));
	let filename = 'Budget Head';
	const startIndex = (currentPage - 1) * perPage + 1;
	const header = ['Sr.No', 'Budget Head', 'description'];
	const newarray = paginatedItems.map((data, index) => [
		index + 1,
		data.BudgetHead,
		data.description,
	]);
	return (
		<>
			<Head>
				<title>Allocate Budget</title>
			</Head>
			<PageWrapper>
				<Page container='fluid'>
					<div className='row justify-content-center'>
						<div className='col-lg-12 col-md-12 col-sm-12 col-12'>
							<Card className='px-0'>
								<CardHeader>
									<div className='row g-4 w-100 mx-0'>
										<div className='col-lg-4 col-md-6 col-sm-12 col-12'>
											<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-start gap-3 mb-2'>
												<h4 className='m-0 fw-bold fs-6 text-nowrap' style={{ minWidth: '120px' }}>Financial Year</h4>
												<FormGroup id='sessionCode' className='w-100' style={{ minHeight: '40px', maxWidth: '220px' }}>
													<Select
														style={{ minHeight: '40px' }}
														id='financialYear'
														name='financialYear'
														ariaLabel='financialYear'
														placeholder='Choose...'
														list={sessionCode && sessionCode
															.map((data) => ({
																value: data.forSession,
																text: data.forSession,
															}))}
														onChange={(e) => {
															formik.handleChange(e);
															setSession(e.target.value)
														}}
														onBlur={(e) => {
															formik.handleBlur(e);
														}}
														value={Session}
														isValid={formik.isValid}
														isTouched={formik.touched.financialYear}
														invalidFeedback={formik.errors.financialYear}
													/>
												</FormGroup>
											</div>
											<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-start gap-3 mb-2'>
												<h4 className='m-0 fw-bold fs-6 text-nowrap' style={{ minWidth: '120px' }}>Major Head</h4>
												<FormGroup id='sessionCode' className='w-100' style={{ minHeight: '40px', maxWidth: '220px' }}>
													<Select
														style={{ minHeight: '40px' }}
														id='majorBudgetHead'
														name='majorBudgetHead'
														ariaLabel='Class'
														placeholder='Choose...'
														onChange={(e) => {
															formik.handleChange(e)
															getAllMajorHeadDetails(e.target.value)
															allocated_amount_forsession(Session, e.target.value)
														}}
														onBlur={formik.handleBlur}
														isValid={formik.isValid}
														list={AllMajorHeadsData && AllMajorHeadsData
															.map((data) => ({
																value: data.majorHead,
																text: data.majorHead,
															}))}
														value={formik.values.majorBudgetHead}
														isTouched={formik.touched.majorBudgetHead}
														invalidFeedback={formik.errors.majorBudgetHead}
													/>
												</FormGroup>
											</div>
											<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-start gap-3 mb-2'>
												<h4 className='m-0 fw-bold fs-6 text-nowrap' style={{ minWidth: '120px' }}>Sub Major Head</h4>
												<FormGroup id='sessionCode' className='w-100' style={{ minHeight: '40px', maxWidth: '220px' }}>
													<Select
														style={{ minHeight: '40px' }}
														name='subMajorHead'
														id='subMajorHead'
														ariaLabel='Class'
														placeholder='Choose...'
														onChange={(e) => {
															formik.handleChange(e)
															getAllSubMajorHeadDetails(e.target.value)
														}}
														onBlur={formik.handleBlur}
														isValid={formik.isValid}
														list={SubMajorDrop.subMajorHeads && SubMajorDrop.subMajorHeads
															.map((data) => ({
																value: data.subMajorHeadId,
																text: data.subMajorHead,
															}))}
														isTouched={formik.touched.subMajorHead}
														invalidFeedback={formik.errors.subMajorHead}
														value={formik.values.subMajorHead}

													/>

												</FormGroup>
											</div>
											<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-start gap-3 mb-2'>
												<h4 className='m-0 fw-bold fs-6 text-nowrap' style={{ minWidth: '120px' }}>Minor Head</h4>
												<FormGroup id='sessionCode' className='w-100' style={{ minHeight: '40px', maxWidth: '220px' }}>
													<Select
														style={{ minHeight: '40px' }}
														name='minorHead'
														id='minorHead'
														ariaLabel='Class'
														placeholder='Choose...'
														onChange={(e) => {
															formik.handleChange(e)
															getAllMinorHeadDetails(e.target.value)
														}}
														onBlur={formik.handleBlur}
														isValid={formik.isValid}
														list={AllSubMajorDrop.minorHeads && AllSubMajorDrop.minorHeads
															.map((data) => ({
																value: data.minorHeadId,
																text: data.minorHead,
															}))}
														isTouched={formik.touched.minorHead}
														invalidFeedback={formik.errors.minorHead}
														value={formik.values.minorHead}


													/>
												</FormGroup>

											</div>
											<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-start gap-3 mb-2'>
												<h4 className='m-0 fw-bold fs-6 text-nowrap' style={{ minWidth: '120px' }}>Sub Minor Head</h4>
												<FormGroup id='sessionCode' className='w-100' style={{ minHeight: '40px', maxWidth: '220px' }}>
													<Select
														style={{ minHeight: '40px' }}
														name='subMinorHead'
														id='subMinorHead'
														ariaLabel='Class'
														placeholder='Choose...'
														onChange={(e) => {
															formik.handleChange(e)
															getAllSubMinorHeadDetails(e.target.value)
															getHeads_allocated_amount(Session, formik.values.budgetType, e.target.value)
														}}
														onBlur={formik.handleBlur}
														isValid={formik.isValid}
														list={AllMinorDrop.subMinorHeads && AllMinorDrop.subMinorHeads
															.map((data) => ({
																value: data.subMinorHeadId,
																text: data.subMinorHead,
															}))}
														value={formik.values.subMinorHead}
														isTouched={formik.touched.subMinorHead}
														invalidFeedback={formik.errors.subMinorHead}
													/>
												</FormGroup>
											</div>
											<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-start gap-3 mb-2'>
												<h4 className='m-0 fw-bold fs-6 text-nowrap' style={{ minWidth: '120px' }}>Detail Head</h4>
												<FormGroup id='sessionCode' className='w-100' style={{ minHeight: '40px', maxWidth: '220px' }}>
													<Select
														style={{ minHeight: '40px' }}
														name='detailHead'
														id='detailHead'
														ariaLabel='Class'
														placeholder='Choose...'
														onChange={(e) => {
															formik.handleChange(e)
															getAllDetailHeadDetails(e.target.value)
														}}
														onBlur={formik.handleBlur}
														isValid={formik.isValid}
														list={AllSubMinorDrop.detailHeads && AllSubMinorDrop.detailHeads
															.map((data) => ({
																value: data.detailHeadId,
																text: data.detailHead,
															}))}
														value={formik.values.detailHead}
														isTouched={formik.touched.detailHead}
														invalidFeedback={formik.errors.detailHead}
													/>
												</FormGroup>
											</div>
											<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-start gap-3 mb-2'>
												<h4 className='m-0 fw-bold fs-6 text-nowrap' style={{ minWidth: '120px' }}>Object Head</h4>
												<FormGroup id='sessionCode' className='w-100' style={{ minHeight: '40px', maxWidth: '220px' }}>
													<Select
														style={{ minHeight: '40px' }}
														name='objectHead'
														id='objectHead'
														ariaLabel='Class'
														placeholder='Choose...'
														onChange={(e) => {
															formik.handleChange(e)
															getAllocated_amount(Session, formik.values.budgetType, e.target.value)
														}}
														onBlur={formik.handleBlur}
														isValid={formik.isValid}
														list={AllDetailHeadDrop.objectHeads && AllDetailHeadDrop.objectHeads
															.map((data) => ({
																value: data.objectHeadId,
																text: data.objectHead,
															}))}
														value={formik.values.objectHead}
														isTouched={formik.touched.objectHead}
														invalidFeedback={formik.errors.objectHead}
													/>
												</FormGroup>
											</div>
											<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-start gap-3 mb-2'>
												<h4 className='m-0 fw-bold fs-6 text-nowrap' style={{ minWidth: '120px' }}>Amount Allocation</h4>
												<FormGroup id='sessionCode' className='w-100' style={{ minHeight: '40px', maxWidth: '220px' }}>
													<Input
														style={{ minHeight: '40px' }}
														id='amountAllocation'
														name='amountAllocation'
														ariaLabel='amountAllocation'
														placeholder='Amount'
														onChange={(e) => {
															const value = e.target.value;
															if (/^\d*\.?\d{0,2}$/.test(value)) {
																formik.setFieldValue('amountAllocation', value);
															}
														}}
														onBlur={formik.handleBlur}
														isValid={formik.isValid}
														value={formik.values.amountAllocation}
														isTouched={formik.touched.amountAllocation}
														invalidFeedback={formik.errors.amountAllocation}
													/>
												</FormGroup>
											</div>
										</div>
										<div className='col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-between'>
											<div>
												<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-start gap-3 mb-2'>
													<h4 className='m-0 fw-bold fs-6 text-nowrap'>Type</h4>
													<FormGroup id='IsActive' isColForLabel>
														<ChecksGroup>
															<div className='d-flex align-items-center gap-3' >
																{BudgetTypeData.map((b) => (
																	<Checks
																		key={b.subCode}
																		type='radio'
																		id={b.subCode.toString()}
																		label={b.subCodeDescription}
																		name='budgetType'
																		value={b.subCode.toString()}
																		onChange={formik.handleChange}
																		checked={formik.values.budgetType}
																	/>
																))}
																{/* ))} */}
															</div>

														</ChecksGroup>
													</FormGroup>
												</div>
												<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-start gap-3 mb-2'>
													<h4 className='m-0 fw-bold fs-6 text-nowrap' style={{ minWidth: '120px' }}>Reference Document No</h4>
													<FormGroup id='sessionCode' className='w-100' style={{ minHeight: '40px', maxWidth: '220px' }}>
														<Input
															style={{ minHeight: '40px' }}
															id='referenceDocNo'
															name='referenceDocNo'
															ariaLabel='referenceDocNo'
															placeholder='Reference Document No'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															isValid={formik.isValid}
															value={formik.values.referenceDocNo}
															isTouched={formik.touched.referenceDocNo}
															invalidFeedback={formik.errors.referenceDocNo}
														/>
													</FormGroup>
												</div>
											</div>

											<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-between gap-3 mb-2'>
												<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-start gap-3 mb-2'>
													<h4 className='m-0 fw-bold fs-6 text-nowrap' style={{ minWidth: '100px' }}>Balance</h4>
													<h4 className='m-0 fw-normal fs-6 text-nowrap'>{AllHeadAllocated_amount[0]?.allocatedAmount}</h4>
												</div>
												<div className='d-flex align-items-center flex-lg-row flex-md-row flex-column justify-content-start gap-3 mb-2'>
													<h4 className='m-0 fw-bold fs-6 text-nowrap' style={{ minWidth: '100px' }}>Expenditure</h4>
													<h4 className='m-0 fw-normal fs-6 text-nowrap'>
														{isNaN(AllHeadAllocated_amount[0]?.allocatedAmount - AllHeadAllocated_amount[0]?.balanceAmount)
															? 0
															: AllHeadAllocated_amount[0]?.allocatedAmount - AllHeadAllocated_amount[0]?.balanceAmount}
													</h4>
												</div>
											</div>
										</div>
										<div className='col-lg-2 col-md-12 col-sm-12 col-12'>
											<Button color='info' className='px-4 py-3 w-100' onClick={formik.handleSubmit}>Save</Button>
											<Button color='danger' isLight className='px-4 py-3 w-100 mt-3' onClick={() => {
												formik.resetForm()
												setAllHeadAllocated_amount([])
												formik.setFieldValue("majorBudgetHead", "")
											}}>Reset</Button>
										</div>

										<div className='col-12 mt-3'>
											<table className='table w-100'>
												<thead className='table table-modern'>
													<th className='border-1 border-dark fs-6 px-3 py-2'>Sub Major (SMJ)</th>
													<th className='border-1 border-dark fs-6 px-3 py-2'>Minor Head (MNH)</th>
													<th className='border-1 border-dark fs-6 px-3 py-2'>Sub Minor(SUB)</th>
													<th className='border-1 border-dark fs-6 px-3 py-2'>Detail Head(DTL)</th>
													<th className='border-1 border-dark fs-6 px-3 py-2'>Object Head(OH)</th>
													<th className='border-1 border-dark fs-6 px-3 py-2'>Head Detail</th>
													<th className='border-1 border-dark fs-6 px-3 py-2'>Allocated Amount</th>
													<th className='border-1 border-dark fs-6 px-3 py-2'>Expenditure</th>
													<th className='border-1 border-dark fs-6 px-3 py-2'>Balance Amount</th>
												</thead>
												<tbody>
													{/* "majorHead": "Major Head Test",
                                                    "subMajorHead": "Sub Major Test",
                                                    "minorHead": "Minor Head Test ",
                                                    "subMinorHead": "Sub Minor Test",
                                                    "detailHead": "Detail Head Test ",
                                                    "objectHead": "Object Test ",
                                                    "objectHeadTitle": "Object Test ",
                                                    "budgetType": 6601,
                                                    "budgetTypeDesc": "Charged",
                                                    "allocatedAmount": 5454545.0,
                                                    "balanceAmount": 5454545.0 */}
													{AllHeadAllocated_amount && AllHeadAllocated_amount.map((data, i) => (
														<tr key={i}>
															<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'>{data.subMajorHead}</td>
															<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'>{data.minorHead}</td>
															<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'>{data.subMinorHead}</td>
															<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'>{data.detailHead}</td>
															<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'>{data.objectHead}</td>
															<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'>{data.objectHeadTitle}</td>
															<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'>{data.allocatedAmount}</td>
															<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'>{data.allocatedAmount - data.balanceAmount}</td>
															<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'>{data.balanceAmount}</td>
														</tr>
													))}

													<tr>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
													</tr>
													<tr>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
													</tr>
													<tr>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
													</tr>
													<tr>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
													</tr>
													<tr>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
														<td style={{ height: '25px' }} className='border-1 border-dark fs-6 px-3 py-2'></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</CardHeader>
								<CardBody>

								</CardBody>
							</Card>
						</div>

					</div>
					{toggleConfrimAttendanceSubmit && (
						<div className='imgmodal traning_modal'>
							<div className='imgmodal-content'>
								<div className='row mt-0 g-3'>
									<div className='col-lg-12 m-0'>
										<div
											className='gallery_tabs modal_image_tab Gallery_images'
											data-aos='fade-up'
											data-aos-offset='180'
											data-aos-delay='0'
											data-aos-duration='1000'>
											<div className='col-12'>
												<Card className='mb-0 bg-l10-info' shadow='sm'>
													<CardBody className='bg-l25-danger rounded align-items-center d-flex flex-column justify-content-center'>
														<p className='h6 card-title text-danger'>
															<CardTitle>
																Are you sure you want to delete?
															</CardTitle>
														</p>

														<div>
															<button
																className='btn btn-success text-white ms-2'
																onClick={() => handleDeleteData()}>
																Yes{' '}
															</button>
															<button
																className='btn btn-info text-white ms-2'
																onClick={() => {
																	setToggleConfrimAttendanceSubmit(
																		false,
																	);
																	setDeleteId('');
																}}>
																No
															</button>
														</div>
													</CardBody>
												</Card>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
					{Loading ? (
						<div className='page_loader'>
							<div className='loader_logo position-relative'>
								<img
									src={LoadingImage}
									className='rotate_loader'
									style={{ width: '150px', height: '150px' }}
								/>
								<div className='loader_icon'>
									<img
										src={LoadingImage2}
										style={{ width: '110px', height: '110px' }}
									/>
								</div>
							</div>
						</div>
					) : (
						''
					)}
				</Page>
			</PageWrapper>
		</>
	);
};

export default AllocateBudget;