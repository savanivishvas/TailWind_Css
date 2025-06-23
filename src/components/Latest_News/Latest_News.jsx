import { commonData } from "../Data/commonData"

export const Latest_News = () => {


  return (
    <div className="max-w-screen-xl mx-auto px-20 mt-12">
    
      <div className="flex flex-col gap-6"> 
    
        <div className="text-center ">
          <h1 className="text-[30px] font-bold">Latest News</h1>
          <p className="text-[24px] font-light">Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        </div>

     
        <div className="mt-8 grid grid-cols-2 gap-12">

            {
            commonData.newsData.map((item,index) => {
              return (
                <div className="grid grid-cols-[0.4fr_0.6fr] gap-8" key={index}>

                  <div className="relative">
                    <img src={`${item.img}`} alt="" />
                    <div className="absolute top-0 right-0 text-white bg-yellow-400 px-4 py-1 font-bold">
                      <p>{item.date}</p>
                      <p className="-mt-2">{item.month}</p>
                    </div>
                  </div>
      
                  <div>
                    <span className="text-[16px]">{item.name} - {item.fulldate}</span>
                    <h2 className="font-bold text-[18px]">{item.heading}</h2>
                    <p className="mt-2 text-[13px]">{item.description}</p>
                  </div>
                </div>
              )
            })
          }
  
      

          

        </div>

      </div>
    
    </div>
  )
}
