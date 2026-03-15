import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !details) return;

    const newNote = {
      id: Date.now(),
      title,
      details,
    };

    setNotes([newNote, ...notes]);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-neutral-900 to-black relative overflow-hidden text-white">
      {/* Background Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative p-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-neutral-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-neutral-800 h-fit">
            <h1 className="text-2xl font-semibold mb-1">Create Note</h1>
            <p className="text-neutral-400 text-sm mb-6">
              Write down your thoughts and save them.
            </p>

            <form className="flex flex-col gap-4" onSubmit={submitHandler}>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Note title"
                className="px-4 py-2 rounded-lg bg-neutral-950 border border-neutral-700 focus:outline-none focus:border-purple-400"
              />

              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows="4"
                placeholder="Write your note..."
                className="px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-700 focus:outline-none focus:border-purple-400 resize-none"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-blue-500 py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                Add Note
              </button>
            </form>
          </div>

          {/* Notes */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Notes</h2>

            <div className="grid grid-cols-2 gap-4">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="bg-neutral-900/80 backdrop-blur-md p-4 rounded-xl border border-neutral-800 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-semibold mb-1">{note.title}</h3>
                    <p className="text-sm text-neutral-400">{note.details}</p>
                  </div>

                  <button
                    onClick={() => deleteNote(note.id)}
                    className="mt-4 text-sm bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
