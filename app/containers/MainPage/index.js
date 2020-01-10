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
import { makeSelectCompletedTasks, makeSelectTasks } from './selectors';
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

export function MainPage({ tasks, completedTasks }) {
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
        <AddTaskCard />
        <ToDoListCard tasks={tasks} />
        <DoneListCard tasks={completedTasks} />
      </div>
    </div>
  );
}

MainPage.propTypes = {
  tasks: PropTypes.array,
  completedTasks: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  tasks: makeSelectTasks(),
  completedTasks: makeSelectCompletedTasks(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MainPage);
