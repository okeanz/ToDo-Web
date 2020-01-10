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

const useStyles = makeStyles(() => ({
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
  },
  icon: {
    width: '70%',
    height: '70%',
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

function InfoCard({ title, type, children }) {
  const classes = useStyles();

  const getIcon = () => {
    const icons = {
      add: <AddIcon className={classes.icon} />,
      todo: <ListIcon className={classes.icon} />,
      completed: <DoneAllIcon className={classes.icon} />,
    };
    if (icons[type] == null) return icons.add;
    return icons[type];
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <Paper elevation={1} className={classes.paperIcon}>
        {getIcon()}
      </Paper>

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
