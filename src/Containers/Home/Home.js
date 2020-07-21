import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import stylesheet from './Home.styles';
import Fade from 'react-reveal/Fade';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import Slide from 'react-reveal/Slide';

const Home = ({ classes, changePageState }) => {
  var bg = require('../../assets/home-background.png');

  useEffect(() => {
    console.log(changePageState);
  }, [changePageState]);

  return (
    <Slide left>
      <div
        style={{
          background: `${"url(" + bg + ")"} no-repeat center center fixed`,
        }}
        className={classes.homeContainer} >
        <div className='top'>
          <p>
            {'Aahad Aazar'}
          </p>
        </div>
        <div className='middle'>
          <p className='first'>
            {`"There is no test like production"`}
          </p>
          <p className='second'>
            {'let me turn your'}
            <b>
              {' ideas '}
            </b>
            {'into'}
            <i>
              {' realities'}
            </i>
          </p>
        </div>
        <div className='bottom'>
          <div
            onClick={() => {
              changePageState(2)
            }}
            className='circularButton'>
            <ArrowRight />
          </div>
        </div>
      </div >
    </Slide>
  );
};


export default withStyles(stylesheet)(Home);
