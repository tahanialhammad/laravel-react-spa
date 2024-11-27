import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import React from 'react';

export default function Subscribe() {
  return (
    <div
      className="bg-[url('https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/Group_10137-scaled.png')] 
                 bg-cover bg-center h-56 flex items-center text-white rounded-3xl"
    >
      <div className="flex flex-col ml-auto mr-8">
        <h1 className="text-3xl font-black">Subscribe Now For daily tips</h1>
        <p>A wonderful serenity has taken possession far, far away, behind the word mountains.</p>
        <form className='mt-4 relative '> 
            <TextInput  placeholder="Enter your Email"  className="w-full !px-6 !rounded-3xl" />
            <PrimaryButton className='absolute right-1 top-1/2 transform -translate-y-1/2 !rounded-full' >Submit</PrimaryButton>
        </form>

      </div>
    </div>
  );
}
