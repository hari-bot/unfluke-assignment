import "../utils/leaderboard.css";
import DropdownMenu from "./DropDownMenu";

const Leaderboard = ({ data }) => {
  return (
    <div className="leaderboard-container shadow-2xl">
      <div className="flex justify-between">
        <div>
          <div className="leaderboard-header">Basic Backtest</div>
          <div className="leaderboard-subheader">
            Performance Metrics Overview
          </div>
        </div>
        <div>
          <span className="font-semibold mr-2">Slippage: </span>{" "}
          <DropdownMenu />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Calmar Ratio</th>
            <th>Overall Profit</th>
            <th>Avg. Daily Profit</th>
            <th>Profit Win %(Day)</th>
            <th>Price (Rs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.rank}</td>
              <td className="underline hover:font-semibold">{item.name}</td>
              <td style={{ color: "green" }}>{item.calmarRatio}</td>
              <td>{item.overallProfit}</td>
              <td>{item.avgDailyProfit}</td>
              <td>{item.profitWinDay}</td>
              <td>{item.price}</td>
              <td>
                <button className="hover:underline hover:text-blue-400">
                  <a>{item.action}</a>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
