import React from 'react';

import logo from '../assets/img/logo.svg'
import searchIcon from '../assets/img/icon/search.svg'
import bellIcon from '../assets/img/icon/bell.svg'
import profileImg from '../assets/img/profileImg.png'

import './index.css'

function Header() {
  return (
    <header className="headerWrapper">
        <div className="header">
            <div className="headerLeft">
                <div className="headerLogo"><img src={logo} className="App-logo" alt="logo" /></div>

                <div className="searchWrapper">
                    <div className="search">
                        <div className="inputText"><input placeholder="Поиск сотрудника, проекта, задачи" /></div>
                        <div className="serchBtn">
                            <button>
                                <img src={searchIcon} className="App-logo" alt="logo" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="headerRight">
                <div className="dateTime">
                    <div className="time"><span>12:34</span></div>
                    <div className="date"><span>28 октября</span></div>
                </div>

                <div className="notifications">
                    <div className="bellIcon"><img src={bellIcon} className="" alt="bell" /></div>
                    <div className="notificationsCount"><span>8</span></div>
                </div>

                <div className="profile">
                    <div className="profileImg"><img src={profileImg} className="" alt="profileImg" /></div>
                    <div className="profileName"><span>Алена Иванова</span></div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;