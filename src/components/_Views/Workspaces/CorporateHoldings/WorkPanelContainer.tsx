import React, {FC} from "react";
import { ExploreEntities } from "../WorkPanels/ExploreEntities";
import { ExploreCalendar } from "../WorkPanels/ExploreCalendar";
import { ExploreOwnership } from "../WorkPanels/ExploreOwnership";

import { CommonPanelContainer } from "../../../_Components/CorporateHoldings/WorkPanel";
import { FullWidthContainer } from "../../../_Components/Common/DataLayouts";
import { CommonPanelWrapper } from "../../../_Components/CorporateHoldings/WorkPanel";

export const WorkPanelContainer:FC=()=>{
    return(
        <CommonPanelWrapper>
        <FullWidthContainer>
            <h3>Start working on corporate matters</h3>
        </FullWidthContainer>
        <CommonPanelContainer>
            <ExploreEntities/>
            <ExploreCalendar/>
            <ExploreOwnership/>
        </CommonPanelContainer>
        </CommonPanelWrapper>
    )
}