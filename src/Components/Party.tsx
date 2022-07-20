/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
// @ts-ignore
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
};
