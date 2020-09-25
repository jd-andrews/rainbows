import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stripe from "./stripe";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      height: "100%",
    },
  },
}));
export default function AllStripes() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stripe color="#FF0000" />
      <Stripe color="#FF7F00" />
      <Stripe color="#FFFF00" />
      <Stripe color="#00FF00" />
      <Stripe color="#0000FF" />
      <Stripe color="#4B0082" />
      <Stripe color="#9400D3" />
    </div>
  );
}
