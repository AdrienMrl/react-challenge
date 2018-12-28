export interface ActionInterface {
  type: string
};

/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO'

/*
 * action creators
 */
export function addTodo(text: string): ActionInterface {
  const a = { type: ADD_TODO, text };
  return a;
}
