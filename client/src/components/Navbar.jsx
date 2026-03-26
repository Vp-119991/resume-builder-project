import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/features/authSlice";

const Navbar = () => {
  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const logoutUser = () => {
    navigate("/");
    dispatch(logout())
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200 shadow-sm">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.svg" alt="logo" className="h-10 w-auto" />
       
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* User Name */}
          <div className="hidden sm:flex items-center gap-3 bg-linear-to-r from-[#eef2ff] to-[#e0f2fe] px-4 py-2 rounded-full">
            <div className="w-8 h-8 rounded-full bg-linear-to-r from-[#6a11cb] to-[#2575fc] flex items-center justify-center text-white text-sm font-semibold">
              {user?.name?.charAt(0)}
            </div>
            <p className="text-slate-700 font-medium text-sm">
              Hi, {user?.name}
            </p>
          </div>

          {/* Logout Button */}
          <button
            onClick={logoutUser}
            className="flex items-center gap-2 px-6 py-2 rounded-full 
            bg-linear-to-r from-[#141e30] to-[#243b55] 
            text-white font-medium shadow-md 
            hover:shadow-lg hover:scale-105 
            transition-all duration-300 active:scale-95"
          >
            <LogOut size={16} />
            Logout
          </button>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
