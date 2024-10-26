import ReactDOM from "react-dom";

const ModalPortal = (props) => {
    const Backdrop = (props) => {
        return props.show ? (
          <div className="backdrop" onClick={props.onClick}></div>
        ) : null;
      };
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop show={props.show} onClick={props.onClick} />,
        document.getElementById("root")
      )}
      {ReactDOM.createPortal(
        props.children,
        document.getElementById("root")
      )}
    </div>
  );
};

export default ModalPortal;
