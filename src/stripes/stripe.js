import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
      height: "15vh",
      //   backgroundColor: "#c2c2c2",
      padding: 0,
      margin: 0,
    },
  },
}));
export default function Stripe(props) {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      <p> ima streip</p>
    </div>
  );
}
