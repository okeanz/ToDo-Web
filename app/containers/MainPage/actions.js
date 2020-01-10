/*
 *
 * MainPage actions
 *
 */

import { ADD_TASK, EDIT_TASK, MARK_COMPLETED, REMOVE_TASK } from './constants';

export function addTask(task) {
  return {
    type: ADD_TASK,
    task,
  };
}

export function markCompleted(id) {
  return {
    type: MARK_COMPLETED,
    id,
  };
}

export function removeTask(id) {
  return {
    type: REMOVE_TASK,
    id,
  };
}

export function editTask(id) {
  return {
    type: EDIT_TASK,
    id,
  };
}
