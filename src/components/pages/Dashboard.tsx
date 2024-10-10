import { IoEyeSharp } from "react-icons/io5";
import { useDashboard } from "../../hooks/useDashboard";
import { Button } from "../common/Button";
import Modal from "../layout/Modal";

function Dashboard() {
  const {
    clearStorage,
    data,
    showModal,
    setShowModal,
    dashboard,
    setDataDashBoard,
  } = useDashboard();
  return (
    <div className="dashboard-container">
      <Button btnTitle="Logout" disable={false} onChange={clearStorage} />
      <div className="dashboard-header">
        <h1>ProDashboard</h1>
      </div>
      <div className="dashboard-body">
        {data &&
          data.map((item, idx) => {
            return (
              <div key={idx} className="dashboard-item">
                <div className="dashboard-item-info">
                  <span>{item.id}</span> |<span>{item.name}</span> |
                  <span>{item.email}</span>
                </div>
                <IoEyeSharp
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setShowModal(true);
                    setDataDashBoard(item);
                  }}
                />
              </div>
            );
          })}
      </div>
      {showModal && (
        <div>
          <Modal
            info={dashboard}
            onChange={() => {
              setShowModal(false);
              setDataDashBoard(undefined);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
