import React from "react";
import bell from "../../../assets/bell/bell.png"

export default function Bell({isSmall}){
    return(
        <img className="bell" src={bell} alt='ringtone bell' width={isSmall ? 30 : 80}></img>
    );
}