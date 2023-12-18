const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    children,
    variant = "bg-black",
    hover,
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white ${hover}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
