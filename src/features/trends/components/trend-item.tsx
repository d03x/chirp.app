"use client";
import React from "react";
import { ITrendItemProps } from "../types/trend-item-props-interface";
import styles from "./styles/trends-item.module.scss";
import Link from "next/link";
import { Sparklines, SparklinesCurve } from "react-sparklines";
const TrendItem: React.FC<ITrendItemProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        <Link href={`/search?tag=${props.text}`} className={styles.hastag}>{props.text}</Link>
        <div className={styles.item_detail}>
            <span>{props.jumlah}</span>
            <span>People talkin</span>
        </div>
      </div>
      <div className={styles.sparkline}>
        <Sparklines data={[32, 0, 33, 40, 50, 150]} limit={6} width={50} height={28}>
            <SparklinesCurve style={{ fill:"none" }} color="#818cf8"/>
        </Sparklines>
      </div>
    </div>
  );
};
export default TrendItem;
