import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import stylesheet from './Home.styles';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import Slide from 'react-reveal/Slide';
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

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
          <div className='contact'>
            <a target='_blank' href='https://www.facebook.com/abdulaahadaazar'>
              <img alt='' rel="noopener noreferrer" src={facebook} />
            </a>
            <a target='_blank' href='https://www.instagram.com/abdulaahadaazar/'>
              <img alt='' rel="noopener noreferrer" src={instagram} />
            </a>
            <a target='_blank' href='kedin.com/in/aahad-aazar-b83b77197/'>
              <img alt='' rel="noopener noreferrer" src={linkedin} />
            </a>
            <a target='_blank' href='https://github.com/aahadaazar'>
              <img alt='' rel="noopener noreferrer" src={github} />
            </a>
          </div>
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
