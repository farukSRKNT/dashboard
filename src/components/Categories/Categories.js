import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { changeCategoryInterval } from '../../actions'

import { ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts'

import SimpleSelect from '../SimpleSelect'

const useStyles = makeStyles(() => ({
  categoriesWrapper: {
    width: '100%',
    height: '351px',
    marginRight: '17px',
    marginBottom: '17px',
  },
  upperBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '20px',
  },
  responsiveContainer: {
    margin: 'auto',
  },
  categoriesColorsWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  colorWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  category: {
    display: 'flex',
  },
  colorSquare: {
    marginTop: '7px',
    marginRight: '5px',
    width: '12px',
    height: '12px',
    borderRadius: '3px',
  },
}))

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
const SELECT_OPTIONS = [
  { value: 'WEEK', name: 'This Week' },
  { value: 'MONTH', name: 'This Month' },
  { value: 'YEAR', name: 'This Year' },
]

const renderActiveShape = (props, movieCount) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props

  return (
    <g>
      <text
        x={cx}
        y={cy - 10}
        dy={8}
        textAnchor="middle"
        fontWeight="bold"
        fill="#405169"
      >
        {movieCount}
      </text>
      <text x={cx} y={cy + 10} dy={8} textAnchor="middle" fill="#A0BCE4">
        movies
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  )
}

export default function Categories() {
  const classes = useStyles()
  const categories = useSelector((state) => state.categories)
  const categoriesMovieCount = useSelector(
    (state) => state.categoriesMovieCount
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeCategoryInterval(SELECT_OPTIONS[0].value))
  }, [])

  const handleChange = (value) => {
    dispatch(changeCategoryInterval(value))
  }

  return (
    <div className={classes.categoriesWrapper}>
      <div className={classes.upperBar}>
        <div className={classes.title}>Categories</div>
        <SimpleSelect options={SELECT_OPTIONS} handleChange={handleChange} />
      </div>
      <ResponsiveContainer
        width={204}
        height={264}
        className={classes.responsiveContainer}
      >
        <PieChart>
          <Pie
            activeIndex={0}
            data={categories}
            activeShape={(defaultProps) =>
              renderActiveShape(defaultProps, categoriesMovieCount)
            }
            innerRadius={75}
            outerRadius={90}
            dataKey="value"
          >
            {categories.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className={classes.colorWrapper}>
        {categories.map((entry, index) => (
          <div key={`color-${index}`} className={classes.category}>
            <div
              className={classes.colorSquare}
              style={{ backgroundColor: COLORS[index] }}
            />
            <div>{entry.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
