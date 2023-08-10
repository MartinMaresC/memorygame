import React from "react";
import './GamePage.css';
import imagen1 from './img/imagen1.jpeg';
import imagen2 from './img/imagen2.jpeg';
import imagen3 from './img/imagen3.jpeg';
import imagen4 from './img/imagen4.jpeg';

const GamePage = () => {
    return (
        <div className="memorygame">
            <div className="galeria">
                <div className="imagen elemento1"><img src={imagen1} alt="imagen" /></div>
                <div className="imagen elemento2"><img src={imagen1} alt="imagen" /></div>
                <div className="imagen elemento3"><img src={imagen1} alt="imagen" /></div>
                <div className="imagen elemento4"><img src={imagen1} alt="imagen" /></div>
                <div className="imagen elemento5"><img src={imagen1} alt="imagen" /></div>
                <div className="imagen elemento6"><img src={imagen1} alt="imagen" /></div>
                <div className="imagen elemento7"><img src={imagen1} alt="imagen" /></div>
                <div className="imagen elemento8"><img src={imagen1} alt="imagen" /></div>
                <div className="imagen elemento9"><img src={imagen1} alt="imagen" /></div>
                <div className="imagen elemento10"><img src={imagen1} alt="imagen" /></div>
                <div className="imagen elemento11"><img src={imagen1} alt="imagen" /></div>
                <div className="imagen elemento12"><img src={imagen1} alt="imagen" /></div>
            </div>

        </div>
    );
}

export default GamePage;