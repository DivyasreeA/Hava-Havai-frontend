import { Link } from "react-router-dom";
import SideMenu from "../components/SideMenu";
function HomeLayout({ children }) {
  const imageAddress =
    "https://res.cloudinary.com/dgj39147s/image/upload/v1720105702/4db45efd3340ef80a549531cff981068_iajw10.jpg";
  return (
    <div className="h-[100vh] flex bg-[#F5F5F5] gap-1 flex-col">
      <div className="h-[9vh] w-auto bg-[#FFFFFF] flex justify-between items-center p-4">
        <Link
          to={"/"}
          className="text-[#000000] w-[136px] h-[20px] left-[20px] font-bold text-2xl subpixel-antialiased font-sans"
        >
          hava havai
        </Link>
        <img
          src={imageAddress}
          alt="Profile"
          className="w-[32px] h-[32px] border rounded-xl"
        />
      </div>
      <div className="flex gap-1 min-h[91vh] ">
        <SideMenu />
        {children}
      </div>
    </div>
  );
}

export default HomeLayout;