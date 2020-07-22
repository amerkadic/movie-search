import { FETCH_TVSHOW, TVSHOW_SEARCH } from "./tvshowType";

const initialState = {
    tvshows : []  
}

export default function(state = initialState, action) {
   switch (action.type) {
       case FETCH_TVSHOW:
           return {
               ...state,
               tvshows: action.payload
           };
       case TVSHOW_SEARCH:
           return{
               ...state,
               tvshows: action.payload
           }   
       default:
           return state; 
   }
}