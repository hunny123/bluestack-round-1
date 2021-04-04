import React,{useState} from 'react'
import {Container,Row, Col} from 'reactstrap'
import Schedule from './Schedule'
import "./action.css"
import { useTranslation } from 'react-i18next';
import i18n1 from '../../i18n';

export default function Action(props) {
    const { csv ,report,createdOn,onChange,id } = props
    const { t } = useTranslation('', { i18n:i18n1 });
    const [edit,setEdit] = useState(false) //state for changing date 
    return (
       <Container>
           <Row className="my-2"> 
               <Col xs={2}>
                   <a href={csv} target="_blank" rel="noreferrer">
                       <img src="images/file.png" alt="file img"></img>
                   </a>
                </Col>
               <Col xs={2}>
                <a href={report} target="_blank" rel="noreferrer"> 
                    <img src="images/statistics-report.png" alt="statistics img"></img>
                </a>
               </Col>
               <Col className="schedule"xs={8}>
                   {edit? <Schedule 
                            id={id}date={createdOn} 
                            onClose={setEdit} 
                            onChange={onChange}
                            />:
                            <p  onClick={()=>setEdit(!edit)}>{t('schedule again')}</p>
                   }
               </Col>
           </Row>
       </Container>
    )
}
