import React, { useState } from 'react';
import flask_image from './assets/flask.png'
import HoverInfo from './components/HoverInfo';


const DropdownInput = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex border-2 border-red">
        <input
          type="text"
          className="w-full border-l border-b border-t border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type something..."
        />
        <button
          onClick={toggleDropdown}
          className="border-t border-b border-r border-gray-300 rounded-r px-4 py-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
          <ul className="py-1">
            {/* This list is empty as per your requirement */}
          </ul>
        </div>
      )}
    </div>
  );
}




const SendOrSchedule = () => {

  const [radioValue,setRadioValue] = useState('option1');
  const radioChange = (value)=>{
    setRadioValue(value);
  }

  return(
  <div className='flex w-screen h-screen justify-between  '>
  <div className=' p-10 ml-20 mt-5'>
    <h1 className='text-black text-2xl font-bold mb-5'>Recipients</h1>
     <div className='flex  items-center '>
    <h1 className='font-bold my-5'>Send to</h1>
    <HoverInfo text='Enter the Email-Address of people you want to send this'/>
    </div>
    <DropdownInput/>
   <div className='flex items-center'>
    <h1 className='font-bold my-5'>Don't Send to</h1>
    <HoverInfo className='border-2 border-red-700' text='Enter the Email-Address of people you do not want to send this'/>
    </div>
    <DropdownInput/>

    <label class="flex items-center my-5">
      <input
      type="checkbox"
      className="form-checkbox h-4 w-4 text-blue-500 border-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
      />
      <span className="ml-2 text-gray-700">Don't send to <span className='text-blue-500 font-bold'>unengaged contacts</span>.</span>
      <HoverInfo text='Contacts you are not actively in touch with'/>
    </label>
 
     <label class="flex items-center my-5">
      <input
      type="checkbox"
      className="form-checkbox h-4 w-4 text-blue-500 border-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
      />
      <span className="ml-2 text-gray-700">Don't send to non openers </span>
    </label>   

  </div>

  <div className=' bg-lightb min-w-[30%]'>
      <h1 className='text-black text-2xl font-bold m-5'>Sending Options</h1>
      <label className="inline-flex items-center m-5">
        <input
          type="radio"
          className="form-radio text-blue-500 border-blue-500"
          value="option1"
          checked={radioValue === "option1"}
          onChange={()=>radioChange("option1")}
        />
        <span className="ml-2 font-semibold text-lg">Send Now</span>
      </label>
      <label className="inline-flex items-center m-5">
        <input
          type="radio"
          className="form-radio text-blue-500 border-blue-500"
          value="option2"
          checked={radioValue==="option2"}
          onChange={()=>radioChange("option2")}
        />
        <span className="ml-2 font-semibold text-lg">Schedule for Later</span>
      </label>

      <hr className='border-b border-blue-700 my-4 w-full'/>
      <div className='flex flex-wrap m-5'>
      <h1 className='text-xl font-semibold'>Estimated recipients</h1>
      <HoverInfo text='People who are supposed to get this E-Mail'/>
      </div>
      <span className='m-5'>
        <span className="text-8xl font-bold">1</span>
        <span className="text-3xl"> out of </span>
        <span className="text-5xl">1</span>
      </span>

  </div>
  </div>
  );
}


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Automation');
  const tabs = ['Automation', 'Send or Schedule', 'Edit', 'Settings'];

  return (
    <div className='w-full'>
      <div className="flex justify-between items-center border-b-2 border-darkb">
        <div className='flex flex-wrap items-center'>
          {/* <img/> Conical Flask */}
          <img
          src={flask_image}
          alt='.'
          className='w-7 h-7 ml-5'
          />
          <h3 className='text-blue-500 font-bold '>Create A/B test</h3>
          <HoverInfo text=' A/B testing compares two webpage versions to see which performs better in driving SEO and user engagement.'/>
        </div>
        {/* Tabs Layout */}
        <div className="flex justify-center border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-4 px-8 mb-0 text-darkb font-semibold text-md h-[100%] ${
                activeTab === tab ? 'border-b-4 border-darkb text-darkb' : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className='min-w-[8%] h-[100%] mr-5  border-2 border-indigo-300 bg-indigo-100 rounded-sm text-indigo-600 text-sm'>Send Email</button>
      </div>
      {/* Tabs' page's content */}
      <div className="">
        {activeTab === 'Automation' && <div>Content for Automation</div>}
        {activeTab === 'Send or Schedule' && <SendOrSchedule/> }
        {activeTab === 'Edit' && <div>Content for Edit</div>}
        {activeTab === 'Settings' && <div>Content for Settings</div>}
      </div>
    </div>
  );
};

export default Tabs;
