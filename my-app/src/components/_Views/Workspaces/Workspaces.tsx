import React,{FC} from 'react';
import { CorporateHoldings } from './CorporateHoldings/CorporateHoldings';
import { WorkPanelContainer } from './CorporateHoldings/WorkPanelContainer';
import CustomPaginationActionsTable from './ResumeWork/ResumePages';

import { CorporateContainer, CorporateMainContainer } from '../../_Components/CorporateHoldings/CorporateCommon';

export const Workspaces:FC=()=> {
  return (
    <CorporateMainContainer>
    <CorporateContainer>
        <CorporateHoldings/>

        <WorkPanelContainer/>
    </CorporateContainer>
      <CustomPaginationActionsTable/>
    </CorporateMainContainer>
  );
} 