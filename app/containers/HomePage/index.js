import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import AddTaskCard from '../../components/AddTaskCard';
import ToDoListCard from '../../components/ToDoListCard';
import DoneListCard from '../../components/DoneListCard';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  toolBar: {
    justifyContent: 'center',
  },
}));

function CustomCompletedListItem({ text }) {
  return (
    <ListItem>
      <ListItemText primary={text} />
      <ListItemIcon>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
}

CustomCompletedListItem.propTypes = {
  text: PropTypes.string,
};

export default function HomePage() {
  const classes = useStyles();

  const newTask = (title, text) => ({ title, text });
  const tasks = [
    newTask('Get a nice job', 'Task Text number 1'),
    newTask('???', 'Task Text number 2'),
    newTask('Profit!', 'Profit text'),
  ];
  const completedTasks = [
    newTask('Make nice ToDo app', 'Task Text number 9000'),
  ];

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h5">ToDo App</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <AddTaskCard />
        <ToDoListCard tasks={tasks} />
        <DoneListCard tasks={completedTasks} />
      </div>
    </>
  );
}
