/* eslint-disable react/prop-types */
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalf } from "react-icons/fa";
export const Stars = ({ stars  }) => {    

    const ratingStar = Array.from({length : 5} , (elem , index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    stars >= index + 1 
                    ? ( <FaStar className="icon" /> ) : 
                    stars >= number 
                    ? ( <FaStarHalf className="icon" />) 
                    :  <AiOutlineStar className="icon" />
                }
            </span>
        )

    });

    return (
        <div className="flex text-yellow-500">
            {ratingStar}
           
        </div>
    )
}