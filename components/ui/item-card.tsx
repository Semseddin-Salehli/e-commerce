import { MdFavoriteBorder } from "react-icons/md";
import Image from "next/image"

export default function ItemCard () {
    return (
        <div className="w-[270px] h-[350px] mt-2">

            <div className="bg-secondary w-full h-[250px] p-3 rounded ">
                <div className="flex items-center justify-between">
                    <div className="bg-baseRed text-[13px] text-baseTextWhite pyt-1 px-3 w-[55px] h-[26px] rounded flex items-center justify-center text-center">-40%</div> {/* item discount */}
                    <a href="#" className="bg-primary rounded-full w-[34px] h-[34px] flex items-center justify-center">
                        <MdFavoriteBorder className="text-2xl" />
                    </a>
                </div>
                
                <div className="flex items-center justify-center mt-1">
                    <Image 
                        className=" w-auto h-auto"
                        src="/images/item-1.png"
                        alt={''} 
                        width={200}
                        height={200}
                        objectFit="scale-down"
                    /> 
                </div>

            </div>

            <div className="w-full h-[100px] pt-[16px] flex items-start gap-2 flex-col">
                <div className="text-[16px] font-medium">HAVIT HV-G92 Gamepad</div>
                <div className="flex gap-2 text-[16px]">
                    <span className="text-baseRed">$120</span>
                    <span className="line-through text-[#7D8184]">$160</span>
                </div>
                <div></div>
            </div>
        </div>
    )
}