import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import stylesheet from './Introduction.styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Slide from 'react-reveal/Slide';

const Introduction = ({ classes, changePageState }) => {
  return (
    <>
      <Slide right>
        <div
          className={classes.introductionContainer} >
          <div className='top'>
            <p>
              {'Aahad Aazar'}
            </p>
          </div>
          <div className='middle'>
            <p className='second'>
              {'OOPS. This Page seems to be under construction!'}
            </p>
          </div>
          <div className='bottom'>
            <div
              onClick={() => {
                changePageState(1)
              }}
              className='circularButton'>
              <KeyboardBackspaceIcon />
            </div>
          </div>
        </div >
      </Slide>
    </>
  );
};


export default withStyles(stylesheet)(Introduction);
