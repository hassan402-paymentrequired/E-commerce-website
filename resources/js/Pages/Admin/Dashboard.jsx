import React from 'react'
import AdminDashboardLayout from '../Layout/AdminDashboardLayout'
import BasicBars from '../Components/AdminChart'

const Dashboard = ({sales}) => {
  return (
    <AdminDashboardLayout>

      <div className="md:flex flex-row items-center gap-5 justify-evenly w-full mt-5 p-5 ">
                <div className="p-5 flex flex-col py-9 space-y-3 shadow-md flex-1 rounded-md">
                    <h2 className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-9 text-[#FFD147] font-bold"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <span className="text-black text-4xl font-bold">
                            10
                        </span>
                    </h2>

                    <p className="text-gray-500 text-sm ">
                        Total number of pending Order
                    </p>
                </div>

                <div className="p-5 flex flex-col py-9 space-y-3 shadow-md  flex-1 rounded-md">
                    <h2 className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-8 text-green-500"
                        >
                            <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
                            <path
                                fill-rule="evenodd"
                                d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <span className="text-black text-4xl font-bold">
                            10
                        </span>
                    </h2>

                    <p className="text-gray-500 text-sm">
                        Total number of Completed appointments
                    </p>
                </div>

                <div className="p-5 flex flex-col py-9 space-y-3 shadow-md  flex-1 rounded-md">
                    <h2 className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-9 text-red-600"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <span className="text-black text-4xl font-bold">
                            10
                        </span>
                    </h2>

                    <p className="text-gray-500 text-sm">
                        Total number of canceled order
                    </p>
                </div>
            </div>

<div className="flex mt-10 p-5">
  {/* chart */}
  <div className="flex flex-col">
    <div className="text-2xl text-black py-3">Sales summary</div>
    <BasicBars/>
  </div>

  {/* sales overview */}
  <div className="flex flex-col gap-4 a">
    <h2 className="text-xl text-black">Sale Overview</h2>

    <div className="flex flex-col">
      {sales.length ? sales.map(sale => (
        <>hello</>
      )): (
        <div className="text-base text-gray-600 text-center text">No Sale at the moment</div>
      )}
    </div>
  </div>
</div>

    </AdminDashboardLayout>
  )
}

export default Dashboard