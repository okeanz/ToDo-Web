import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    marginTop: '64px',
    width: '700px',
    minHeight: '120px',
  },
  toolBar: {
    justifyContent: 'center',
  },
  paperIcon: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    marginTop: '-40px',
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
    marginLeft: '120px',
    textTransform: 'uppercase',
    marginBottom: '18px',
  },
}));

function Card({ title }) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <Paper elevation={1} className={classes.paperIcon}>
        <AddIcon className={classes.icon} />
      </Paper>

      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <Divider variant="middle" />
    </Paper>
  );
}

Card.propTypes = {
  title: PropTypes.string,
};

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h5">ToDo App</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Card title="Add item" />
        <Card title="To-Do List" />
        <Card title="Completed" />
      </div>
    </>
  );
}
