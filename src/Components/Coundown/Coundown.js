import { useEffect } from "react";
import classes from "./Coundown.module.css";

const Coundown =({ coundown, setCoundown }) => {
    useEffect(function(){
        if (!coundown) return;
    
    const internal = setInterval(()=> {
        setCoundown(coundown - 1);
    }, 1000);

    return () => clearInterval(internal);
    }, [coundown]);

    return(
        <div className={classes.Coundown}>{coundown}</div>
    );
}

export default Coundown;