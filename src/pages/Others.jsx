import HomeLayout from "../layouts/HomeLayout";
import { BsCupHotFill } from "react-icons/bs";
function Others() {
  return (
    <HomeLayout>
      <div className="flex justify-center items-center bg-white min-w-[83vw] max-w-[83vw]">
        <div className="flex justify-center items-center rounded-lg flex-col">
          <BsCupHotFill className="text-9xl" />
        </div>
      </div>
    </HomeLayout>
  );
}

export default Others;
