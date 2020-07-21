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
      '& img': {
        width: 100,
        marginBottom: 20,
      },
    },
    '& .bottom': {
      alignSelf: 'flex-start',
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
