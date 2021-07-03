import React, { useState, useEffect } from "react";

// Material-Ui
import { Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme) => ({
  backToTopBtn: {
    padding: "1rem",
    borderRadius: "50%",
    position: "fixed",
    bottom: "10%",
    right: "5rem",
    zIndex: "10000",
    cursor: "pointer",
    backgroundColor: "#202b34",
  },
}));

const BackToTopBtn = () => {
  const classes = useStyles();

  const [showBtn, setShowBtn] = useState(false);

  document.onscroll = (e) => {
    const scrollFromTop = e.target.scrollingElement.scrollTop;

    if (scrollFromTop > 600) return setShowBtn(true);
    return setShowBtn(false);
  };

  return (
    <Button
      style={!showBtn ? { display: "none" } : { display: "block" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={classes.backToTopBtn}
      variant="contained"
      color="primary"
    >
      <ArrowUpwardIcon style={{ fontSize: "2rem" }} />
    </Button>
  );
};

export { BackToTopBtn };
