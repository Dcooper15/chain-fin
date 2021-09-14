import React from "react";
import { Link, Route } from "react-router-dom";

const MainTopMovers = () => {
  return (
    <>
      <div>
        <Route path="/topmovers">
          <h2 className="sectorHeader">Today's Top Movers</h2>
          <div className="sectorMenu">
            <div class="row">
              <div class="column" className="financeSect">
                <h3 className="linkHeader">
                  <Link
                    to="/topmovers/compx"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    NASDAQ
                  </Link>
                </h3>
              </div>
              <div class="column" className="entertainmentSect">
                <h3 className="linkHeader">
                  <Link
                    to="/topmovers/spx.x"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    SPX
                  </Link>
                </h3>
              </div>
            </div>

            <div class="row">
              <div class="column" className="techSect">
                <h3 className="linkHeader">
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
