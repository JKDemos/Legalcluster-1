import React, {FC} from "react";
import {EntityFilter} from "./EntitiesFilter";

export const EntitiesFilterMenu:FC=()=>{
    return(
        <>
        <p>Rows are filtered by following conditions starting from the top...</p>
        <EntityFilter/>
        <EntityFilter/>
        <EntityFilter/>
        </>
    )
}