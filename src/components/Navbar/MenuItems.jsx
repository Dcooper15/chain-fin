import { Link } from "react-router-dom";

export const MenuItems = [
  {
    title: (
      <Link style={{ textDecoration: "none", color: "#d4af37", overflowX: "hidden"}} to="/">
        Home
      </Link>
    ),

    cName: "nav-links",
  },
  {
    title: (
      <Link style={{ textDecoration: "none",  color: "#d4af37", overflowX: "hidden"}} to="/sector">
        Sectors
      </Link>
    ),

    cName: "nav-links",
  },
  {
    title: (
      <Link style={{ textDecoration: "none",  color: "#d4af37", overflowX: "hidden" }} to="/topmovers">
        Top Movers
      </Link>
    ),
    cName: "nav-links",
  },
 
];
