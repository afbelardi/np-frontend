import { TbCheckupList } from 'react-icons/tb';

export default function Hero () {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full mt-16">
                <h1 className="p-4 text-4xl font-bold text-center text-white font-monserrat">National Parks Finder</h1>
                <ul className="flex flex-col items-center w-full gap-2 mt-10">
                    <li className='flex items-center gap-2 w-72'>
                      <TbCheckupList className='w-7 h-7'/>
                      <p className='text-sm'>Search for National Park sites by state</p>
                    </li>
                    <li className='flex items-center gap-2 w-72'>
                      <TbCheckupList className='w-8 h-8'/>
                      <p className='text-sm'>Get specific information about each location</p>
                    </li>
                    <li className='flex items-center gap-2 w-72'>
                      <TbCheckupList className='w-7 h-7'/>
                      <p className='text-sm'>Create a list of favorites</p>
                    </li>
                </ul>
            </div>
        </>
    )
}