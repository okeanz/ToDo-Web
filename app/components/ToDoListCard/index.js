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
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from '../InfoCard';

const useStyles = makeStyles(() => ({
  taskText: {
    paddingLeft: '55px',
  },
}));

function CustomListItem({ title, text }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItem>
        <ListItemIcon>
          <IconButton aria-label="done" size="small">
            <CheckCircleIcon />
          </IconButton>
        </ListItemIcon>
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
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItem>
          <ListItemText className={classes.taskText}>{text}</ListItemText>
        </ListItem>
      </Collapse>
    </>
  );
}

CustomListItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

function ToDoListCard({ tasks }) {
  return (
    <InfoCard title="To-Do List" type="todo">
      <List component="nav">
        {tasks.map((item, index) => (
          <>
            <CustomListItem
              title={item.title}
              text={item.text}
              key={`item_${item}_${index + 1}`}
            />
            <Divider />
          </>
        ))}
      </List>
    </InfoCard>
  );
}

ToDoListCard.propTypes = {
  tasks: PropTypes.object,
};

export default ToDoListCard;
