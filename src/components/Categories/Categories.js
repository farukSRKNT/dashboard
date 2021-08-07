import React from "react";
import { makeStyles } from "@material-ui/core";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Label
  } from "recharts";

import SimpleSelect from '../SimpleSelect'

const useStyles = makeStyles((theme) => ({
  categoriesWrapper: {
    width: '360px',
    height: '351px',
    marginRight: '17px',
    marginBottom: '17px'
  },
  upperBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  categoriesColorsWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  colorWrapper: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  category: {
    display: 'flex'
  },
  colorSquare: {
    width: '12px',
    height: '12px',
    borderRadius: '3px'
  }
}))

const PieChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Categories(props) {
  const classes = useStyles();

return (
  <div className={classes.categoriesWrapper}>
    <div className={classes.upperBar}>
      <div>Categories</div>
      <SimpleSelect />
    </div>
    <ResponsiveContainer width={204} height={204}>
      <PieChart>
        <Pie
          data={PieChartData}
          innerRadius={80}
          outerRadius={90}
          dataKey="value"
        >
        <Label value="20148 Movies" position="center" />
          {PieChartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <div>Text</div>
      </PieChart>
    </ResponsiveContainer>
    <div className={classes.colorWrapper}>
      {PieChartData.map((entry, index) => (
          <div key={`color-${index}`} className={classes.category}>
                <div
                  className={classes.colorSquare}  
                  style={{backgroundColor: COLORS[index]}}
                />
                <div>asd</div>
          </div>
        ))}
    </div>
</div>
)}
  