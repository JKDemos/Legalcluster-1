import React, {FC} from "react";
import {EntityFilter} from "./EntitiesFilter";
import { EntityFilterLarge } from "./EntitiesFilterLarge";

export const EntitiesFilterMenu:FC=()=>{
    return(
        <>
        <p>Rows are filtered by following conditions starting from the top...</p>
        <EntityFilter/>
        <EntityFilterLarge/>
        <EntityFilterLarge/>
        </>
    )
}