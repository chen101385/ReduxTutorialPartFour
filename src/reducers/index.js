import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
//rename reducer to formRreducer /w 'as'
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  //critical that below line is verbatim!
  form: formReducer
});

export default rootReducer;
