import { useState } from 'react';
import Averages from '../../../components/stat-cards/Averages';
import './Sidebar.css'

const Sidebar = ({ data }) => {

    return ( 
        <div className="stats-sidebar">
            <p>Career Averages</p>
            {
                data && Object.entries(data.careerSummary).slice(0,9).map((stat, i) => (
                    <Averages key={i} stat={stat} />
                ))
            }
        </div>
     );
}
 
export default Sidebar;