import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      console.log("reducer_weather:", action.payload);
      return [ action.payload, ...state ];
  }
  return state;
}