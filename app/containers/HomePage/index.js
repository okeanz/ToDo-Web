import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import InfoCard from '../../components/InfoCard';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  toolBar: {
    justifyContent: 'center',
  },
  addContainer: {
    display: 'flex',
  },
  fab: {
    alignItems: 'center',
    display: 'flex',
    marginLeft: '25px',
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

function CustomListItem({ text }) {
  return (
    <ListItem>
      <ListItemIcon>
        <IconButton aria-label="done" size="small">
          <CheckCircleIcon />
        </IconButton>
      </ListItemIcon>
      <ListItemText primary={text} />
      <ListItemIcon>
        <IconButton aria-label="create" size="small">
          <CreateIcon />
        </IconButton>
      </ListItemIcon>
      <ListItemIcon>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
}

CustomListItem.propTypes = {
  text: PropTypes.string,
};

export default function HomePage() {
  const classes = useStyles();

  const tasks = ['Get a nice job', '???', 'Profit!'];
  const completedTasks = ['Make nice ToDo app'];

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h5">ToDo App</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <InfoCard title="Add item" type="add">
          <div className={classes.addContainer}>
            <TextField
              id="standard-basic"
              label="What do you want to do?"
              fullWidth
            />
            <div className={classes.fab}>
              <Fab color="primary" size="small">
                <AddIcon />
              </Fab>
            </div>
          </div>
        </InfoCard>
        <InfoCard title="To-Do List" type="todo">
          <List component="nav">
            {tasks.map((item, index) => (
              <>
                <CustomListItem text={item} key={`item_${item}_${index + 1}`} />
                <Divider />
              </>
            ))}
          </List>
        </InfoCard>
        <InfoCard title="Completed" type="completed">
          <List component="nav">
            {completedTasks.map((item, index) => (
              <>
                <CustomCompletedListItem
                  text={item}
                  key={`citem_${item}_${index + 1}`}
                />
                <Divider />
              </>
            ))}
          </List>
        </InfoCard>
      </div>
    </>
  );
}
