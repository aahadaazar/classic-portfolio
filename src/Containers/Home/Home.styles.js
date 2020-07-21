export default theme => ({
  homeContainer: {
    display: 'flex',
    height: 'calc(100% - 30px)',
    // height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
    color: 'white',
    '& .top': {
      fontSize: 30,
      alignSelf: 'flex-start',
    },
    '& .middle': {
      width: 'calc(100vw - 50vw)',
      alignSelf: 'center',
      '& .first': {
        fontSize: 60,
        fontWeight: 200,
        marginBottom: 20,
      },
      '& .second': {
        fontSize: 20,
        fontWeight: 400,
        '& b': {
          fontWeight: 900,
        }
      },
      '@media(max-width:600px)': {
        '& .first': {
          fontSize: 50,
        },
        '& .second': {
          fontSize: 16,
        },
      },
      '@media(max-width:400px)': {
        width: 'calc(70vw)',
      },
    },
    '& .bottom': {
      alignSelf: 'flex-end',
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
