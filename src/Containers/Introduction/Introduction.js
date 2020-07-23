import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import stylesheet from './Introduction.styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Avatar from '@material-ui/core/Avatar';
import profilePic from '../../assets/profile.jpg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

const Introduction = ({ classes, changePageState }) => {
  const [pictureActive, setPictureActive] = useState(false);
  const [textActive, setTextActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPictureActive(true);
    }, 700);
    setTimeout(() => {
      setTextActive(true)
    }, 900);
  }, []);
  return (
    <>
      <Slide right>
        <div
          className={classes.introductionContainer} >
          <div className='top'>
            <p>
              {'Introduction'}
            </p>
          </div>
          <div className='middle'>
            <Fade when={pictureActive}>
              <div className='picture-div'>
                <Avatar
                  className='avatar'
                  alt="Aahad Aazar" src={profilePic} />
              </div>
            </Fade>
            <Fade when={textActive}>
              <div className='introduction'>
                <p>
                  <i>
                    {'Bienvenue! Being a Front-End Engineer for 3 years now and still have alot to explore! Based in Karachi->Pakistan, I bring collaboration, unique ideas and charm to the table.'}
                    <br />
                    {'I love bbqs, beaches and food. Always up for a talk '}
                  </i>
                  {'😃'}
                </p>
              </div>
            </Fade>
          </div>
          <div className='bottom'>
            <div
              onClick={() => {
                changePageState(1)
              }}
              className='circularButton'>
              <KeyboardBackspaceIcon />
            </div>
            <div className='contact'>
              <a target='_blank' href='https://www.facebook.com/abdulaahadaazar'>
                <img alt='' rel="noopener noreferrer" src={facebook} />
              </a>
              <a target='_blank' href='https://www.instagram.com/abdulaahadaazar/'>
                <img alt='' rel="noopener noreferrer" src={instagram} />
              </a>
              <a target='_blank' href='https://www.linkedin.com/in/aahad-aazar-b83b77197'>
                <img alt='' rel="noopener noreferrer" src={linkedin} />
              </a>
              <a target='_blank' href='https://github.com/aahadaazar'>
                <img alt='' rel="noopener noreferrer" src={github} />
              </a>
            </div>
          </div>
        </div >
      </Slide>
    </>
  );
};


export default withStyles(stylesheet)(Introduction);
