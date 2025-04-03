import path from 'path';
import { PerformanceStatus } from './const/mastercodes';
import { Assessment } from './components/icon/material-icons';

export const summaryPageTopMenu = {};
export const pageLayoutTypesPagesMenu = {
	layoutTypes: {
		id: 'layoutTypes',
		text: 'Page Layout Types',
	},
	blank: {
		id: 'blank',
		text: 'Blank',
		path: 'page-layouts/blank',
		icon: 'check_box_outline_blank ',
	},
	pageLayout: {
		id: 'pageLayout',
		text: 'Page Layout',
		path: 'page-layouts',
		icon: 'BackupTable',
		subMenu: {
			headerAndSubheader: {
				id: 'headerAndSubheader',
				text: 'Header & Subheader',
				path: 'page-layouts/header-and-subheader',
				icon: 'ViewAgenda',
			},
			onlyHeader: {
				id: 'onlyHeader',
				text: 'Only Header',
				path: 'page-layouts/only-header',
				icon: 'ViewStream',
			},
			onlySubheader: {
				id: 'onlySubheader',
				text: 'Only Subheader',
				path: 'page-layouts/only-subheader',
				icon: 'ViewStream',
			},
			onlyContent: {
				id: 'onlyContent',
				text: 'Only Content',
				path: 'page-layouts/only-content',
				icon: 'WebAsset',
			},
		},
	},
	asideTypes: {
		id: 'asideTypes',
		text: 'Aside Types',
		path: 'aside-types',
		icon: 'Vertical Split',
		subMenu: {
			defaultAside: {
				id: 'defaultAside',
				text: 'Default Aside',
				path: 'aside-types/default-aside',
				icon: 'ViewQuilt',
			},
			minimizeAside: {
				id: 'minimizeAside',
				text: 'Minimize Aside',
				path: 'aside-types/minimize-aside',
				icon: 'View Compact',
			},
		},
	},
};
export const dashboardPagesMenu = {
	dashboard: {
		id: 'dashboard',
		text: 'Dashboard',
		path: 'admin/dashboard',
		icon: 'Dashboard',
		subMenu: null,
	},

	achievement: {
		id: 'achievement',
		text: 'Achievements',
		path: 'admin/achievements/achievement',
		icon: 'StarHalf',
		subMenu: null,
	},

	Admissions: {
		id: 'admission',
		text: 'Student Admission',
		path: '/',
		icon: 'Badge',
		subMenu: {
			Registration: {
				id: 'registration',
				text: 'Registrations Received',
				path: 'admin/admission/registration',
				icon: 'app_Registration',
				subMenu: null,
			},
			MeritStudents: {
				id: 'meritstudents',
				text: 'Approve Admission',
				path: 'admin/admission/meritstudent',
				icon: 'verified',
				subMenu: null,
			},
			WithdrawApplication: {
				id: 'WithdrawApplication',
				text: 'Withdraw Application',
				path: 'admin/admission/withdrawApplication',
				icon: 'sticky_note_2',
				subMenu: null,
			},
			RegistrationMail: {
				id: 'registrationsMail',
				text: 'Registrations Mail',
				path: 'admin/admission/registrations_mail',
				icon: 'email',
				subMenu: null,
			},
			updateCandidate: {
				id: 'finalResult',
				text: 'Transfer Candidate',
				path: 'admin/admission/updateCandidate',
				icon: 'Article',
			},
			ScrutinyList: {
				id: 'scrutinyList',
				text: 'Scrutiny',
				path: 'admin/admission/scrutiny-list',
				icon: 'StarHalf',
			},
		},
	},

	TalentScouting: {
		id: 'talentscouting',
		text: 'Talent Scouting',
		path: '/',
		icon: 'sports',
		subMenu: {
			StudentAdmission: {
				id: 'studentadmission',
				text: 'Approve Admission',
				path: 'admin/talent-scouting/student-admission',
				icon: 'Badge',
			},
			AddAchievement: {
				id: 'admitCard',
				text: 'Add Achievement',
				path: 'admin/talent-scouting/addAchievement',
				icon: 'cached',
			},
			LevelOne: {
				id: 'levelone',
				text: 'L1',
				path: 'admin/talent-scouting/levelone',
				icon: 'sports_kabaddi',
			},
			LevelTwo: {
				id: 'leveltwo',
				text: 'L2',
				path: 'admin/talent-scouting/leveltwo',
				icon: 'Article',
			},
			SportsTrials: {
				id: 'admitCard',
				text: 'Sports Trials',
				path: 'admin/talent-scouting/sportsTrials',
				icon: 'Badge',
			},
			Weightage: {
				id: 'weightage',
				text: 'Weightage Master',
				path: 'admin/talent-scouting/weightage',
				icon: 'Checklist',
			},
			finalResult: {
				id: 'finalResult',
				text: 'Final Result',
				path: 'admin/talent-scouting/finalResult',
				icon: 'Article',
			},
			candidateAttendence: {
				id: 'candidateAttendence',
				text: 'Candidate Attendence',
				path: 'admin/talent-scouting/candidateAttendence',
				icon: 'tune',
			},
			admitCard: {
				id: 'admitCard',
				text: 'Admit Card',
				path: 'admin/students/admit-card',
				icon: 'Badge',
			},
			venue: {
				id: 'venue',
				text: 'Venue',
				path: 'admin/talent-scouting/venue',
				icon: 'Checklist',
			},
		},
	},
	SportsScience: {
		id: 'SportsScience',
		text: 'Sports Science',
		path: '/',
		icon: 'SportsKabaddi',
		subMenu: {
			sportsScienceMaster: {
				id: 'sportsScienceMaster',
				text: 'Sports Science Master ',
				path: 'admin/sports-science/sportsScienceMaster',
				icon: 'Checklist',
				subMenu: null,
			},
			sportsScience: {
				id: 'sportsScience',
				text: 'Sports Science Result ',
				path: 'admin/sports-science/sportsScience',
				icon: 'RemoveRedEye',
				subMenu: null,
			},
		},
	},
	APAR: {
		id: 'apar',
		text: 'APAR',
		path: '/',
		icon: 'SportsHandball',
		subMenu: {
			APAR: {
				id: 'APAR',
				text: 'APAR ',
				path: 'admin/apar/all-apar-list',
				icon: 'Article',
				subMenu: null,
			},
			aparParameter: {
				id: 'aparParameter',
				text: 'Parameter ',
				path: 'admin/apar/apar-parameter',
				icon: 'Checklist',
				subMenu: null,
			},
			aparRemarks: {
				id: 'aparRemarks',
				text: 'Remark ',
				path: 'admin/apar/apar-remarks',
				icon: 'RemoveRedEye',
				subMenu: null,
			},
			aparAssessment: {
				id: 'aparAssessment',
				text: 'Assessment ',
				path: 'admin/apar/apar-assessment',
				icon: 'RemoveRedEye',
				subMenu: null,
			},
		},
	},
	Students: {
		id: 'Student',
		text: 'Students',
		path: '/',
		icon: 'group',
		subMenu: {
			StudentList: {
				id: 'studentList',
				text: 'Students List',
				path: 'admin/students/student-list',
				icon: 'Checklist',
				subMenu: null,
			},
			Attendance: {
				id: 'Attendance',
				text: 'Add Attendance',
				path: 'admin/students/attendance',
				icon: 'AccessTime',
			},
			viewstudentattendance: {
				id: 'Attendance',
				text: 'View Attendance',
				path: 'admin/students/view-student-attendance',
				icon: 'RemoveRedEye',
			},
			withdrawadmission: {
				id: 'withdrawadmission',
				text: 'Withdraw Admission',
				path: 'admin/students/withdraw-admission',
				icon: 'military_tech',
			},
			promotestudent: {
				id: 'withdraw-admission',
				text: 'Promote Students',
				path: 'admin/students/promote-student',
				icon: 'app_Registration',
			},
			transfercertificate: {
				id: 'transfercertificate',
				text: 'Transfer Certificate',
				path: 'admin/students/issue-slc',
				icon: 'transfer_within_a_station',
				subMenu: null,
			},

			// issueslc: {
			// 	id: 'issue-slc',
			// 	text: 'Issue SLC',
			// 	path: 'admin/issue-slc',
			// 	icon: 'app_Registration',
			// },
		},
	},

	AMS: {
		id: 'AMS',
		text: 'AMS',
		path: '/',
		icon: 'manage_accounts',
		subMenu: {
			ams: {
				id: 'ams',
				text: 'AMS Statistics',
				path: 'admin/ams/ams-dashboard',
				icon: 'Article',
				subMenu: null,
			},
			studentNutritional: {
				id: 'studentNutritional',
				text: 'Student Nutritional',
				path: 'admin/ams/nutritional-assessment',
				icon: 'app_Registration',
				subMenu: null,
			},
			sportscience: {
				id: 'sportscience',
				text: 'Student Physiology',
				path: 'admin/ams/student-physiology',
				icon: 'app_Registration',
				subMenu: null,
			},
			BodyInjury: {
				id: 'BodyInjury',
				text: 'Student Fitness',
				path: 'admin/ams/body',
				icon: 'personal_injury',
				subMenu: null,
			},
		},
	},

	SportScienceDepartment: {
		id: 'sportScienceDepartment',
		text: 'Sports Science Departments',
		path: '/',
		icon: 'post_add',
		subMenu: {
			Department: {
				id: 'department',
				text: 'Department',
				path: 'admin/sportScienceDepartment/department',
				icon: 'Article',
				subMenu: null,
			},
			Category: {
				id: 'Category',
				text: 'Category ',
				path: 'admin/sportScienceDepartment/category',
				icon: 'app_Registration',
				subMenu: null,
			},
			Parameter: {
				id: 'Parameter',
				text: 'Parameter ',
				path: 'admin/sportScienceDepartment/parameter',
				icon: 'app_Registration',
				subMenu: null,
			},
		},
	},

	TrainingAssessment: {
		id: 'TrainingAssessment',
		text: 'Training Assessment',
		path: '/',
		icon: 'analytics',
		subMenu: {
			tournament: {
				id: 'tournament',
				text: 'Tournaments',
				path: 'admin/training-assessment/tournament',
				icon: 'emoji_events',
				subMenu: null,
			},
			trainigAssessmnetDurationUnit: {
				id: 'training-assessment-duration',
				text: 'Unit',
				path: 'admin/training-assessment/training-assessment-duration-unit',
				icon: 'Article',
				subMenu: null,
			},
			trainigAssessmnetDuration: {
				id: 'training-assessment-duration',
				text: 'Training Assessment Duration',
				path: 'admin/training-assessment/training-assessment-duration',
				icon: 'sports',
				subMenu: null,
			},
			categories: {
				id: 'tournament',
				text: 'Category',
				path: 'admin/training-assessment/categories',
				icon: 'personal_injury',
				subMenu: null,
			},
			parameter: {
				id: 'tournament',
				text: 'Parameter',
				path: 'admin/training-assessment/parameters',
				icon: 'ViewDay',
				subMenu: null,
			},
			PerformanceStatus: {
				id: 'tournament',
				text: 'Performance Status',
				path: 'admin/training-assessment/performance-status',
				icon: 'Report',
				subMenu: null,
			},
			ageRange: {
				id: 'tournament',
				text: 'Age Range',
				path: 'admin/training-assessment/age-range',
				icon: 'history_edu',
				subMenu: null,
			},
			weightCategory: {
				id: 'tournament',
				text: 'Weight Category',
				path: 'admin/training-assessment/weight-category',
				icon: 'checklist',
				subMenu: null,
			},
			sportassessment: {
				id: 'sportassessment',
				text: 'Sport Assessment Structure',
				path: 'admin/training-assessment/sport-assessment-structure',
				icon: 'emoji_events',
				subMenu: null,
			},
			// sportParameter: {
			// 	id: 'sportParameter',
			// 	text: 'Sport Parameter',
			// 	path: 'admin/training-assessment/all-sport-parameter',
			// 	icon: 'tune',
			// 	subMenu: null,
			// },
			playerassessment: {
				id: 'add-player-assessment',
				text: 'Player Assessment',
				path: 'admin/training-assessment/add-player-assessment',
				icon: 'sports_kabaddi',
				subMenu: null,
			},
			AssessmentReport: {
				id: 'AssessmentReport',
				text: 'Assessment Report',
				path: 'admin/training-assessment/assessment-report',
				icon: 'sticky_note_2',
				subMenu: null,
			},
			TestAttendence: {
				id: 'AssessmentReport',
				text: 'Test Attendence',
				path: 'admin/training-assessment/test-attendence',
				icon: 'auto_stories',
				subMenu: null,
			},
		},
	},

	Academic: {
		id: 'Academic',
		text: 'Academics',
		path: '/',
		icon: 'school',
		subMenu: {
			classes: {
				id: 'classes',
				text: 'Class',
				path: 'admin/academic/classes',
				icon: 'post_add',
			},
			allSubject: {
				id: 'all-subject',
				text: 'Subjects',
				path: 'admin/academic/all-subject',
				icon: 'history_edu',
			},
			lessonPlanAdmin: {
				id: 'lesson',
				text: 'Lesson Plan',
				path: 'admin/academic/lesson-plan',
				icon: 'auto_stories',
			},
			trainingSchedule: {
				id: 'trainingSchedule',
				text: 'Training Schedule',
				path: 'admin/academic/training-schedule',
				icon: 'ViewDay',
			},
			timetable: {
				id: 'classTimeTable',
				text: 'Time Table',
				path: 'admin/academic/class-time-table',
				icon: 'app_Registration',
			},
			addtTmeTable: {
				id: 'addTimeTable',
				text: 'Add Time Table',
				path: 'admin/academic/add-time-table',
				icon: 'post_add',
			},
			classTeacher: {
				id: 'classTeacher',
				text: 'Class Teacher',
				path: 'admin/academic/class-teacher',
				icon: 'auto_stories',
			},
		},
	},
	Examination: {
		id: 'examination',
		text: 'Examination & Result',
		path: 'admin/examination',
		icon: 'history_edu',
		subMenu: {
			curriculumstructureandassessmentcriteria: {
				id: 'add-student-results',
				text: 'Result',
				path: 'admin/examination/add-student-results',
				icon: 'Dashboard',
				subMenu: null,
			},
			resultcriterion: {
				id: 'result-criterion',
				text: 'Criterion',
				path: 'admin/examination/result-criterion',
				icon: 'StarHalf',
				subMenu: null,
			},
			adminexamschedule: {
				id: 'exam-schedule',
				text: 'Exam Schedule',
				path: 'admin/examination/exam-schedule',
				icon: 'schedule',
			},
			examtype: {
				id: 'exam-type',
				text: 'Exam Type',
				path: 'admin/examination/exam-type',
				icon: 'checklist',
			},
			examType2: {
				id: 'exam-Type-2',
				text: 'Exam ',
				path: 'admin/examination/create-exam-schedule',
				icon: 'speaker_notes',
			},
			developmentGoal: {
				id: 'development-goal',
				text: 'Development Goal',
				path: 'admin/examination/all-development-goal',
				icon: 'auto_stories',
			},
		},
	},
	LMS: {
		id: 'lms',
		text: 'LMS',
		path: 'admin/lms/study-material',
		icon: 'Article',
		subMenu: {
			hostel: {
				id: 'lms',
				text: 'LMS',
				path: 'admin/lms/study-material',
				icon: 'Article',
				subMenu: null,
			},
			addSubject: {
				id: 'subject',
				text: 'Add Subject',
				path: 'admin/lms/add-subject',
				icon: 'auto_stories',
				subMenu: null,
			},
			addChapter: {
				id: 'Chapter',
				text: 'Add Chapter',
				path: 'admin/lms/add-chapter',
				icon: 'local_library',
				subMenu: null,
			},
			mapSubject: {
				id: 'mapSubject',
				text: 'Map Subject To Class',
				path: 'admin/lms/map-subject',
				icon: 'task',
				subMenu: null,
			},
			addTopic: {
				id: 'Topic',
				text: 'Add Topic',
				path: 'admin/lms/add-topic',
				icon: 'topic',
				subMenu: null,
			},
		},
	},
	Human: {
		id: 'Human',
		text: 'Human Resource',
		path: '/',
		icon: 'ManageAccounts',
		subMenu: {
			Employee: {
				id: 'employeeProfile',
				text: 'Employee',
				path: 'admin/human-resource/employee',
				icon: 'account_box',
				subMenu: null,
			},
			// OutsourcedEmployees: {
			// 	id: 'OutsourcedEmployees',
			// 	text: 'Outsourced',
			// 	path: 'admin/human-resource/outsourced-employees',
			// 	icon: 'account_box',
			// 	subMenu: null,
			// },
			employeeMonthlyAttendance: {
				id: 'employeeMonthlyAttendance',
				text: 'Employee Monthly Attendance',
				path: 'admin/human-resource/view-employee-monthly-attendance',
				icon: 'badge',
				subMenu: null,
			},
			employeeAttendance: {
				id: 'employeeAttendance',
				text: 'Employee Attendance',
				path: 'admin/human-resource/view-employee-attendance',
				icon: 'AccessTime',
				subMenu: null,
			},
			addemployeeattendance: {
				id: 'addemployeeAttendance',
				text: 'Add Employee Attendance',
				path: 'admin/human-resource/add-employee-attendance',
				icon: 'PersonAddAlt',
				subMenu: null,
			},
			employeeLeave: {
				id: 'employeeLeave',
				text: 'Employee Leave',
				path: 'admin/human-resource/apply-leave',
				icon: 'ExitToApp',
				subMenu: null,
			},
			miscellaneousEmployee: {
				id: 'miscellaneousEmployee',
				text: 'Miscellaneous Employee',
				path: 'admin/human-resource/miscellaneous-employee',
				icon: 'account_box',
				subMenu: null,
			},
			attendacemiscellaneousemployee: {
				id: 'attendacemiscellaneousemployee',
				text: 'Miscellaneous Employee Attendance',
				path: 'admin/human-resource/attendace-miscellaneous-employee',
				icon: 'PersonAddAlt',
				subMenu: null,
			},
		},
	},
	Finance: {
		id: 'Finance',
		text: 'Finance',
		path: '/',
		icon: 'account_balance',
		subMenu: {
			allexpense: {
				id: 'all-expense',
				text: 'Expense',
				path: 'admin/finance/all-expense',
				icon: 'Dashboard',
				subMenu: null,
			},
			expenseheads: {
				id: 'expense-heads',
				text: 'Expense Heads',
				path: 'admin/finance/expense-heads',
				icon: 'badge',
				subMenu: null,
			},
			income: {
				id: 'income',
				text: 'Income',
				path: 'admin/finance/income',
				icon: 'Dashboard',
				subMenu: null,
			},
			allincomeheads: {
				id: 'income-heads',
				text: 'Income Heads',
				path: 'admin/finance/all-income-heads',
				icon: 'badge',
				subMenu: null,
			},
		},
	},


	Communicate: {
		id: 'Communicate',
		text: 'Communicate',
		path: '/',
		icon: 'mail',
		subMenu: {
			PushNotification: {
				id: 'PushNotification',
				text: 'Push Notification',
				path: 'admin/communicate/push-notification',
				icon: 'notifications_active',
				subMenu: null,
			},

			// smsTemplate: {
			// 	id: 'sendSms',
			// 	text: 'SMS Template',
			// 	path: 'admin/communicate/sms-template',
			// 	icon: 'Dashboard',
			// 	subMenu: null,
			// },
			eTemplate: {
				id: 'sendSms',
				text: 'Email Template',
				path: 'admin/communicate/email-template',
				icon: 'sms',
				subMenu: null,
			},

			Email: {
				id: 'Email',
				text: 'Email',
				path: 'admin/communicate/email-send',
				icon: 'mark_as_unread',
				subMenu: null,
			},
			sendSms: {
				id: 'sendSms',
				text: 'SMS',
				path: 'admin/communicate/sms-send',
				icon: 'Dashboard',
				subMenu: null,
			},
			// compose: {
			// 	id: 'sendSms',
			// 	text: 'compose',
			// 	path: 'admin/communicate/compose',
			// 	icon: 'sms',
			// 	subMenu: null,
			// },
		},
	},

	Mess: {
		id: 'mess',
		text: 'Mess',
		path: 'admin/mess/mess-menu',
		icon: 'local_dining',
		subMenu: {
			hostel: {
				id: 'mess',
				text: 'Mess',
				path: 'admin/mess/mess-menu',
				icon: 'Article',
				subMenu: null,
			},
			Messmenu: {
				id: 'messmeal',
				text: 'Add Meal',
				path: 'admin/mess/Add-meal',
				icon: 'cached',
				subMenu: null,
			},
		},
	},

	Hostel: {
		id: 'hostel',
		text: 'Hostel',
		path: 'admin/all-hostel',
		icon: 'apartment',
		subMenu: {
			assignedhostelRoom: {
				id: 'assignedhostelRoom',
				text: 'Room Allotment',
				path: 'admin/hostel/assigned-hostel-Room',
				icon: 'home',
				subMenu: null,
			},
			hostel: {
				id: 'hostel',
				text: 'Hostel',
				path: 'admin/hostel/all-hostel',
				icon: 'Dashboard',
				subMenu: null,
			},
			hostelrooms: {
				id: 'hostelrooms',
				text: 'Hostel Rooms',
				path: 'admin/hostel/hostel-room',
				icon: 'home',
				subMenu: null,
			},
		},
	},
	Library: {
		id: 'library',
		text: 'Library',
		path: '/',
		icon: 'menu_book',
		subMenu: {
			Book: {
				id: 'Book',
				text: 'Issue Books',
				path: 'admin/library/issue-books',
				icon: 'Book',
			},
			retrunBook: {
				id: 'retrunBook',
				text: 'Return Book',
				path: 'admin/library/retrun-book',
				icon: 'Book',
			},
			books: {
				id: 'library-management',
				text: 'Books',
				path: 'admin/library/books',
				icon: 'auto_stories',
			},
			categorybooks: {
				id: 'categorybooks',
				text: 'Books Category',
				path: 'admin/library/category-books',
				icon: 'Book',
			},
			allbookstransaction: {
				id: 'allbookstransaction',
				text: 'Book Transaction',
				path: 'admin/library/all-books-transaction',
				icon: 'auto_stories',
			},
		},
	},
	Reports: {
		id: 'Reports',
		text: 'Reports',
		path: '/',
		icon: 'description',
		subMenu: {
			ResultReport: {
				id: 'result report',
				text: 'Academic Result Report',
				path: 'admin/reports/result-report',
				icon: 'receipt_long',
				subMenu: null,
			},
			HostelReport: {
				id: 'hostel report',
				text: 'Hostel Report',
				path: 'admin/reports/hostel-report',
				icon: 'apartment',
				subMenu: null,
			},
			TrainingAssessmentReport: {
				id: 'training report',
				text: 'Training Assessment Report',
				path: 'admin/reports/training-assessment-report',
				icon: 'sticky_note_2',
				subMenu: null,
			},
		},
	},
	CMS: {
		id: 'cmsmanagement',
		text: 'Frontend (CMS)',
		path: '/',
		icon: 'groups',
		subMenu: {
			news: {
				id: 'news',
				text: 'News',
				path: 'admin/cms/news',
				icon: 'feed',
			},
			Events: {
				id: 'events',
				text: 'Events',
				path: 'admin/cms/events',
				icon: 'today',
			},
			tenders: {
				id: 'tenders',
				text: 'Tenders',
				path: 'admin/cms/tenders',
				icon: 'gavel',
			},
			contact: {
				id: 'contact',
				text: 'Contact',
				path: 'admin/cms/contact',
				icon: 'perm_contact_calendar',
			},
			circular: {
				id: 'circular',
				text: 'Circular',
				path: 'admin/cms/circular',
				icon: 'cached',
			},
			galleryMaster: {
				id: 'galleryMaster',
				text: 'Gallery Master',
				path: 'admin/cms/galleryMaster',
				icon: 'image',
			},
			// galleryImage: {
			// 	id: 'gallerymage',
			// 	text: 'Gallery Image',
			// 	path: 'admin/cms/galleryImage',
			// 	icon: 'image',
			// },
			pressRelease: {
				id: 'pressRelease',
				text: 'Press Release',
				path: 'admin/cms/press_release',
				icon: 'campaign',
			},
			Studentgrievance: {
				id: 'Studentgrievance',
				text: 'Student Grievance',
				path: 'admin/cms/studentgrievance',
				icon: 'description',
			},
			post: {
				id: 'post',
				text: 'Vacancy Advertisement',
				path: 'admin/cms/posts',
				icon: 'post_add',
			},
			LastestNews: {
				id: 'lastestNews',
				text: 'News Carousal',
				path: 'admin/cms/lastestNews',
				icon: 'StarHalf',
				subMenu: null,
			},
			liveStreaming: {
				id: 'liveStreaming',
				text: 'Live Streaming',
				path: 'admin/cms/liveStreaming',
				icon: 'StarHalf',
				subMenu: null,
			},
			holidays: {
				id: 'holidays',
				text: 'Holidays',
				path: 'admin/cms/holidays',
				icon: 'ViewDay',
			},
		},
	},

	financeManagement: {
		id: 'financeManagement',
		text: 'Budget',
		path: '/',
		icon: 'Article',
		subMenu: {
			BudgetDashboard: {
				id: 'budgetDashboard',
				text: 'Budget Dashboard',
				path: 'admin/budget/budget-dashboard',
				icon: 'Dashboard',
				subMenu: null,
			},
			client: {
				id: 'client',
				text: 'Clients',
				path: 'admin/budget/client',
				icon: 'groups',
				subMenu: null,
			},
			budgetAllocation: {
				id: 'budgetAllocation',
				text: 'Budget Allocation',
				path: 'admin/budget/budget-allocation',
				icon: 'Dashboard',
				subMenu: null,
			},
			allSubVoucher: {
				id: 'allSubVoucher',
				text: 'Sub Voucher',
				path: 'admin/budget/all-subVoucher',
				icon: 'Article',
				subMenu: null,
			},
			allVoucherBill: {
				id: 'allSubVoucher',
				text: 'Contingent Bill',
				path: 'admin/budget/allVoucher-bill',
				icon: 'ViewDay',
			},
			// unassignBill: {
			// 	id: 'unassignBil',
			// 	text: 'Unassign Bill Request',
			// 	path: 'admin/budget/unassignBill',
			// 	icon: 'ViewDay',
			// },
			
		},
	},

	BudgetMaster: {
		id: 'BudgetMaster',
		text: 'Budget Master',
		path: '/',
		icon: 'receipt',
		subMenu: {
			majorbudgethead: {
				id: 'all-expense',
				text: 'Major Head',
				path: 'admin/budget-master/major-budget-head',
				icon: 'Dashboard',
				subMenu: null,
			},
			submajorbudgethead: {
				id: 'all-expense',
				text: 'Major Sub Head',
				path: 'admin/budget-master/sub-major-budget-head',
				icon: 'StarHalf',
				subMenu: null,
			},
			minorbudgethead: {
				id: 'all-expense',
				text: 'Minor Head',
				path: 'admin/budget-master/minor-budget-head',
				icon: 'cached',
				subMenu: null,
			},
			subminorbudgethead: {
				id: 'all-expense',
				text: 'Minor Sub Head',
				path: 'admin/budget-master/sub-minor-budget-head',
				icon: 'ViewDay',
				subMenu: null,
			},
			detailsHead: {
				id: 'detailsHead',
				text: 'Details Head',
				path: 'admin/budget-master/details-head',
				icon: 'ViewDay',
				subMenu: null,
			},
			objectHead: {
				id: 'objectHead',
				text: 'Object Head',
				path: 'admin/budget-master/object-head',
				icon: 'ViewDay',
				subMenu: null,
			},
			expenditure: {
				id: 'expenditure',
				text: 'Expenditure Categories',
				path: 'admin/budget-master/expenditure-categories',
				icon: 'ViewDay',
				subMenu: null,
			},
			billType: {
				id: 'billType',
				text: 'Bill Type',
				path: 'admin/budget-master/bill-type',
				icon: 'ViewDay',
				subMenu: null,
			},
			taxSection: {
				id: 'taxSection',
				text: 'Tax Section',
				path: 'admin/budget-master/tax-section',
				icon: 'ViewDay',
				subMenu: null,
			},
			VoucherType: {
				id: 'VoucherType',
				text: 'Voucher Type',
				path: 'admin/budget-master/voucher-type',
				icon: 'ViewDay',
				subMenu: null,
			},
			SubVoucherType: {
				id: 'SubVoucherType',
				text: 'Sub Voucher Type',
				path: 'admin/budget-master/sub-voucher-bill-type',
				icon: 'ViewDay',
				subMenu: null,
			},
			allImposedTaxes: {
				id: 'allImposedTaxes',
				text: 'Imposed Taxes',
				path: 'admin/budget-master/all-imposed-taxes',
				icon: 'ViewDay',
				subMenu: null,
			},
		},
	},


	


	SalarySetting: {
		id: 'SalarySetting',
		text: 'Salary Setting',
		path: '/',
		icon: 'Settings',
		subMenu: {
			DAConfig: {
				id: 'all-expense',
				text: 'DA Configuration',
				path: 'admin/salary-setting/DA-Config',
				icon: 'Dashboard',
				subMenu: null,
			},
			DDOConfig: {
				id: 'all-expense',
				text: 'DDO Configuration',
				path: 'admin/salary-setting/DDO-Config',
				icon: 'VpnKey',
				subMenu: null,
			},
			HRAConfig: {
				id: 'all-expense',
				text: 'HRA Configuration',
				path: 'admin/salary-setting/HRA-Config',
				icon: 'StarHalf',
				subMenu: null,
			},
			payscaleyear: {
				id: 'payscaleyear',
				text: 'Pay Scale Year',
				path: 'admin/salary-setting/pay-scale-year',
				icon: 'AccountTree',
				subMenu: null,
			},
			payband: {
				id: 'payband',
				text: 'Pay Band',
				path: 'admin/salary-setting/pay-band',
				icon: 'AccountTree',
				subMenu: null,
			},
			
			// paylevel: {
			// 	id: 'paylevel',
			// 	text: 'Pay Level',
			// 	path: 'admin/salary-setting/pay-level',
			// 	icon: 'Article',
			// 	subMenu: null,
			// },
			// paymatrixdata: {
			// 	id: 'paymatrixdata',
			// 	text: 'Pay Matrix Data',
			// 	path: 'admin/salary-setting/pay-matrix-data',
			// 	icon: 'SupervisedUserCircle',
			// 	subMenu: null,
			// },
		},
	},

	Settings: {
		id: 'Settings',
		text: 'Settings',
		path: '/',
		icon: 'Settings',
		subMenu: {
			MasterCode: {
				id: 'mastercode',
				text: 'Master Code',
				path: 'admin/settings/mastercode',
				icon: 'VpnKey',
				subMenu: null,
			},
			Designations: {
				id: 'designations',
				text: 'Designations',
				path: 'admin/settings/designation',
				icon: 'SupervisedUserCircle',
				subMenu: null,
			},
			Branches: {
				id: 'branches',
				text: 'Branches',
				path: 'admin/settings/branch',
				icon: 'AccountTree',
				subMenu: null,
			},
			infrastructure: {
				id: 'infrastructure',
				text: 'Infrastructure',
				path: 'admin/settings/infrastructure',
				icon: 'location_city',
			},
			workShift: {
				id: 'workShift',
				text: 'Work Shift',
				path: 'admin/settings/workShift',
				icon: 'StarHalf',
				subMenu: null,
			},
			exceptionslog: {
				id: 'exceptionslog',
				text: 'Exceptions Log',
				path: 'admin/settings/exceptions-log',
				icon: 'SupervisedUserCircle',
				subMenu: null,
			},
			academicsession: {
				id: 'academicSession',
				text: 'Academic Session',
				path: 'admin/settings/academic-session',
				icon: 'book',
				subMenu: null,
			},
			ageCriteria: {
				id: 'ageCriteria',
				text: 'Age Criteria',
				path: 'admin/settings/age-criteria',
				icon: 'Article',
				subMenu: null,
			},
			onlineclass: {
				id: 'onlineclass',
				text: 'Online Class',
				path: 'admin/settings/online-class',
				icon: 'ViewDay',
				subMenu: null,
			},
			sportsSubcategories: {
				id: 'subcategories',
				text: 'Sports Sub Categories',
				path: 'admin/settings/all-sports-subcategories',
				icon: 'ViewArray',
				subMenu: null,
			},
			sportsWeightRange: {
				id: 'subcategories',
				text: 'Sports Weight Range',
				path: 'admin/settings/sport-weight-range',
				icon: 'ViewDay',
				subMenu: null,
			},
		},
	},
	Salary: {
		id: 'salary',
		text: 'Salary',
		path: 'admin/salary',
		icon: 'history_edu',
		subMenu: {
			CreateSalary: {
				id: 'create-salary',
				text: 'Create Salary',
				path: 'admin/salary/create-salary',
				icon: 'Dashboard',
				subMenu: null,
			},
			
		},
	},
};

