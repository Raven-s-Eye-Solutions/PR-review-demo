import React, { FunctionComponent, MouseEvent, useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './Calculator.css';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '1rem',
    textAlign: 'center',
    color: '#121212'
  },
}));

export const Calculator: FunctionComponent = () => {
  const [equation, setEquation] = useState('');
  const classes = useStyles();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const { textContent } = e.currentTarget;
    const currVal = equation;
    setEquation(currVal + textContent);
  };

  const FormRow: FunctionComponent<IFormRow> = ({ startNum }) => {
    return (
      <>
        <Grid item xs={4} onClick={(e) => handleClick(e)}>
          <Paper className={classes.paper}>{startNum}</Paper>
        </Grid>
        <Grid item xs={4} onClick={(e) => handleClick(e)}>
                 <Paper className={classes.paper}>{startNum + 1}</Paper>



        </Grid>
        <Grid item xs={4} onClick={(e) => handleClick(e)}>
          <Paper className={classes.paper}>{startNum + 2}</Paper>
        </Grid>
      </>
    );
  }

  const CalcRow: FunctionComponent<ICalcRow> = ({ butArr }) => {
    return (
      <>
        <Grid item xs={4} onClick={(e) => handleClick(e)}>
          <Paper className={classes.paper}>{butArr[0]}</Paper>
        </Grid>
        <Grid item xs={4} onClick={(e) => handleClick(e)}>
          <Paper className={classes.paper}>{butArr[1]}</Paper>
        </Grid>
        <Grid item xs={4} onClick={(e) => handleClick(e)}>
          <Paper className={classes.paper}>{butArr[2]}</Paper>
        </Grid>
      </>
    );
  };

  return (
    <>
      <div id='equation-box'>
        <span>
          {equation}
        </span>
      </div>
      <Grid container spacing={1} id='calculator-grid'>
        <Grid container item xs={12} spacing={0}>
          <FormRow startNum={1} />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow startNum={4} />
        </Grid>
         
        <Grid container item xs={12} spacing={0}>
         
         
                 <FormRow startNum={7} />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <CalcRow butArr={["+", "-", "C"]} />
<<<<<<< HEAD

        </Grid>
        <Grid container item xs={12} spacing={0}>
            <CalcRow butArr={["/", "x", "="]} />
=======
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <CalcRow butArr={["/", "x", "="]} />
>>>>>>> 8bc0c7728e86046316c7fb18c8e4d0e94dddfaa6
        </Grid>
      </Grid>
    </>
  );
};

export default Calculator;

export interface IFormRow {
  startNum: number;
}

export interface ICalcRow {
  butArr: string[];
}
