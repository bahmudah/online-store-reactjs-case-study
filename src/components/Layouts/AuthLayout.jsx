import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import { CiDark, CiLight } from "react-icons/ci";
import Button from "../Elements/Button";

function AuthLayout(props) {
  // eslint-disable-next-line react/prop-types
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log(isDarkMode);
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <Button
          variant="absolute right-20 top-10 bg-slate-700"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <CiLight /> : <CiDark />}
        </Button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p
          className={`font-medium text-slate-500 mb-8  ${
            isDarkMode && "text-white"
          }`}
        >
          Welcome, Please enter your details
        </p>
        {children}
        <p className={`text-sm mt-5 text-center ${isDarkMode && "text-white"}`}>
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}

          {type === "login" ? (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          ) : (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}

export default AuthLayout;
