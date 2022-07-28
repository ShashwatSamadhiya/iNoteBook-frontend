import React,{useContext} from "react";
import { useState } from "react";
import noteContext from "../context/notes/noteContext";


const AddNote = (props) => {
    const context=useContext(noteContext);
    const {addNote}=context;
    const [note,setNote]= useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
          e.preventDefault();
          addNote(note.title, note.description, note.tag);
          props.showAlert("Note Added SuccesFully","success")
          setNote({title:"",description:"",tag:""});
    }
    const onChange=(event)=>{

        setNote({...note, [event.target.name]:event.target.value })
        
    }
  return (
    <div>
      <div className="container my-5">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              onChange={onChange}
              aria-describedby="emailHelp"
              minLength={5} 
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
            Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={note.description}
              name="description"
              onChange={onChange}
              minLength={5} 
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
            Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              value={note.tag}
              name="tag"
              onChange={onChange}
            />
          </div>
          
          <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
