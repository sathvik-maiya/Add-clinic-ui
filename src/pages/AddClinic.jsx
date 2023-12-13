import React from "react";
import photo from "../images/photo.png";
import { useState } from "react";

// Reusable TextInput component
const TextInput = ({ placeholder }) => (
  <input
    className="font-inter text-base font-normal leading-22 tracking-normal text-left
              w-[221.5px] h-[22px] bg-[#ECECEC] p-4 gap-12 border border-gray-300 rounded max-sm:w-[300px]"
    type="text"
    placeholder={placeholder}
  />
);

const CustomButton = ({ text, width }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      className={`w-${width} h-[44px] rounded-[10px] p-[10px] gap-[10px] mr-2 mt-2 text-black max-sm:text-[0.8rem] max-sm:p-[5px] ${
        isClicked ? "bg-[#5351C7]" : "bg-[#F1F0F2]"
      } ${isClicked ? "text-white" : "text-black"}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default function AddClinic() {
  return (
    <div className="w-[619px] h-[1050px] top-[172px] left-[762px] bg-[#F5F5F5] pt-12 pl-12 max-sm:w-[330px] max-sm:ml-4 max-sm:mt-2 max-sm:m-4  max-sm:w-[20.5rem] max-sm:pt-[2rem] max-sm:pr-[1rem] max-sm:pl-[1rem] max-sm:h-[1100px]">
      <div className="w-[523px] h-[646px] top-42 left-48 gap-16" >
        <div className="[font-family:'Arimo'] text-[#1F1F1F] text-[1.25rem] font-[600] tracking-[-0.0125rem] leading-[1.28125rem] pb-4">
          Clinic settings
        </div>
        <div className="[font-family:'Poppins'] text-[#000] leading-[1.563rem] font-medium text-[1.125rem]">
          Add Clinic
        </div>
        <div className="w-[523px] h-[272px] border-b-1  gap-16 border-b border-solid border-[#C6C6C6] max-sm:h-[323px] max-sm:w-[300px]">
          <div className="w-[3.685rem] h-[0.125rem] bg-[#03BF9C]"></div>
          <div className="flex-none order-1 flex-grow-0 flex items-center pt-4">
            <img className="w-[7.5rem] h-[7.5rem] max-sm:h-[5rem] max-sm:w-[5rem]" src={photo} alt="Photo" />
            <div className="font-arimo font-normal text-[#7A7A7A] ml-4 leading-1 w-[12rem] h-[2rem] ">
              Click on the camera to add clinic logo.
            </div>
          </div>
          <div className="w-[523px] h-[164px] gap-[16px] pt-4 max-sm:w-[700px]">
            <div className="flex flex-row gap-[16px] pb-4 max-sm:flex-col">
              <TextInput
                placeholder="Clinic Name"
                onClick={() => console.log("Button Clicked")}
                
              />
              <TextInput placeholder="Super Admin name" />
            </div>
            <div className="flex flex-row gap-[16px] max-sm:flex-col">
              <TextInput placeholder="Mobile No" />
              <TextInput placeholder="Clinic's Email" />
            </div>
          </div>
        </div>
        <div className="w-[523px] h-[111px]  border-solid border-0 border-b-[1px] border-[#C6C6C6] gap-8 max-sm:w-[300px]">
          <div className="w-[523px] h-[22px] leading-[21.78px] text-[18px] font-inter mt-1 max-sm:mt-3">
            Languages
          </div>
          <div className="w-[523px] h-[17px] leading-[16.94px] pt-1 text-[14px] font-inter text-[#A3A3A3]">
            Choose only 3 main Languages{" "}
          </div>
          <div className="flex flex-row gap-4 max-sm:gap-1">
            <CustomButton text="English" />
            <CustomButton text="Hindi" />
            <CustomButton text="Tamil" />
            <CustomButton text="Telugu" />
            <CustomButton text="Malayalam" className="w-[82px]" />
          </div>
          <div className="w-[523px] h-[170px]  border-b border-solid border-gray-300 gap-12 max-sm:w-[300px]">
            <div className="w-[523px] h-[22px] font-inter font-600 text-[18px] text-black leading-[21.78px] mt-8">
              Clinic's Consultation Rate
            </div>
            <div className="w-[523px] h-[54px] flex flex-row max-sm:w-[300px] max-sm:mt-3">
              <div className="w-[340px] font-semibold h-[22px] font-inter text-[14px] leading-[16.49px] text-black mt-5">
                Minimum Rate
              </div>

              <input
                placeholder="0.00"
                className="w-[171px] h-[54px] p-[16px] gap-[12px] bg-[#ECECEC] max-sm:h-[40px]"
              ></input>
              {/* <div className="font-inter font-[400] text-[18px] leading-[21.78px] text-right w-[30px] h-[22px] flex ">
                INR
              </div> */}
            </div>

            <div className="w-[523px] h-[54px] flex flex-row mt-6 max-sm:w-[300px]">
              <div className="w-[340px] h-[22px] font-semibold font-inter text-[14px] leading-[16.49px] text-black mt-5 ">
                Maximum Rate
              </div>
              <input
                placeholder="0.00"
                className="w-[171px] h-[54px] p-[16px] gap-[12px] bg-[#ECECEC] max-sm:h-[40px]"
              ></input>
            </div>
          </div>
          <div className="w-[523px] h-[322px] max-sm:w-[300px]">
            <div className="w-full h-[240px] p-0 pb-12 border-b border-solid border-gray-300 gap-12">
              <div className="w-[523px] h-[22px] font-inter font-600 text-[18px] text-black leading-[21.78px] mt-5">
                Clinic's Address
              </div>
              <div className="w-[523px] h-[194px] gap-[16px] mt-2 flex flex-col">
                <input
                  placeholder="Plot no/Block no"
                  className="w-[523px] h-[54px] p-[16px] bg-[#ECECEC] max-sm:w-[300px]"
                ></input>
                <input
                  placeholder="Street name/Landmark"
                  className="w-[523px] h-[54px] p-[16px] bg-[#ECECEC] max-sm:w-[300px]"
                ></input>
                <div className="flex flex-row gap-[12px]">
                  <input
                    placeholder="City"
                    className="w-[253.5px] h-[54px] p-[16px] bg-[#ECECEC] gap-[12px] max-sm:w-[150px] "
                  ></input>
                  <input
                    placeholder="Pincode"
                    className="w-[253.5px] h-[54px] p-[16px] bg-[#ECECEC] gap-[12px] max-sm:w-[137px] "
                  ></input>
                </div>
              </div>
            </div>
            <div className="pt-5 max-sm:pl-6 max-sm:pt-8">
              <button className="w-[253.5px]  h-[58px] p-[19px 16px 19px 16px] border-radius-[7px] gap-[10px] shadow-lg hover:bg-[#009394] hover:text-white ">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
