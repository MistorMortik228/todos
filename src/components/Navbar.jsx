import clear from "../assets/img/clear.svg"
import back from "../assets/img/back.svg"
import search from "../assets/img/search.svg"
import { useTranslation } from "react-i18next"

export default function Navbar({ currentNav, changeNav, searchText, setSearchText }) {

  const { i18n, t } = useTranslation()

  const clearSearch = () => setSearchText('')

  const changeLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru'
    i18n.changeLanguage(newLang)
    localStorage.setItem('lang', newLang)
  }


  return (

    <>
      {!currentNav &&
        <nav className="nav">
          <button className="nav__lang" onClick={changeLang}>{i18n.language}</button>

          <h1 className="nav__title">  {t('notes')}   </h1>

          <button className="nav__btn" onClick={changeNav}>
            <img src={search} alt="" />
          </button>
        </nav>
      }


      {currentNav && <nav className="nav">
        <button className="nav__lang" onClick={changeNav}><img src={back} alt="" /></button>

        <input
          type="text"
          className="nav__input"
          placeholder={t('search')}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          autoFocus
        />

        <button className="nav__btn" onClick={clearSearch}>
          <img src={clear} alt="" />
        </button>
      </nav>}
    </>

  )


}
