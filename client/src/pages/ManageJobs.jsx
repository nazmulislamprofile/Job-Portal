import React, { useContext, useEffect, useState } from 'react';
import  moment  from 'moment';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';


const ManageJobs = () => {
    const navigate=useNavigate();
    const [jobs,setJobs]=useState(false)
    const {backendUrl,companyToken}=useContext(AppContext)
    //function to fetch company job applications data
    const fetchCompanyJobs=async()=>{
        try {
            const {data}=await axios.get(backendUrl+'/api/company/list-jobs',{headers:{token:companyToken}})
            if(data.success){
                setJobs(data.jobsData.reverse())
                console.log(data.jobsData)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    //function to change visibility
    const changeVisibility=async(id)=>{
        try {
            const {data}=await axios.post(backendUrl+'/api/company/change-visibility',{
                id
            },{
                headers:{token:companyToken}
            })
            if(data.success){
                toast.success(data.message)
                fetchCompanyJobs()
            }
            else{
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if(companyToken){
            fetchCompanyJobs()
        }
    },[companyToken])
    return jobs?jobs.length===0?(<div></div>): (
        <div className='container p-4 max-w-5xl'>
          <div className='overflow-x-auto'>
            <table className='min-w-full bg-white border border-gray-200 max-sm:text-sm '>
                <thead>
                    <tr>
                        <th className='py-2 border-b text-left px-4 max-sm:hidden'>#</th>
                        <th className='py-2 border-b text-left px-4'>Job Title</th>
                        <th className='py-2 border-b text-left px-4 max-sm:hidden'>Date</th>
                        <th className='py-2 border-b text-left px-4 max-sm:hidden'>Location</th>
                        <th className='py-2 border-b  px-4 text-center'>Applicants</th>
                        <th className='py-2 border-b text-left px-4'>Visible</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job,index)=>(
                        <tr key={index} className='text-gray-700'>
                           <td className='px-4 py-2 border-b text-left max-sm:hidden'>{index+1}</td>
                            <td  className='px-4 py-2 border-b text-left'>{job.title}</td>
                            <td  className='px-4 py-2 border-b text-left max-sm:hidden'>{moment(job.date).format('ll')}</td>
                            <td  className='px-4 py-2 border-b text-left max-sm:hidden'>{job.location}</td>
                            <td  className='px-4 py-2 border-b text-center'>{job.applicants}</td>
                            <td onClick={()=>(changeVisibility(job._id))}  className='px-4 py-2 border-b text-center scale-125 ml-4'><input type="checkbox" checked={job.visible} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
          <div className='flex justify-end mt-4'>
            <button onClick={()=>navigate('/dashboard/add-job')} className='bg-black text-white px-4 py-3 rounded'>Add new job</button>
          </div>
        </div>
    ):<Loading/>
};

export default ManageJobs;