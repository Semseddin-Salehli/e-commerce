type Props = {
    isLogin?: boolean;
};

import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

export function Header({isLogin = true} : Props) {

    return (
        <div className="bg-primary w-[1170px] h-[38px] flex justify-between items-center gap-5">
            <div className="text-baseBlack text-2xl font-bold w-1/3">Exclusive</div>
            <div className="flex justify-between items-center w-1/3 text-[16px]">
                <a href="#" className="active-tag header-tag">Home</a>
                <a href="#" className="header-tag">Contact</a>
                <a href="#" className="header-tag">About</a>
                <a href="#" className="header-tag">Sign Up</a>
            </div>
            <div className="w-1/3 pl-[165px] relative">
                <input type="text" placeholder="What are you looking for?" className="bg-secondary rounded w-[243px] h-[38px] text-[13px] outline-none pl-4 text-[#7a7a7a]" />
                <IoSearch className="text-2xl absolute right-0 top-[6.5px] cursor-pointer" />
                
                {isLogin ? 
                    <>
                        <MdFavoriteBorder className="absolute text-2xl top-[6.5px] -right-16 cursor-pointer" />
                        <FiShoppingCart className="absolute text-2xl top-[6.5px] -right-[108px] cursor-pointer" />
                    </>
                    : ""
                }
            
            
            </div>
        </div>
    )
}