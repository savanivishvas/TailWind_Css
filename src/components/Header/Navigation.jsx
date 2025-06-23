import { FaAngleDown } from "react-icons/fa6";
import { commonData } from "../Data/commonData";

export const Navigation = () => {
  return (
    <div>

      <ul className="flex justify-center items-center text-white gap-4">
        {
          commonData.navlinks.map((link, index) => (
            <li key={index} className="uppercase relative group cursor-pointer">
              <div className="flex items-center gap-1">
                <p>{link.name}</p>
                <span className="inline-block transition duration-500 group-hover:rotate-180"><FaAngleDown /></span>
              </div>

              {/* Dropdown for 'home' */}
              {link.name === "home" && (
                <ul className="absolute top-full left-0 mt-6 w-48 bg-white capitalize text-light text-black hidden shadow-lg group-hover:block z-50">
                  {commonData.homedorpdownmenu.map((item, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-gray-100 transition whitespace-nowrap"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
  
              {/* Dropdown for 'pages' */}
              {
              
                link.name === "pages" && (
                  <div className="absolute mt-6 bg-white text-black shadow-lg rounded-md p-6 hidden group-hover:grid grid-cols-4 group-hover:-ml-80 gap-12 z-50 w-[1000px]">
                    
                    {/* Column 1 */}
                    <div>
                      <h4 className="font-bold text-[14px] mb-2">{commonData.pagedropdownmenuheaders[0].header}</h4>
                      <ul>
                        {
                        commonData.pagedropdownmenu1items.map((item, i) => (
                          <li key={i} className="py-1 capitalize hover:text-blue-600 cursor-pointer">{item.name}</li>
                        ))}
                      </ul>
                    </div>
                
                    {/* Column 2 */}
                    <div>
                      <h4 className="font-bold text-[14px] mb-2">{commonData.pagedropdownmenuheaders[1].header}</h4>
                      <ul>
                        {commonData.pagedropdownmenu2items.map((item, i) => (
                          <li key={i} className="py-1 capitalize hover:text-blue-600 cursor-pointer">{item.name}</li>
                        ))}
                      </ul>
                    </div>
                
                    {/* Column 3 */}
                    <div>
                      <h4 className="font-bold text-[14px] mb-2">{commonData.pagedropdownmenuheaders[2].header}</h4>
                      <ul>
                        {commonData.pagedropdownmenu3items.map((item, i) => (
                          <li key={i} className="py-1 capitalize hover:text-blue-600 cursor-pointer">{item.name}</li>
                        ))}
                      </ul>
                    </div>
                
                    {/* Column 4 - Image */}
                    <div className="flex items-center justify-center">
                      <img
                        src="/images/page_menu_4.jpg"
                        alt="menu preview"
                        className="w-full h-auto max-w-[160px] rounded-md"
                      />
                    </div>
                
                  </div>
            )}


              {/* Dropdown for extra pages */}
              {
                link.name === "extra pages" && (
                  <ul className="absolute top-full left-0 capitalize mt-6 w-48 bg-white text-black shadow-lg rounded-md hidden group-hover:block z-50">
                  {commonData.extrapagesitems.map((item, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-gray-100 transition whitespace-nowrap"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
                )
              }
            </li>
          ))
        }  
        {/* end */}

        <li className="uppercase cursor-pointer">blog</li>
        <li className="uppercase cursor-pointer">buy template</li>
      </ul>
    </div>
  );
};

