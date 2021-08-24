import "../../styles/generic/generic.css";

function BreeText({fontSize, marginTop, Text}) {
  return (
    <div className="bree-text" style={{ fontSize: `${fontSize}rem`, marginTop: `${marginTop}px` }}>
      {Text}
    </div>
  );
}

export default BreeText;
