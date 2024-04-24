import React from "react";
import { FaHome, FaInfoCircle, FaChartLine, FaList, FaUser, FaCog, FaEnvelope, FaBell, FaCalendar, FaQuestionCircle, FaShoppingCart } from "react-icons/fa"; // Import icons from react-icons library
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        
        <img src="https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-142318.jpg" alt="User Logo" />
        <h1>Mounika Priya</h1>
        </div>
      <ul className="sidebar__menu">
        <li className="sidebar__item">
          <FaHome className="sidebar__icon" />
          <a href="#" className="sidebar__link">Home</a>
        </li>
        <li className="sidebar__item">
          <FaInfoCircle className="sidebar__icon" />
          <a href="#" className="sidebar__link">About</a>
        </li>
        <li className="sidebar__item">
          <FaChartLine className="sidebar__icon" />
          <a href="#" className="sidebar__link">Analytics</a>
        </li>
        <li className="sidebar__item">
          <FaList className="sidebar__icon" />
          <a href="#" className="sidebar__link">Product List</a>
        </li>
        <li className="sidebar__item">
          <FaUser className="sidebar__icon" />
          <a href="#" className="sidebar__link">Profile</a>
        </li>
        <li className="sidebar__item">
          <FaCog className="sidebar__icon" />
          <a href="#" className="sidebar__link">Settings</a>
        </li>
        <li className="sidebar__item">
          <FaEnvelope className="sidebar__icon" />
          <a href="#" className="sidebar__link">Inbox</a>
        </li>
        <li className="sidebar__item">
          <FaBell className="sidebar__icon" />
          <a href="#" className="sidebar__link">Notifications</a>
        </li>
        <li className="sidebar__item">
          <FaCalendar className="sidebar__icon" />
          <a href="#" className="sidebar__link">Calendar</a>
        </li>
        <li className="sidebar__item">
          <FaShoppingCart className="sidebar__icon" />
          <a href="#" className="sidebar__link">Orders</a>
        </li>
        <li className="sidebar__item">
          <FaQuestionCircle className="sidebar__icon" />
          <a href="#" className="sidebar__link">Help</a>
        </li>
        {/* Add more fields here */}
      </ul>
    </div>
  );
};

export default Navbar;
