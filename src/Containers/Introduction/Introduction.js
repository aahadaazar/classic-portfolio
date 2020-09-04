import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import stylesheet from './Introduction.styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Fade from 'react-reveal/Fade';
import Avatar from '@material-ui/core/Avatar';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import profilePic from '../../assets/profile.jpg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

let emojiArray = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🥳', '😏', '😒', '😞'];
const Introduction = ({ classes, changePageState }) => {
  const [pictureActive, setPictureActive] = useState(false);
  const [textActive, setTextActive] = useState(false);
  const [emojiCounter, setEmojiCounter] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPictureActive(true);
    }, 700);
    setTimeout(() => {
      setTextActive(true)
    }, 900);
  }, []);

  const insertEmoji = () => {
    const tempCounter = [...emojiCounter];
    tempCounter.push({ style: `translate(${Math.floor(Math.random() * 100) + 1}vw , ${Math.floor(Math.random() * 100) + 1}vh )`, emoji: emojiArray[Math.floor(Math.random() * 10)] });
    setEmojiCounter(tempCounter);
  }

  return (
    <>
      <div
        className={classes.introductionContainer} >
        {emojiCounter.map((o, index) => {
          return (
            <span
              key={`emoji-${index}`}
              className='randomEmoji'
              style={{
                position: 'absolute',
                transform: o.style,
              }}
            >
              {o.emoji}
            </span>
          )
        })}
        <Fade>
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
              <div
                onClick={() => {
                  insertEmoji();
                }}
                className='introduction'>
                <p>
                  <i>
                    {'Bienvenue! Front-End Engineer for 3 years now and still have alot to explore! Based in Karachi, Pakistan, I bring collaboration, unique ideas and charm to the table.'}
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
                changePageState(3)
              }}
              className='circularButton'>
              <ArrowRight />
            </div>
          </div>
        </Fade>
      </div >
    </>
  );
};


export default withStyles(stylesheet)(Introduction);
