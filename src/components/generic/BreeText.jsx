import "../../styles/generic/generic.css";

function BreeText({ fontSize, marginTop, color, Text }) {
  return (
    <div
      className="bree-text"
      style={{ fontSize: `${fontSize}rem`, marginTop: `${marginTop}px`, color: `${color}` }}
    >
      {Text}
    </div>
  );
}

export default BreeText;
