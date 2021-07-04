import {FC} from 'React';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IPhotosReducer } from '../../../../../reducers/photosReducers';
import { IState } from '../../../../../reducers';
import {useSelector} from 'react-redux'

import Workspace from './Workspaces/Workspace';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {SliderWrapper} from '../../../../../styledHelpers/SliderWrapper'

import contractIcon from '../../../../../icons/entities2.png'
import normIcon from '../../../../../icons/entities2.png'
import corporateIcon from '../../../../../icons/entities2.png'
export const Workspaces: FC =()=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };

    const {photosList} = useSelector<IState,IPhotosReducer>(globalState=>globalState.photos)
   return(
    
       <SliderWrapper>
         
           <Slider {...settings}>
           <Link to="/workspaces/Supplier Contract/entities2.svg">
                <Workspace photoUrl={photosList?.[0]?.url} iconUrl='entities2.svg' workspaceType='Supplier Contract' clientType='corporate' clientCount={150}/>
           </Link>

           <Link to="/workspaces/Client Contract/entities2.svg">
                <Workspace photoUrl={photosList?.[0]?.url} iconUrl='entities2.svg' workspaceType='Client Contract' clientType='corporate' clientCount={150}/>
            </Link>

            <Link to="/workspaces/Group Norm/people.svg">
                <Workspace photoUrl={photosList?.[1]?.url} iconUrl='people.svg' workspaceType='Group norm' clientType='corporate' clientCount={150}/>
            </Link>

            <Link to="/workspaces/Supplier Contract/entities2.svg">
                <Workspace photoUrl={photosList?.[2]?.url} iconUrl='entities2.svg' workspaceType='Supplier Contract' clientType='corporate' clientCount={150}/>
           </Link>

           <Link to="/workspaces/Client Contract/entities2.svg">
                <Workspace photoUrl={photosList?.[3]?.url} iconUrl='entities2.svg' workspaceType='Client Contract' clientType='corporate' clientCount={150}/>
            </Link>

            <Link to="/workspaces/Group Norm/people.svg">
                <Workspace photoUrl={photosList?.[4]?.url} iconUrl='people.svg' workspaceType='Group norm' clientType='corporate' clientCount={150}/>
            </Link>

            <Link to="/workspaces/Supplier Contract/entities2.svg">
                <Workspace photoUrl={photosList?.[5]?.url} iconUrl='entities2.svg' workspaceType='Supplier Contract' clientType='corporate' clientCount={150}/>
           </Link>

           <Link to="/workspaces/Client Contract/entities2.svg">
                <Workspace photoUrl={photosList?.[6]?.url} iconUrl='entities2.svg' workspaceType='Client Contract' clientType='corporate' clientCount={150}/>
            </Link>

            <Link to="/workspaces/Group Norm/people.svg">
                <Workspace photoUrl={photosList?.[7]?.url} iconUrl='people.svg' workspaceType='Group norm' clientType='corporate' clientCount={150}/>
            </Link>
            <Link to="/workspaces/Group Norm/people.svg">
                <Workspace photoUrl={photosList?.[8]?.url} iconUrl='people.svg' workspaceType='Group norm' clientType='corporate' clientCount={150}/>
            </Link>
           

          </Slider>
           
        </SliderWrapper>
   );
};
export default Workspaces;