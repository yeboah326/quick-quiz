import "../../styles/generic/generic.css";
import { MontserratMediumText } from "./index";

function Button({ Text, onClick }) {
  return (
    <div>
      <button
        className={"big-button"}
        type={"submit"}
        style={{ color: "white" }}
        onClick={onClick}
      >
        <MontserratMediumText Text={Text} fontSize={1.2} />
      </button>
    </div>
  );
}

export default Button;
