import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getPeople,deletePerson} from '../actions/peopleActions'
import Example from './ModalInput'

const Persons = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
     dispatch(getPeople());
    },[]);
    const {people,loading} = useSelector(state=>state.person)
   
    
    return (
        <div>
            {loading && <h1>loading...</h1>}
            {people && people.map(person=> (<>
            <h4>Name : {`${person.fname} ${person.lname}`}</h4>
            <p>email: {person.email}</p>
            <p>age : {person.age}</p>
            <p>password : "{person.password}"</p>
            <button type="button" onClick={()=>dispatch(deletePerson(person._id))} >Delete</button>
            <Example person={person}/>
            
            </>))}
        </div>     
    )
}

export default Persons
