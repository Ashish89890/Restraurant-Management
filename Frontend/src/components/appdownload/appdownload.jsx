import React from 'react'
import { assets } from '../../assets/assets'
import './appdownload.css'
const appdownload = () => {
  return (
    <div>
          <div className="app-download" id='app-download'>
              <p>For Better Experience <br />
                  mera app</p>
              <div className="download-platforms">
                  <img src={assets.play_store} alt="" />
                  <img src={assets.app_store} alt="" />
            
              </div>
      </div>
    </div>
  )
}

export default appdownload
