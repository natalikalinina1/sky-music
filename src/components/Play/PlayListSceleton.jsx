import React from 'react'

function PlayListSceleton() {
    return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <div className="sceleton sceleton__track-title"></div>
                    </div>
                    <div className="track__title-text">
                        <div className="sceleton sceleton__title-text"></div>
                    </div>
                </div>
                <div className="track__author">
                    <div className="sceleton sceleton__track-author"></div>
                </div>
                <div className="track__album">
                    <div className="sceleton sceleton__track-album"></div>
                </div>
            </div>
        </div>
    )
}

export default PlayListSceleton