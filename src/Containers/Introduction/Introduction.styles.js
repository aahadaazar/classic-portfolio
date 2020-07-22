export default theme => ({
  introductionContainer: {
    display: 'flex',
    background: '#00b4d8',
    height: 'calc(100% - 30px)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
    color: 'white',
    '& .top': {
      fontSize: 30,
      alignSelf: 'flex-end',
    },
    '& .middle': {
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .picture-div': {
        marginRight: 10,
        '& .avatar': {
          width: 150,
          height: 150,
        },
      },
      '& .introduction': {
        fontSize: 22,
        maxWidth: 430,
        fontWeight: 300,
        padding: 30,
        border: '1px solid white',
        borderRadius: 5,
        borderStyle: 'dotted',
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
