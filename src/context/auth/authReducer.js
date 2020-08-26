import { AUTH_SUCCES } from "../types";

const handlers = {
  [AUTH_SUCCES]: (state, { payload }) => ({
    ...state,
    token: [...state, payload],
  }),

  DEFAULT: (state) => state,
};

export const authReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
