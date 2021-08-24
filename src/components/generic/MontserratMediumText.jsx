import "../../styles/generic/generic.css";

function MontserratMediumText({fontSize, Text}) {
  return (
    <div className="montserrat-medium-text" style={{ fontSize: `${fontSize}rem` }}>
      {Text}
    </div>
  );
}

export default MontserratMediumText;
