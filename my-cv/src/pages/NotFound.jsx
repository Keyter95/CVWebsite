import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      404 Not Found
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}

export default NotFound;
