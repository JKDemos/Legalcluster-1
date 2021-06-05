import React,{FC, useState} from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { IPhotosReducer } from '../../../reducers/photosReducers';
import { Avatar } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


//ICONS
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DescriptionIcon from '@material-ui/icons/Description';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

//STYLED COMPONENTS
import { ItemWrapper } from '../../_Components/Common/ItemWrapper';
import { DataSection } from '../../_Components/Common/DataSection';
import {FlexRow} from '../../_Components/Common/DataLayouts';
import { RightBound } from '../../_Components/Common/RightBound';
import {ProfileDescrption,ProfilePersonalDetails,ProfileBox,PersonalDataForm} from '../../_Components/Profile/Profile'
import { ShadowForm} from '../../_Components/Forms';
import { BoldInput } from '../../_Components/Inputs';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: '60px',
      height: '60px',
      marginLeft:'15px',
      marginTop:'20px',
    },
  }),
);

interface ISection1 {
  title:string
  }
  
  export const ProfileInfomation: FC<ISection1> = props =>{
      //{props.title} renderowanie tytułu
      // const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);
      const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
      const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);
  
  
      let [isChange, showChange] = useState(false);
     
     let [name, setName] = useState(usersList?.[0]?.name);
     let [company,setCompany] = useState(usersList?.[0]?.company.name);
    //  let [city,setCity] = useState(usersList?.[0]?.address.city);
     let [partner,setPartner] = useState('Partner');
     let [email,setEmail] = useState(usersList?.[0]?.email);
     let [phone,setPhone] = useState(usersList?.[0]?.phone);
     
     const classes = useStyles();
     var city='New York'
     return(
      <DataSection>
          <DataSection>
            <FlexRow>
              <MailOutlineIcon/>
              <p>Message</p>
              <DescriptionIcon/>
              <p>Create a request</p>
              <AddBoxIcon/>
              <p>Add to a claster</p>
              <CloseIcon className='X'/>
              </FlexRow>
          </DataSection>
          <FlexRow>
            <RightBound>
                <EditIcon onClick={()=>showChange(isChange === false ? isChange = true:isChange=false)} />
            </RightBound>
           </FlexRow>
          <ProfilePersonalDetails>
            <ProfileBox>
                <Avatar alt='profilePicture' src={photosList[0]?.url} className={classes.large}/>
                  <p>See profile</p>                 
            </ProfileBox>
              
              <PersonalDataForm>
              <ShadowForm action="">
                  {isChange === false?(
                    <div>
                        <FlexRow>
                        <p><b> {name} </b></p>
                        </FlexRow>
                        <FlexRow>
                        <p> {company}</p>
                        </FlexRow>
                        <FlexRow>
                        <p>New York</p>
                        <p> {partner} </p>
                        </FlexRow>
                    </div>
                  ):(
                      
                      <div>
                          <FlexRow>
                            <BoldInput type="text" placeholder="Name" value={name} onChange={event =>setName(event.target.value)} />
                        </FlexRow>
                        <FlexRow>
                            <input type="text" placeholder="Company" value={company} onChange={event =>setCompany(event.target.value)}/>
                        </FlexRow>
                        <FlexRow>
                            <input type="text" placeholder="City" value={city}  onChange={event =>{city=event.target.value}}/>
                            <input type="text" placeholder="Partner" value={partner} onChange={event =>setPartner(event.target.value)}/>
                        </FlexRow>
                    </div>

                  )}
                  </ShadowForm>
              </PersonalDataForm>
              
              <PersonalDataForm>
                <ShadowForm action="">
                  <RightBound>
                  {isChange === false?(
                      <div>
                        <FlexRow>
                          <p>{email}</p>
                        </FlexRow>
                        <FlexRow>
                          <p>{phone}</p>
                        </FlexRow>
                      </div>):(
                          <div>
                            <FlexRow>
                                <input type="text" placeholder="e-mail" value={email} onChange={event =>setEmail(event.target.value)}/>
                            </FlexRow>
                            <FlexRow>
                                <input type="text" placeholder="Phone number" value={phone} onChange={event =>setPhone(event.target.value)}/>
                            </FlexRow>
                            </div>
                      )}
                  </RightBound>
                  </ShadowForm>
              </PersonalDataForm>
          </ProfilePersonalDetails>
  
      </DataSection>
     );
    };