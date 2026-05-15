import React from 'react'
import { t } from 'i18next'

const stop = (e) => e.stopPropagation()

export default function DelModal({closeDelModal, confirmDelete,}) {
    return (
        <div className="delmodal" onClick={closeDelModal}>
            <div className="delmodal__block" onClick={stop}>
                <h2 className="delmodal__title">{t('warning')}</h2>
                <div className="delmodal__label">
                    <span className="delmodal__label_span"></span>
                </div>
                <div className="delmodal__btns">
                    <button className="delmodal__btn btn add" onClick={closeDelModal}>{t('cancel')}</button>
                    <button className="delmodal__btn btn del" onClick={confirmDelete}>{t('del')}</button></div>
            </div>
        </div>
    )
}
