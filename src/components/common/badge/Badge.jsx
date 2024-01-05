import React from "react";
import "./Badge.css";

const BADGE_COLORS = ["grey", "yellow", "blue", "green"];

const Badge = (props) => {
  const badgeColors = BADGE_COLORS.includes(props.color) ? props.color : "grey";

  return <p className={`status ${props.color}`}>{props.status}</p>;
};

export default Badge;
