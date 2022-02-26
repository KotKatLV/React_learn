import { createStore } from "redux";
import {findRenderedDOMComponentWithClass} from "react-dom/test-utils";

const reducer = (state = 0, action) => {
    switch (action.type){
        case 'RND': return state + action.payLoad;
        case 'INC': return state + 1;
        case 'DEC': return state - 1;
        default: return state;
    }
};

const store = createStore(reducer);

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (payload) => ({ type: 'RND', payload });

document
    .getElementById('inc')
    .addEventListener('click', () => {
       store.dispatch(inc());
    });

document
    .getElementById('dec')
    .addEventListener('click', () => {
        store.dispatch(dec());
    });

document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const payLoad = Math.floor(Math.random() * 10);
        store.dispatch(rnd(payLoad));
    });

const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState();
}

store.subscribe(update);