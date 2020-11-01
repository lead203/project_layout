import React from 'react';

import CircleCharts from './CircleCharts'

import './index.css'

function Statistics() {
  return (
    <div className="statistics">
      <div className="blockTop">
        <CircleCharts />
        <CircleCharts />

        <div className="borderBlockWrapper">
          <div className="colorStatus">
            <div className="colorStarusBlock allColorBg"></div>
            <span>Всего активных</span>
          </div>

          <div className="colorStatus">
            <div className="colorStarusBlock expiredColorBg"></div>
            <span>Истёк срок</span>
          </div>

          <div className="colorStatus">
            <div className="colorStarusBlock holdColorBg"></div>
            <span>Ожидается ОС</span>
          </div>

          <div className="colorStatus">
            <div className="colorStarusBlock soonColorBg"></div>
            <span>Скоро дедлайн</span>
          </div>
        </div>
      </div>

      <div className="blockBottom">
        <CircleCharts />

        <div className="wrapperBlock">
          <div className="titleBlock">Мои проекты</div>
          <div className="borderBlock">
            <div className="myProjects">
              <div className="m-b-15">
                <span className="descriptionTitel">Я руковожу/участвую</span>
              </div>

              <div className="descriptionStat">
                <table>
                  <tr>
                    <td className="colorAllActPrj">13</td>
                    <td>Всего активных проектов</td>
                  </tr>
                  <tr>
                    <td className="expiredColor">4</td>
                    <td>Вех с истекшим сроком</td>
                  </tr>
                  <tr>
                    <td className="soonColor">2</td>
                    <td>Сегодня дедлайн вехи</td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="myProjects">
              <div className="m-b-15">
                <span className="descriptionTitel">Я наблюдаю</span>
              </div>

              <div className="descriptionStat">
                <table>
                  <tr>
                    <td className="colorAllActPrj">13</td>
                    <td>Всего активных проектов</td>
                  </tr>
                  <tr>
                    <td className="expiredColor">4</td>
                    <td>Вех с истекшим сроком</td>
                  </tr>
                  <tr>
                    <td className="soonColor">2</td>
                    <td>Сегодня дедлайн вехи</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;