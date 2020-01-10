import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMainPageDomain = state => state.mainPage || initialState;

const makeSelectTasks = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.tasks,
  );

const makeSelectCompletedTasks = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.completedTasks,
  );

export { makeSelectTasks, makeSelectCompletedTasks };
