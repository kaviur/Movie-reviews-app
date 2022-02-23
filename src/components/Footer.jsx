import React from "react";
import "../css/footer.css";

const Footer = () => {
    return (
        <div className="main-footer">
          <div className="container">
            <div className="row">
              {/* Column1 */}
              <div className="col">
                <h4>Karen</h4>
                <h1 className="list-unstyled">
                  <li></li>
                </h1>
              </div>
              {/* Column2 */}
              <div className="col">
                <h4>Marlys</h4>
                <ul className="list-unstyled">
                  <li></li>
                </ul>
              </div>
              {/* Column3 */}
              <div className="col">
                <h4>Antonella</h4>
                <ul className="list-unstyled">
                  <li></li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <p className="col-sm">
                &copy;{new Date().getFullYear()} PELIS REVIEWS | All rights reserved |
                Terms Of Service | Privacy
              </p>
            </div>
          </div>
        </div>
      );
}

export default Footer