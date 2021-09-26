import {Button, Modal} from 'react-bootstrap'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import {editPerson } from '../actions/peopleActions';


export default function Example({person}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [personInfo, setPersonInfo] = useState(person);
    const dispatch = useDispatch();
    const handleChange =(e)=>{
        setPersonInfo({...personInfo,[e.target.name]:e.target.value})
        }
    const handleSubmit=(e)=>{
            e.preventDefault()
            dispatch(editPerson(personInfo._id,personInfo)) 
            setShow(false)
        }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
                <input type='text' value={personInfo.fname} placeholder='fname' name='fname' onChange={handleChange}/>
                <input type='text' value={personInfo.lname} placeholder='lname' name='lname' onChange={handleChange}/>
                <input type='text' value={personInfo.email} placeholder='email' name='email' onChange={handleChange}/>
                <input type='text' value={personInfo.age} placeholder='age' name='age' onChange={handleChange}/>
                <input type='text' value={personInfo.password} placeholder='password' name='password' onChange={handleChange}/>
                <button type='submit' onClick={handleSubmit}>Save</button>
            </form>
              </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  