const initialState = {
  data: [],
  htmlData: null,
  songAudio: [
    "",
    "",
    "https://naijamusics.xyz/wp-content/uploads/2022/09/Taylor_swift_Lover_(NaijaMusic.NG).mp3",
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/8d/a2/c7/8da2c709-aef7-c45e-971c-9aab976f9369/mzaf_9901528147281748439.plus.aac.p.m4a",
    "",
    "",
    "",
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/ba/ea/2f/baea2f92-9b29-1f31-5fd8-79b84b83c6ab/mzaf_8327653652646119848.plus.aac.p.m4a",
    "",
    "",
  ],
};

const LyricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: [...action.payload],
      };
    case "FETCH_ID":
      return {
        ...state,
        id: [...action.payload],
      };
    case "HTML_DATA":
      return {
        ...state,
        htmlData: action.payload,
      };
    default:
      return state;
  }
};
export { LyricsReducer };
