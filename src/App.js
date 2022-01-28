import React, {useState} from 'react';
import {useReducer} from "react";
import Cat from "./Cat/Cat";
import Dog from "./Dog/Dog";


export const ACTIONS = {
    ADD_CAT: 'add-cat',
    DELETE_CAT: 'delete-cat',
    ADD_DOG: 'add-dog',
    DELETE_DOG: 'delete-dog'
}

const App = () => {




    const reducer = (cats, action) => {
        switch (action.type) {
            // case 'inc':
            //     return {...state, count1: state.count1 + 1}
            // case 'dec':
            //     return {...state, count1: state.count1 - 1}
            // case 'reset':
            //     return {...state, count1: 0}
            // case 'inc2':
            //     return {...state, count2: state.count2 + 1}
            // case 'dec2':
            //     return {...state, count2: state.count2 - 1}
            // case 'reset2':
            //     return {...state, count2: 0}
            // case 'inc3':
            //     return {...state, count3: state.count3 + 1}
            // case 'dec4':
            //     return {...state, count3: state.count3 - 1}
            // case 'reset3':
            //     return {...state, count3: 0}
            case ACTIONS.ADD_CAT:
                return [...cats, newCat(action.payload.cat)]
            case ACTIONS.DELETE_CAT:
                return cats.filter(cat=>cat.id !== action.payload.id)
            case ACTIONS.ADD_DOG:
                return [...dogs, newDog(action.payload.dog)]
            case ACTIONS.DELETE_DOG:
                return dogs.filter(dog=>dog.id !== action.payload.id)
        }
        return cats
    }

    function newCat(cat) {
        return {id: Date.now(), cat: cat}
    }
    function newDog(dog) {
        return {id: Date.now(), dog: dog}
    }



    // const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    const [cats, dispatch] = useReducer(reducer, []);

    const [cat, setCat] = useState('')

    const [dog, setDog] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_CAT, payload: {cat: cat}})
        setCat('')
    }
    function handleSubmitDog(e) {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_CAT, payload: {cat: cat}})
        setCat('')
    }

    // console.log(todos)


    return (
        <div>
            {/*<div>{state.count1}</div>*/}
            {/*<button onClick={() => dispatch({type: 'inc'})}>Inc</button>*/}
            {/*<button onClick={() => dispatch({type: 'dec'})}>Dec</button>*/}
            {/*<button onClick={() => dispatch({type: 'reset', payload: "0"})}>RESET</button>*/}
            {/*<div>{state.count2}</div>*/}
            {/*<button onClick={() => dispatch({type: 'inc2'})}>Inc</button>*/}
            {/*<button onClick={() => dispatch({type: 'dec2'})}>Dec</button>*/}
            {/*<button onClick={() => dispatch({type: 'reset2', payload: "0"})}>RESET</button>*/}
            {/*<div>{state.count3}</div>*/}
            {/*<button onClick={() => dispatch({type: 'inc3', })}>Inc</button>*/}
            {/*<button onClick={() => dispatch({type: 'dec3', })}>Dec</button>*/}
            {/*<button onClick={() => dispatch({type: 'reset3', payload: '0'})}>RESET</button>*/}

            <div>

                <form onSubmit={handleSubmit}>
                    <input type="text" value={cat} onChange={e => setCat(e.target.value)}/>
                    <button>Add cat</button>
                </form>
            </div>
            <div>
                {cats.map(cat=>{
                   return <Cat key={cat.id} cat={cat} dispatch={dispatch}/>
                })}
            </div>


            {/*<div>*/}
            {/*    <form onSubmit={handleSubmitDog}>*/}
            {/*        <input type="text" value={dog} onChange={e => setDog(e.target.value)}/>*/}
            {/*        <button>Add Dog</button>*/}
            {/*    </form>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {dogs.map(dog=>{*/}
            {/*        return <Dog key={dog.id} dog={dog} dispatch={dispatch}/>*/}
            {/*    })}*/}
            {/*</div>*/}

        </div>
    );
};

export default App;
