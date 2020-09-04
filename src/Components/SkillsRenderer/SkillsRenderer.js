import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    '&:hover': {
      transform: 'scale(1.2) !important',
      transition: '0.2s !important',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '15px 10px',
    // transition: '0.1s !important',
    '& .img': {
      height: 100,
      padding: '0px 8px'
    },
    '& .skillName': {
      marginTop: 20
    },
  }
});

function SkillsRenderer({ data, index, checked }) {
  const classes = useStyles();
  return (
    <Grow
      in={checked}
      style={{ transformOrigin: '0 0 0' }}
      {...(checked ? { timeout: (index + 1) * 200 } : {})}
    >
      <div className={classes.mainContainer}>
        <img
          alt=''
          style={{
            width: data.width,
            height: data.height
          }}
          className={'img'} src={data.src} />
      </div>
    </Grow>
  )
}

export default SkillsRenderer

