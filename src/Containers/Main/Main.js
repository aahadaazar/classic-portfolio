import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import stylesheet from './Main.styles';
import Home from '../Home/Home';
import Introduction from '../Introduction/Introduction';
import Skills from '../Skills/Skills';

let pageToRender = null;

const Main = ({ classes }) => {

  const [pageState, setPageState] = useState(1);

  const changePageState = key => {
    setPageState(key);
  }

  switch (pageState) {
    case 1:
      pageToRender = (<Home
        changePageState={changePageState}
      />);
      break;
    case 2:
      pageToRender = (<Introduction
        changePageState={changePageState} />);
      break;
    case 3:
      pageToRender = (<Skills
        changePageState={changePageState} />);
      break;
    default:
      pageToRender = (<Home
        changePageState={changePageState}
      />);
      break;
  };

  return (
    <Grid
      className={classes.mainContainer}
      container>
      <Grid
        item
        className='gridItem'
        xs={12}>
        {pageToRender}
      </Grid>
    </Grid>
  );
};


export default withStyles(stylesheet)(Main);
