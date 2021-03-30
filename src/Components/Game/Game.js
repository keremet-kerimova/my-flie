import { useEffect } from "react";
import classes from "./Game.module.css"

const Game =({ game, setGame }) => {
    useEffect(function(){
        if (!Game) return;
    
    const internal = setInterval(()=> {
        setGame(game - 1);
    }, 1000);

    return () => clearInterval(internal);
    }, [game]);

    return(
        <div className={classes.Game}>{game}</div>
    );
}

export default Game;