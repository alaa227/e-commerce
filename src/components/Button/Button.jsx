// Button.jsx
import React from "react";
import classNames from "classnames";

export default function Button({ isPrimary, children }) {
  return (
    <button
      className={classNames(
        "btn", // class أساسي من Bootstrap
        {
          "btn-primary": isPrimary, // لو الزرار أساسي
          "btn-secondary": !isPrimary, // لو مش أساسي
        }
      )}
    >
      {children}
    </button>
  );
}
