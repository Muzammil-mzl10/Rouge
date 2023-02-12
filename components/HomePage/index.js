/** @format */

import React from "react";
import Header from "../Header";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import UpperSection from "./UpperSection";
function HomePage() {
  return (
    <div className="relative w-full h-fit">
      <UpperSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}

export default HomePage;
