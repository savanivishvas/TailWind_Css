import { commonData } from "../Data/commonData";
import { Stars } from "../Stars";

export const Featured_Products = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-20 mt-12">

      <div className="flex flex-col gap-6"> 

        <div className="text-center ">
          <h1 className="text-xl font-bold">Featured</h1>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         
         {
          commonData.featuredproducts.map((item,index) => {
             return (
              <div key={index}>
         
               <div className="relative">
                 <img src={`${item.image}`} alt="image" />
                 <p className="absolute top-2 left-2 text-white bg-green-400 p-[2px_6px]">{item.label}</p>
               </div>
         
               <div className="mt-4 flex flex-col items-center justify-center">
                 <Stars stars={item.star} className="flex"/>
                 <p className="mt-1">Armer Air X Fear</p>
                 <div className="flex mt-1 gap-2">
                   <span>{item.price}</span>
                   <span className="line-through">{item.actualprice}</span>
                 </div>
               </div>
         
        
             </div>
             )
          })
         }
         
        </div>

      </div>
      
    </div>
  );
}
