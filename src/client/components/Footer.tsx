import * as React from 'react';
import ReactPlayer from "react-player";


const Footer: React.FC<footerProps> = (props) => {
    return (
        <div id="sticky-footer">
        <div className="youtube-title f">
            <h3>Our Latest Video </h3>
            <div className="youtube-embed">
                <ReactPlayer className="youtube-player"
                    url="https://www.youtube.com/watch?v=TP_85DvaDP8&t=524s"
                />
            </div>
        </div>
        </div>
    )
}

interface footerProps { }

export default Footer;