import { Link } from "react-router-dom";

export const MenuItems = [
  {
    title: (
      <Link style={{ textDecoration: "none", color: "#d4af37", overflowX: "hidden"}} to="/">
        Home
      </Link>
    )

  
  },
  {
    title: (
      <Link style={{ textDecoration: "none",  color: "#d4af37", overflowX: "hidden"}} to="/sector">
        Sectors
      </Link>
    )

  },
  {
    title: (
      <Link style={{ textDecoration: "none",  color: "#d4af37", overflowX: "hidden" }} to="/topmovers">
        Top Movers
      </Link>
    )
   
  },
 
];
