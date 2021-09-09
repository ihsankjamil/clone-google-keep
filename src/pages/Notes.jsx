import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import NoteCardLayout from "../components/NoteCardLayout";

function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes/")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
  };

  return (
    <div>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCardLayout note={note} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Notes;
