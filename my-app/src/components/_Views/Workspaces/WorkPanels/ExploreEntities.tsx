import React, {FC} from "react";

import { PanelContainer } from "../../../_Components/CorporateHoldings/WorkPanel";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export const ExploreEntities:FC=()=>{
    
    return(
        <PanelContainer>
        <AccountBalanceIcon/>
        <h3>Define the <b>calendar</b></h3>
        <p>Prepare future events by creating detailed plans around life of your entity
        </p>
        </PanelContainer>
    )
}