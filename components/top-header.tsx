import { IoIosArrowDown } from "react-icons/io";

export function TopHeader () {
    return (
        <div className="bg-baseBlack w-full h-10 text-baseTextWhite text-[14px] flex justify-center items-center">
            <div className="flex justify-around items-center w-2/3 ml-6">
                <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="ml-1 underline font-semibold">ShopNow</a> </span>
                <span>English <IoIosArrowDown className="inline-block text-xl text-baseTextWhite" /> </span>
            </div>
        </div>
    )
}