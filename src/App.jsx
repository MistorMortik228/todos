import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import add from "./assets/img/pens.svg"
import Modal from "./components/Modal"
import { useEffect, useState } from "react"
import DelModal from "./components/DelModal"

export default function App() {

  const initialNotes = JSON.parse(localStorage.getItem('notes')) || []

  const [notes, setNotes] = useState(initialNotes)


  const [showModal, setShowModal] = useState(false)

  const [showDelModal, setShowDelModal] = useState(false)

  const [selectedId, setSelectedId] = useState(null)

  const openDelModal = (id) => {
    setSelectedId(id)
  setShowDelModal(true)
}

const confirmDelete = () => {
  delNote(selectedId)
  closeDelModal()
}
  const closeDelModal = () => setShowDelModal(false)

  const [editedNote, setEditedNote] = useState(false)
  const [editNote, setEditNote] = useState(null)
  const [currentNav, setCurrentNav] = useState(false)

  const [searchText, setSearchText] = useState('')

  const openModal = () => {
    setShowModal(true)
    setEditedNote(false)
    setEditNote(null)
  }

  const closeModal = () => setShowModal(false)
  const delNote = (id) => setNotes(notes.filter(note => note.id !== id))
  const changeNotes = (id) => {

    const note = notes.find(e => e.id === id)

    setEditedNote(true)
    setShowModal(true)

    setEditNote(note)
  }

  const addNotes = (note) => {

    if (editNote) {

      setNotes(notes.map(item => item.id === editNote.id ? note : item))

    } else {
      setNotes([...notes, note])
    }
    setEditNote(null)

  }

  const changeNav = () => setCurrentNav(!currentNav)

  const filteredNotes =
    notes.filter(note => note.title?.toLowerCase().includes(searchText.toLowerCase()))

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  console.log(filteredNotes);

  return (
    <>
      <Navbar
        currentNav={currentNav}
        changeNav={changeNav}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <Notes
        notes={notes}
        delNote={delNote}
        changeNotes={changeNotes}
        filteredNotes={filteredNotes}
        openDelModal={openDelModal}

      />

      {showModal &&
        <Modal
          closeModal={closeModal}
          addNotes={addNotes}
          editedNote={editedNote}

          editNote={editNote}
        />}

      {showDelModal &&
        <DelModal
          closeDelModal={closeDelModal}
          confirmDelete={confirmDelete}
        />}




      <button className="addNote" onClick={openModal}><img src={add} alt="" /></button>
    </>
  )
}
