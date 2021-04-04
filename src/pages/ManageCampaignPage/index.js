import React from 'react'
import './ManageCampaignPage.css'
import Tabs from '../../components/Tabs'
import { Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import i18n1 from '../../i18n';



export default function ManageCampaignPage(props) {
    const {t} = useTranslation('', { i18n:i18n1 });
    
    return (
        <Container className="ManageCampaignPageWrapper">
            <h1 className="heading my-4">
                {t('Manage Campaign')}
               
            </h1> 
            <Tabs />
        </Container>
    )
}
