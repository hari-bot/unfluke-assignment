import "../utils/leaderboard.css";

const TransanctionsTable = ({ data }) => {
  return (
    <div className="leaderboard-container shadow-2xl">
      <table>
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td
                className={`${
                  item.status === "Completed"
                    ? " text-green-500"
                    : item.status === "Pending"
                    ? " text-yellow-500"
                    : " text-red-500"
                } font-semibold`}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransanctionsTable;
