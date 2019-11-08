import * as APIUtil from "../util/bench_api_util";
export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

const receiveBenches = benches => {
  return {
    type: RECEIVE_BENCHES,
    benches
  };
};

// thunk
export const fetchBenches = () => dispatch => {
  return APIUtil.fetchBenches().then(benches =>
    dispatch(receiveBenches(benches))
  );
};