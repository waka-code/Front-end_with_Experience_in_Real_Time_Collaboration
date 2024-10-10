export function Button({
  btnTitle,
  onChange,
  disable,
}: {
  btnTitle: string;
  onChange: () => void;
  disable: boolean;
}) {
  return (
    <div className="btn-container">
      <button
        className={disable ? "disabled" : "btn"}
        onClick={disable ? undefined : onChange}
      >
        {" "}
        {btnTitle}{" "}
      </button>
    </div>
  );
}
