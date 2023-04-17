
export function likePageDisplaySong(songData) {

    return {
        type: "DISPLAY_SONG",
        payload: songData
    }
}

export function likeSongRemove (url) {
    
    console.log('check ', url)

    return {
        type: "REMOVE",
        payload: url
    }
}