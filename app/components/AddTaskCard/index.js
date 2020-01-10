/**
 *
 * AddTaskCard
 *
 */

import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import InfoCard from '../InfoCard';

const useStyles = makeStyles(() => ({
  addContainer: {
    display: 'flex',
  },
  fab: {
    alignItems: 'center',
    display: 'flex',
    marginLeft: '25px',
  },
  fieldsContainer: {
    width: '100%',
  },
  textFieldContainer: {
    marginBottom: '20px',
  },
}));

function AddTaskCard({ addTask, taskToEdit }) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    if (taskToEdit != null) {
      setTitle(taskToEdit.title);
      setText(taskToEdit.text);
    }
  }, [taskToEdit]);

  const innerAddTask = () => {
    addTask({ title, text });
    setText('');
    setTitle('');
  };

  return (
    <InfoCard title="Add task" type="add">
      <div className={classes.addContainer}>
        <div className={classes.fieldsContainer}>
          <div className={classes.textFieldContainer}>
            <TextField
              id="standard-basic"
              label="What is task name ?"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </div>
          <div className={classes.textFieldContainer}>
            <TextField
              id="standard-basic"
              label="What do you want to do?"
              fullWidth
              multiline
              value={text}
              onChange={event => setText(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.fab}>
          <Fab color="primary" size="small" onClick={() => innerAddTask()}>
            <AddIcon />
          </Fab>
        </div>
      </div>
    </InfoCard>
  );
}

AddTaskCard.propTypes = {
  addTask: PropTypes.func,
  taskToEdit: PropTypes.object,
};

export default AddTaskCard;
