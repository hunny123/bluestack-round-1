/* eslint-disable import/no-anonymous-default-export */
import React, { useState,useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import Table from '../Table'
import dataJSON from '../../dummy.json'
import { useTranslation } from 'react-i18next';
import i18n1 from '../../i18n';

import {getDateObj} from '../../utility'
import "./nav.css"

export default function () {
  const [activeTab, setActiveTab] = useState('1');
  const { t } = useTranslation('', { i18n:i18n1 });
  const [data,setData] = useState()
  const onChange = (id , newDate)=>{ 
    // setting up new date to particular event based on id
    const newState = [...data];
    for(let i=0;i<newState.length;i++){ 
      if(newState[i].id === id){
        newState[i].createdOn = newDate
      }
    }
    // updating in local storage
    localStorage.setItem('blueStackData',JSON.stringify({data:[...newState]}))
    setData([...newState])
  }

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  useEffect(() => {
    if(localStorage.getItem('blueStackData'))
      { 
        // if data is in local storage
        const jsonData = JSON.parse(localStorage.getItem('blueStackData'))
        setData([...jsonData.data])
      }
    else{
      //first time upload from local file
      setData([...dataJSON.data])
    }
  },[])

 const dateAccodingToDate=()=>{ 
   // dividing data to live ,past and future using date
    const obj = {live:[],past:[],future:[]}
    for(let i =0 ;i<data.length;i++){
      const objDate = getDateObj(data[i].createdOn)
      obj[objDate.type].push({...data[i]})
    }
    return obj
 }
 const newData =data? dateAccodingToDate(): {live:[],past:[],future:[]}
  return (
    <div>
      <Nav className="tabs">
        <NavItem>
          <NavLink
            className={activeTab==='1'?"activeTab":""}
            onClick={() => { toggle('1'); }}
          >
           { t('Upcoming Campaigns')}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab==='2'?"activeTab":""}
            onClick={() => { toggle('2'); }}
          >
           {t('Live Campaigns')}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab==='3'?"activeTab":""}
            onClick={() => { toggle('3'); }}
          >
           {t('Post Campaigns')}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="my-3">
        <TabPane tabId="1">
          <Row>
             
           <Table data={newData.future} scheduleAgain={onChange}/>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
              
           <Table data={newData.live} scheduleAgain={onChange}/>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
              
           <Table data={newData.past} scheduleAgain={onChange}/>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

