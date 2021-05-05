import React,{FC} from 'react';
import PublicationsList from './Components/PublicationsList';
import LastPublication from './Components/LastPublication';

export const LatestPublications:FC=()=> {
  return (
      <>
        <LastPublication/>
        <PublicationsList/>
      </>
  );
}