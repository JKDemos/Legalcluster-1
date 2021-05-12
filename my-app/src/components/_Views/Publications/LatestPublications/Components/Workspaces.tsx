import {FC} from 'React';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IPhotoReducer } from '../../../../../reducers/photoReducers';
import { IState } from '../../../../../reducers';
import {useSelector} from 'react-redux'

import Workspace from './Workspaces/Workspace';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {SliderWrapper} from '../../../../../styledHelpers/SliderWrapper'
export const Workspaces: FC =()=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };
   return(
    
       <SliderWrapper>
         
           <Slider {...settings}>
           <Link to="/Test">
                <Workspace workspaceType='Supplier Contract' clientType='corporate' clientCount={150}/>
           </Link>

            <Link to="/Test">
                <Workspace workspaceType='Client Contract' clientType='corporate' clientCount={150}/>
            </Link>

            <Link to="/Test">
                <Workspace workspaceType='Group norm' clientType='corporate' clientCount={150}/>
            </Link>

            <Link to="/Test">
                <Workspace workspaceType='Supplier Contract' clientType='corporate' clientCount={150}/>
           </Link>

            <Link to="/Test">
                <Workspace workspaceType='Client Contract' clientType='corporate' clientCount={150}/>
            </Link>

            <Link to="/Test">
                <Workspace workspaceType='Group norm' clientType='corporate' clientCount={150}/>
            </Link>

            <Link to="/Test">
                <Workspace workspaceType='Supplier Contract' clientType='corporate' clientCount={150}/>
           </Link>

            <Link to="/Test">
                <Workspace workspaceType='Client Contract' clientType='corporate' clientCount={150}/>
            </Link>

            <Link to="/Test">
                <Workspace workspaceType='Group norm' clientType='corporate' clientCount={150}/>
            </Link>

    
            <Link to="/Test">
                <Workspace workspaceType='Group norm' clientType='corporate' clientCount={150}/>
            </Link>
           

          </Slider>
           
        </SliderWrapper>
   );
};
export default Workspaces;