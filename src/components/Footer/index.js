import { Box, Paper } from "@material-ui/core";
import React from "react";

function Footer() {
  return (
    <Paper>
      <Box bgcolor="info.main">
        <p
          style={{
            color: "#fff",
            textAlign: "center",
            padding: "20px",
            marginBottom: "0px",
          }}
        >
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="mailto:parameshkrisna98@gmail.com"
          >
            parameshkrisna98@gmail.com
          </a>
        </p>
      </Box>
    </Paper>
  );
}

export default Footer;
