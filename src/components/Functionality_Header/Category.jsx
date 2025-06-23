import { FaAngleRight, FaBars } from "react-icons/fa6";
import { commonData } from "../Data/commonData";

export const Category = () => {
  return (
    <div className="relative group w-max mx-auto">

      {/* Icon + Label */}
      <div className="flex items-center gap-2 bg-primary  px-4 py-2 rounded cursor-pointer">
        <FaBars />
        <span className="uppercase">categories</span>
      </div>

      {/* Main Dropdown */}
      <ul className="absolute top-full left-0 mt-2 w-64 bg-white text-black shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-200 z-50">
        {commonData.categoryMenu.map((menu, index) => (
          <li
            key={index}
            className="group/item relative px-4 py-2 hover:bg-gray-100 transition capitalize cursor-pointer flex justify-between items-center border-l-4 "
          >
            <span>{menu.name}</span>
            <FaAngleRight className="text-gray-400 opacity-0 group-hover/item:opacity-100 group-hover/item:text-blue-600 transition" />

            {/* Submenu */}
            {menu.subItems && (
              <ul className="absolute top-0 left-full w-48 bg-white text-black shadow-md rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-50">
                {menu.subItems.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className="px-4 py-2 hover:bg-gray-100 capitalize whitespace-nowrap"
                  >
                    {sub.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
