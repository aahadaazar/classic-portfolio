export default theme => ({
  introductionContainer: {
    display: 'flex',
    background: '#008080',
    height: 'calc(100% - 30px)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
    color: 'white',
    '& .randomEmoji': {
      fontSize: 70,
    },
    '& .top': {
      fontSize: 30,
      alignSelf: 'flex-end',
      zIndex: 2,
    },
    '& .middle': {
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
      '& .picture-div': {
        marginRight: 10,
        '& .avatar': {
          width: 150,
          height: 150,
          transition: 'all .5s ease-in-out',
          '&:hover': {
            transform: 'scale(1.4)',
            marginRight: 30,
          },
        },
      },
      '& .introduction': {
        fontSize: 22,
        maxWidth: 430,
        fontWeight: 300,
        padding: 30,
        borderRadius: 5,
        color: '#008080',
        background: 'white',
        transition: 'all .5s ease-in-out',
        boxShadow: '3px 3px 8px -2px #000000',
        '&:hover': {
          color: 'white',
          background: '#008080',
        },
      },
      '@media(max-width:550px)': {
        flexDirection: 'column',
        '& .picture-div': {
          marginRight: 0,
          marginBottom: 10,
          '& .avatar': {
            width: 150,
            height: 150,
          },
        },
        '& .introduction': {
          fontSize: 20,
          fontWeight: 300,
          maxWidth: 400,
        },
      },
    },
    '& .bottom': {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      display: 'flex',
      zIndex: 2,
      '& .contact': {
        margin: '0 auto',
        background: 'white',
        padding: '5px 7px',
        borderRadius: 10,
        display: 'inline-flex',
        '& img': {
          width: 16,
          margin: '0 10px',
          cursor: 'pointer',
        },
        '& a': {
          display: 'inherit',
        }
      },
      '& .circularButton': {
        cursor: 'pointer',
        border: '1px solid white',
        borderRadius: 28,
        padding: 6,
        '& svg': {
          fontSize: 30,
        }
      },
    }
  },
});
