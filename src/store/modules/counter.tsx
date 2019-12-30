const INCREASE = "counter/INCREASE" as const;
const DIFFNUMPLUS = "counter/DIFFNUMPLUS" as const;

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof diffnumplus>;

export const increase = () => ({ type: INCREASE });
export const diffnumplus = (diff: number) => ({
  type: DIFFNUMPLUS,
  payload: diff
});

type CounterState = {
  count: number;
};
const initialState: CounterState = {
  count: 1
};

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DIFFNUMPLUS:
      console.log(`${1}`);

      return {
        ...state,
        count: action.payload + state.count
      };
    default:
      return state;
  }
}

export default counter;
