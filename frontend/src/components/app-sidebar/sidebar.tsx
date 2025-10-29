import "./sidebar.css";
import avatarImage from "../../assets/images/avatar-mock.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

interface User {
  name: string;
  email: string;
}

const mockUser: User = {
  name: "Victor Luna",
  email: "victor.luna@email.com",
};

function AppSidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    alert("Logout mockado — apenas para teste visual.");
  };

  // Simula carregamento do usuário
  useEffect(() => {
    const timer = setTimeout(() => {
      setUser(mockUser);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <nav id="sidebar" className={isOpen ? "open-sidebar" : ""}>
        <div id="sidebar-content" style={{ textAlign: "center", padding: "20px" }}>
          <p>Carregando...</p>
        </div>
      </nav>
    );
  }

  return (
    <nav id="sidebar" className={isOpen ? "open-sidebar" : ""}>
      <div id="sidebar-content">
        <div id="user">
          <img src={avatarImage} id="user-avatar" alt="Avatar" />
          <p id="user-infos">
            <span className="item-description">{user?.name}</span>
            <span className="item-description">{user?.email}</span>
          </p>
        </div>
        <ul id="side-items">
          <li>
            <NavLink to="/home" className={({ isActive }) => `side-item ${isActive ? "active" : ""}`}>
              <i className="fa-solid fa-house"></i>
              <span className="item-description">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/insights" className={({ isActive }) => `side-item ${isActive ? "active" : ""}`}>
              <i className="fa-solid fa-file-lines"></i>
              <span className="item-description">Análises</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => `side-item ${isActive ? "active" : ""}`}>
              <i className="fa-solid fa-gear"></i>
              <span className="item-description">Configurações</span>
            </NavLink>
          </li>
        </ul>
        <button id="open-btn" onClick={toggleSidebar}>
          <i id="open-btn-icon" className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div id="logout">
        <button id="logout-btn" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
          <span className="item-description">Logout</span>
        </button>
      </div>
    </nav>
  );
}

export default AppSidebar;
