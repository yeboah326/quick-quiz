import "../../styles/generic/generic.css";

function MontserratLightText({fontSize, Text, color}) {
  return (
    <div className="montserrat-light-text" style={{ fontSize: `${fontSize}rem`, color: `${color}`}}>
      {Text}
    </div>
  );
}

export default MontserratLightText;
