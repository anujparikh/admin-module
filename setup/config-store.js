import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../src/reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const store = function store(initialState) {
    return createStore(
        rootReducers,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant)
    );
};

export default store;