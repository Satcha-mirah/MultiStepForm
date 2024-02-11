import React from "react";
import { useState } from "react";
import Sidebar from "../assets/bg-sidebar-desktop.svg";
import Arcade from "../assets/icon-arcade.svg";
import Advanced from "../assets/icon-advanced.svg";
import Pro from "../assets/icon-pro.svg";
import Thanks from "../assets/icon-thank-you.svg";
function MultiStepComp({props}){
    // const toggleTab = (index) => {
    //     setToggle(index);
    //   };
    //   const activeTab = "text-primary  border-primary";
    const [formStep, setFormStep] = useState(0);
    const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };
  const renderButton = () => {
    if (formStep > 8) {
      return undefined;
    } else if (formStep === 4) {
      return (
        <div className="w-full flex items-center justify-end space-x-5 mt-[20px]">
          <button
            className="bg-[#013CE4] text-white p-[10px_30px] rounded-[4px] "
            type="button"
          >
            Confirm
          </button>
          <button
            className="border border-[#013CE4] text-[#013CE4] p-[8px_30px] rounded-[4px]"
            type="button"
            onClick={props.close}
          >
            Cancel
          </button>
        </div>
      );
    }  else if (formStep === 3){
        return undefined;
    } 
      else if (formStep === 5){
        return undefined;
    } 
    else if(formStep === 4){
       return ;
    }
    else {
      return (
        <div className="w-[550px] flex items-center justify-end space-x-5 mt-[120px]">
          <button
            className="bg-[#00356B] text-white text-[18px] p-[20px_48px] rounded-[8px] hover:bg-[#2E5090]"
            onClick={completeFormStep}
            type="button"
          >
            Next Step
          </button>
          {/* <button
            className="border border-[#013CE4] text-[#013CE4] p-[8px_30px] rounded-[4px]"
            type="button"
            onClick={props.close}
          >
            Cancel
          </button> */}
        </div>
      );
    }
  };
    return( 
        <div className="w-full h-screen px-[50px] py-[50px] flex flex-row space-x-[200px]"> 
        <div className=" w-[550px] overflow-hidden">
        <img  alt="img" src={Sidebar} className="w-full h-screen rounded-[20px]"/>
        <div class="absolute,/ inset-0 flex justify-center items-center">
       <div class="numbering flex flex-col space-y-[50px]">
      <div className="flex flex-row space-x-[15px]">
        <div className="border-[3px] h-[40px] w-[40px] rounded-[50%] items-center">
          <p>1</p>
        </div>
      </div>
      </div>
     </div>
        </div>

        <div className="mt-[130px]">
          <form action="" className="w-full">
          {formStep === 0 && (
          <div className="flex flex-col space-y-[30px]">
            <div className="space-y-[1px]">
            <h4 className=" font-[700] text-[40px] font-ubuntu text-[#00356B]">
              Personal Info
            </h4>
            <p className="text-[20px] font-ubuntu font-[400] text-[#cccccc]">Please provide your name, email address and phone number.</p>
            </div>

            <div className="flex flex-col mt-[50px]">
              <p className="font-[600] font-ubuntu text-[18px] text-[#00356B]">
               Name
              </p>
              <input
                type="text"
                className="w-[550px] h-[60px] outline-none border-[3px] mt-[5px] rounded-[8px] font-nunito py-[10px] px-[10px] text-[#00356B] text-[18px] font-[600] font-ubuntu focus:border-[#9370DB]"
              />
            </div>

            <div className="flex flex-col mt-[50px]">
              <p className="font-[600] font-ubuntu text-[18px] text-[#00356B]">
               Email Address
              </p>
              <input
                type="text"
                className="w-[550px] h-[60px] outline-none border-[3px] mt-[5px] rounded-[8px] font-nunito py-[10px] px-[10px] text-[#00356B] text-[18px] font-[600] font-ubuntu focus:border-[#9370DB]"
              />
            </div>

            <div className="flex flex-col mt-[50px]">
              <p className="font-[600] font-ubuntu text-[18px] text-[#00356B]">
               Phone Number
              </p>
              <input
                type="text"
                placeholder="e.g. +1 234 567 890"
                className="w-[550px] h-[60px] outline-none border-[3px] mt-[5px] rounded-[8px] font-nunito py-[10px] px-[10px] text-[#00356B] text-[18px] font-[600] font-ubuntu focus:border-[#9370DB]"
              />
            </div>
          </div>
        )}

         {formStep === 1 && (
          <div className="flex flex-col space-y-[16px]">
           <div className="space-y-[5px]">
            <h4 className="font-[700] text-[40px] font-ubuntu text-[#00356B]">
              Select your plan
            </h4>
            <p className="text-[20px] font-ubuntu font-[400] text-[#cccccc]">You have the option of monthly or yearly billing.</p>
            
            </div>
            <div className="flex flex-row space-x-[20px] pt-[30px]">

              <div className="border-[3px] w-[170px] h-[180px] rounded-[10px] py-[20px] px-[20px]  hover:border-[#9379DB] transition duration-300 ease-in-out">
                <img src={Arcade} alt="img" className="" />
                <div className="mt-[50px]">
                <h4 className="font-[600] font-ubuntu text-[20px] text-[#00356B]">Arcade</h4>
                <p className="text-[18px] font-ubuntu font-[400] text-[#cccccc]">$9/mo</p>
                </div>
              </div>

              <div className="border-[3px] w-[170px] h-[180px] rounded-[10px] py-[20px] px-[20px]  hover:border-[#9379DB] transition duration-300 ease-in-out">
                <img src={Advanced} alt="img" className="" />
                <div className="mt-[50px]">
                <h4 className="font-[600] font-ubuntu text-[20px] text-[#00356B]">Advanced</h4>
                <p className="text-[18px] font-ubuntu font-[400] text-[#cccccc]">$12/mo</p>
                </div>
              </div>

              <div className="border-[3px] w-[170px] h-[180px] rounded-[10px] py-[20px] px-[20px]  hover:border-[#9379DB] transition duration-300 ease-in-out">
                <img src={Pro} alt="img" className="" />
                <div className="mt-[50px]">
                <h4 className="font-[600] font-ubuntu text-[20px] text-[#00356B]">Pro</h4>
                <p className="text-[18px] font-ubuntu font-[400] text-[#cccccc]">$15/mo</p>
                </div>
              </div>

            </div>
            <div className="pt-[20px]">
              <div className="border-[3px] h-[60px] w-[550px] bg-[#E5E4E2] rounded-[10px]"></div>
            </div>
          </div>
        )} 


     {formStep === 2 && (
          <div className="flex flex-col space-y-[30px]">
            <div className="space-y-[5px]">
            <h4 className=" font-[700] text-[40px] font-ubuntu text-[#00356B]">
              Pick add-ons
            </h4>
            <p className="text-[20px] font-ubuntu font-[400] text-[#cccccc]">Add-ons help enhance your gaming experience.</p>
            </div>

            <div className="flex flex-col space-y-[10px]">
              <div className="border-[3px] w-[550px] h-[100px] rounded-[10px] p-[20px] hover:border-[#9379DB] transition duration-300 ease-in-out">
                <div className="flex flex-row space-x-[20px]">
                <div className="flex flex-row space-x-[15px]">
                <label class="items-center">
                <input type="checkbox" class=" h-7 w-7 rounded-[5px] cursor-pointer text-purple-600 focus:ring-1 focus:ring-purple-600 focus:bg-purple-600 checked:bg-purple-600"/>
                </label>
                      <div className="flex flex-col">
                       <h2 className="font-[600] font-ubuntu text-[18px] text-[#00356B]">Online Service</h2>
                       <p className="text-[20px] font-ubuntu font-[400] text-[#cccccc]">Access to multiplayer games</p>
                      </div>
                      </div>

                      <div>
                      <h1 className="mt-[12px] ml-[100px] text-[20px] text-[#9370DB] font-[400]">+$1/mo</h1>
                      </div>
                </div>
              </div>

            </div>

            <div className="flex flex-col space-y-[10px]">
              <div className="border-[3px] w-[550px] h-[100px] rounded-[10px] p-[20px] hover:border-[#9379DB] transition duration-300 ease-in-out">
                <div className="flex flex-row space-x-[20px]">
                <div className="flex flex-row space-x-[15px]">
                <label class="items-center">
                <input type="checkbox" class="text-purple-600 h-7 w-7 rounded-[5px] focus:ring-1 cursor-pointer focus:ring-purple-600 mt-[12px] checked:bg-purple-600 checked:border-transparent"/>
                </label>
                      <div className="flex flex-col">
                       <h2 className="font-[600] font-ubuntu text-[18px] text-[#00356B]">Larger Storage</h2>
                       <p className="text-[20px] font-ubuntu font-[400] text-[#cccccc]">Extra 1TB of cloud save</p>
                      </div>
                      </div>

                      <div>
                      <h1 className="mt-[12px] ml-[140px] text-[20px] text-[#9370DB] font-[400]">+$1/mo</h1>
                      </div>
                </div>
              </div>

            </div>


            <div className="flex flex-col space-y-[10px]">
              <div className="border-[3px] w-[550px] h-[100px] rounded-[10px] p-[20px] hover:border-[#9379DB] transition duration-300 ease-in-out">
                <div className="flex flex-row space-x-[20px]">
                <div className="flex flex-row space-x-[15px]">
                <label class="items-center">
                <input type="checkbox" class="text-purple-600 h-7 w-7 rounded-[5px] focus:ring-1 cursor-pointer focus:ring-purple-600 mt-[12px] checked:bg-purple-600 checked:border-transparent"/>
                </label>
                      <div className="flex flex-col">
                       <h2 className="font-[600] font-ubuntu text-[18px] text-[#00356B]">Customizable Profile</h2>
                       <p className="text-[20px] font-ubuntu font-[400] text-[#cccccc]">Custom theme on your profile</p>
                      </div>
                      </div>

                      <div>
                      <h1 className="mt-[12px] ml-[100px] text-[20px] text-[#9370DB] font-[400]">+$1/mo</h1>
                      </div>
                </div>
              </div>

            </div>
          </div>
        )}
  
         {formStep === 3 && (
          <div className="flex flex-col items-center justify-center pt-[50px] w-[550px]">
             <img src={Thanks} alt="img"  className="items-center justify-center pt-[50px]"/>
             <h4 className=" font-[700] text-[40px] font-ubuntu text-[#00356B] mt-[40px]">Thank you!</h4> 
             <p className="text-[20px] font-ubuntu font-[400] text-[#cccccc] mt-[20px]">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
          </div>
        
        )}

        {renderButton()}
        
          </form>
          
        </div>
        </div>
    );
}
export default MultiStepComp;