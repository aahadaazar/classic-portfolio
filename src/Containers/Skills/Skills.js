import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import stylesheet from './Skills.styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import SkillsRenderer from '../../Components/SkillsRenderer/SkillsRenderer';

const skillsArray = [
  {
    name: 'HTML',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
    timeout: 1000,
    width: 109,
  },
  {
    name: 'CSS',
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    timeout: 2000,
    width: 100,
  },
  {
    name: 'SASS',
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
    timeout: 3000,
    width: 100,
  },
  {
    name: 'Javascript',
    src: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
    timeout: 4000,
    width: 160,
  },
  {
    name: 'React (Expertise)',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png',
    timeout: 5000,
    width: 145,
  },
  {
    name: 'Angular (Experience)',
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    timeout: 6000,
    width: 145,
  },
  {
    name: 'NPM',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/110px-Npm-logo.svg.png',
    timeout: 7000,
    width: 130,
  },
  {
    name: 'Github',
    src: 'https://image.flaticon.com/icons/png/512/25/25231.png',
    timeout: 8000,
    width: 100,
  },
  {
    name: 'Material UI',
    src: 'https://material-ui.com/static/logo.png',
    timeout: 9000,
    width: 100,
  }
]

const Skills = ({ classes, changePageState }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 2000);
  }, []);

  return (
    <>
      <div
        className={classes.skillsContainer} >
        {/* <Fade> */}
        <div className='top'>
          <p>
            {'Skills'}
          </p>
        </div>
        <div className='middle'>
          {skillsArray.map((o, index) => {
            return (
              <SkillsRenderer
                checked={checked}
                data={o}
                index={index}
              />);
          })}
        </div>
        <div className='bottom'>
          <div
            onClick={() => {
              changePageState(2)
            }}
            className='circularButton'>
            <KeyboardBackspaceIcon />
          </div>
          <div className='contact'>
            <a rel="noopener noreferrer" target='_blank' href='https://www.facebook.com/abdulaahadaazar'>
              <img alt='' src={facebook} />
            </a>
            <a rel="noopener noreferrer" target='_blank' href='https://www.instagram.com/abdulaahadaazar/'>
              <img alt='' src={instagram} />
            </a>
            <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/aahad-aazar-b83b77197'>
              <img alt='' src={linkedin} />
            </a>
            <a rel="noopener noreferrer" target='_blank' href='https://github.com/aahadaazar'>
              <img alt='' src={github} />
            </a>
          </div>
          <div
            onClick={() => {
              changePageState(4)
            }}
            className='circularButton'>
            <ArrowRight />
          </div>
        </div>
        {/* </Fade> */}
      </div >
    </>
  );
};


export default withStyles(stylesheet)(Skills);
