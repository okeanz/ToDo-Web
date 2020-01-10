/**
 *
 * InfoCard
 *
 */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const colorSelector = (props, theme) => {
  console.log('THEME', theme);
  switch (props.color) {
    case 'add':
      return theme.palette.primary.main;
    case 'edit':
      return theme.icons.edit;
    case 'done':
      return theme.icons.done;
    default:
      return 'white';
  }
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: '64px',
    width: '700px',
    minHeight: '120px',
  },
  paperIcon: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    marginTop: '-30px',
    marginLeft: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: props => colorSelector(props, theme),
  },
  icon: {
    width: '70%',
    height: '70%',
    color: 'white',
  },
  title: {
    color: '#424242c7',
    fontWeight: '300',
    marginLeft: '100px',
    textTransform: 'uppercase',
    marginBottom: '18px',
  },
  bodyContainer: {
    paddingTop: '15px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingBottom: '25px',
  },
}));

function AddPaper() {
  const classes = useStyles({ color: 'add' });
  return (
    <Paper elevation={1} className={classes.paperIcon}>
      <AddIcon className={classes.icon} />
    </Paper>
  );
}

function EditPaper() {
  const classes = useStyles({ color: 'edit' });
  return (
    <Paper elevation={1} className={classes.paperIcon}>
      <ListIcon className={classes.icon} />
    </Paper>
  );
}

function DonePaper() {
  const classes = useStyles({ color: 'done' });
  return (
    <Paper elevation={1} className={classes.paperIcon}>
      <DoneAllIcon className={classes.icon} />
    </Paper>
  );
}

function InfoCard({ title, type, children }) {
  const classes = useStyles();

  const getIcon = () => {
    const papers = {
      add: <AddPaper />,
      todo: <EditPaper />,
      completed: <DonePaper />,
    };

    if (papers[type] == null) return papers.add;
    return papers[type];
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      {getIcon()}

      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <Divider variant="middle" />
      <div className={classes.bodyContainer}>{children}</div>
    </Paper>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['add', 'todo', 'completed']),
  children: PropTypes.element,
};

export default InfoCard;
