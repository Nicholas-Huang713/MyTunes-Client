import { render } from '@testing-library/react';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import { UserContext, UserDataContext } from './helpers/UserContext';


const startingState = {
    userData: {},
    searchList: [],
    currentSong: {},
    compareSong: {},
    playing: false, 
    faveIdList: [],
    otherUserPlaylist: [],
    userFaves: {}
}

function reducer(state = startingState, action) {
  switch(action.type) {
    case "SEARCH_MUSIC": 
            return {
                ...state,
                searchList: action.payload
            };
        case "PLAY_SONG": 
            return {
                ...state,
                currentSong: action.payload
            };
        case "SET_PLAYING": 
            return {
                ...state,
                playing: true
            };
        case "SET_PAUSE": 
            return {
                ...state,
                playing: false
            };
        case "SET_CURRENT_SONG": 
            return {
                ...state,
                compareSong: action.payload
            };
        case "SET_FAVE_ID_LIST": 
            return {
                ...state,
                faveIdList: action.payload
            };
        case "ADD_TO_FAVE_ID_LIST": 
            return {
                ...state,
                faveIdList: [action.payload, ...state.faveIdList]
            };
        case "REMOVE_FROM_FAVE_ID_LIST": 
            return {
                ...state,
                faveIdList: state.faveIdList.filter((id) => id !== action.payload)
            };
        case "SET_DATA": 
            return {
                ...state,
                userData: action.payload
            };
        case "LOG_OUT": 
            return initialState
            
        default:
            return state;
  } 
}

function renderWithRedux(
  component,
  {initialState, store = createStore(reducer, initialState)} = {}
) {
  return {
    ...render(
        <Provider store={store}>
            <UserContext.Provider value={null}>
                <UserDataContext.Provider value={null}>
                    {component}
                </UserDataContext.Provider>
            </UserContext.Provider>
        </Provider>
    )
  }
} 



export * from '@testing-library/react'

export {renderWithRedux as render}