export const budgetDashboard={
	dashboard: {
		id: 'dashboard',
		text: 'Dashboard',
		path: 'budget/dashboard',
		icon: 'Dashboard',
		subMenu: null,
	},
	Masters: {
		id: 'masters',
		text: 'Masters',
		path: '/',
		icon: 'Badge',
		subMenu: {
			billType: {
				id: 'billType',
				text: 'Bill Type',
				path: 'budget/masters/bill-type',
				icon: 'ViewDay',
				subMenu: null,
			},
			expenditure: {
				id: 'expenditure',
				text: 'Expenditure Categories',
				path: 'budget/masters/expenditure-categories',
				icon: 'ViewDay',
				subMenu: null,
			},
			Imposed: {
				id: 'Imposed',
				text: 'Imposed Taxes',
				path: 'budget/masters/all-imposed-taxes',
				icon: 'app_Registration',
				subMenu: null,
			},
			SubVoucherType: {
				id: 'SubVoucherType',
				text: 'Sub Voucher Type',
				path: 'budget/masters/sub-voucher-bill-type',
				icon: 'ViewDay',
				subMenu: null,
			},
			taxSection: {
				id: 'taxSection',
				text: 'Tax Section',
				path: 'budget/masters/tax-section',
				icon: 'ViewDay',
				subMenu: null,
			},
			VoucherType: {
				id: 'VoucherType',
				text: 'Voucher Type',
				path: 'budget/masters/voucher-type',
				icon: 'ViewDay',
				subMenu: null,
			},
		},
	},
	budgetHeads: {
		id: 'all-expense',
		text: 'Heads',
		path: '/',
		icon: 'Dashboard',
		subMenu: {
			majorbudgethead: {
				id: 'all-expense',
				text: 'Major Head',
				path: 'budget/masters/major-budget-head',
				icon: 'Dashboard',
				subMenu: null,
			},
			submajorbudgethead: {
				id: 'all-expense',
				text: 'Major Sub Head',
				path: 'budget/masters/sub-major-budget-head',
				icon: 'StarHalf',
				subMenu: null,
			},
			minorbudgethead: {
				id: 'all-expense',
				text: 'Minor Head',
				path: 'budget/masters/minor-budget-head',
				icon: 'cached',
				subMenu: null,
			},
			subminorbudgethead: {
				id: 'all-expense',
				text: 'Minor Sub Head',
				path: 'budget/masters/sub-minor-budget-head',
				icon: 'ViewDay',
				subMenu: null,
			},
			detailsHead: {
				id: 'detailsHead',
				text: 'Details Head',
				path: 'budget/masters/details-head',
				icon: 'ViewDay',
				subMenu: null,
			},
			objectHead: {
				id: 'objectHead',
				text: 'Object Head',
				path: 'budget/masters/object-head',
				icon: 'ViewDay',
				subMenu: null,
			},
			detailedHierarchy: {
				id: 'detailed_hierarchy',
				text: 'Detailed Hierarchy',
				path: 'budget/masters/detailed-hierarchy',
				icon: 'ViewDay',
				subMenu: null,
			},
		},
	},
	financeManagement: {
		id: 'financeManagement',
		text: 'Budget Allocation',
		path: 'budget/budget/budget-allocation-details',
		icon: 'Dashboard',
	},
	budgetClient: {
		id: 'client',
		text: 'Clients',
		path: 'budget/budget/client',
		icon: 'groups',
		subMenu: {
			// Addclient: {
			// 	id: 'client',
			// 	text: 'Add',
			// 	path: 'budget/budget/add-client',
			// 	icon: 'Add',
			// 	subMenu: null,
			// },
			Viewclient: {
				id: 'client',
				text: 'View',
				path: 'budget/budget/client',
				icon: 'RemoveRedEye',
				subMenu: null,
			},
		},
	},
	BudgetEmployee:{
		id: 'BudgetEmployee',
		text: 'Employee',
		path: '/',
		icon: 'groups',
		subMenu: {
			EmployeeListInBudget: {
				id: 'EmployeeListInBudget',
				text: 'Employee List',
				path: 'budget/employee/employee-list',
				icon: 'Checklist',
				subMenu: null,
			},
			EmployeeAttendanceInBudget: {
				id: 'EmployeeAttendanceInBudget',
				text: 'Employee Attendance',
				path: 'budget/employee/employee-attendance',
				icon: 'fingerprint',
				subMenu: null,
			},
	},
},
	allSubVoucher: {
		id: 'allSubVoucher',
		text: 'Sub Voucher',
		path: '/',
		icon: 'Article',
		subMenu: {
			AddSubVoucher: {
				id: 'allSubVoucher',
				text: 'Add',
				path: 'budget/budget/add-subVoucher',
				icon: 'Add',
				subMenu: null,
			},
			ViewAllSubVoucher: {
				id: 'allSubVoucher',
				text: 'View',
				path: 'budget/budget/all-subVoucher',
				icon: 'RemoveRedEye',
				subMenu: null,
			},
		}
	},
	BudegContingentBill: {
		id: 'BudegContingentBill',
		text: 'Contingent Bill',
		path: '/',
		icon: 'ViewDay',
		subMenu: {
			AddContigentBill: {
				id: 'AddContigentBill',
				text: 'Add',
				path: 'budget/budget/add-voucher-bill',
				icon: 'Add',
			},
			ViewContigentBill: {
				id: 'ViewContigentBill',
				text: 'View',
				path: 'budget/budget/allVoucher-bill',
				icon: 'RemoveRedEye',
			},

		}
	},
	BudgetSetting: {
		id: 'BudgetSetting',
		text: 'Settings',
		path: '/',
		icon: 'Article',
		subMenu: {
			DASettings: {
				id: 'budgetAllocation',
				text: 'DA Settings',
				path: 'budget/budget/dashboard',
				icon: 'Dashboard',
				subMenu: null,
			},
			HRSettings: {
				id: 'budgetAllocation',
				text: 'HR Settings',
				path: 'budget/budget/dashboard',
				icon: 'Dashboard',
				subMenu: null,
			},
			DDEOSettings: {
				id: 'budgetAllocation',
				text: 'DDEO Settings',
				path: 'budget/budget/dashboard',
				icon: 'Dashboard',
				subMenu: null,
			},
		},
	},


	

}


