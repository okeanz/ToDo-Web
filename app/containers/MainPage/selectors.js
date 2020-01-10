import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMainPageDomain = state => state.mainPage || initialState;

const sortFunc = (a, b) => {
  if (a.title > b.title) {
    return -1;
  }
  if (a.title < b.title) {
    return 1;
  }
  return 0;
};

const makeSelectTasks = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.tasks.filter(t => !t.done).sort(sortFunc),
  );

const makeSelectCompletedTasks = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.tasks.filter(t => t.done).sort(sortFunc),
  );

const makeSelectTaskToEdit = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.taskToEdit,
  );

export { makeSelectTasks, makeSelectCompletedTasks, makeSelectTaskToEdit };
