import React from "react";
import { Link, Route } from "react-router-dom";

const MainTopMovers = () => {
  return (
    <>
      <div>
        <Route path="/topmovers">
          <h2 className="sectorHeader">Today's Top Movers</h2>
          <div className="sectorMenu">
            <div className="menuRow">
              <div className="columnLeft">
                <h3 className="linkMenu">
                  <Link
                    to="/topmovers/compx"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    NASDAQ
                  </Link>
                </h3>
              </div>
              <div className="columnRight">
                <h3 className="linkMenu">
                  <Link
                    to="/topmovers/spx.x"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    SPX
                  </Link>
                </h3>
              </div>
            </div>

            <div className="menuRowExtra">
              <div className="columnLeft">
                <h3 className="linkMenu">
                  <Link
                    to="/topmovers/dji"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    DJI
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </Route>
      </div>
    </>
  );
};

export default MainTopMovers;