export const demoPagesMenu = {
	pages: {
		id: 'pages',
		text: 'Pages',
		icon: 'Extension',
	},
	singlePages: {
		id: 'singlePages',
		text: 'Single Pages',
		path: 'single-pages',
		icon: 'Article',
		subMenu: {
			boxedSingle: {
				id: 'boxedSingle',
				text: 'Boxed',
				path: 'single-pages/boxed',
				icon: 'ViewArray',
			},
			fluidSingle: {
				id: 'fluidSingle',
				text: 'Fluid',
				path: 'single-pages/fluid',
				icon: 'ViewDay',
			},
		},
	},
	listPages: {
		id: 'listPages',
		text: 'List Pages',
		path: 'list-pages',
		icon: 'Dvr',
		subMenu: {
			listBoxed: {
				id: 'listBoxed',
				text: 'Boxed List',
				path: 'list-pages/boxed-list',
				icon: 'ViewArray',
			},
			listFluid: {
				id: 'listFluid',
				text: 'Fluid List',
				path: 'list-pages/fluid-list',
				icon: 'ViewDay',
			},
		},
	},
	gridPages: {
		id: 'gridPages',
		text: 'Grid Pages',
		path: 'grid-pages',
		icon: 'Window',
		subMenu: {
			gridBoxed: {
				id: 'gridBoxed',
				text: 'Boxed Grid',
				path: 'grid-pages/boxed',
				icon: 'ViewArray',
			},
			gridFluid: {
				id: 'gridFluid',
				text: 'Fluid Grid',
				path: 'grid-pages/fluid',
				icon: 'ViewDay',
			},
		},
	},
	editPages: {
		id: 'editPages',
		text: 'Edit Pages',
		path: 'edit-pages',
		icon: 'drive_file_rename_outline ',
		subMenu: {
			editModern: {
				id: 'editModern',
				text: 'Modern Edit',
				path: 'edit-pages/modern',
				icon: 'AutoAwesomeMosaic',
				notification: 'primary',
			},
			editBoxed: {
				id: 'editBoxed',
				text: 'Boxed Edit',
				path: 'edit-pages/boxed',
				icon: 'ViewArray',
			},
			editFluid: {
				id: 'editFluid',
				text: 'Fluid Edit',
				path: 'edit-pages/fluid',
				icon: 'ViewDay',
			},
			editWizard: {
				id: 'editWizard',
				text: 'Wizard Edit',
				path: 'edit-pages/wizard',
				icon: 'LinearScale',
			},
			editInCanvas: {
				id: 'editInCanvas',
				text: 'In Canvas Edit',
				path: 'edit-pages/in-canvas',
				icon: 'VerticalSplit',
			},
			editInModal: {
				id: 'editInModal',
				text: 'In Modal Edit',
				path: 'edit-pages/in-modal',
				icon: 'PictureInPicture',
			},
		},
	},
	pricingTable: {
		id: 'pricingTable',
		text: 'Pricing Table',
		path: 'pricing-table',
		icon: 'Local Offer',
	},

	auth: {
		id: 'auth',
		text: 'Auth Pages',
		icon: 'Extension',
	},
	// Budget Login 
	BudgetAddVoucherBill:{
		path: 'budget/budget/add-voucher-bill',
	},
	billSubVoucher:{
		path: 'budget/budget/bill-subVoucher',
	},
	AddClient: {
		path: 'budget/budget/add-client',
	},
	BudgetEmpProfile :{
		path:'budget/employee/emp-profile'
	},

	// admin login
	registration: {
		path: 'admin/admission/registration',
	},
	ScrutinyForm: {
		path: 'admin/admission/Scrutiny-form',
	},
	ScrutinyList: {
		path: 'admin/admission/scrutiny-list',
	},
	pdfwithqr: {
		path: 'admin/admission/pdf-with-qr',
	},

	registrationsMail: {
		path: 'admin/admission/registrations_mail',
	},
	adminsPage: {
		path: 'admin/dashboard',
	},
	meritstudent: {
		path: 'admin/admission/meritstudent',
	},
	WithdrawApplication: {
		path: 'admin/admission/withdrawApplication',
	},
	candidateDetails: {
		path: 'admin/admission/candidate-details',
	},

	trainingPdf: {
		path: 'admin/academic/training-schedule',
	},
	updatepassword: {
		path: 'admin/update-password',
	},
	viewstudentinjury: {
		path: 'admin/view-student-injury',
	},
	addbodyinjury: {
		path: 'admin/ams/body',
	},
	employeeMonthlyAttendance: {
		path: 'admin/human-resource/view-employee-monthly-attendance',
	},
	employeeAttendance: {
		path: 'admin/human-resource/view-employee-attendance',
	},
	addemployeeattendance: {
		path: 'admin/human-resource/add-employee-attendance',
	},
	employeeprofile: {
		path: 'admin/human-resource/employeeprofile',
	},
	employee: {
		path: 'admin/human-resource/employee',
	},
	applyleave: {
		path: 'admin/human-resource/apply-leave',
	},
	miscellaneousEmployee: {
		path: 'admin/human-resource/miscellaneous-employee',
	},
	attendacemiscellaneousemployee: {
		path: 'admin/human-resource/attendace-miscellaneous-employee',
	},
	addMiscellaneousEmployee: {
		path: 'admin/human-resource/add-miscellaneous-employee',
	},
	OutsourcedEmployees: {
		path: 'admin/human-resource/outsourced-employees',
	},
	trainigAssessmnetDuration: {
		path: 'admin/training-assessment/training-assessment-duration',
	},
	trainigAssessmnetDurationUnit: {
		path: 'admin/training-assessment/training-assessment-duration-unit',
	},
	monitoring: {
		path: 'admin/ams/monitoring',
	},
	intervention: {
		path: 'admin/ams/intervention',
	},

	playerassessmentview: {
		path: 'admin/training-assessment/player-assessment-view',
	},
	tournament: {
		path: 'admin/training-assessment/tournament',
	},
	categories: {
		path: 'admin/training-assessment/categories',
	},
	parameter: {
		path: 'admin/training-assessment/parameters',
	},
	categoryparameter: {
		path: 'admin/training-assessment/category-parameter-mapping',
	},
	StudentList: {
		id: 'studentList',
		text: 'Students List',
		path: 'admin/students/student-list',
		icon: 'badge',
		subMenu: null,
	},

	PushNotification: {
		path: 'admin/communicate/push-notification',
	},
	smsTemplate: {
		path: 'admin/communicate/sms-template',
	},
	eTemplate: {
		path: 'admin/communicate/email-template',
	},
	Email: {
		path: 'admin/communicate/email-send',
	},
	sendSms: {
		path: 'admin/communicate/sms-send',
	},
	promoteStudent: {
		path: 'admin/students/promote-student',
	},

	// sportParameter: {
	// 	path: 'admin/training-assessment/all-sport-parameter',
	// },
	AssessmentReport: {
		path: 'admin/training-assessment/assessment-report',
	},
	TestAttendence: {
		path: 'admin/training-assessment/test-attendence',
	},
	ViewAssessmentReport: {
		path: 'admin/training-assessment/view-assessment-reports',
	},
	playerassessment: {
		path: 'admin/training-assessment/player-assessment',
	},
	addplayerassessment: {
		path: 'admin/training-assessment/add-player-assessment',
	},
	PerformanceStatus: {
		path: 'admin/training-assessment/performance-status',
	},
	ageRange: {
		path: 'admin/training-assessment/age-range',
	},
	weightCategory: {
		path: 'admin/training-assessment/weight-category',
	},
	sportassessment: {
		path: 'admin/training-assessment/sport-assessment-structure',
	},
	education: {
		path: 'admin/education',
	},

	addemployee: {
		path: 'admin/addemployee',
	},
	achievement: {
		path: 'admin/achievements/achievement',
	},
	addachievement: {
		path: 'admin/achievements/addachievement',
	},
	medical: {
		path: 'admin/medical',
	},
	DAConfig: {
		path: 'admin/salary-setting/DA-Config',
	},
	DDOConfig: {
		path: 'admin/salary-setting/DDO-Config'
	},
	HRAConfig: {
		path: 'admin/salary-setting/HRA-Config',
	},
	payscaleyear: {
		path: 'admin/salary-setting/pay-scale-year',
	},
	payband: {
		path: 'admin/salary-setting/pay-band',
	},
	paylevel: {
		path: 'admin/salary-setting/pay-level',
	},
	paymatrixdata: {
		path: 'admin/salary-setting/pay-matrix-data',
	},
	mastercode: {
		path: 'admin/settings/mastercode',
	},
	majorbudgethead: {
		path: 'admin/budget-master/major-budget-head',
	},
	budgetAllocation: {
		path: 'admin/budget/budget-allocation',
	},
	submajorbudgethead: {
		path: 'admin/budget-master/sub-major-budget-head',
	},
	minorbudgethead: {
		path: 'admin/budget-master/minor-budget-head',
	},
	subminorbudgethead: {
		path: 'admin/budget-master/sub-minor-budget-head',
	},
	detailsHead: {
		path: 'admin/budget-master/details-head',
	},
	objectHead: {
		path: 'admin/budget-master/object-head',
	},
	BillPrint: {
		path: 'admin/budget/ContingencyBill-Pdf',
	},

	expenditure: {
		path: 'admin/budget-master/expenditure-categories',
	},
	billType: {
		path: 'admin/budget-master/bill-type',
	},
	taxSection: {
		path: 'admin/budget-master/tax-section',
	},
	VoucherType: {
		path: 'admin/budget-master/voucher-type',
	},
	SubVoucherType: {
		path: 'admin/budget-master/sub-voucher-bill-type',
	},
	addVoucherBill: {
		path: 'admin/budget/add-voucher-bill',
	},
	allVoucherBill: {
		path: 'admin/budget/allVoucher-bill',
	},
	unassignBill: {
		path: 'admin/budget/unassignBill',
	},

	allImposedTaxes: {
		path: 'admin/budget-master/all-imposed-taxes',
	},
	billsubVoucher: {
		path: 'admin/budget/bill-subVoucher',
	},
	BudgetDashboard: {
		path: 'admin/budget/budget-dashboard',
	},
	client: {
		path: 'admin/budget/client',
	},
	allSubVoucher: {
		path: 'admin/budget/all-subVoucher',
	},
	addClient: {
		path: 'admin/budget/add-client',
	},

	designation: {
		path: 'admin/settings/designation',
	},
	branch: {
		path: 'admin/settings/branch',
	},
	infrastructure: {
		path: 'admin/settings/infrastructure',
	},
	exceptionslog: {
		path: 'admin/settings/exceptions-log',
	},
	academicsession: {
		path: 'admin/settings/academic-session',
	},
	ageCriteria: {
		path: 'admin/settings/age-criteria',
	},
	onlineclass: {
		path: 'admin/settings/online-class',
	},
	sportsSubcategories: {
		path: 'admin/settings/all-sports-subcategories',
	},
	sportsWeightRange: {
		path: 'admin/settings/sport-weight-range',
	},
	workShift: {
		path: 'admin/settings/workShift',
	},
	news: {
		path: 'admin/cms/news',
	},
	holidays: {
		path: 'admin/cms/holidays',
	},
	events: {
		path: 'admin/cms/events',
	},
	tenders: {
		path: 'admin/cms/tenders',
	},
	galleryMaster: {
		path: 'admin/cms/galleryMaster',
	},
	galleryImage: {
		path: 'admin/cms/galleryImage',
	},
	contact: {
		path: 'admin/cms/contact',
	},
	circular: {
		path: 'admin/cms/circular',
	},
	press_release: {
		path: 'admin/cms/press_release',
	},
	posts: {
		path: 'admin/cms/posts',
	},
	studentgrievance: {
		path: 'admin/cms/studentgrievance',
	},
	LastestNews: {
		path: 'admin/cms/lastestNews',
	},
	liveStreaming: {
		path: 'admin/cms/liveStreaming',
	},
	createSalary: {
		path: 'admin/salary/create-salary',
	},

	withdrawadmission: {
		path: 'admin/students/withdraw-admission',
	},
	issueslc: {
		path: 'admin/admission/issue-slc',
	},

	studentDashboard: {
		path: 'student/profile',
	},
	lmsStudent: {
		path: 'student/lms/study-material',
	},
	lmsStudentTopic: {
		path: 'student/lms/lms-topic',
	},
	AcademicTimetable: {
		path: 'student/academic-time-table',
	},
	Attendance: {
		path: 'student/attendance',
	},
	studentLms: {
		path: 'student/study-meterial',
	},
	studentNutritionalDetails: {
		path: 'student/nutritional',
	},
	studentMedicalDetails: {
		path: 'student/medical',
	},
	studentIntervention: {
		path: 'student/intervention',
	},
	studentMonitoring: {
		path: 'student/monitoring',
	},
	// TrainingSchedule: {
	// 	path: 'student/Training-schedule',
	// },
	assessmentReport: {
		path: 'student/view-assessment-report',
	},
	PlayerAssessment: {
		path: 'coach/player-assessment',
	},
	AddPlayerAssessment: {
		path: 'coach/add-player-assessment',
	},
	coachapar: {
		path: 'coach/apar-option',
	},
	coachFederation: {
		path: 'coach/Federation',
	},
	coachAddapar: {
		path: 'coach/apar',
	},
	coachAllapar: {
		path: 'coach/view-all-apar',
	},
	coachFinalApar: {
		path: 'coach/final-apar',
	},
	coachReportapar: {
		path: 'coach/all-apar-reports',
	},
	coachReport: {
		path: 'coach/reporting',
	},
	coachReview: {
		path: 'coach/review',
	},
	PlayerAssessmentView: {
		path: 'coach/player-assessment-view',
	},
	// dietChart: {
	// 	path: 'student/diet-chart',
	// },
	studentupdatepassword: {
		path: 'student/update-password',
	},
	reportCard: {
		path: 'student/report-card',
	},
	// lessonplan: {
	// 	path: 'student/lesson-plan',
	// },
	examresult: {
		path: 'student/exam-result',
	},
	viewstudentattendance: {
		path: 'admin/students/view-student-attendance',
	},
	profile: {
		path: 'admin/students/profile',
	},
	body: {
		path: 'admin/ams/body',
	},
	sportscience: {
		path: 'admin/ams/student-physiology',
	},
	studentphysiology: {
		path: 'admin/ams/studentphysiology',
	},
	nutritionalAssessment: {
		path: 'admin/ams/nutritional-assessment',
	},
	studentNutritional: {
		path: 'admin/ams/studentNutritional',
	},
	// attendance: {
	// 	path: 'admin/students/attendance'
	// },
	academicattendance: {
		path: 'admin/academic-attendance',
	},
	trainingattendance: {
		path: 'admin/training-attendance',
	},
	assessment: {
		path: 'student/assessment',
	},
	AttendancePage: {
		path: 'admin/students/attendance',
	},
	//library book mapping
	libraryBooks: {
		path: 'admin/library-books',
	},
	categorybooks: {
		path: 'admin/library/category-books',
	},
	employeeProfile: {
		path: 'teacher/profile',
	},
	TeacherBill: {
		path: 'teacher/Bill',
	},

	teacherLms: {
		path: 'teacher/study-meterial',
	},
	teacherExamSchedule: {
		path: 'teacher/exam-schedule',
	},
	addacademictimetable: {
		path: 'teacher/academic-time-table',
	},
	onlineClass: {
		path: 'teacher/online-class',
	},
	BillRequest: {
		path: 'teacher/unassignRequest',
	},

	certificateOfEligibity: {
		path: 'coach/certificate-of-eligibility',
	},
	employeeProfileAttendance: {
		path: 'teacher/attendance',
	},
	physioMonitoring: {
		path: 'physiotherapist/monitoring',
	},
	physioIntervention: {
		path: 'physiotherapist/intervention',
	},
	lessonPlanteacher: {
		path: 'teacher/lesson-plan',
	},
	employeeapplyLeave: {
		path: 'teacher/apply-leave',
	},

	coachProfile: {
		path: 'coach/profile',
	},
	coachTrainingSch: {
		path: 'coach/training-schedule',
	},
	coachProfileAttendance: {
		path: 'coach/attendance',
	},
	physioProfile: {
		path: 'physiotherapist/profile',
	},
	physioDashboard: {
		path: 'physiotherapist/dashboard',
	},
	physioInjury: {
		path: 'physiotherapist/student-injury',
	},
	home: {
		path: 'onsite-registration/home',
	},
	// approveAdmission: {
	// 	path: 'onsite-registration/approve-admission',
	// },

	lreport: {
		path: 'onsite-registration/l1',
	},
	lTworeport: {
		path: 'onsite-registration/l2',
	},
	// registrationform: {
	// 	path: 'onsite-registration/registrationform',
	// },
	levelone: {
		path: 'onsite-registration/levelone',
	},
	leveltwo: {
		path: 'onsite-registration/leveltwo',
	},
	assessmentTA: {
		path: 'onsite-registration/assessment',
	},
	assessmentViewTA: {
		path: 'onsite-registration/player-assessment-view',
	},
	assessmentAddTA: {
		path: 'onsite-registration/player-assessment',
	},
	finalResult: {
		path: 'admin/talent-scouting/finalResult',
	},
	StudentAdmission: {
		path: 'admin/talent-scouting/student-admission',
	},
	venue: {
		path: 'admin/talent-scouting/venue',
	},

	sportsTrials: {
		path: 'admin/talent-scouting/sportsTrials',
	},
	Weightage: {
		path: 'admin/talent-scouting/weightage',
	},
	AddAchievement: {
		path: 'admin/talent-scouting/addAchievement',
	},

	candidateAttendence: {
		path: 'admin/talent-scouting/candidateAttendence',
	},
	updateCandidate: {
		path: 'admin/admission/updateCandidate',
	},
	scrutiny: {
		path: 'admin/admission/scrutiny',
	},
	admitCard: {
		path: 'admin/students/admit-card',
	},
	coachLeave: {
		path: 'coach/apply-leave',
	},
	BodyInjury: {
		path: 'physiotherapist/add-student-injury',
	},
	injury: {
		path: 'physiotherapist/injury',
	},
	physilogyassessment: {
		path: 'physiotherapist/physilogy-assessment',
	},
	nutritionalassessment: {
		path: 'physiotherapist/nutritional-assessment',
	},
	nutritionalMess: {
		path: 'physiotherapist/mess/mess-menu',
	},
	ApplyPhsioLeave: {
		path: 'physiotherapist/applyLeave',
	},
	nutritionalAddMenu: {
		path: 'physiotherapist/mess/add-meal',
	},
	physioleave: {
		path: 'physiotherapist/apply-leave',
	},
	physioaddBodyInjury: {
		path: 'physiotherapist/injury',
	},

	Physiostudentphysiology: {
		path: 'physiotherapist/student-physiology',
	},
	physiostudentNutritional: {
		path: 'physiotherapist/studentNutritional',
	},
	physiotherapistmedical: {
		path: 'physiotherapist/medical',
	},
	physiotherapistphysiology: {
		path: 'physiotherapist/view-student-physiology',
	},
	viewstudentNutritional: {
		path: 'admin/ams/view-student-Nutritionl',
	},
	viewstudentphysiology: {
		path: 'admin/ams/view-student-physiology',
	},

	hostel: {
		path: 'admin/hostel/all-hostel',
	},
	//for master code
	mastercodes: {
		path: 'admin/mastercodes',
	},
	lessonPlanadmin: {
		path: 'admin/academic/lesson-plan',
	},
	hostelrooms: {
		path: 'admin/hostel/hostel-room',
	},
	allexpense: {
		path: 'admin/finance/all-expense',
	},
	expenseheads: {
		path: 'admin/finance/expense-heads',
	},
	income: {
		path: 'admin/finance/income',
	},
	allincomeheads: {
		path: 'admin/finance/all-income-heads',
	},

	allsubject: {
		path: 'admin/academic/all-subject',
	},
	subjectparameter: {
		path: 'admin/subject-parameter',
	},
	studentExamSchedule: {
		path: 'student/exam-schedule',
	},
	amsStatics: {
		path: 'admin/ams/ams-dashboard',
	},
	studentregistrationdetails: {
		path: 'admin/student-registration-details',
	},
	curriculumstructureandassessmentcriteria: {
		path: 'admin/examination/curriculum-structure-and-assessment-criteria',
	},
	addstudentresults: {
		path: 'admin/examination/add-student-results',
	},
	resultcriterion: {
		path: 'admin/examination/result-criterion',
	},
	bulkresultdownload: {
		path: 'admin/examination/bulk-result-download',
	},
	tacherbulkresultdownload: {
		path: 'teacher/bulk-result-download',
	},
	adminExamSchedule: {
		path: 'admin/examination/exam-schedule',
	},
	examtype: {
		path: 'admin/examination/exam-type',
	},
	examType2: {
		path: 'admin/examination/create-exam-schedule',
	},
	examination: {
		path: 'teacher/examination',
	},
	apar: {
		path: 'teacher/apar-option',
	},
	aparSelgAPAR: {
		path: 'teacher/apar',
	},
	viewALLaparList: {
		path: 'teacher/view-all-apar',
	},
	viewApar: {
		path: 'teacher/final-apar',
	},
	aparReport: {
		path: 'teacher/reporting',
	},
	allAparReports: {
		path: 'teacher/all-apar-reports',
	},
	AparReview: {
		path: 'teacher/review',
	},

	addexaminationresult: {
		path: 'teacher/add-examination-result',
	},
	developmentGoal: {
		path: 'admin/examination/all-development-goal',
	},
	withdrawApplication: {
		path: 'admin/admission/withdrawApplication',
	},
	achievementapprovereject: {
		path: 'admin/achievements/achievement-approve-reject',
	},

	LevelOne: {
		path: 'admin/talent-scouting/levelone',
	},
	LevelTwo: {
		path: 'admin/talent-scouting/leveltwo',
	},

	sportsScienceMaster: {
		path: 'admin/sports-science/sportsScienceMaster',
	},
	sportsScience: {
		path: 'admin/sports-science/sportsScience',
	},

	books: {
		path: 'admin/library/books',
	},
	assignedhostelRoom: {
		path: 'admin/hostel/assigned-hostel-Room',
	},
	timetable: {
		path: 'admin/academic/class-time-table',
	},
	classteacher: {
		path: 'admin/academic/class-teacher',
	},
	Department: {
		path: 'admin/sportScienceDepartment/department',
	},
	Category: {
		path: 'admin/sportScienceDepartment/category',
	},
	Parameter: {
		path: 'admin/sportScienceDepartment/parameter',
	},
	classes: {
		path: 'admin/academic/classes',
	},

	addtimetable: {
		path: 'admin/academic/add-time-table',
	},
	MessAdmin: {
		path: 'admin/mess/mess-menu',
	},
	meal: {
		path: 'admin/mess/Add-meal',
	},
	issuebooks: {
		path: 'admin/library/issue-books',
	},

	transfercertificate: {
		path: 'admin/students/issue-slc',
	},
	promotestudent: {
		path: 'admin/students/promote-student',
	},

	allbookstransaction: {
		path: 'admin/library/all-books-transaction',
	},
	selectbook: {
		path: 'admin/library/select-book',
	},
	retrunBook: {
		path: 'admin/library/retrun-book',
	},
	allRetrunBook: {
		path: 'admin/library/all-return-book',
	},
	lms: {
		path: 'admin/lms/study-material',
	},
	addSubject: {
		path: 'admin/lms/add-subject',
	},
	addChapter: {
		path: 'admin/lms/add-chapter',
	},
	mapSubject: {
		path: 'admin/lms/map-subject',
	},
	addTopic: {
		path: 'admin/lms/add-topic',
	},
	topicDetails: {
		path: 'admin/lms/topic-details',
	},
	lmsTopic: {
		path: 'admin/lms/lms-topic',
	},
	ResultReport: {
		path: 'admin/reports/result-report',
	},
	HostelReport: {
		path: 'admin/reports/hostel-report',
	},
	TrainingAssessmentReport: {
		path: 'admin/reports/training-assessment-report',
	},
	aparParameter: {
		path: 'admin/apar/apar-parameter',
	},
	aparRemarks: {
		path: 'admin/apar/apar-remarks',
	},
	aparAssessment: {
		path: 'admin/apar/apar-assessment',
	},
	aparList: {
		path: 'admin/apar/all-apar-list',
	},
	aparView: {
		path: 'admin/apar/apar-view',
	},
	aparPrint: {
		path: 'teacher/print-apar',
	},
	aparPrintCoach: {
		path: 'coach/print-apar',
	},

	login: {
		id: 'login',
		text: 'Login',
		path: 'auth-pages/login',
		icon: 'Login',
	},
	signUp: {
		id: 'signUp',
		text: 'Sign Up',
		path: 'auth-pages/sign-up',
		icon: 'PersonAdd',
	},

	page404: {
		id: 'Page404',
		text: '404 Page',
		path: '404',
		icon: 'ReportGmailerrorred',
	},

	app: {
		id: 'app',
		text: 'Apps',
		icon: 'Extension',
	},
	projectManagement: {
		id: 'projectManagement',
		text: 'Project Management',
		path: 'project-management',
		icon: 'AutoStories',
		subMenu: {
			list: {
				id: 'list',
				text: 'Projects',
				path: 'project-management/list',
				icon: 'AutoStories',
			},
			itemID: {
				id: 'projectID',
				text: 'projectID',
				path: 'project-management/project',
				hide: true,
			},
			item: {
				id: 'item',
				text: 'Project',
				path: 'project-management/project/1', // TODO
				icon: 'Book',
			},
		},
	},

	knowledge: {
		id: 'knowledge',
		text: 'Knowledge',
		path: 'knowledge',
		icon: 'AutoStories',
		subMenu: {
			grid: {
				id: 'grid',
				text: 'Knowledge Grid',
				path: 'knowledge/grid',
				icon: 'AutoStories',
			},
			itemID: {
				id: 'itemID',
				text: 'itemID',
				path: 'knowledge/item',
				hide: true,
			},
			item: {
				id: 'item',
				text: 'Item',
				path: 'knowledge/item/[id]',
				as: 'knowledge/item/1',
				icon: 'Book',
			},
		},
	},
	sales: {
		id: 'sales',
		text: 'Sales',
		path: 'sales',
		icon: 'Store',
		subMenu: {
			dashboard: dashboardPagesMenu.dashboard,
			salesList: {
				id: 'products',
				text: 'Sales List',
				path: 'sales/sales-list',
				icon: 'FactCheck',
			},
			productsGrid: {
				id: 'productsGrid',
				text: 'Products Grid',
				path: 'sales/grid',
				icon: 'CalendarViewMonth',
			},
			productID: {
				id: 'productID',
				text: 'productID',
				path: 'sales/product',
				hide: true,
			},
			product: {
				id: 'product',
				text: 'Product',
				path: 'sales/product/[id]',
				as: 'sales/product/1',
				icon: 'QrCode2',
			},
			transactions: {
				id: 'transactions',
				text: 'Transactions',
				path: 'sales/transactions',
				icon: 'PublishedWithChanges',
			},
		},
	},
	appointment: {
		id: 'appointment',
		text: 'Appointment',
		path: 'appointment',
		icon: 'Today',
		subMenu: {
			dashboard: dashboardPagesMenu.dashboard,
			calendar: {
				id: 'calendar',
				text: 'Calendar',
				path: 'appointment/calendar',
				icon: 'EditCalendar',
				notification: true,
			},
			employeeList: {
				id: 'employeeList',
				text: 'Employee List',
				path: 'appointment/employee-list',
				icon: 'PersonSearch',
			},
			employeeID: {
				id: 'employeeID',
				text: 'employeeID',
				path: 'appointment/employee',
				hide: true,
			},
			employee: {
				id: 'employegge',
				text: 'Employee',
				path: 'appointment/employee/[id]',
				as: 'appointment/employee/1',
				icon: 'QrCode2',
			},
			appointmentList: {
				id: 'appointmentList',
				text: 'Appointment List',
				path: 'appointment/appointment-list',
				icon: 'Event',
			},
		},
	},
	crm: {
		id: 'crm',
		text: 'CRM',
		path: 'crm',
		icon: 'Contacts',
		subMenu: {
			dashboard: {
				id: 'dashboard',
				text: 'CRM Dashboard',
				path: 'crm/dashboard',
				icon: 'RecentActors',
			},
			customersList: {
				id: 'customersList',
				text: 'Customers',
				path: 'crm/customers',
				icon: 'PersonSearch',
			},
			customerID: {
				id: 'customerID',
				text: 'customerID',
				path: 'crm/customer',
				hide: true,
			},
			customer: {
				id: 'customer',
				text: 'Customer',
				path: 'crm/customer/[id]',
				as: 'crm/customer/1',
				icon: 'Badge',
			},
		},
	},
	chat: {
		id: 'chat',
		text: 'Chat',
		path: 'chat',
		icon: 'Forum',
		subMenu: {
			withListChat: {
				id: 'withListChat',
				text: 'With List',
				path: 'chat/with-list',
				icon: 'Quickreply',
			},
			onlyListChat: {
				id: 'onlyListChat',
				text: 'Only List',
				path: 'chat/only-list',
				icon: 'Dns',
			},
		},
	},
};

