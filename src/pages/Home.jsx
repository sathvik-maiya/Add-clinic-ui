import React from "react";
import arrow from "../images/Vec.png";
import profile from "../images/profile.png";
import photo from "../images/photo.png";
import AddClinic from "./AddClinic";

function Home() {
  const settingsArray = [
    "Clinic settings",
    "Appointment slots",
    "Payments settings",
    "Notifications settings",
    "Support",
  ];
  return (
      <div className='pt-1'>
        <hr className="my-6 ml-12 w-[972px] max-sm:w-[360px] max-sm:ml-0" />
         <div className=" flex flex-row  max-sm:flex-col max-sm:px-0 ">
          <div className="flex flex-row ml-12 max-sm:mx-4">
            <span  className='max-sm:text-sm'  style={{  fontFamily: 'Open Sans',fontSize: '15px',fontWeight: 400, color:'grey'}} >Dashboard</span>
            <div className="p-[5px] max-sm:p-1"><img src={arrow} alt="Arrow" width={7} /></div>
            <span className='max-sm:text-sm'style={{  fontFamily: 'Open Sans',fontSize: '15px',fontWeight: 400, color:'grey'}} >My Profile</span>
          </div>
    
                    
     </div>

      <hr className="ml-12 w-[972px] max-sm:w-[346px] max-sm:ml-3 max-sm:mt-2" />
      
           <div className='flex flex-row gap-[60px] max-sm:flex-col max-sm:gap-[30px]'>
            <div className='w-[22.5rem] ml-12 mt-[30px] max-sm:ml-4  max-sm:mt-2'>
           <div className='flex flex-row gap-[1rem] items-center w-[22.31rem] h-[10.5rem] max-sm:w-[20.5rem] border-b border-[#D9D9D9]'>
            
             <img src={profile} alt="" width={120} height={120} />
                <div className='flex flex-col '>
                  <div>
                       <button className="[font-family:'Arimo'] mt-[1px] w-[5.43rem] h-[2.125rem] text-[#FFF] bg-[#740AC7] justify-center gap-[1rem]  px-[0.275rem] py-[0.5rem] rounded-lg  text-center text-[0.75rem] text-normal leading-[1.125rem] pointer hover:shadow-md">
                        Super Admin
                       </button>
                  </div>

                  <div className="[font-family:'Arimo'] text-[#000] text-[1.5rem] font-bold mt-[0.75rem]">
                      Dr. Kim Jones
                  </div>

                  <div className="[font-family:'Arimo'] text-[#000] text-[0.875rem] font-semibold tracking-[-0.00875rem]">
                   MBBS, DLO, MS(ENT)
                  </div>
                  <div className="[font-family:'Arimo'] text-[#740AC7] text-[0.75rem] font-semibold tracking-[-0.0075rem]">
                     ENT specialist
                  </div>
                </div>
           </div>

            <div className='flex gap-[0.6rem] flex-col mt-[0.6rem]'>
              {
                settingsArray.map((data,index)=>{
                      return(
                         <div className="[font-family:'Arimo']  w-[22.375rem] h-[3.75rem] justify-center items-center bg-[#EEE] color-[#040404] text-[1rem] font-normal px-[0.75rem] py-[1rem] rounded-md leading-[1.2rem]  hover:bg-gray-200 transition duration-300 ease-in-out hover:shadow-xl pointer max-sm:w-[20.5rem] max-sm:h-[3.4rem] " key={index}>
                   {data}
                 </div>
                      )
                })
              }
            </div>
            </div>


        <div className="flex flex-row  max-sm:flex-col">
          <AddClinic />
        </div>
      </div>
    </div>
  );
}

export default Home;
