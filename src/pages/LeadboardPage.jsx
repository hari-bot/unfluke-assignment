import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import SecondaryNavbar from "../components/SecondaryNavbar";
import LeaderboardTable from "../components/LeaderBoardTable";
import { leaderboardData } from "../utils/data.js";

const LeadboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-7xl mx-auto">
        <SecondaryNavbar />
        <Heading value="LeaderBoards" />
        <LeaderboardTable data={leaderboardData} />
      </div>
    </>
  );
};

export default LeadboardPage;
