import Image from "next/image";

function VerticalCards() {
  return (
    <div className="mx-auto  p-5 sm:p-10 md:p-16">
      <h1 className="mx-0 my-10 p-0 text-center text-2xl font-semibold leading-tight  ">
        MAGZINES OF THE YEAR
      </h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        <div
          className="relative flex w-full items-end justify-start bg-cover bg-center text-left"
          style={{
            height: "450px",
            backgroundImage:
              "url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)"
          }}>
          <div className="absolute bottom-0 left-0 right-0 top-0 mt-20 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute left-0 right-0 top-0 mx-5 mt-2 flex items-center justify-between">
            <a
              href="#"
              className="bg-red-600 px-5 py-2 text-xs uppercase text-white transition duration-500 ease-in-out hover:bg-white hover:text-red-600">
              Popular
            </a>
            <div className="font-regular flex flex-col justify-start text-white">
              <span className="leading-0 text-3xl font-semibold">
                25
              </span>
              <span className="-mt-3">May</span>
            </div>
          </div>
          <main className="z-10 p-5">
            <a
              href="#"
              className="text-md font-regular font-medium leading-7 tracking-tight text-white hover:underline">
              Dr. Abdullah Abdullah's Presidential Election Campaign
            </a>
          </main>
        </div>
        <div
          className="relative flex w-full items-end justify-start bg-cover bg-center text-left"
          style={{
            height: "450px",
            backgroundImage:
              "url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)"
          }}>
          <div className="absolute bottom-0 left-0 right-0 top-0 mt-20 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute left-0 right-0 top-0 mx-5 mt-2 flex items-center justify-between">
            <a
              href="#"
              className="bg-red-600 px-5 py-2 text-xs uppercase text-white transition duration-500 ease-in-out hover:bg-white hover:text-red-600">
              Popular
            </a>
            <div className="font-regular flex flex-col justify-start text-white">
              <span className="leading-0 text-3xl font-semibold">
                25
              </span>
              <span className="-mt-3">May</span>
            </div>
          </div>
          <main className="z-10 p-5">
            <a
              href="#"
              className="text-md font-regular font-medium leading-7 tracking-tight text-white hover:underline">
              Dr. Abdullah Abdullah's Presidential Election Campaign
            </a>
          </main>
        </div>
        <div
          className="relative flex w-full items-end justify-start bg-cover bg-center text-left"
          style={{
            height: "450px",
            backgroundImage:
              "url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)"
          }}>
          <div className="absolute bottom-0 left-0 right-0 top-0 mt-20 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute left-0 right-0 top-0 mx-5 mt-2 flex items-center justify-between">
            <a
              href="#"
              className="bg-red-600 px-5 py-2 text-xs uppercase text-white transition duration-500 ease-in-out hover:bg-white hover:text-red-600">
              Popular
            </a>
            <div className="font-regular flex flex-col justify-start text-white">
              <span className="leading-0 text-3xl font-semibold">
                25
              </span>
              <span className="-mt-3">May</span>
            </div>
          </div>
          <main className="z-10 p-5">
            <a
              href="#"
              className="text-md font-regular font-medium leading-7 tracking-tight text-white hover:underline">
              Dr. Abdullah Abdullah's Presidential Election Campaign
            </a>
          </main>
        </div>
        <div
          className="relative flex w-full items-end justify-start bg-cover bg-center text-left"
          style={{
            height: "450px",
            backgroundImage:
              "url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)"
          }}>
          <div className="absolute bottom-0 left-0 right-0 top-0 mt-20 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute left-0 right-0 top-0 mx-5 mt-2 flex items-center justify-between">
            <a
              href="#"
              className="bg-red-600 px-5 py-2 text-xs uppercase text-white transition duration-500 ease-in-out hover:bg-white hover:text-red-600">
              Popular
            </a>
            <div className="font-regular flex flex-col justify-start text-white">
              <span className="leading-0 text-3xl font-semibold">
                25
              </span>
              <span className="-mt-3">May</span>
            </div>
          </div>
          <main className="z-10 p-5">
            <a
              href="#"
              className="text-md font-regular font-medium leading-7 tracking-tight text-white hover:underline">
              Dr. Abdullah Abdullah's Presidential Election Campaign
            </a>
          </main>
        </div>

        {/* Repeat the above structure for other cards */}
        {/* ... */}
      </div>
    </div>
  );
}

export default VerticalCards;
