import React, {FC} from "react";

import { PanelContainer } from "../../../_Components/CorporateHoldings/WorkPanel";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export const ExploreOwnership:FC=()=>{
    
    return(
        <PanelContainer>
        <AccountBalanceIcon/>
        <h3>Structure your <b>ownership</b></h3>
        <p>Get a clear view of the ownership by looking at the relations between individuals end entities
        </p>
        </PanelContainer>
    )
}