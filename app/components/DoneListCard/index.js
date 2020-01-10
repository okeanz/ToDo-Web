/**
 *
 * ToDoListCard
 *
 */

import React, { useState } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from '../InfoCard';

const useStyles = makeStyles(theme => ({
  taskText: {
    paddingLeft: '0px',
  },
  deleteIcon: {
    color: theme.palette.error.main,
  },
}));

function CustomListItem({ task: { title, text, id }, removeTask }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItem>
        <ListItemText primary={title} color="secondary" />
        <ListItemIcon>
          <IconButton
            aria-label="expand"
            size="small"
            onClick={() => setOpen(!open)}
          >
            <ExpandMoreIcon />
          </IconButton>
        </ListItemIcon>
        <ListItemIcon>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => removeTask(id)}
          >
            <DeleteIcon className={classes.deleteIcon} />
          </IconButton>
        </ListItemIcon>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItem>
          <ListItemText className={classes.taskText}>{text}</ListItemText>
        </ListItem>
      </Collapse>
    </>
  );
}

CustomListItem.propTypes = {
  task: PropTypes.object,
  removeTask: PropTypes.func,
};

function DoneListCard({ tasks, removeTask }) {
  return (
    <InfoCard title="Completed" type="completed">
      <List component="nav">
        {tasks.map((item, index) => (
          <>
            <CustomListItem
              task={item}
              key={`item_${item}_${index + 1}`}
              removeTask={removeTask}
            />
            <Divider />
          </>
        ))}
      </List>
    </InfoCard>
  );
}

DoneListCard.propTypes = {
  tasks: PropTypes.object,
  removeTask: PropTypes.func,
};

export default DoneListCard;
