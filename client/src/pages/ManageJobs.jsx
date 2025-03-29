import React from 'react';
import { manageJobsData } from '../assets/assets';
import  moment  from 'moment';
import { useNavigate } from 'react-router-dom';


const ManageJobs = () => {
    const navigate=useNavigate();
    return (
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
                    {manageJobsData.map((job,index)=>(
                        <tr key={index} className='text-gray-700'>
                           <td className='px-4 py-2 border-b text-left max-sm:hidden'>{index+1}</td>
                            <td  className='px-4 py-2 border-b text-left'>{job.title}</td>
                            <td  className='px-4 py-2 border-b text-left max-sm:hidden'>{moment(job.date).format('ll')}</td>
                            <td  className='px-4 py-2 border-b text-left max-sm:hidden'>{job.location}</td>
                            <td  className='px-4 py-2 border-b text-center'>{job.applicants}</td>
                            <td  className='px-4 py-2 border-b text-center scale-125 ml-4'><input type="checkbox" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
          <div className='flex justify-end mt-4'>
            <button onClick={()=>navigate('/dashboard/add-job')} className='bg-black text-white px-4 py-3 rounded'>Add new job</button>
          </div>
        </div>
    );
};

export default ManageJobs;