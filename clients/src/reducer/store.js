import { createStore,applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk' 
const midleware = [thunk];
const reducer = combineReducers({
  form: formReducer, // mounted under "form"
});



const store = (window.devToolsExtension ? window.devToolsExtension()(createStore): createStore)(reducer);



export default store;