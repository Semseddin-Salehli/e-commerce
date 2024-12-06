import ItemCard from "./ui/item-card";
import SliderButton from "./ui/slider-button";
import Title from "./ui/title";

export default function FlashSales () {
    return (
        <div className="flex flex-col mt-[120px] gap-5">
            <div>
                <Title text="Today’s" />
            </div>
            
            <div className="flex flex-row justify-between items-center pr-32">
                <div className="flex gap-16">
                    <span className="text-4xl font-semibold">Flash Sales</span>
                    <div className="flex flex-row justify-evenly w-[300px] h-[50px] -mt-5">
                        <div className="flex flex-col">
                            <span className="text-[12px] font-medium">Days</span>
                            <span className="text-[32px] font-bold">03 <span className="relative left-1.5 -top-1.5 text-[#E07575] text-[23px]">:</span></span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[12px] font-medium">Hours</span>
                            <span className="text-[32px] font-bold">23 <span className="relative left-1.5 -top-1.5 text-[#E07575] text-[23px]">:</span></span>
                        </div>
                        
                        <div className="flex flex-col">
                            <span className="text-[12px] font-medium">Minutes</span>
                            <span className="text-[32px] font-bold">19 <span className="relative left-1.5 -top-1.5 text-[#E07575] text-[23px]">:</span></span>
                        </div> 
                        
                        <div className="flex flex-col">
                            <span className="text-[12px] font-medium">Seconds</span>
                            <span className="text-[32px] font-bold">56</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 items-center"> {/* Arrows Box */}
                    <SliderButton direction="left" />
                    <SliderButton direction="right" />
                </div>
            </div>
            
            
            <div>
                <ItemCard />
            </div>



            <div></div>
        </div>
    )
}