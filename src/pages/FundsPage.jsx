import Funds from "../components/Funds";
import Navbar from "../components/Navbar";
import SecondaryNavbar from "../components/SecondaryNavbar";
import TransanctionsTable from "../components/TransanctionsTable";
import { transitionData } from "../utils/data.js";

const FundsPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-7xl mx-auto">
        <SecondaryNavbar />
        <Funds />
        <div className="w-full text-4xl font-semibold mt-12 ml-10 ">
          Transanctions
        </div>
        <TransanctionsTable data={transitionData} />
      </div>
    </>
  );
};

export default FundsPage;
