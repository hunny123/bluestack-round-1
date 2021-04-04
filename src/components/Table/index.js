import React from 'react';
import { Table } from 'reactstrap';
import Date from '../Date'

import CampaignCard from '../CampaignCard'
import ViewColumn from '../ViewColumn'
import Action from '../Action'
import './table.css'
import { useTranslation } from 'react-i18next';
import i18n1 from '../../i18n';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(props) {
const {data ,scheduleAgain} = props
const { t } = useTranslation('', { i18n:i18n1 });
 return (
  <Table className="table my-3" responsive>
      <thead className="table-header">
        <tr>
          <th>{t('Date')} </th>
          <th>{t('CAMPAIGN')}</th>
          <th>{t('VIEW')}</th>
          <th>{t('ACTIONS')}</th>
        </tr>
      </thead>
     <tbody>
        {data  && data.length>0 && data.map(item=>
            <tr key={item.id}>
              <td><Date createdOn={item.createdOn}/></td>
              <td><CampaignCard {...item}/></td>
              <td><ViewColumn {...item}></ViewColumn></td>
              <td><Action {...item} onChange={scheduleAgain}/></td>
            </tr>)
        }
        {
          data && data.length===0 && 
           <h4 className=" p-4"> No events</h4> 
        }
     </tbody>
 </Table>
 )
}