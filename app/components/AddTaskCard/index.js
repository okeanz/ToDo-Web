/**
 *
 * AddTaskCard
 *
 */

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
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

function AddTaskCard() {
  const classes = useStyles();

  return (
    <InfoCard title="Add task" type="add">
      <div className={classes.addContainer}>
        <div className={classes.fieldsContainer}>
          <div className={classes.textFieldContainer}>
            <TextField id="standard-basic" label="What is task name ?" />
          </div>
          <div className={classes.textFieldContainer}>
            <TextField
              id="standard-basic"
              label="What do you want to do?"
              fullWidth
              multiline
            />
          </div>
        </div>
        <div className={classes.fab}>
          <Fab color="primary" size="small">
            <AddIcon />
          </Fab>
        </div>
      </div>
    </InfoCard>
  );
}

AddTaskCard.propTypes = {};

export default AddTaskCard;
