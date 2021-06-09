import React,{FC, useState} from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import EditIcon from '@material-ui/icons/Edit';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { IPhotosReducer } from '../../../reducers/photosReducers';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {BrowserRouter as Router,Link} from 'react-router-dom';

//STYLED COMPONENTS
import { ItemWrapper } from '../../_Components/Common/ItemWrapper';
import { DataSection } from '../../_Components/Common/DataSection';
import {FlexRow,FullWidthContainer, LabelContainer} from '../../_Components/Common/DataLayouts';
import { RightBound } from '../../_Components/Common/RightBound';
import {ProfileContainer,ProfileFormContainer,ProfileSkillContainer, SkillForm,TermForm, FileInput, SectionSeparator, ContactForm,
     ContactButton, BigButton, SkillFormHeader, FeeFormWrapper, FileInputWrapper, ContactData, Table, Collumn} from '../../_Components/Profile/Profile'
import { TagsForm, FeeForm } from '../../_Components/Forms';
import { BoldInput } from '../../_Components/Inputs';

export const SkillInformation:FC=()=>{
    const {usersList} = useSelector<IState,IUsersReducer>(globalState=>globalState.users)
    const {photosList} = useSelector<IState,IPhotosReducer>(globalState=>globalState.photos)
    //Expertise
    let [isChange, showChange] = useState(false);
    let [expertise, setExpertise] = useState('Merges and aquisitions');
    let [specialities, setSpecialities] = useState('Cross border operation');
    let [specialities2, setSpecialities2] = useState('Transactions over 500M$');
    let [admission, setAdmission] = useState('Paris bar association');
    let [admission2, setAdmission2] = useState('Tuninsian bar association');
    let [country, setCountry] = useState('Tunisia');
    //Panel informations
    let [fee, setFee] = useState('610');
    let [term, setTerm] = useState('Monthly 10k€ - see with Jeanny Smith');
    let [service, setService] = useState('Corporate M&A and international acquisitions');
    let [attachment, setAttachment] = useState('Attach file...');
    let [correspondants, setCorrespondants] = useState(usersList?.[1]?.name);
    let [correspondants2, setCorrespondants2] = useState(usersList?.[2]?.name);
    //Proposals
    let [propname1, setPropName1] = useState('dolor sit');
    let [propname2, setPropName2] = useState('amconsectetur');
    let [propname3, setPropName3] = useState('adipisicing elit');
    let [propEntity1, setPropEntity1] = useState('Lorem');
    let [propEntity2, setPropEntity2] = useState('quaerat');
    let [propEntity3, setPropEntity3] = useState('temporibus');
    let [propLocation1, setPropLocation1] = useState('Germany');
    let [propLocation2, setPropLocation2] = useState('Poland');
    let [propLocation3, setPropLocation3] = useState('Japan');
    let [propExp1, setPropExp1] = useState('aporrot');
    let [propExp2, setPropExp2] = useState('molestias');
    let [propExp3, setPropExp3] = useState('corporis');
    let [propDate1, setPropDate1] = useState('2021-05-06');
    let [propDate2, setPropDate2] = useState('2021-04-07');
    let [propDate3, setPropDate3] = useState('2021-07-08');
    let [propFirm3, setPropFirm3] = useState('Renault');
    let [propFirm2, setPropFirm2] = useState('Peugeot');
    let [propFirm1, setPropFirm1] = useState('Nissan');
    //internal reviews
    let [intName1, setIntName1] = useState('dolor sit');
    let [intName2, setIntName2] = useState('amconsectetur');
    let [intName3, setIntName3] = useState('adipisicing elit');
    let [intEntity1, setIntEntity1] = useState('Lorem');
    let [intEntity2, setIntEntity2] = useState('quaerat');
    let [intEntity3, setIntEntity3] = useState('temporibus');
    let [intLocation1, setIntLocation1] = useState('Austria');
    let [intLocation2, setIntLocation2] = useState('Belgium');
    let [intLocation3, setIntLocation3] = useState('Germany');
    let [intExp1, setIntExp1] = useState('aporrot');
    let [intExp2, setIntExp2] = useState('molestias');
    let [intExp3, setIntExp3] = useState('corporis');
    let [intDate1, setIntDate1] = useState('2021-05-06');
    let [intDate2, setIntDate2] = useState('2021-04-07');
    let [intDate3, setIntDate3] = useState('2021-07-08');
    //amount of fees
    let [amYear1, setAmYear1] = useState('2019');
    let [amYear2, setAmYear2] = useState('2018');
    let [amYear3, setAmYear3] = useState('2017');
    let [amCost1, setAmCost1] = useState('CS 153');
    let [amCost2, setAmCost2] = useState('CS 153');
    let [amCost3, setAmCost3] = useState('CS 47');
    let [amCost4, setAmCost4] = useState('CS 153');
    let [amCost5, setAmCost5] = useState('CS 32');
    let [amTotal1, setAmTotal1] = useState('3 500€');
    let [amTotal2, setAmTotal2] = useState('9 500€');
    let [amTotal3, setAmTotal3] = useState('10 500€');
    let [amTotal4, setAmTotal4] = useState('18 500€');
    let [amTotal5, setAmTotal5] = useState('15 500€');
    let [amLaw1, setAmLaw1] = useState('Clifford chance');
    let [amLaw2, setAmLaw2] = useState('Linklaters');
    let [amLaw3, setAmLaw3] = useState('Linklaters');
    let [amLaw4, setAmLaw4] = useState('Linklaters');
    let [amLaw5, setAmLaw5] = useState('Linklaters');

    return(
        <ProfileContainer>
            <SkillFormHeader>
            <h3>Panel Informations</h3>   
              <RightBound>
                  <EditIcon onClick={()=>showChange(isChange === false ? isChange = true:isChange=false)} />
              </RightBound>
              </SkillFormHeader>
            <ProfileFormContainer>            
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
                                <p className="label">Specialities</p>
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
                                <p className="label">Specialities</p>
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
            </ProfileFormContainer>   
            <ProfileSkillContainer>
            <FeeFormWrapper>
                <FeeForm action="">
                    {isChange === false?(
                      <div>
                          <FlexRow>
                              <LabelContainer>
                                <p className="label">Hourly Fee</p>
                                <p>{fee+'€/hour (Negociated)'}</p>
                                </LabelContainer>
                          </FlexRow>
                      </div>
                    ):(
                        
                        <div>
                          <FlexRow>
                            <LabelContainer>
                                <p className="label">Hourly Fee</p>
                                <input type="text" id="expertise" value={fee} onChange={event =>setFee(event.target.value)}/>
                              </LabelContainer>
                          </FlexRow>
                      </div>
                    )}
                </FeeForm>
            </FeeFormWrapper>        
            </ProfileSkillContainer>
            <ProfileSkillContainer>
            <FeeFormWrapper>
                <TagsForm action="">
                    {isChange === false?(
                      <div>
                          <FlexRow>
                              <LabelContainer>
                                <p className="label">Terms&Conditions</p>
                                <p>{term}</p>
                                </LabelContainer>
                          </FlexRow>
                      </div>
                    ):(
                        
                        <div>
                          <FlexRow>
                            <LabelContainer>
                                <p className="label">Terms&Conditions</p>
                                <input type="text" id="expertise" value={term} onChange={event =>setTerm(event.target.value)}/>
                              </LabelContainer>
                          </FlexRow>
                      </div>
                    )}
                </TagsForm>
                </FeeFormWrapper>
                <FileInput>
                <TagsForm action="">
                    {isChange === false?(
                      <div>
                          <FlexRow>
                              <LabelContainer>
                                <FileInputWrapper>
                                    <FileCopyIcon/>
                                    <p>{attachment}</p>
                                </FileInputWrapper>
                                </LabelContainer>
                          </FlexRow>
                      </div>
                    ):(
                        
                        <div>
                          <FlexRow>
                            <LabelContainer>
                                <FileInputWrapper>
                                <AttachFileIcon/>
                                <input type="file"  name={attachment} onChange={event =>setAttachment(event.target.value)}/>
                                </FileInputWrapper>
                              </LabelContainer>
                          </FlexRow>
                      </div>
                    )}
                </TagsForm>
                </FileInput>  
                </ProfileSkillContainer>
                <FlexRow>
                    <SectionSeparator>
                        <SkillFormHeader>
                            <h3>Services & Projects</h3>
                        </SkillFormHeader>
                    </SectionSeparator>
                </FlexRow>          
            <ProfileSkillContainer>
            <TermForm>
                <TagsForm action="">
                    {isChange === false?(
                      <div>
                          <FlexRow>
                              <LabelContainer>
                                <p>{service}</p>
                                </LabelContainer>
                          </FlexRow>
                      </div>
                    ):(
                        
                        <div>
                          <FlexRow>
                            <LabelContainer>
                                <input type="text" id="service" value={service} onChange={event =>setService(event.target.value)}/>
                              </LabelContainer>
                          </FlexRow>
                      </div>
                    )}
                </TagsForm>
                </TermForm>
            </ProfileSkillContainer>
                <FlexRow>
                    <SkillFormHeader>
                    <h3>Internal correspondants</h3>
                    </SkillFormHeader>
                </FlexRow>
            <ProfileSkillContainer>
                <ContactForm>
                {isChange === false?(
                    <ContactData>
                    <img src={photosList[0]?.url} alt='profile'/>
                    <p>{correspondants}</p>
                    </ContactData>
                    
                ):(
                    <ContactData>
                        <img src={photosList[0]?.url} alt='profile'/>
                        <input type="text" id="service" value={correspondants} onChange={event =>setCorrespondants(event.target.value)}/>
                    </ContactData>
                )}
                <ContactButton>
                    <p>Message</p>
                </ContactButton>
                <ContactButton>
                    <p>Profile</p>
                </ContactButton>
                </ContactForm>
                <ContactForm>
                {isChange === false?(
                    <ContactData>
                    <img src={photosList[0]?.url} alt='profile'/>
                    <p>{correspondants2}</p>
                    </ContactData>
                ):(
                    <ContactData>
                        <img src={photosList[0]?.url}/>
                        <input type="text" id="service" value={correspondants2} onChange={event =>setCorrespondants2(event.target.value)}/>
                    </ContactData>
                )}
                <ContactButton>
                    <p>Message</p>
                </ContactButton>
                <ContactButton>
                    <p>Profile</p>
                </ContactButton>
                </ContactForm>
            </ProfileSkillContainer>
            <FlexRow>
                    <SectionSeparator>
                        <SkillFormHeader>
                            <h3>Proposals</h3>
                        </SkillFormHeader>
                    </SectionSeparator>
            </FlexRow>
            <ProfileSkillContainer>
            {isChange === false?(
            <Table>

                <Collumn>
                    <h3>Name</h3>
                    <p>{propname1}</p>
                    <p>{propname2}</p>
                    <p>{propname3}</p>
                </Collumn>

                <Collumn>
                    <h3>Entity</h3>
                    <p>{propEntity1}</p>
                    <p>{propEntity2}</p>
                    <p>{propEntity3}</p>
                </Collumn>
                <Collumn>
                    <h3>Location</h3>
                    <p>{propLocation1}</p>
                    <p>{propLocation2}</p>
                    <p>{propLocation3}</p>
                </Collumn>
                <Collumn>
                    <h3>Expertise</h3>
                    <p>{propExp1}</p>
                    <p>{propExp2}</p>
                    <p>{propExp3}</p>
                </Collumn>
                <Collumn>
                    <h3>Date</h3>
                    <p>{propDate1}</p>
                    <p>{propDate2}</p>
                    <p>{propDate3}</p>
                </Collumn>
                <Collumn>
                    <h3>Firm</h3>
                    <p>{propFirm1}</p>
                    <p>{propFirm2}</p>
                    <p>{propFirm3}</p>
                </Collumn>
            </Table>

        ):(
            <Table>

                <Collumn>
                    <h3>Name</h3>
                    <input type="text" value={propname1} onChange={event =>setPropName1(event.target.value)}/>
                    <input type="text" value={propname2} onChange={event =>setPropName2(event.target.value)}/>
                    <input type="text" value={propname3} onChange={event =>setPropName3(event.target.value)}/>
                </Collumn>

                <Collumn>
                    <h3>Entity</h3>
                    <input type="text" value={propEntity1} onChange={event =>setPropEntity1(event.target.value)}/>
                    <input type="text" value={propEntity2} onChange={event =>setPropEntity2(event.target.value)}/>
                    <input type="text" value={propEntity3} onChange={event =>setPropEntity3(event.target.value)}/>
                </Collumn>

                <Collumn>
                    <h3>Location</h3>
                    <input type="text" value={propLocation1} onChange={event =>setPropLocation1(event.target.value)}/>
                    <input type="text" value={propLocation2} onChange={event =>setPropLocation2(event.target.value)}/>
                    <input type="text" value={propLocation3} onChange={event =>setPropLocation3(event.target.value)}/>
                </Collumn>

                <Collumn>
                    <h3>Expertise</h3>
                    <input type="text" value={propExp1} onChange={event =>setPropExp1(event.target.value)}/>
                    <input type="text" value={propExp2} onChange={event =>setPropExp2(event.target.value)}/>
                    <input type="text" value={propExp3} onChange={event =>setPropExp3(event.target.value)}/>
                </Collumn>

                <Collumn>
                    <h3>Date</h3>
                    <input type="date" className='propinputdate' value={propDate1} onChange={event =>setPropDate1(event.target.value)}/>
                    <input type="date" className='propinputdate' value={propDate2} onChange={event =>setPropDate2(event.target.value)}/>
                    <input type="date" className='propinputdate' value={propDate3} onChange={event =>setPropDate3(event.target.value)}/>
                </Collumn>

                <Collumn>
                    <h3>Firm</h3>
                    <input type="text" value={propFirm1} onChange={event =>setPropFirm1(event.target.value)}/>
                    <input type="text" value={propFirm2} onChange={event =>setPropFirm2(event.target.value)}/>
                    <input type="text" value={propFirm3} onChange={event =>setPropFirm3(event.target.value)}/>
                </Collumn>

            </Table>
        )}
            <Link to ='/test'>
                <BigButton>
                    <h4>See more proposals</h4>
                </BigButton>
            </Link>
            </ProfileSkillContainer>
            <FlexRow>
                    <SectionSeparator>
                        <SkillFormHeader>
                            <h3>Internal reviews</h3>
                        </SkillFormHeader>
                    </SectionSeparator>
            </FlexRow>
            <ProfileSkillContainer>
            {isChange === false?(
            <Table>

                <Collumn>
                    <h3>Name</h3>
                    <p>{intName1}</p>
                    <p>{intName2}</p>
                    <p>{intName3}</p>
                </Collumn>

                <Collumn>
                    <h3>Entity</h3>
                    <p>{intEntity1}</p>
                    <p>{intEntity2}</p>
                    <p>{intEntity3}</p>
                </Collumn>
                <Collumn>
                    <h3>Location</h3>
                    <p>{intLocation1}</p>
                    <p>{intLocation2}</p>
                    <p>{intLocation3}</p>
                </Collumn>
                <Collumn>
                    <h3>Expertise</h3>
                    <p>{intExp1}</p>
                    <p>{intExp2}</p>
                    <p>{intExp3}</p>
                </Collumn>
                <Collumn>
                    <h3>Date</h3>
                    <p>{intDate1}</p>
                    <p>{intDate2}</p>
                    <p>{intDate3}</p>
                </Collumn>
                
            </Table>

        ):(
            <Table>

                <Collumn>
                    <h3>Name</h3>
                    <input type="text" value={intName1} onChange={event =>setIntName1(event.target.value)}/>
                    <input type="text" value={intName2} onChange={event =>setIntName2(event.target.value)}/>
                    <input type="text" value={intName3} onChange={event =>setIntName3(event.target.value)}/>
                </Collumn>

                <Collumn>
                    <h3>Entity</h3>
                    <input type="text" value={intEntity1} onChange={event =>setIntEntity1(event.target.value)}/>
                    <input type="text" value={intEntity2} onChange={event =>setIntEntity2(event.target.value)}/>
                    <input type="text" value={intEntity3} onChange={event =>setIntEntity3(event.target.value)}/>
                </Collumn>

                <Collumn>
                    <h3>Location</h3>
                    <input type="text" value={intLocation1} onChange={event =>setIntLocation1(event.target.value)}/>
                    <input type="text" value={intLocation2} onChange={event =>setIntLocation2(event.target.value)}/>
                    <input type="text" value={intLocation3} onChange={event =>setIntLocation3(event.target.value)}/>
                </Collumn>

                <Collumn>
                    <h3>Expertise</h3>
                    <input type="text" value={intExp1} onChange={event =>setIntExp1(event.target.value)}/>
                    <input type="text" value={intExp2} onChange={event =>setIntExp2(event.target.value)}/>
                    <input type="text" value={intExp3} onChange={event =>setIntExp3(event.target.value)}/>
                </Collumn>

                <Collumn>
                    <h3>Date</h3>
                    <input type="date" className='propinputdate' value={intDate1} onChange={event =>setIntDate1(event.target.value)}/>
                    <input type="date" className='propinputdate' value={intDate2} onChange={event =>setIntDate2(event.target.value)}/>
                    <input type="date" className='propinputdate' value={intDate3} onChange={event =>setIntDate3(event.target.value)}/>
                </Collumn>         

            </Table>
        )}
            <Link to ='/test'>
            <BigButton>
                <h4>See more reviews</h4>
            </BigButton>
            </Link>
            </ProfileSkillContainer>   
            <FlexRow>
                    <SectionSeparator>
                    <h3>Amount of fees</h3>
                    </SectionSeparator>
            </FlexRow>
            <ProfileSkillContainer>
            {isChange == false?(
            <Table>

                <Collumn>
                    <h3>Year</h3>
                    <p>{amYear1}</p>
                    <p>{amYear2}</p>
                    <p>{amYear3}</p>
                </Collumn>

                <Collumn>
                    <h3>Cost center</h3>
                    <p>{amCost1}</p>
                    <p>{amCost2}</p>
                    <p>{amCost3}</p>
                    <p>{amCost4}</p>
                    <p>{amCost5}</p>
                </Collumn>
                <Collumn>
                    <h3>Total amount</h3>
                    <p>{amTotal1}</p>
                    <p>{amTotal2}</p>
                    <p>{amTotal3}</p>
                    <p>{amTotal4}</p>
                    <p>{amTotal5}</p>
                </Collumn>
                <Collumn>
                    <h3>Law firm</h3>
                    <p>{amLaw1}</p>
                    <p>{amLaw2}</p>
                    <p>{amLaw3}</p>
                    <p>{amLaw4}</p>
                    <p>{amLaw5}</p>
                </Collumn>
                
                
            </Table>

        ):(
            <Table>

                <Collumn>
                    <h3>Year</h3>
                    <input type="text" value={amYear1} onChange={event =>setAmYear1(event.target.value)}/>
                    <input type="text" value={amYear2} onChange={event =>setAmYear2(event.target.value)}/>
                    <input type="text" value={amYear3} onChange={event =>setAmYear3(event.target.value)}/>
                </Collumn>

                <Collumn>
                    <h3>Cost center</h3>
                    <input type="text" value={amCost1} onChange={event =>setAmCost1(event.target.value)}/>
                    <input type="text" value={amCost2} onChange={event =>setAmCost2(event.target.value)}/>
                    <input type="text" value={amCost3} onChange={event =>setAmCost3(event.target.value)}/>
                    <input type="text" value={amCost4} onChange={event =>setAmCost4(event.target.value)}/>
                    <input type="text" value={amCost5} onChange={event =>setAmCost5(event.target.value)}/>
                </Collumn>

                <Collumn>
                    <h3>Total amount</h3>
                    <input type="text" value={amTotal1} onChange={event =>setAmTotal1(event.target.value)}/>
                    <input type="text" value={amTotal2} onChange={event =>setAmTotal2(event.target.value)}/>
                    <input type="text" value={amTotal3} onChange={event =>setAmTotal3(event.target.value)}/>
                    <input type="text" value={amTotal4} onChange={event =>setAmTotal4(event.target.value)}/>
                    <input type="text" value={amTotal5} onChange={event =>setAmTotal5(event.target.value)}/>
                </Collumn>

                <Collumn>
                    <h3>Law firm</h3>
                    <input type="text" value={amLaw1} onChange={event =>setAmLaw1(event.target.value)}/>
                    <input type="text" value={amLaw2} onChange={event =>setAmLaw2(event.target.value)}/>
                    <input type="text" value={amLaw3} onChange={event =>setAmLaw3(event.target.value)}/>
                    <input type="text" value={amLaw4} onChange={event =>setAmLaw4(event.target.value)}/>
                    <input type="text" value={amLaw5} onChange={event =>setAmLaw5(event.target.value)}/>
                </Collumn>           

            </Table>
        )}
            </ProfileSkillContainer>                     
            
        </ProfileContainer>
       );
};