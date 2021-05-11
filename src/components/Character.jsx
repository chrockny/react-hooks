import React ,{useState,useEffect,useReducer,useMemo}from 'react';
import './styles/Character.css';

const initialState = {
    favorites:[],
}

const favoriteReducer = (state,action) =>{
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favorites:[...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

const Characters = () =>{

    const [characters,setCharacters] = useState([]);
    const [favorites,dispatch] = useReducer(favoriteReducer,initialState);

    useEffect(()=>{
        //Usando fetch para traer los datos
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
        .catch(err=> console.log(err));
    },[])

    const handleClick = favorite =>{
            dispatch({type:'ADD_TO_FAVORITE',payload:favorite})
        
    }


    return(
        <div className="Characters">
            {favorites.favorites.map(favorite =>(
                <li key={favorite.id}>
                    {favorite.name}
                </li>
            ))

            }
            <h2>{characters.map(character =>(
                <div className="item" key={character.id}>
                <h4>{character.name}</h4>
                <img src={character.image} alt="ImageApi"/>
                <h5>{character.status}</h5> 
                <h5>{character.species}</h5>
                <h6>{character.gender}</h6>
                <button type="button" onClick={()=>handleClick(character)}>
                    Agregar a Favoritos
                </button>

                </div>
            ))}</h2>
        </div>
    );
}

export default Characters;