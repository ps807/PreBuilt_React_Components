import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [noteExpanded, setNoteExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleTitleClick(event) {
    setNoteExpanded((prevNoteExpanded) => !prevNoteExpanded);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          onClick={handleTitleClick}
          value={note.title}
          placeholder="Title"
        />
        {noteExpanded && (
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={noteExpanded ? 3 : 1}
          />
        )}
        <Zoom in={noteExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
