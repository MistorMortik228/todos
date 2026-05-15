import { t } from "i18next"
import { useEffect, useState } from "react"


export default function Modal({ closeModal, addNotes, editedNote, editNote }) {

  const [title, setTitle] = useState('')

  const [text, setText] = useState('')


  const hasTitle = title.length ? 'hasTitle' : ''
  const hasContent = text.length ? 'hasContent' : ''

  const titletext = editedNote ? t('editNotes') : t('addNotes')

  const Btntext = editedNote ? t('edit') : t('add')

  const stop = (e) => e.stopPropagation()


  const add = () => {

    if (title.length > 3 && text.length > 3) {

      const note = {
        title,

        text,

        date: new Date().toLocaleDateString(),

        id: editNote ? editNote.id : crypto.randomUUID()
      }

      addNotes(note)

      closeModal()
      setTitle('')
      setText('')
    }

  }

  return (
    <div className="modal" onClick={closeModal}>

      <div className="modal__block" onClick={stop}>
        <h3 className="modal__block_title">{titletext}</h3>
        <div className="modal__block_labels">

          <label className="modal__block_label">

            <input className={hasTitle}
              type="text"

              onChange={(e) => setTitle(e.target.value)} value={title}
            />

            <span>{t("title")}</span>
          </label>

          <label className="modal__block_label">

            <input className={hasContent}
              type="text" onChange={(e) => setText(e.target.value)}
              value={text}

            />

            <span>{t('content')}</span>
          </label>

        </div>

        <div className="modal__btns">

          <button className="btn del" onClick={closeModal}>{t('cancel')}</button>

          <button className="btn add" onClick={add}>{Btntext}</button>

        </div>
      </div>

    </div>

  )
}
