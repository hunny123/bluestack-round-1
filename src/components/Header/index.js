import React,{useState} from 'react'
import './header.css'
import { Container,Row,Col,Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import i18n1 from '../../i18n';
export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { t ,i18n} = useTranslation('', { i18n:i18n1 });

    const [language,setLanguage] = useState(i18n.language)
    const onChangeLanguage = (value)=>{
        i18n.changeLanguage(value)
        setLanguage(value)
    }

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div className="headerWrapper">

            <Container className ="header">
                <Row>
                    <Col xs={8}>
                       
                        <img src="/images/image 1.png" alt="blue stack logo"></img>
                    </Col>
                    <Col>
                        <Dropdown  className="mt-2"isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                {t('Language')} - {language}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => onChangeLanguage('en')}>en</DropdownItem>
                                <DropdownItem onClick={() => onChangeLanguage('de')}>de</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                
                </Row>
            </Container>
        </div>
    )
}
