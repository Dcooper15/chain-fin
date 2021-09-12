import { Link } from "react-router-dom";

export const MenuItems = [
  {
    title: (
      <Link style={{ textDecoration: "none", color: "#fff", overflowX: "hidden"}} to="/">
        Home
      </Link>
    ),

    cName: "nav-links",
  },
  {
    title: (
      <Link style={{ textDecoration: "none", color: "#fff", overflowX: "hidden"}} to="/sector">
        Sectors
      </Link>
    ),

    cName: "nav-links",
  },
  {
    title: (
      <Link style={{ textDecoration: "none", color: "#fff", overflowX: "hidden" }} to="/topmovers">
        Top Movers
      </Link>
    ),
    cName: "nav-links",
  },
 
];
