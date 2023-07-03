import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>Welcome to My Memory Game</h1>
            <Link to= '/game'>
                <button>Start Game</button>
            </Link>
        </div>
    );
}

export default MainPage;