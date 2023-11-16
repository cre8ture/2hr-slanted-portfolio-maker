// // Reducer function
// function counterReducer(state = { value: 0 }, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return { value: state.value + 1 };
//         case 'DECREMENT':
//             return { value: state.value - 1 };
//         default:
//             return state;
//     }
// }

// // Create Redux store
// const store = Redux.createStore(counterReducer);


// const valueEl = document.getElementById('value');

// function render() {
//     const state = store.getState();
//     valueEl.innerHTML = state.value.toString();
// }

// // Initial render
// render();


// document.getElementById('increment').addEventListener('click', () => {
//     store.dispatch({ type: 'INCREMENT' });
// });

// document.getElementById('decrement').addEventListener('click', () => {
//     store.dispatch({ type: 'DECREMENT' });
// });

// store.subscribe(render);

