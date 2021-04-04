/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal,  ModalBody ,Container,Row,Col} from 'reactstrap'
import "./view.css"
import { useTranslation } from 'react-i18next';
import i18n1 from '../../i18n';

const ViewModal = (props) => {

  const {
    name,region,image_url,price
  } = props;
  const { t } = useTranslation('', { i18n:i18n1 });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <p className="viewPrice my-2 "  onClick={toggle}>
        <img src="images/Price.png" alt="price-icon" className="mr-1" />
        {t('View Pricing')}
      </p>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalBody>
           <Container className="p-2">
               <Row>
                   <Col xs={8}>
                   <div className="info">
                     <img src={image_url} className="infoImage" alt={name+"img"}/>
                     <span className="infoSpanName">{name}</span>
                     <span className="infoSpanRegion">{region}</span>
                   </div>
                   </Col>
                  
               </Row>
               <Row className="my-3">
                   <Col className="pricing">Pricing</Col>
               </Row>
                   { price && price.map((item,index)=>
                      <Row key={index} className="my-3">
                        <Col xs={8} >{item.title}</Col>
                        <Col xs={4} ><b>${item.value}</b></Col>
                      </Row>
                   )}
                    
           </Container>
           <div className="text-center">
              <Button className="btn closeBtn" onClick={toggle}> {t('close')} </Button> 
           </div>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default ViewModal;