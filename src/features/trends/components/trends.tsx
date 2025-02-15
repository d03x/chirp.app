import React from "react";
import styles from "./styles/trends.module.scss";
import { ITrendsProps } from "../types/trends-props-interface";
import TrendItem from "./trend-item";
const Trends: React.FC<ITrendsProps> = ({ get }) => {
  const hastags = [
    {
      tag: "#JokowiMaju",
      jumlah: 150,
    },
    {
      tag: "#IndonesiaHebat",
      jumlah: 180,
    },
    {
      tag: "#PemimpinRakyat",
      jumlah: 170,
    },
    {
      tag: "#ProgresifBersama",
      jumlah: 160,
    },
    {
      tag: "#AyoBangkit",
      jumlah: 140,
    },
  ];

  return (
    <section className={styles.container}>
      {hastags.map((item, index) => {
        return <TrendItem key={index} text={item.tag} jumlah={item.jumlah} />;
      })}
    </section>
  );
};
export default Trends;
