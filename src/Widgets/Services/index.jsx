import React from 'react';

import linkIcon from '../../assets/img/icon/link.svg'
import playIcon from '../../assets/img/icon/play.svg'
import infoIcon from '../../assets/img/icon/info.svg'
import skypeIcon from '../../assets/img/icon/skype.svg'
import jiraIcon from '../../assets/img/icon/jira.svg'
import confluenceIcon from '../../assets/img/icon/confluence.png'
import dialogIcon from '../../assets/img/icon/dialog.svg'

import './index.css'

function Services() {
  return (
    <div className="Services">
      <div className="servicesTitle"><span>Полезные сервисы</span></div>
      <div className="linkList">
        <div>
          <div className="linkWrapper">
            <div>
              <div className="linkImg noIcon"><img src={linkIcon} className="" /></div>
              <span className="servicesName">Сфера</span>
            </div>

            <div>
              <div><img src={playIcon} className="playImg" /></div>
              <div><img src={infoIcon} className="" /></div>
            </div>
            
          </div>
        </div>

        <div>
          <div className="linkWrapper">
            <div>
              <div className="linkImg"><img src={skypeIcon} className="" /></div>
              <span className="servicesName">Skype</span>
            </div>

            <div>
              <div><img src={playIcon} className="playImg" /></div>
              <div><img src={infoIcon} className="" /></div>
            </div>
            
          </div>
        </div>

        <div>
          <div className="linkWrapper">
            <div>
              <div className="linkImg p-5"><img src={jiraIcon} className="" /></div>
              <span className="servicesName">Jira</span>
            </div>

            <div>
              <div><img src={playIcon} className="playImg" /></div>
              <div><img src={infoIcon} className="" /></div>
            </div>
            
          </div>
        </div>

        <div>
          <div className="linkWrapper">
            <div>
              <div className="linkImg p-5"><img src={confluenceIcon} className="" /></div>
              <span className="servicesName">Confluence</span>
            </div>

            <div>
              <div><img src={playIcon} className="playImg" /></div>
              <div><img src={infoIcon} className="" /></div>
            </div>
            
          </div>
        </div>

        <div>
          <div className="linkWrapper">
            <div>
              <div className="linkImg noIcon"><img src={linkIcon} className="" /></div>
              <span className="servicesName">ИСУП</span>
            </div>

            <div>
              <div><img src={playIcon} className="playImg" /></div>
              <div><img src={infoIcon} className="" /></div>
            </div>
            
          </div>
        </div>

        <div>
          <div className="linkWrapper">
            <div>
              <div className="linkImg"><img src={dialogIcon} className="" /></div>
              <span className="servicesName">Dialog</span>
            </div>

            <div>
              <div><img src={playIcon} className="playImg" /></div>
              <div><img src={infoIcon} className="" /></div>
            </div>
            
          </div>
        </div>

        <div>
          <div className="linkWrapper">
            <div>
              <div className="linkImg noIcon"><img src={linkIcon} className="" /></div>
              <span className="servicesName">Tessa + СЭД</span>
            </div>

            <div>
              <div><img src={playIcon} className="playImg" /></div>
              <div><img src={infoIcon} className="" /></div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;