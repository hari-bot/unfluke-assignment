import { LuWallet } from "react-icons/lu";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import { MdOutlineArrowCircleDown } from "react-icons/md";

const Funds = () => {
  return (
    <>
      <div className="w-full text-4xl font-semibold mt-10 ml-10 ">Funds</div>
      <button className="mt-10 ml-11 bg-[#48c3b5] text-white text-xl rounded-full px-3 py-2 font-semibold">
        + Add Funds
      </button>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex mt-10 ml-10">
          {" "}
          <div className="bg-white flex px-10 py-8 rounded-xl shadow-xl">
            <div>
              <h2 className="text-3xl font-semibold ">₹3454.23</h2>
              <h3 className="text-gray-500 mt-2 font-light">
                Available Amount
              </h3>
            </div>
            <span className="ml-8 text-4xl text-blue-500">
              <LuWallet />
            </span>
          </div>
        </div>

        <div className="flex mt-10 ml-10">
          {" "}
          <div className="bg-white flex px-10 py-8 rounded-xl shadow-xl">
            <div>
              <h2 className="text-3xl font-semibold ">₹454.23</h2>
              <h3 className="text-gray-500 mt-2 font-light">PayIns</h3>
            </div>
            <span className="ml-8 text-4xl text-green-500">
              <MdOutlineArrowCircleDown />
            </span>
          </div>
        </div>

        <div className="flex mt-10 ml-10">
          {" "}
          <div className="bg-white flex px-10 py-8 rounded-xl shadow-xl">
            <div>
              <h2 className="text-3xl font-semibold ">₹1454.23</h2>
              <h3 className="text-gray-500 mt-2 font-light">PayOuts</h3>
            </div>
            <span className="ml-8 text-4xl text-red-500">
              <MdOutlineArrowCircleUp />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
