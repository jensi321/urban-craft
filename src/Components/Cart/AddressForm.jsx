import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddressForm = ({ setIsFormOpen }) => {
  const [dialCode, setDialCode] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedStates] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flag,idd')
      .then(response => response.json())
      .then(data => {
        const dialCodes = data.map(country => ({
          flag: country.flag,
          dial_code: country.idd.root + country.idd.suffixes[0]
        }));
        setDialCode(dialCodes);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries/states");
        const data = await response.json();
        const stateValue = data.data[99].states;
        setStates(stateValue);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };
    fetchData();
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSelectedChange = (event) => {
    setSelectedStates(event.target.value);
  };

  useEffect(() => {
    Aos.init({ once: true });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  });

  return (
    <>
      <div className="gap-[18px] flex flex-col items-start border-[1px] border-solid border-lime-900 p-[15px] rounded-[10px]" data-aos="fade-up" data-aos-duration="1500">
        <p className='md:text-[22px] text-[24px] font-medium text-black-900'>Add new address</p>
        <form className='w-full'>
          <div className="flex flex-col gap-3.5 self-stretch">
            <div className="flex flex-col gap-1.5">
              <div className="flex px-4">
                <p className='text-[14px] font-normal text-gray-600_01'>Save as*</p>
              </div>
              <div className="flex gap-6 justify-between">
                <label className="rounded-[24px] text-[14px] w-full gap-2 border border-lime-900 bg-white-a700 text-lime-900 flex items-center gap-[5px] cursor-pointer p-[15px]">
                  <input type="radio" name="addresstype" autoComplete='home' className='w-[20px] h-[20px]' />
                  <span>Home</span>
                </label>
                <label className="rounded-[24px] text-[14px] w-full gap-2 border border-lime-900 bg-white-a700 text-lime-900 flex items-center gap-[5px] cursor-pointer p-[15px]">
                  <input type="radio" name="addresstype" autoComplete='office' className='w-[20px] h-[20px]' />
                  <span>Office</span>
                </label>
                <label className="rounded-[24px] text-[14px] w-full gap-2 border border-lime-900 bg-white-a700 text-lime-900 flex items-center gap-[5px] cursor-pointer p-[15px]">
                  < input type="radio" name="addresstype" autoComplete='other' className='w-[20px] h-[20px]' />
                  <span><span>Other</span></span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="flex gap-6 lg:flex-row flex-col">
                <div className="flex w-full flex-col items-start gap-1.5">
                  <p className="text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0">Name*</p>
                  <label className="rounded-[24px] gap-2 self-stretch flex items-center justify-center cursor-text bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                    <img src="assets/Images/Name.svg" className='w-[20px] h-[20px]' alt="" />
                    <input type="text" placeholder='Enter Name' autoComplete='on' name='name' />
                  </label>
                </div>
                <div className="flex w-full flex-col items-start gap-1.5">
                  <p className="text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0">Email*</p>
                  <label className="rounded-[24px] gap-2 self-stretch flex items-center justify-center cursor-text bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                    <input type="email" placeholder='Enter Email' autoComplete='email' name='email' />
                  </label>
                </div>
              </div>
              <div className="flex gap-6 lg:flex-row flex-col">
                <div className="flex w-full flex-col items-start gap-1.5">
                  <p className="text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0">Phone*</p>
                  <label className="rounded-[24px] gap-2 self-stretch flex items-center justify-center cursor-text bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                    <select className='w-[40%]' name="dial-code" value={selectedCountry} onChange={handleCountryChange}>
                      {dialCode.map((dialcode, index) => (
                        <option key={index} value={dialcode.dial_code}>
                          {dialcode.flag} ({dialcode.dial_code})
                        </option>
                      ))}
                    </select>
                    <input type="tel" placeholder='Enter phone number' autoComplete='number' name='number' />
                  </label>
                </div>
                <div className="flex w-full flex-col items-start gap-1.5">
                  <p className="text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0">Province/State*</p>
                  <label className="rounded-[24px] gap-2 self-stretch flex items-center justify-center cursor-text bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                    <select name="dial-code" value={selectedState} onChange={handleSelectedChange}>
                      <option value="" disabled>Select State</option>
                      {states.map((state, index) => (
                        <option key={index} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              <div className="flex gap-6 lg:flex-row flex-col">
                <div className="flex w-full flex-col items-start gap-1.5">
                  <p className="text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0">Zip code*</p>
                  <label className="rounded-[24px] gap-2 self-stretch flex items-center justify-center cursor-text bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[ 34px] text-[14px]">
                    <input type="text" placeholder='88765455' name='zipcode' autoComplete='postal-code' />
                  </label>
                </div>
                <div className="flex w-full flex-col items-start gap-1.5">
                  <p className="text-[14px] ml-4 font-normal text-gray-600_01 md:ml-0">City*</p>
                  <label className="rounded-[24px] gap-2 self-stretch flex items-center justify-center cursor-text bg-gray-200_03 text-gray-500 h-[48px] pl-4 pr-[34px] text-[14px]">
                    <input type="text" placeholder='Enter City' name='city' autoComplete='on' />
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex px-4">
                  <p className='text-[14px] font-normal text-gray-600_01'>Address*</p>
                </div>
                <textarea name="address" autoComplete='address' placeholder='Enter Your Address' className='rounded-[16px] pr-[34px] pl-4 text-gray-500 sm:pb-5 sm:pr-5 rounded-[16px] h-[164px] p-4 text-[14px] bg-gray-200_03 resize-none'></textarea>
              </div>
            </div>
          </div>
        </form>
        <Link onClick={() => { setIsFormOpen(false) }} className='rounded-[24px] min-w-[140px] px-[23px] !border font-semibold sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap h-[48px] px-[34px] text-[14px] border-lime-900 border border-solid text-lime-900'>Save Address</Link>
      </div>
    </>
  );
};

export default AddressForm;