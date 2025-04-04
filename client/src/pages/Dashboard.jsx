import React, { useContext, useEffect } from 'react';
import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import { assets } from './../assets/assets';
import { AppContext } from '../context/AppContext';
const Dashboard = () => {
    const navigate=useNavigate();
    const {companyData, setCompanyData, setCompanyToken}=useContext(AppContext)

    //function for logout company
    const logout=()=>{
        setCompanyToken(null)
        localStorage.removeItem('companyToken')
        setCompanyData(null)
        navigate('/')
    }
    useEffect(()=>{
        if(companyData){
            navigate('/dashboard/manage-jobs')
        }
    },[companyData])
    return (
        <div className='min-h-screen'>
        {/* Navbar for recruiter panel */}
            <div className='shadow py-4'>
                <div className='px-4 flex justify-between items-center'>
                    <img onClick={e=>navigate('/')} className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="" />
                    {companyData&&(
                        <div className='flex items-center gap-3'>
                        <p className='max-sm:hidden'>Welcom,{companyData.name} </p>
                        <div className='relative group'>
                            <img className='rounded-full w-8 border' src={companyData.image} alt="" />
                            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                    <li onClick={logout} className='py-1 pr-10 px-2 cursor-pointer' >Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    ) }
                </div>
            </div>

        {/* letf side and right side */}
        <div className='flex items-start'>
            {/* left sidebar with option to add job, manage job and view application */}
            <div className='min-h-screen inline-block border-r-2'>
                <ul className='flex flex-col items-start'>
                    <NavLink className={({isActive})=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive&&'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/add-job'}>
                        <img className='min-w-4' src={assets.add_icon} alt="" />
                        <p className='max-sm:hidden'>Add Job</p>
                    </NavLink>
                    <NavLink className={({isActive})=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive&&'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/manage-jobs'}>
                        <img className='min-w-4' src={assets.home_icon} alt="" />
                        <p className='max-sm:hidden'>Manage Jobs</p>
                    </NavLink>
                    <NavLink className={({isActive})=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive&&'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/view-applications'}>
                        <img className='min-w-4' src={assets.person_tick_icon} alt="" />
                        <p className='max-sm:hidden'>View Applications</p>
                    </NavLink>
                </ul>
            </div>
            <div className='flex-1 h-full p-2 sm:p-5'>
                <Outlet/>
            </div>
        </div>

        </div>
    );
};

export default Dashboard;