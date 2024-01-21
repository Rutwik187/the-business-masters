import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card
} from "@material-tailwind/react";

function header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col justify-end gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg font-medium   text-black">
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg font-medium  text-black">
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg font-medium  text-black">
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg font-medium  text-black">
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
    </ul>
  );

  return (
    // <div className=" mt-4 max-h-[768px] w-full ">
    //   <div className="text-blue-gray-900 flex h-full w-full items-center justify-between">
    //     {/* <Typography
    //       as="a"
    //       href="#"
    //       className=" ml-20 cursor-pointer font-medium text-black">
    //       Material Tailwind
    //     </Typography> */}
    //     <img
    //       src="/img/img.png"
    //       alt="logo"
    //       className=" cursor-pointer font-medium text-black md:ml-20"
    //     />

    //     <h2 className=" mr-4 line-clamp-3 max-w-prose overflow-hidden">
    //       This is the "TBM" Advertisement template which need to me
    //       activate through the admin portal, it can be used to attract
    //       the attention of the user
    //     </h2>
    //   </div>
    //   <div className="sticky top-0 z-10 h-max max-w-full rounded-none bg-red-50 px-4 py-2 lg:px-8 lg:py-4">
    //     <div className="text-blue-gray-900 flex	 items-center justify-center  border-none">
    //       {/* <Typography
    //         as="a"
    //         href="#"
    //         className="mr-4 cursor-pointer  py-1.5 font-medium text-black">
    //         Material Tailwind
    //       </Typography> */}
    //       <div className="flex items-center gap-4	 border-none">
    //         <div className="mr-4 hidden lg:block">{navList}</div>
    //         <div className="flex items-center  gap-x-1">
    //           {/* <Button
    //             variant="text"
    //             size="sm"
    //             className="hidden lg:inline-block">
    //             <span>Log In</span>
    //           </Button> */}
    //           {/* <Button
    //             variant="gradient"
    //             size="sm"
    //             className="hidden lg:inline-block">
    //             <span>Sign in</span>
    //           </Button> */}
    //         </div>
    //         <IconButton
    //           variant="text"
    //           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
    //           ripple={false}
    //           onClick={() => setOpenNav(!openNav)}>
    //           {openNav ? (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               className="h-6 w-6"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               strokeWidth={2}>
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M6 18L18 6M6 6l12 12"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-6 w-6"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth={2}>
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M4 6h16M4 12h16M4 18h16"
    //               />
    //             </svg>
    //           )}
    //         </IconButton>
    //       </div>
    //     </div>
    //     <MobileNav open={openNav}>
    //       {navList}
    //       <div className="flex items-center gap-x-1">
    //         <Button fullWidth variant="text" size="sm" className="">
    //           <span>Log In</span>
    //         </Button>
    //         <Button
    //           fullWidth
    //           variant="gradient"
    //           size="sm"
    //           className="">
    //           <span>Sign in</span>
    //         </Button>
    //       </div>
    //     </MobileNav>
    //   </div>
    // </div>
    <div className="mt-4 max-h-[768px] w-full">
      <div className="text-blue-gray-900 flex w-full flex-col items-center justify-between md:h-full md:flex-row">
        <div className="mb-4 flex items-center md:mb-0">
          <img
            src="/img/img.png"
            alt="logo"
            className="cursor-pointer font-medium text-black md:ml-20"
          />
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>

        <h2 className="max-w-prose overflow-hidden text-center md:text-left">
          This is the "TBM" Advertisement template which needs to be
          activated through the admin portal. It can be used to
          attract the attention of the user.
        </h2>
      </div>
      <div className="sticky top-0 z-10 h-max max-w-full rounded-none bg-red-50 px-4 py-2 lg:px-8 lg:py-4">
        <div className="text-blue-gray-900 flex items-center justify-center border-none">
          <div className="flex items-center gap-4 border-none">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1"></div>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1"></div>
        </MobileNav>
      </div>
    </div>
  );
}
export default header;
