import React from 'react';

import circleProgress from '../../../assets/img/circleProgress.svg'
import arrowGreen from '../../../assets/img/icon/arrowGreen.svg'

import './index.css'

function CircleCharts() {
  return (
    <div className="wrapperBlock">
      <div className="titleBlock">Мои задачи</div>
      <div className="borderBlock">
        <div><img src={circleProgress} className="" /></div>

        <div className="description">
          <div className="m-b-15"><span className="descriptionTitel">На текущей неделе</span></div>

          <div className="descriptionStat m-b-15">
            <div className="countAll"><span>5</span></div>
            <div className="descriptionInfo">
              <p>Всего завершено</p>
              <div className="lastWeekInfo">
                <span>0</span>
                <p>Относительно прошлой недели</p>
              </div>
            </div>
          </div>

          <div className="descriptionStat m-b-15">
            <div className="countAll"><span>3</span></div>
            <div className="descriptionInfo">
              <p>Из них со сбоями</p>
              <div className="lastWeekInfo">
                <span>-1</span>
                <span><img src={arrowGreen} className="" /></span>
                <p>Относительно прошлой недели</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircleCharts;