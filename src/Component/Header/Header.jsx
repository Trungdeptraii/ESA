import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logo-esa.png'
import style from './header.module.css';

export default function Header() {
  const [toggle, setToggle] = useState(faList)
  let handleToggle = ()=>{
    setToggle((prev)=>{
      if(prev.iconName == 'list'){
        return faCaretDown
      }else if(prev.iconName == 'caret-down'){
        return faList
      }
    })
  }
  return (
    <div className="header pt-3">
      <div className="row justify-content-between">
        <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
          <span className={style["toggle"]} onClick={handleToggle}><FontAwesomeIcon icon={toggle}/></span>
        </div>
        <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 justify-content-end align-items-end" style={{display: 'flex'}}>
          <img className={style["logo"]} src={logo} alt="logo"/>
        </div>
      </div>
    </div>
  )
}
