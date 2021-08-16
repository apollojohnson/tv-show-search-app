// when search is clicked, but there's no text in the field
const Alert = ({ type, message }) => {
  return (
    <div className={`alert alert-${type}`}>
      {/* icon */}
      <i className="fas fa-exclamation"> </i> {message}
    </div>
  );
};

export default Alert;
