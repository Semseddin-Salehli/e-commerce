import FlashSales from './flash-sales'
import { Sidebar } from './side-bar'


export function LandingPage() {
    return (
        <div className='h-[450px] py-5'>
            <Sidebar />
            <FlashSales />
        </div>
    )
}