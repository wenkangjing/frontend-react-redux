import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      console.log("reducer_weather:", action.payload.data);
      return [ action.payload.data, ...state ];
  }
  return state;
}