export const componentPagesMenu = {
	bootstrap: {
		id: 'bootstrap',
		text: 'Bootstrap',
		icon: 'Extension',
	},
	content: {
		id: 'content',
		text: 'Content',
		path: 'content',
		icon: 'format_size',
		subMenu: {
			typography: {
				id: 'typography',
				text: 'Typography',
				path: 'content/typography',
				icon: 'text_fields',
			},
			images: {
				id: 'images',
				text: 'Images',
				path: 'content/images',
				icon: 'Image ',
			},
			tables: {
				id: 'tables',
				text: 'Tables',
				path: 'content/tables',
				icon: 'table_chart',
			},
			figures: {
				id: 'figures',
				text: 'Figures',
				path: 'content/figures',
				icon: 'Photo Library ',
			},
		},
	},
	forms: {
		id: 'forms',
		text: 'Forms',
		path: 'forms',
		icon: 'CheckBox',
		notification: 'success',
		subMenu: {
			formGroup: {
				id: 'formGroup',
				text: 'Form Group',
				path: 'forms/form-group',
				icon: 'Source',
			},
			formControl: {
				id: 'formControl',
				text: 'Form Controls',
				path: 'forms/form-controls',
				icon: 'Create',
			},
			select: {
				id: 'select',
				text: 'Select',
				path: 'forms/select',
				icon: 'Checklist',
			},
			checksAndRadio: {
				id: 'checksAndRadio',
				text: 'Checks & Radio',
				path: 'forms/checks-and-radio',
				icon: 'CheckBox',
			},
			range: {
				id: 'range',
				text: 'Range',
				path: 'forms/range',
				icon: 'HdrStrong',
			},
			inputGroup: {
				id: 'inputGroup',
				text: 'Input Group',
				path: 'forms/input-group',
				icon: 'PowerInput',
			},
			validation: {
				id: 'validation',
				text: 'Validation',
				path: 'forms/validation',
				icon: 'VerifiedUser',
			},
			wizard: {
				id: 'wizard',
				text: 'Wizard',
				path: 'forms/wizard',
				icon: 'LinearScale',
			},
		},
	},
	components: {
		id: 'components',
		text: 'Component',
		path: 'components',
		icon: 'Extension',
		notification: 'success',
		subMenu: {
			accordion: {
				id: 'accordion',
				text: 'Accordion',
				path: 'components/accordion',
				icon: 'ViewDay',
			},
			alert: {
				id: 'alert',
				text: 'Alert',
				path: 'components/alert',
				icon: 'Announcement',
			},
			badge: {
				id: 'badge',
				text: 'Badge',
				path: 'components/badge',
				icon: 'Vibration',
			},
			breadcrumb: {
				id: 'breadcrumb',
				text: 'Breadcrumb',
				path: 'components/breadcrumb',
				icon: 'AddRoad',
			},
			button: {
				id: 'button',
				text: 'Button',
				path: 'components/button',
				icon: 'SmartButton',
			},
			buttonGroup: {
				id: 'buttonGroup',
				text: 'Button Group',
				path: 'components/button-group',
				icon: 'Splitscreen',
			},
			card: {
				id: 'card',
				text: 'Card',
				path: 'components/card',
				icon: 'Crop32',
			},
			carousel: {
				id: 'carousel',
				text: 'Carousel',
				path: 'components/carousel',
				icon: 'RecentActors',
			},
			// Close
			collapse: {
				id: 'collapse',
				text: 'Collapse',
				path: 'components/collapse',
				icon: 'UnfoldLess',
			},
			dropdowns: {
				id: 'dropdowns',
				text: 'Dropdowns',
				path: 'components/dropdowns',
				icon: 'Inventory',
			},
			listGroup: {
				id: 'listGroup',
				text: 'List Group',
				path: 'components/list-group',
				icon: 'ListAlt',
			},
			modal: {
				id: 'modal',
				text: 'Modal',
				path: 'components/modal',
				icon: 'PictureInPicture',
			},
			navsTabs: {
				id: 'navsTabs',
				text: 'Navs & Tabs',
				path: 'components/navs-and-tabs',
				icon: 'PivotTableChart',
			},
			// Navbar
			offcanvas: {
				id: 'offcanvas',
				text: 'Offcanvas',
				path: 'components/offcanvas',
				icon: 'VerticalSplit',
			},
			pagination: {
				id: 'pagination',
				text: 'Pagination',
				path: 'components/pagination',
				icon: 'Money',
			},
			popovers: {
				id: 'popovers',
				text: 'Popovers',
				path: 'components/popovers',
				icon: 'Assistant',
			},
			progress: {
				id: 'progress',
				text: 'Progress',
				path: 'components/progress',
				icon: 'HourglassTop',
			},
			scrollspy: {
				id: 'scrollspy',
				text: 'Scrollspy',
				path: 'components/scrollspy',
				icon: 'KeyboardHide',
			},
			spinners: {
				id: 'spinners',
				text: 'Spinners',
				path: 'components/spinners',
				icon: 'RotateRight',
			},
			table: {
				id: 'table',
				text: 'Table',
				path: 'components/table',
				icon: 'TableChart',
			},
			toasts: {
				id: 'toasts',
				text: 'Toasts',
				path: 'components/toasts',
				icon: 'RotateRight',
			},
			tooltip: {
				id: 'tooltip',
				text: 'Tooltip',
				path: 'components/tooltip',
				icon: 'Assistant',
			},
		},
	},
	profileHeader: {
		id: 'components',
		text: 'Component',
		path: 'components',
		icon: 'Extension',
		notification: 'success',
		subMenu: {
			AcademicTimetable: {
				id: 'AcademicTimetable',
				text: 'Academic Time Table',
				path: 'student/academic-time-table',
				icon: 'pending_actions',
			},
			// TrainingSchedule: {
			// 	id: 'TrainingSchedule',
			// 	text: 'Training Schedule',
			// 	path: 'student/Training-schedule',
			// 	icon: 'today',
			// },
			Attendance: {
				id: 'Attendance',
				text: 'Attendance',
				path: 'student/attendance',
				icon: 'SupervisedUserCircle',
			},
			// dietChart: {
			// 	id: 'dietChart',
			// 	text: 'Diet Chart',
			// 	path: 'student/diet-chart',
			// 	icon: 'receipt_long',
			// },
			assessment: {
				id: 'assessment',
				text: 'Training Assessment',
				path: 'student/assessment',
				icon: 'assignment',
			},

			lmsStudent: {
				id: 'lms',
				text: 'LMS',
				path: 'student/lms/study-material',
				icon: 'library_books',
			},
			// lessonplan: {
			// 	id: 'lessonplan',
			// 	text: 'Lesson-Plan',
			// 	path: 'student/lesson-plan',
			// 	icon: 'menu_book',
			// },
			studentExamSchedule: {
				id: 'studentExamSchedule',
				text: 'Exam Schedule',
				path: 'student/exam-schedule',
				icon: 'local_library',
			},
			examresult: {
				id: 'exam-result',
				text: 'Result',
				path: 'student/exam-result',
				icon: 'description',
			},
			studentstudymeterial: {
				id: 'studymeterial',
				text: 'Study Meterial',
				path: 'student/study-meterial',
				icon: 'Extension',
			},
			assessmentReport: {
				id: 'addacademictimetable',
				text: 'Assessment Report',
				path: 'student/view-assessment-report',
				icon: 'Extension',
			},
		},
	},

	employeeHeader: {
		id: 'components',
		text: 'Component',
		path: 'components',
		icon: 'Extension',
		notification: 'success',
		subMenu: {
			Attendance: {
				id: 'attendance',
				text: 'Student Attendance',
				path: 'teacher/attendance',
				icon: 'pending_actions',
			},
			Leave: {
				id: 'leave',
				text: 'Leave',
				path: 'teacher/apply-leave',
				icon: 'Extension',
			},
			addacademictimetable: {
				id: 'addacademictimetable',
				text: 'Lesson Plan',
				path: 'teacher/lesson-plan',
				icon: 'receipt_long',
			},
			teacherexam: {
				id: 'teacherexam',
				text: 'Exam Schedule',
				path: 'teacher/exam-schedule',
				icon: 'today',
			},
			examination: {
				id: 'examination',
				text: 'Result',
				path: 'teacher/examination',
				icon: 'Extension',
			},
			apar: {
				id: 'examination',
				text: 'APAR',
				path: 'teacher/apar-option',
				icon: 'description',
			},
			onlineClass: {
				id: 'onlineClass',
				text: 'Online Classes',
				path: 'teacher/online-class',
				icon: 'pending_actions',
			},
			BillRequest: {
				id: 'unassignRequest',
				text: 'Unassing Bill Request',
				path: 'teacher/unassignRequest',
				icon: 'pending_actions',
			},
		},
	},

	coachHeader: {
		id: 'components',
		text: 'Component',
		path: 'components',
		icon: 'Extension',
		notification: 'success',
		subMenu: {
			Attendance: {
				id: 'attendance',
				text: 'Student Attendance',
				path: 'coach/attendance',
				icon: 'pending_actions',
			},
			leave: {
				id: 'leave',
				text: 'Leave',
				path: 'coach/apply-leave',
				icon: 'today',
			},
			Trainingschedule: {
				id: 'Trainingschedule',
				text: 'Training Schedule',
				path: 'coach/training-schedule',
				icon: 'Extension',
			},
			AddPlayerAssessment: {
				id: 'AddPlayerAssessment',
				text: 'Player Assessment',
				path: 'coach/add-player-assessment',
				icon: 'sports_kabaddi',
			},
			CoachApar: {
				id: 'CoachApar',
				text: 'APAR',
				path: 'coach/apar-option',
				icon: 'Extension',
			},
			certificateOfEligibity: {
				id: 'Certificate',
				text: 'Certificate of Eligibility',
				path: 'coach/certificate-of-eligibility',
				icon: 'ExitToApp',
			},
			CoachFederation: {
				id: 'CoachFederation',
				text: 'Federation',
				path: 'coach/federation',
				icon: 'dashboard',
			},
		},
	},

	physioHeader: {
		id: 'physio',
		text: 'Component',
		path: 'components',
		icon: 'Extension',
		notification: 'success',
		subMenu: {
			physioDashboard: {
				id: 'attendance',
				text: 'Student Dashboard',
				path: 'physiotherapist/dashboard',
				icon: 'dashboard',
			},
			ApplyPhsioLeave: {
				id: 'employeeLeave',
				text: 'Apply Leave',
				path: 'physiotherapist/applyLeave',
				icon: 'ExitToApp',
				subMenu: null,
			},
			Injury: {
				id: 'attendance',
				text: 'Student Fitness',
				path: 'physiotherapist/injury?student=all',
				icon: 'pending_actions',
			},
			physilogyassessment: {
				id: 'physilogyassessment',
				text: 'Student Physiology',
				path: 'physiotherapist/physilogy-assessment',
				icon: 'Extension',
			},
			nutritionalassessment: {
				id: 'nutritionalassessment',
				text: 'Student Nutritional',
				path: 'physiotherapist/nutritional-assessment',
				icon: 'receipt_long',
			},
			nutritionalMess: {
				id: 'nutritionalMess',
				text: 'Mess',
				path: 'physiotherapist/mess/mess-menu',
				icon: 'Article',
			},
		},
	},

	registrationsHeader: {
		id: 'registraion',
		text: 'Component',
		path: 'components',
		icon: 'Extension',
		notification: 'success',
		subMenu: {
			// home: {
			// 	id: 'home',
			// 	text: 'Home',
			// 	path: 'onsite-registration/home',
			// 	icon: 'home',
			// },
			// temp hide
			// registrationform: {
			// 	id: 'registraion',
			// 	text: 'Registration',
			// 	path: 'onsite-registration/registrationform',
			// 	icon: 'book',
			// 	subMenu: null,
			// },
			// levelone: {
			// 	id: 'registraion',
			// 	text: 'Level One Data',
			// 	path: 'onsite-registration/levelone',
			// 	icon: 'receipt_long',
			// 	subMenu: null,
			// },
			// leveltwo: {
			// 	id: 'registraion',
			// 	text: 'Level Two Data ',
			// 	path: 'onsite-registration/leveltwo',
			// 	icon: 'score',
			// 	subMenu: null,
			// },
			assessmentTA: {
				id: 'registraion',
				text: 'Training Assessment',
				path: 'onsite-registration/assessment',
				icon: 'score',
				subMenu: null,
			},
		},
	},
	utilities: {
		id: 'utilities',
		text: 'Utilities',
		path: 'utilities',
		icon: 'Support',
		subMenu: {
			api: {
				id: 'api',
				text: 'API',
				path: 'utilities/api',
				icon: 'Api',
			},
			background: {
				id: 'background',
				text: 'Background',
				path: 'utilities/background',
				icon: 'FormatColorFill',
			},
			borders: {
				id: 'borders',
				text: 'Borders',
				path: 'utilities/borders',
				icon: 'BorderStyle',
			},
			colors: {
				id: 'colors',
				text: 'Colors',
				path: 'utilities/colors',
				icon: 'InvertColors',
			},
			display: {
				id: 'display',
				text: 'Display',
				path: 'utilities/display',
				icon: 'LaptopMac',
			},
			flex: {
				id: 'flex',
				text: 'Flex',
				path: 'utilities/flex',
				icon: 'SettingsOverscan',
			},
			float: {
				id: 'float',
				text: 'Float',
				path: 'utilities/float',
				icon: 'ViewArray',
			},
			interactions: {
				id: 'interactions',
				text: 'Interactions',
				path: 'utilities/interactions',
				icon: 'Mouse',
			},
			overflow: {
				id: 'overflow',
				text: 'Overflow',
				path: 'utilities/overflow',
				icon: 'TableRows',
			},
			position: {
				id: 'position',
				text: 'Position',
				path: 'utilities/position',
				icon: 'Adjust',
			},
			shadows: {
				id: 'shadows',
				text: 'Shadows',
				path: 'utilities/shadows',
				icon: 'ContentCopy',
			},
			sizing: {
				id: 'sizing',
				text: 'Sizing',
				path: 'utilities/sizing',
				icon: 'Straighten',
			},
			spacing: {
				id: 'spacing',
				text: 'Spacing',
				path: 'utilities/spacing',
				icon: 'SpaceBar',
			},
			textPage: {
				id: 'text',
				text: 'Text',
				path: 'utilities/text',
				icon: 'TextFields',
			},
			verticalAlign: {
				id: 'vertical-align',
				text: 'Vertical Align',
				path: 'utilities/vertical-align',
				icon: 'VerticalAlignCenter',
			},
			visibility: {
				id: 'visibility',
				text: 'Visibility',
				path: 'utilities/visibility',
				icon: 'Visibility',
			},
		},
	},
	extra: {
		id: 'extra',
		text: 'Extra Library',
		icon: 'Extension',
		path: undefined,
	},
	icons: {
		id: 'icons',
		text: 'Icons',
		path: 'icons',
		icon: 'Grain',
		notification: 'success',
		subMenu: {
			iconPage: {
				id: 'icon',
				text: 'Icon',
				path: 'icons/icon',
				icon: 'Lightbulb',
			},
			material: {
				id: 'material',
				text: 'Material',
				path: 'icons/material',
				icon: 'Verified',
			},
		},
	},
	charts: {
		id: 'charts',
		text: 'Charts',
		path: 'charts',
		icon: 'AreaChart',
		notification: 'success',
		subMenu: {
			chartsUsage: {
				id: 'chartsUsage',
				text: 'General Usage',
				path: 'charts/general-usage',
				icon: 'Description',
			},
			chartsSparkline: {
				id: 'chartsSparkline',
				text: 'Sparkline',
				path: 'charts/sparkline',
				icon: 'AddChart',
			},
			chartsLine: {
				id: 'chartsLine',
				text: 'Line',
				path: 'charts/line',
				icon: 'ShowChart',
			},
			chartsArea: {
				id: 'chartsArea',
				text: 'Area',
				path: 'charts/area',
				icon: 'AreaChart',
			},
			chartsColumn: {
				id: 'chartsColumn',
				text: 'Column',
				path: 'charts/column',
				icon: 'BarChart',
			},
			chartsBar: {
				id: 'chartsBar',
				text: 'Bar',
				path: 'charts/bar',
				icon: 'StackedBarChart',
			},
			chartsMixed: {
				id: 'chartsMixed',
				text: 'Mixed',
				path: 'charts/mixed',
				icon: 'MultilineChart',
			},
			chartsTimeline: {
				id: 'chartsTimeline',
				text: 'Timeline',
				path: 'charts/timeline',
				icon: 'WaterfallChart',
			},
			chartsCandleStick: {
				id: 'chartsCandleStick',
				text: 'Candlestick',
				path: 'charts/candlestick',
				icon: 'Cake',
			},
			chartsBoxWhisker: {
				id: 'chartsBoxWhisker',
				text: 'Box Whisker',
				path: 'charts/box-whisker',
				icon: 'SportsMma',
			},
			chartsPieDonut: {
				id: 'chartsPieDonut',
				text: 'Pie & Donut',
				path: 'charts/pie-donut',
				icon: 'PieChart',
			},
			chartsRadar: {
				id: 'chartsRadar',
				text: 'Radar',
				path: 'charts/radar',
				icon: 'BrightnessLow',
			},
			chartsPolar: {
				id: 'chartsPolar',
				text: 'Polar',
				path: 'charts/polar',
				icon: 'TrackChanges',
			},
			chartsRadialBar: {
				id: 'chartsRadialBar',
				text: 'Radial Bar',
				path: 'charts/radial-bar',
				icon: 'DonutLarge',
			},
			chartsBubble: {
				id: 'chartsBubble',
				text: 'Bubble',
				path: 'charts/bubble',
				icon: 'BubbleChart',
			},
			chartsScatter: {
				id: 'chartsScatter',
				text: 'Scatter',
				path: 'charts/scatter',
				icon: 'ScatterPlot',
			},
			chartsHeatMap: {
				id: 'chartsHeatMap',
				text: 'Heat Map',
				path: 'charts/heat-map',
				icon: 'GridOn',
			},
			chartsTreeMap: {
				id: 'chartsTreeMap',
				text: 'Tree Map',
				path: 'charts/tree-map',
				icon: 'AccountTree',
			},
		},
	},
	notification: {
		id: 'notification',
		text: 'Notification',
		path: 'notifications',
		icon: 'NotificationsNone',
	},
	hooks: {
		id: 'hooks',
		text: 'Hooks',
		path: 'hooks',
		icon: 'Anchor',
	},
};

export const productsMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: 'grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
