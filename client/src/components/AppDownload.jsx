import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
    return (
        <div className='container px-4 mx-auto 2xl:px-20 my-20'>
            <div className='relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg'>
                <div>
                    <h1 className='text-2xl font-bold mb-8 sm:text-4xl max-w-md'>Download Mobile App For Better Experience</h1>
                    <div className='flex gap-4'>
                        <a href="#" className='inline-block'><img  className='h-12' src={assets.play_store} alt="" /></a>
                        <a href="#" className='inline-block'><img  className='h-12' src={assets.app_store} alt="" /></a>
                    </div>
                </div>
                <img className='absolute w-80 right-0 top-12 mr-32 max-lg:hidden' src={assets.app_main_img_male} alt="" />
            </div>
        </div>
    );
};

export default AppDownload;