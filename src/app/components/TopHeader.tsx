

import Image from "next/image"



    


      export default function TopHeader() {
        return (

          
          //main div of blue background header

          <div className="lg:block hidden w-full h-[58px] bg-[#252B42] md:w-full">


           
            <div className="flex justify-between items-center w-full h-full px-[24px]">
              

               {/*  phone number and phone icon */}
              <div className="flex gap-[10px]">
                <button className="flex items-center gap-[5px] p-[10px] text-white">
                  <Image src={"/phone.png"} alt="phone" width={16} height={16} />
                  <span className="font-Montserrat font-semibold text-[14px]"> (225) 555-0118</span>
                </button>

                 {/*  mail and mail icon */}
                <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
                  <Image src={"/email.png"} alt="mail" width={16} height={16} />
                  <span className="font-Montserrat text-[14px]">michelle.rivera@example.com</span>
                </button>
              </div>
      
              {/* 80% off */}
              <h6 className="font-Montserrat font-semibold text-[14px] text-white">
                Follow Us and get a chance to win 80% off
              </h6>
      
              {/* social media icons */}
              <div className="flex gap-[10px] items-center">
                <h6 className="font-Montserrat text-[14px] text-white">Follow Us:</h6>
                <div className="flex gap-[10px]">
                  <Image src={"/insta.png"} alt="Instagram" width={16} height={16} />
                  <Image src={"/youtube.png"} alt="YouTube" width={16} height={16} />
                  <Image src={"/facebook.png"} alt="Facebook" width={16} height={16} />
                  <Image src={"/twitter.png"} alt="Twitter" width={16} height={16} />
                </div>
              </div>
            </div>
          </div>
        );
      }










      


      





