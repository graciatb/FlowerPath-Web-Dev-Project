export default async function PackageTable () {
    const listpaket = [
        {
          name: 'Tiger',
          address: 'Jalan Tubagus Ismail 1 No 17',
          flower: 'Mawar',
          phonenum: '081510102525',
          note: '-'
        },
      ]

  return (
    <div className="mt-2 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-100 p-2 md:pt-0">
          <div className="md:hidden">
            {listpaket?.map((paket, index) => (
              <div
                key={index}
                className="mb-3 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between w-full pb-4">
                  <div>
                    <div className="mb-2 flex items-center font-semibold">
                      <div>{paket.name}</div>
                    </div>
                    <div className="text-sm text-gray-500">{paket.address}</div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-2">
                  <div>
                    <div className="text-l font-medium text-gray-800">
                    <div>{paket.flower}</div>
                    </div>
                    <div className="text-xs font-regular text-gray-500">
                    <div>{paket.phonenum}</div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                  <button className="rounded-full border border-gray-500 h-7 w-32 bg-white bg-opacity-90 rounded-full hover:bg-pink-600 text-sm text-pink-600 font-semibold hover:text-white ">
                        On Hold ▾
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-10 py-5 font-medium sm:pl-6">
                  No
                </th>
                <th scope="col" className="px-10 py-5 font-medium">
                  Nama Penerima
                </th>
                <th scope="col" className="px-9 py-5 font-medium">
                  Alamat Tujuan
                </th>
                <th scope="col" className="px-9 py-5 font-medium">
                  Jenis Bunga
                </th>
                <th scope="col" className="px-9 py-5 font-medium">
                  Nomor Telepon
                </th>
                <th scope="col" className="px-9 py-5 font-medium">
                  Catatan Pengiriman
                </th>
                <th scope="col" className="px-11 py-5 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {listpaket?.map((paket, index) => (
                <tr
                  key={index}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                <td className="whitespace-nowrap py-3">
                    <div className="flex justify-center items-center gap-3">
                      <div>{index+1}</div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 ">
                    <div className="flex justify-center items-center gap-3">
                      <div>{paket.name}</div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 ">
                    <div className="flex justify-center items-center gap-3">
                      <div>{paket.address}</div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 ">
                    <div className="flex justify-center items-center gap-3">
                      <div>{paket.flower}</div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 ">
                    <div className="flex justify-center items-center gap-3">
                      <div>{paket.phonenum}</div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 ">
                    <div className="flex justify-center items-center gap-3">
                      <div>{paket.note}</div>
                    </div>
                  </td>
                  <td className="flex whitespace-nowrap py-3 pl-6 pr-3">
                    <button className="rounded-full border border-gray-500 h-7 w-full bg-white bg-opacity-90 rounded-full hover:bg-pink-600 text-sm text-pink-600 font-semibold hover:text-white ">
                        On Hold ▾
                    </button>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
