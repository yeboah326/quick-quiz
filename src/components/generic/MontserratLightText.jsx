import "../../styles/generic/generic.css";

function MontserratLightText({fontSize, Text}) {
  return (
    <div className="montserrat-light-text" style={{ fontSize: `${fontSize}rem` }}>
      {Text}
    </div>
  );
}

export default MontserratLightText;
