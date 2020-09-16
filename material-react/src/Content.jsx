import { Grid } from "@material-ui/core";
import React from "react";
import CoffeeCard from "./CoffeeCard";

function Content() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6} sm={4}>
        <CoffeeCard />
      </Grid>
      {/* <Grid item xs={6} sm={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={6} sm={4}>
        <CoffeeCard />
      </Grid> */}
    </Grid>
  );
}

export default Content;
