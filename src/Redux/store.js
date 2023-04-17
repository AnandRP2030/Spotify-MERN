import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import LikeReducer from "./LikedSong/likeReducer";
import { PaymentReducer } from "./LikedSong/paymentReducer";
import PlayListReducer from "./SpotifyPlayList/PlayListReducer";
import { LyricsReducer } from "./lyricsReducer";

let combine = combineReducers({
  likeReducer: LikeReducer,
  paymentReducer: PaymentReducer,
  playListReducer: PlayListReducer,
  lyricsReducer: LyricsReducer,
});

let store = legacy_createStore(combine, applyMiddleware(thunk));

// store.subscribe(() => console.log('state',store.getState()));

export default store;
