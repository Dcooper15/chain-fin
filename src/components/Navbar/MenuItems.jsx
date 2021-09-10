import { Link } from "react-router-dom";

export const MenuItems = [
  {
    title: (
      <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
        Home
      </Link>
    ),

    cName: "nav-links",
  },
  {
    title: (
      <Link style={{ textDecoration: "none", color: "#fff" }} to="/sector">
        Sectors
      </Link>
    ),

    cName: "nav-links",
  },
  {
    title: (
      <Link style={{ textDecoration: "none", color: "#fff" }} to="/topmovers">
        Top Movers
      </Link>
    ),
    cName: "nav-links",
  },
 
];
