import { IoSearch } from "react-icons/io5"

export const Search = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center bg-[#f2f2f2] max-w-xl mx-auto rounded-[8px] ">
        <input
          type="text"
          placeholder="Search over 10,000 products"
          className="w-full px-4 py-2 outline-none"
        />
        <button className="p-3 text-gray-600 hover:text-black">
          <IoSearch className="size-6" />
        </button>
      </div>
    </div>
  )
}
