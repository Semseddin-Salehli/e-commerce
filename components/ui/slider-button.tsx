import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


type Props = {
    direction?: string;
};

export default function SliderButton ({direction = ""} : Props) {
    return (
        <div>
            {direction == "right" ? 
                    <div className="w-[45px] h-[45px] rounded-full bg-secondary flex items-center justify-center cursor-pointer">
                        <FaArrowRightLong />
                    </div>
                    : 
                    <div className="w-[45px] h-[45px] rounded-full bg-secondary flex items-center justify-center cursor-pointer">
                        <FaArrowLeftLong />
                    </div>
            }
        </div>
    )
}