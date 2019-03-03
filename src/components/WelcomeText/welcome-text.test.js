import React from "react";
import ReactDOM from "react-dom";
import { WelcomeText } from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WelcomeText />, div);
  ReactDOM.unmountComponentAtNode(div);
});
