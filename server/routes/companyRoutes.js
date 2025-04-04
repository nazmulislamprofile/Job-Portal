import express from 'express'
import { changeJobApplicationsStatus, changeVisibility, getCompanyApplicants, getCompanyData, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js';
import upload from '../config/multer.js';
import { protectCompany } from '../middleware/authMiddleware.js';


const router=express.Router();

//register a company 
router.post('/register',upload.single('image'),registerCompany)

//comapny login
router.post('/login',loginCompany)

//get company data

router.get('/company',protectCompany,getCompanyData)

//post a job
router.post('/post-job',protectCompany,postJob)

//Get applicants data of company

router.get('/applicants',protectCompany,getCompanyApplicants)

//get company job list
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

//change application status
router.post('/change-status',protectCompany,changeJobApplicationsStatus)

//change application visibility
router.post('/change-visibility',protectCompany,changeVisibility)

export default router;