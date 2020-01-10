/*
 *
 * MainPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

const newTask = (title, text) => ({ title, text });

export const initialState = {
  tasks: [
    newTask('Get a nice job', 'Task Text number 1'),
    newTask('???', 'Task Text number 2'),
    newTask('Profit!', 'Profit text'),
    newTask('Profit!', 'Profit text'),
  ],
  completedTasks: [
    newTask('Make nice ToDo app', 'Task Text number 9000'),
    newTask('Take a rest', 'Task Text number 9000'),
  ],
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default mainPageReducer;
