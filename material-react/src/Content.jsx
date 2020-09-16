import { Grid } from "@material-ui/core";
import React from "react";
import CoffeeCard from "./CoffeeCard";
import data from "./data";

class Content extends React.Component {
  constructor() {
    super();
    this.state = data;
  }
  render() {
    const coffeePrice = () => Math.floor(Math.random() * 100) + 20;
    const { coffees } = this.state;
    return (
      <Grid container spacing={4}>
        {coffees
          .filter((coffee, idx) => idx < 10)
          .map((coffee, index) => (
            <Grid key={index} item xs={6} sm={4}>
              <CoffeeCard {...coffee} subtitle={coffeePrice() + ".99$"} />
            </Grid>
          ))}

        {/* <Grid item xs={6} sm={4}>
        <CoffeeCard />
      </Grid>
      <Grid item xs={6} sm={4}>
        <CoffeeCard />
      </Grid> */}
      </Grid>
    );
  }
}

export default Content;
