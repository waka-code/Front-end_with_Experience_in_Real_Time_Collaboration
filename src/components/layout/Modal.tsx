import { PropsData } from "../../hooks/useDashboard";
import { Button } from "../common/Button";

function Modal({
  info,
  onChange,
}: {
  info: PropsData | undefined;
  onChange: () => void;
}) {
  return (
    <div className="modal-container">
      <Button btnTitle={"close"} onChange={onChange} disable={false} />
      {info && (
        <div className="modal-info">
          <span>{info.id}</span>
          <span>{info.name}</span>
          <span>{info.email}</span>
          <span>{info.body}</span>
        </div>
      )}
    </div>
  );
}

export default Modal;
