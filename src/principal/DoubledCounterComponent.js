import React from "react";
import { useRecoilValue } from "recoil";
import { doubledCount } from "./selector";

const DoubledCounterComponent = () => {
  const doubledValue = useRecoilValue(doubledCount);

  return (
    <div>
      <p>Doubled Count: {doubledValue}</p>
    </div>
  );
};

export default DoubledCounterComponent;
