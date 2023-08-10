import React from "react";
import { Link } from "react-router-dom";
import './MainPage.css';

const MainPage = () => {
    return (
        <div className="mainpage">
            <h1>Welcome to My Memory Game</h1>
            <Link to= '/game'>
                <button>Start Game</button>
            </Link>
        </div>
    );
}

export default MainPage;