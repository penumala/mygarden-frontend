// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles(() => ({
//   appBar: {
//     borderRadius: 15,
//     margin: '30px 0',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heading: {
//     color: 'rgba(0,183,255, 1)',
//   },
//   image: {
//     marginLeft: '15px',
//   },
// }));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));
