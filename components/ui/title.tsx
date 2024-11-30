type Props = {
    text?: string;
};

export default function Title ({text = "Today’s"} : Props) {
    return (
        <div className="text-baseRed font-semibold flex items-center gap-4">
            <div className="bg-baseRed w-[18px] h-[36px] rounded"></div>
            {text}
        </div>
    )
}