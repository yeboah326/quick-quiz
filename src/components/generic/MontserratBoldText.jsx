import "../../styles/generic/generic.css";

function MontserratBoldText({fontSize, Text}) {
  return (
    <div className="montserrat-bold-text" style={{ fontSize: `${fontSize}rem` }}>
      {Text}
    </div>
  );
}

export default MontserratBoldText;
