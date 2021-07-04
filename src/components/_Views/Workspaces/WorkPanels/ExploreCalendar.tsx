import React, {FC} from "react";

import { PanelContainer } from "../../../_Components/CorporateHoldings/WorkPanel";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export const ExploreCalendar:FC=()=>{
    
    return(
        <PanelContainer>
        <AccountBalanceIcon/>
        <h3>Define the <b>calendar</b></h3>
        <p>Take a few minutes to look at the most important element and specificities of
            your entities
        </p>
        </PanelContainer>
    )
}