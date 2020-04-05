const AUTHID = 'auth/AUTHID' as const;

type AuthAction = ReturnType<typeof authid>;

export const authid = (userId: string) => ({ type: AUTHID, payload: userId });

type AuthState = {
  userId: string;
};
const initialState: AuthState = {
  userId: '',
};

function auth(state: AuthState = initialState, action: AuthAction) {
  switch (action.type) {
    case AUTHID:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
}

export default auth;
