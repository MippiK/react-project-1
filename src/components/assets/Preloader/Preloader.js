import React from "react";
import preloader from '../../../assets/photos/preloader.gif'

function Preloader(props) {
    return <div className="preloader">
        <img src={preloader} alt="preloader_gif"/>
    </div>
}

export default Preloader;