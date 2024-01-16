// components/MagazineList.js
import React from "react";

const MagazineList = () => {
  return (
    <div className="relative mx-auto my-10 max-w-screen-xl  p-0  ">
      <div className="mb-5 h-[1px]  bg-black"></div>

      <h1 className="my-3 text-xl font-medium">MASTER TALKS &gt;</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
        <div className="sm:col-span-5">
          <a href="#">
            <div
              className="overflow-hidden bg-cover text-center"
              style={{
                minHeight: "300px",
                backgroundImage:
                  "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')"
              }}
              title="Woman holding a mug"></div>
          </a>
          <div className="mt-3 flex flex-col justify-between rounded-b bg-white leading-normal lg:rounded-b-none lg:rounded-r">
            <div>
              <a
                href="#"
                className="text-xs font-medium uppercase text-red-600 transition duration-500 ease-in-out hover:text-gray-900">
                Election
              </a>
              <a
                href="#"
                className="mb-2 block text-2xl font-bold text-gray-900 transition duration-500 ease-in-out hover:text-red-600">
                Revenge of the Never Trumpers
              </a>
              <p className="mt-2 text-base text-gray-700">
                Meet the Republican dissidents fighting to push Donald
                Trump out of office—and reclaim their party
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:col-span-7 lg:grid-cols-3">
          {/* Repeat the following structure for each grid item */}
          <div className="">
            <a href="#">
              <div
                className="h-40 overflow-hidden bg-cover text-center"
                style={{
                  backgroundImage:
                    "url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1')"
                }}
                title="Woman holding a mug"></div>
            </a>
            <a
              href="#"
              className="text-md my-2 inline-block font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-red-600">
              Trump Steps Back Into Coronavirus Spotlight
            </a>
          </div>
          <div className="">
            <a href="#">
              <div
                className="h-40 overflow-hidden bg-cover text-center"
                style={{
                  backgroundImage:
                    "url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1')"
                }}
                title="Woman holding a mug"></div>
            </a>
            <a
              href="#"
              className="text-md my-2 inline-block font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-red-600">
              Trump Steps Back Into Coronavirus Spotlight
            </a>
          </div>
          <div className="">
            <a href="#">
              <div
                className="h-40 overflow-hidden bg-cover text-center"
                style={{
                  backgroundImage:
                    "url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1')"
                }}
                title="Woman holding a mug"></div>
            </a>
            <a
              href="#"
              className="text-md my-2 inline-block font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-red-600">
              Trump Steps Back Into Coronavirus Spotlight
            </a>
          </div>
          <div className="">
            <a href="#">
              <div
                className="h-40 overflow-hidden bg-cover text-center"
                style={{
                  backgroundImage:
                    "url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1')"
                }}
                title="Woman holding a mug"></div>
            </a>
            <a
              href="#"
              className="text-md my-2 inline-block font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-red-600">
              Trump Steps Back Into Coronavirus Spotlight
            </a>
          </div>
          <div className="">
            <a href="#">
              <div
                className="h-40 overflow-hidden bg-cover text-center"
                style={{
                  backgroundImage:
                    "url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1')"
                }}
                title="Woman holding a mug"></div>
            </a>
            <a
              href="#"
              className="text-md my-2 inline-block font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-red-600">
              Trump Steps Back Into Coronavirus Spotlight
            </a>
          </div>
          <div className="">
            <a href="#">
              <div
                className="h-40 overflow-hidden bg-cover text-center"
                style={{
                  backgroundImage:
                    "url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1')"
                }}
                title="Woman holding a mug"></div>
            </a>
            <a
              href="#"
              className="text-md my-2 inline-block font-semibold text-gray-900 transition duration-500 ease-in-out hover:text-red-600">
              Trump Steps Back Into Coronavirus Spotlight
            </a>
          </div>
          {/* Repeat for other items */}
        </div>
      </div>
    </div>
  );
};

export default MagazineList;
