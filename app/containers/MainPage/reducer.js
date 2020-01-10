/*
 *
 * MainPage reducer
 *
 */
import produce from 'immer';
import { ADD_TASK, EDIT_TASK, MARK_COMPLETED, REMOVE_TASK } from './constants';

const newTask = (title, text, id, done) => ({ title, text, id, done });

export const initialState = {
  tasks: [
    newTask('Get a nice job', 'Task Text number 1', 0, false),
    newTask('???', 'Task Text number 2', 1, false),
    newTask('Profit!', 'Profit text', 2, false),
    newTask('Profit!', 'Profit text', 3, false),
    newTask('Make nice ToDo app', 'Task Text number 9000', 4, true),
    newTask('Take a rest', 'Task Text number 9000', 5, true),
  ],
  taskToEdit: null,
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TASK:
        draft.tasks = [
          ...draft.tasks,
          newTask(
            action.task.title,
            action.task.text,
            draft.tasks.length > 0
              ? Math.max.apply(null, draft.tasks.map(x => x.id)) + 1
              : 0,
            false,
          ),
        ];
        draft.taskToEdit = null;
        return draft;
      case MARK_COMPLETED:
        draft.tasks.find(t => t.id === action.id).done = true;
        return draft;
      case EDIT_TASK:
        draft.taskToEdit = draft.tasks.find(x => x.id === action.id);
        draft.tasks = draft.tasks.filter(t => t.id !== action.id);
        return draft;
      case REMOVE_TASK:
        draft.tasks = draft.tasks.filter(t => t.id !== action.id);
        return draft;

      default:
        return draft;
    }
  });

export default mainPageReducer;
