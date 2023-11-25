import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { IoWarningOutline } from "react-icons/io5";

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
            <div className="pt-16 pl-14 text-4xl text-orange-700 font-bold flex-grow bg-center p-0 m-0">
                <div>Dashboard</div>
            </div>
                
            {/* Set white box */}
            <div className="items-center justify-center py-8 px-12 h-full">
                <div className="py-28 px-12 bg-white bg-opacity-90 rounded-xl overflow-hidden">
                <div className="grid grid-cols md:grid-cols-3 gap-10">
      
              {/* Set first box */}
              <div className="bg-green-400 w-100 pr-5 py-10 rounded-xl flex items-center bg-opacity-100">
                <div className="pr-4 ml-7">
                  <div className="text-lg font-medium text-gray-600">
                    Total Paket Berlangsung
                  </div>
                  <div className="font-bold text-3xl">
                  15</div>
                </div>
                <div className="overflow-hidden">
                <div className="mr-1 py-5 px-5 bg-green-500 bg-opacity-100 rounded-full">
                <BsBoxSeam color="white" size="38"/>
                </div>
                </div>
              </div>

              {/* Set second box */}
              <div className="bg-green-400 w-100 pr-5 py-10 rounded-xl flex items-center bg-opacity-100">
                <div className="pr-4 ml-7">
                  <div className="text-lg font-medium text-gray-600">
                    Total Paket Selesai
                  </div>
                  <div className="font-bold text-3xl">
                  7</div>
                </div>
                <div className="overflow-hidden">
                <div className="ml-12 py-4 px-4 bg-green-500 bg-opacity-100 rounded-full">
                <AiOutlineFileDone color="white" size="40"/>
                </div>
                </div>
              </div>

              {/* Set third box */}
              <div className="bg-pink-400 w-100 pr-5 py-10 rounded-xl flex items-center bg-opacity-100">
                <div className="pr-4 ml-7">
                  <div className="text-lg font-medium text-gray-600">
                    Total Paket Bermasalah
                  </div>
                  <div className="font-bold text-3xl">
                  5</div>
                </div>
                <div className="overflow-hidden">
                <div className="ml-2 py-4 px-4 bg-pink-500 bg-opacity-100 rounded-full">
                <IoWarningOutline color="white" size="40"/>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};