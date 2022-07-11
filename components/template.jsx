import React from "react";

function Template({ children }) {
  return (
    <div className="font-montserrat bg-cyan-600 h-screen">
      <main>{children}</main>
    </div>
  );
}

export default Template;
