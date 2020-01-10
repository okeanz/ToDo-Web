/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import reducer from './reducer';
import {
  makeSelectCompletedTasks,
  makeSelectTasks,
  makeSelectTaskToEdit,
} from './selectors';
import AddTaskCard from '../../components/AddTaskCard';
import ToDoListCard from '../../components/ToDoListCard';
import DoneListCard from '../../components/DoneListCard';
import { addTask, editTask, markCompleted, removeTask } from './actions';

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

export function MainPage({
  tasks,
  completedTasks,
  onAddTask,
  onMarkCompleted,
  onRemoveTask,
  onEditTask,
  taskToEdit,
}) {
  useInjectReducer({ key: 'mainPage', reducer });
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>ToDo App</title>
        <meta name="description" content="Main app page" />
      </Helmet>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h5">ToDo App</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <AddTaskCard addTask={onAddTask} taskToEdit={taskToEdit} />
        <ToDoListCard
          tasks={tasks}
          markCompleted={onMarkCompleted}
          removeTask={onRemoveTask}
          editTask={onEditTask}
        />
        <DoneListCard tasks={completedTasks} removeTask={onRemoveTask} />
      </div>
    </div>
  );
}

MainPage.propTypes = {
  tasks: PropTypes.array,
  completedTasks: PropTypes.array,
  onAddTask: PropTypes.func,
  onMarkCompleted: PropTypes.func,
  onRemoveTask: PropTypes.func,
  onEditTask: PropTypes.func,
  taskToEdit: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  tasks: makeSelectTasks(),
  completedTasks: makeSelectCompletedTasks(),
  taskToEdit: makeSelectTaskToEdit(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onAddTask: task => dispatch(addTask(task)),
    onMarkCompleted: id => dispatch(markCompleted(id)),
    onRemoveTask: id => dispatch(removeTask(id)),
    onEditTask: id => dispatch(editTask(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MainPage);
