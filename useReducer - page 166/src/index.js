/*
Note: useReducer does not replace Redux. Redux provides
a global store in where one can keep data centralized, while
useReducer is localized to a specific component.
Redux still does more than Context + useReducer combined.
On the other hand, as reducer are pure functions, they are
easy to test. You can take the function and just pass it
the necessary parameters.

Note 2:
When to use useReducer over useState:
    -> When state is not a primitive, like nested objects or arrays.
    -> When there are multiple actions for the same state
       (example: "add" and "sub" a value depending on which
       botton is clicked).
*/

import React, { useReducer, useRef } from "react"
import ReactDOM from "react-dom"

// Putting reduce function outside component makes it
// clear that it shouldn't depends on bits of props or state
const reducer = (state, action) => {
    switch(action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: state.length,
                    name: action.name
                }
            ];
        case 'remove':
            return state.filter((current, index) => index !== action.index)
        default:
            return state;
    };
}

function ShoppingList() {
    const inputRef = useRef()
    const [items, dispatch] = useReducer(reducer, [])

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            // "type" and "name" keys will be inside "action"
            type: 'add',
            name: inputRef.current.value
        })
        inputRef.current.value = '';
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef}/>
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={item.id}>
                        {item.name}
                        <button
                            onClick={() => dispatch({type: 'remove', index})}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

ReactDOM.render(<ShoppingList/>,
    document.getElementById("root"))
