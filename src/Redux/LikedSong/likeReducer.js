
const initialValue = {
  likedSong: [
    
      
  ],
};


export default function LikeReducer(state = initialValue, action) {
  
  switch (action.type) {
    case "DISPLAY_SONG":
      return {
        ...state,
        likedSong : [...state.likedSong, action.payload],
      };
    case "REMOVE" :

    console.log('reom')
    const finalRes = state.likedSong.filter((elem) =>{
        console.log(elem.singer, 'compare', action.payload)  
      return elem.singer !== action.payload
    });
    return {
      ...state,
      likedSong: finalRes,
    };

    default:  
      return state
  }
}
