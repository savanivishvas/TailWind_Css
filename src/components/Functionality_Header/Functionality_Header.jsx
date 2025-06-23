import { Category } from "./Category"
import { Search } from "./Search"
import { User } from "./User"

export const Functionality_Header = () => {
  return (
    <div className="bg-[#fff] sticky top-0 z-20 transition duration-500">
      
      <div className="max-w-screen-xl mx-auto px-20 py-3 flex items-center justify-between">

        <Category />

        <Search />

        <User />

      </div>

    </div>
  )
}
