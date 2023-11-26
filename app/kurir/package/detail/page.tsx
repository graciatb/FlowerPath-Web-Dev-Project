import { FaArrowLeft } from "react-icons/fa";
import PackageTable from "@/components/detailpackagetable";

export default async function Page() {
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Set header */}
      <div className="p-7 pl-14 bg-gray-200">
        <div className="flex justify-left space-x-1">
          <div> Welcome,</div>
          <div className="font-bold">
            <div> Michael Sihotang </div>
          </div>
        </div>
      </div>

      {/* Set text */}
      <div className="flex pt-7 pl-14">
        {/* Set arrow back */}
        <button>
          <FaArrowLeft color="pink-500" hover="bg-pink-200" />
        </button>
        <div className="pl-4 flex text-2xl text-orange-700 font-bold flex-grow bg-center p-0 m-0">
          <div>Detail Paket</div>
        </div>
      </div>

      {/* Set white box */}
      <div className="flex items-center justify-center h-full">
        <div className="box-content h-96 w-11/12 pb-32 bg-white bg-opacity-90 rounded-xl">
          {/* Set header box 1 */}
          <div className="flex items-center pt-6 px-8 pb-0">
            <div className="rounded-md h-8 w-full bg-green-400 bg-opacity-90">
              <div className="py-1 justify-center w-full flex text-md font-semibold text-green-600">
                Keterangan Paket
              </div>
            </div>
          </div>

          {/* Set table */}
          <div className="items-center pt-0 px-8 pb-0 w-full overflow-y-auto">
            <PackageTable />
          </div>

          {/* Set header box 2 */}
          <div className="flex items-center pt-6 px-8 pb-0">
            <div className="rounded-md h-8 w-full bg-green-400 bg-opacity-90">
              <div className="pb-2 py-1 justify-center w-full flex text-md font-semibold text-green-600">
                Lapor Masalah
              </div>
            </div>
          </div>

          {/* Set gray box */}
          <div className="flex items-center px-8 pb-2 pt-2">
            <div className="rounded-md sm:h-40 xl:h-48 w-full bg-gray-100 bg-opacity-90">

            {/* Set upload photo box */}
            <div className="flex items-center sm:pt-4 md:pt-6 pl-8 w-full overflow-hidden">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col w-96 xl:h-36 sm:h-28 border-2 border-pink-400 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center pt-6 pb-6">
                  <svg
                    className="w-8 h-8 xl:mt-2 xl:mb-4 md:mb-2 sm:mb-4 text-pink-600 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="pl-1 pr-1 xl:mb-2 sm:mb-12 md:mb-8 text-sm text-gray-500 dark:text-gray-400 sm:text-xs">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
              <div className="ml-6 rounded-md md:h-20 sm:h-20 xl:h-32 w-0.5 bg-pink-600 bg-opacity-90">
              </div>

              <div className="pl-5 mt-0 mb-2 sm:pt-2 md:pt-0 sm:text-sm xl:text-md text-orange-700 font-bold flex-grow bg-center p-0 m-0">
                 <div>Catatan Laporan</div>
                 <div className = "text-black font-medium text-sm">
              <div className="relative mt-2 pr-5 mb-0 h-full w-full" data-te-input-wrapper-init>
                <textarea
                className="peer block xl:h-28 md:h-20 sm:h-20 w-full rounded border-1 border-gray-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                rows = {4}
                placeholder=" "></textarea>
                <label
                htmlFor="exampleFormControlTextarea1"
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                Input text
                </label>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="justify-center sm:pt-1 xl:pt-3 2xl:px-8 xl:pb-4 w-full flex">
            <button className="rounded-full xl:h-8 w-48 bg-pink-600 bg-opacity-90 rounded-full hover:bg-pink-400 xl:text-sm sm:text-s text-white font-semibold hover:text-pink-600 peer-disabled:text-transparent peer-placeholder-shown:text-transparent after:text-transparent">
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}