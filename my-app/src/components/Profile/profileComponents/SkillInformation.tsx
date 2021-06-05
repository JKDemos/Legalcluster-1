import React,{FC, useState} from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import EditIcon from '@material-ui/icons/Edit';

//STYLED COMPONENTS
import { ItemWrapper } from '../../_Components/Common/ItemWrapper';
import { DataSection } from '../../_Components/Common/DataSection';
import {FlexRow, LabelContainer} from '../../_Components/Common/DataLayouts';
import { RightBound } from '../../_Components/Common/RightBound';
import {ProfileDescrption,ProfilePersonalDetails, SkillForm} from '../../_Components/Profile/Profile'
import { TagsForm } from '../../_Components/Forms';
import { BoldInput } from '../../_Components/Inputs';

export const SkillInformation:FC=()=>{
    let [isChange, showChange] = useState(false);
    let [expertise, setExpertise] = useState('Merges and aquisitions');
    let [specialities, setSpecialities] = useState('Cross border operation');
    let [specialities2, setSpecialities2] = useState('Transactions over 500M$');
    let [admission, setAdmission] = useState('Paris bar association');
    let [admission2, setAdmission2] = useState('Tuninsian bar association');
    let [country, setCountry] = useState('Tunisia');
    return(
        <>
            <FlexRow>
              <RightBound>
                  <EditIcon onClick={()=>showChange(isChange === false ? isChange = true:isChange=false)} />
              </RightBound>
             </FlexRow>
            <ProfilePersonalDetails>               
                <SkillForm>
                <TagsForm action="">
                    {isChange === false?(
                      <div>
                          <FlexRow>
                              <LabelContainer>
                                <p className="label">Expertise</p>
                                <p>{expertise}</p>
                                </LabelContainer>
                          </FlexRow>
                          <FlexRow>
                              <LabelContainer>
                                <p className="label">Spacielities</p>
                                    <FlexRow>
                                        <p>{specialities}</p>
                                        <p>{specialities2}</p>
                                    </FlexRow>
                                </LabelContainer>
                          </FlexRow>
                          <FlexRow>
                              <LabelContainer>
                                <p className="label">Admission to practice law</p>
                                    <FlexRow>
                                        <p>{admission}</p>
                                        <p>{admission2}</p>
                                    </FlexRow>
                                </LabelContainer>
                          </FlexRow>
                          <FlexRow>
                              <LabelContainer>
                                <p className="label">Countries</p>
                                <p>{country}</p>
                                </LabelContainer>
                          </FlexRow>
                      </div>
                    ):(
                        
                        <div>
                          <FlexRow>
                            <LabelContainer>
                                <p className="label">Expertise</p>
                                <input type="text" id="expertise" value={expertise} onChange={event =>setExpertise(event.target.value)}/>
                              </LabelContainer>
                          </FlexRow>
                          <FlexRow>
                              <LabelContainer>
                                <p className="label">Spacielities</p>
                                    <FlexRow>
                                    <input type="text" id="expertise" value={specialities} onChange={event =>setSpecialities(event.target.value)}/>
                                    <input type="text" id="expertise" value={specialities2} onChange={event =>setSpecialities2(event.target.value)}/>
                                    </FlexRow>
                                </LabelContainer>
                          </FlexRow>
                          <FlexRow>
                              <LabelContainer>
                                <p className="label">Admission to practice law</p>
                                    <FlexRow>
                                    <input type="text" id="expertise" value={admission} onChange={event =>setAdmission(event.target.value)}/>
                                    <input type="text" id="expertise" value={admission2} onChange={event =>setAdmission2(event.target.value)}/>
                                    </FlexRow>
                                </LabelContainer>
                          </FlexRow>
                          <FlexRow>
                            <LabelContainer>
                                <p className="label">Countries</p>
                                <input type="text" id="expertise" value={country} onChange={event =>setCountry(event.target.value)}/>
                              </LabelContainer>
                          </FlexRow>
                      </div>
  
                    )}
                </TagsForm>
                </SkillForm>        
            </ProfilePersonalDetails>   
        </>
       );
};