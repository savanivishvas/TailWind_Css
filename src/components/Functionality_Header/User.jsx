import { FaRegCircleUser, FaRegHeart } from "react-icons/fa6"
import { FiShoppingCart } from "react-icons/fi"

export const User = () => {
  return (
    <div>
        <div className="flex justify-center items-center gap-4">
            <FaRegCircleUser className="size-6"/>
            <FaRegHeart className="size-6"/>
            <FiShoppingCart className="size-6"/>
        </div>
    </div>
  )
}
