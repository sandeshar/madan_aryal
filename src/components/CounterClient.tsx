"use client";
import React from "react";
import CountUp from "react-countup";

type Props = {
  end: number | string;
  suffix?: string;
};

const CounterClient: React.FC<Props> = ({ end, suffix }) => {
  return <CountUp end={Number(end)} suffix={suffix} duration={2} />;
};

export default CounterClient;
