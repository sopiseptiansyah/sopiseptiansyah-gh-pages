import React from "react";

// set the defaults
const ColorContext = React.createContext({
  color: "primary",
  setColor: (color: string) => {
    void(color);
  }
});

export default ColorContext;
