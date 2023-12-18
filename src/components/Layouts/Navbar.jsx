import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { CiDark, CiLight } from "react-icons/ci";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {username}
      <Button variant="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>

      <div className="flex items-center bg-gray-800 p-2 rounded-md mx-5">
        Item : {totalCart} | price: ${total}
      </div>
      <Button variant="bg-slate-800" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <CiLight /> : <CiDark />}
      </Button>
    </div>
  );
};

export default Navbar;
