import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FaRegPaperPlane } from "react-icons/fa";
import { App } from "./App";

const Spinner = (
  <div className="centered">
    <FaRegPaperPlane className="bounce" />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={Spinner}>
      <App />
    </Suspense>
  </React.StrictMode>
);
