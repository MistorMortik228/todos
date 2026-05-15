import list from "../assets/img/list.svg"
import layout from "../assets/img/layout.svg"
import { useState } from "react"
import NotesItem from "./NotesItem"
import { useTranslation } from "react-i18next"

export default function Notes({ notes, delNote, changeNotes, filteredNotes, openDelModal,  }) {

  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const changeBtn = () => setShow(!show)

  const img = show ? layout : list
  const text = show ? t('grid') : t('list')
  const notesTitle = filteredNotes.length ? t('allNotes') : t('noNotes')

  const listClass = show ? 'notes__list active' : 'notes__list'
  const between = show ? 'note__top between' : 'note__top'

  return (
    <main className="main">

      <div className="notes container">
        <div className="notes__top">

          <h2 className="notes__top_title">{notesTitle}</h2>

          <button className="notes__top_btn" onClick={changeBtn}>
            <img src={img} alt="" />
            <span>{text}</span>
          </button>

        </div>

        <div className={listClass}>
          {filteredNotes.map(note =>
            <NotesItem key={note.id}
              {...note}
              between={between}
              delNote={delNote}
              changeNotes={changeNotes}
              openDelModal={openDelModal}
              
              
            />)}
        </div>

      </div>

    </main>
  )
}
