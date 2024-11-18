type Props = {
    direction?: string;
};

export default function Line({direction = "horizontal"} : Props) {
    return (
        <>
            {direction === "horizontal" ? (
                    <div className=" h-[1px] bg-gray-200 line-horizontal mt-5 relative -left-24"></div>
                ) : (
                    <div className="min-h-[384px] w-[1px] bg-gray-200 line-vertical mt-5 relative -top-10 ml-2"></div>
                )
            }
         </>
    )
}