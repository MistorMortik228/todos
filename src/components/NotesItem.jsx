import { t } from 'i18next'
import React from 'react'


export default function NotesItem({ title, text, date, id, between, delNote, changeNotes, openDelModal }) {



  return (
    <div className="note">

      <div className={between}>
        <h3 className="note__title">{title}</h3>
        <span className="note__date">{date}</span>
      </div>

      <p className="note__text">{text}</p>

      <div className="note__btns">
        <button className="note__btn btn add" onClick={() => changeNotes(id)}>{t('edit')} </button>

        <button className="note__btn btn del" onClick={() => openDelModal(id)}>{t('del')} </button>
      </div>
    </div>
  )
}
