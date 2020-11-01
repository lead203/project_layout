import React from 'react';

import burgerMenu from '../assets/img/icon/burgerMenu.svg'
import home from '../assets/img/icon/home.svg'
import functionalGroup from '../assets/img/icon/functionalGroup.svg'
import navigation from '../assets/img/icon/navigation.svg'

import './index.css'

function Leftbar() {
  return (
    <div className="leftSiteBar">
        <div className="iconBox"><img src={burgerMenu} className="menu" /></div>
        <div className="iconBox"><img src={home} className="iconBar active" /></div>
        <div className="iconBox"><img src={functionalGroup} className="iconBar" /></div>
        <div className="iconBox"><img src={navigation} className="iconBar" /></div>
    </div>
  );
}

export default Leftbar;