import React from 'react'

function PlayListReducer(state={songs:[]}, action) {
    switch(action.type){
        case "GET_SONGE_DATA":
        return{
            ...state,
            songs:action.payload,
        }

        default:
        return state;
    }
}

export default PlayListReducer
