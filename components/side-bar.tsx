import Line from "./ui/line";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image"
import { IoMdArrowForward } from "react-icons/io";


export function Sidebar () {
    return (
        <div className="flex flex-row items-start">
            <div className="left-side flex w-1/3">
                <ul className="flex flex-col gap-3 w-1/2 text-[16px] pt-4">
                    <li>
                        <a href="" className="side-bar-tag">Woman’s Fashion <IoIosArrowForward /></a>
                    </li>
                    <li>
                        <a href="" className="side-bar-tag">Men’s Fashion <IoIosArrowForward /></a>
                    </li>
                    <li>
                        <a href="" className="side-bar-tag">Electronics</a>
                    </li>
                    <li>
                        <a href="" className="side-bar-tag">Home & Lifestyle</a>
                    </li>
                    <li>
                        <a href="" className="side-bar-tag">Medicine</a>
                    </li>
                    <li>
                        <a href="" className="side-bar-tag">Sports & Outdoor</a>
                    </li>
                    <li>
                        <a href="" className="side-bar-tag">Baby’s & Toys</a>
                    </li>
                    <li>
                        <a href="" className="side-bar-tag">Groceries & Pets</a>
                    </li>
                    <li>
                        <a href="" className="side-bar-tag">Health & Beauty</a>
                    </li>
                </ul>
                <Line direction="vertical" />

            </div>

            <div className="right-side w-2/3 pt-4 relative -left-32">
                <div className="w-[892px] h-[344px] bg-baseBlack  text-baseTextWhite flex flex-col justify-center items-center relative">
                    <div className="flex flex-row justify-between items-center p-10 pl-12">
                        <div className="flex flex-col justify-center items-start gap-5">
                            <div className="flex items-center gap-6 justify-between">
                                <Image 
                                    src="/images/apple-logo.png"
                                    alt={''}
                                    width={40}
                                    height={49}
                                />
                                <span className="text-[16px] font-extralight relative top-[0.5px]">iPhone 14 Series</span>
                            </div>

                            <span className="text-[48px] font-semibold">Up to 10% <br /> off Voucher</span>

                            <div className="flex gap-2 items-center justify-between">
                                <a href="#" className="underline underline-offset-[7px] text-[16px] font-medium decoration-1">Shop Now</a>
                                <IoMdArrowForward className="text-2xl" />
                            </div>
                        </div>
                        
                        <div className="">
                            <Image 
                                src="/images/iphone-backpaper.png"
                                alt={''} 
                                width={496}
                                height={352}
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-row gap-3 justify-evenly items-center absolute bottom-[10px]">
                        <div className="slide-btn"></div>
                        <div className="slide-btn"></div>
                        <div className="slide-btn active-slide-btn"></div>
                        <div className="slide-btn"></div>
                        <div className="slide-btn"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}