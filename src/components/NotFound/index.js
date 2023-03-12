import { Component } from "react";
import "./index.css";

class NotFound extends Component {
  render() {
    return (
      <>
        <div className="not-found-container">
          <div className="not-found-content">
            <img
              src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
              alt="not found"
              className="not-found-img-prop"
            />
            <h1>Page Not Found</h1>
            <p>We are sorry, the page you requested could not be found</p>
          </div>
        </div>
      </>
    );
  }
}

export default NotFound;
