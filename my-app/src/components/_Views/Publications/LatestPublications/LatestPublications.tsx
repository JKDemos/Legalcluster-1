import React,{FC} from 'react';
import PublicationsList from './Components/PublicationsList';
import LastPublication from './Components/LastPublication';
import Workspaces from './Components/Workspaces'
import CustomPaginationActionsTable from './Components/ResumeWork/WorkPages'
import { FullWidthContainer } from '../../../_Components/Common/DataLayouts';
import { PublicationsModule } from '../../../_Components/Publications/Publications';
export const LatestPublications:FC=()=> {
  return (
      <FullWidthContainer>
        <PublicationsModule>
          <LastPublication/>
          <PublicationsList/>
        </PublicationsModule>
        <Workspaces/>
        <CustomPaginationActionsTable/>
      </FullWidthContainer>
  );
}