import express from 'express'
import { getJobById, getJobs } from '../controllers/jobController.js';

const router=express.Router();

//router to get all jobs data
router.get("/",getJobs)

//router to gel single job data
router.get("/:id",getJobById)

export default router;

