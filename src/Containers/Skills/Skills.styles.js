export default theme => ({
  skillsContainer: {
    display: 'flex',
    background: '#008080',
    height: 'calc(100% - 30px)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
    color: 'white',
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
      width: 'calc(100% - 400px)',
      flexWrap: 'wrap',
      '@media(max-width:1043px)': {
        width: 'calc(100% - 200px)',
      },
      '@media(max-width:800px)': {
        width: 'calc(100% - 100px)',
      },
      '@media(max-width:662px)': {
        width: '100%',
        height: 500,
        overflowY: 'auto',
      },
      '@media(max-width:400px)': {
        width: '100%',
        height: 400,
        overflowY: 'auto',
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
