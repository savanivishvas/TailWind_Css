import { useEffect, useState } from "react";
import { commonData } from "../Data/commonData";

export const Branding = () => {

  const [index , setindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setindex(index === commonData.brandings.length ? 0 : index + 1);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="bg-[#f8f8f8] mt-12 max-w-screen-xl mx-auto px-6 md:px-20 py-8">

      <div className="flex shrink-0 justify-center items-center">

        {
          commonData.brandings.map((item,index) => {
            return (
              
              <img 
                src={`${item.imgs}`} 
                alt="img" 
                className="w-full bg-cover object-contain "  
                key={index}
              />
            )
          })
        }

      </div>

    </div>
  );
};
