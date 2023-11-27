import Search from '@/components/search';
import PackageTable from '@/components/packagetable';
import Pagination from '@/components/pagination';

export default async function Page() {
    return (
        <div className="flex flex-col h-screen bg-slate-50">

            {/* Set header */}        
            <div className="p-7 pl-14 bg-gray-200">
                <div className="flex justify-left space-x-1">
                    <div> Welcome,</div>
                    <div className = "font-bold">
                    <div> Michael Sihotang </div>
                    </div>
                </div>
            </div>

            {/* Set text */}
            <div className="pt-7 pl-14 text-2xl text-orange-700 font-bold flex-grow bg-center p-0 m-0">
                <div>Daftar Paket</div>
            </div> 
 
            {/* Set white box */}
            <div className="flex items-center justify-center h-full"> 
                <div className="box-content h-96 w-11/12 pb-32 bg-white bg-opacity-90 rounded-xl">
                
                {/* Set search bar */}
                <div className="flex items-center pt-4 px-8 pb-4">
                    <Search placeholder="Cari paket"/>
                </div>

                {/* Set button grid*/} 
                <div className="px-8 grid grid-cols-3 gap-3">

                    {/* Set button 1 */} 
                    <button className="rounded-full h-7 w-full bg-green-400 bg-opacity-90 rounded-full hover:bg-green-500 text-sm text-green-600 font-semibold hover:text-white ">
                        Berlangsung
                    </button>

                    {/* Set button 2 */} 
                    <button className="rounded-full h-7 w-full bg-green-400 bg-opacity-90 rounded-full hover:bg-green-500 text-sm text-green-600 font-semibold hover:text-white ">
                        Bermasalah
                    </button>

                    {/* Set button 3 */} 
                    <button className="rounded-full h-7 w-full bg-green-400 bg-opacity-90 rounded-full hover:bg-green-500 text-sm text-green-600 font-semibold hover:text-white ">
                        Selesai
                    </button>
                </div>

                <div className="items-center pt-2 px-8 pb-0 w-full overflow-y-auto">
                    <PackageTable/>
                </div>

                <div className="sm:pt-1 sm:pb-3 justify-center xl:pt-4 2xl:px-8 xl:pb-4 w-full flex">
                    <Pagination totalPages={5} />
                    </div>
                </div>
            </div>
        </div>
    )
}