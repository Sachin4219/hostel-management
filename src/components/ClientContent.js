import React from 'react';
import QuickAction from './QuickAction';

const svg = {
    person: ['bi bi-person-fill', 'M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
    person: ['bi bi-person-fill', 'M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
    person: ['bi bi-person-fill', 'M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
    person: ['bi bi-person-fill', 'M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z']
}

function ClientContent() {
    return (
        <div className="clientContent">
            <h1>Quick Actions : </h1>
            <div className="quickActionBlock">
                <a href='/client/profile'><QuickAction iconClass={svg.person[0]} path={svg.person[1]} number={1} title='Student Profile' /></a>
                <a href='/'><QuickAction iconClass={svg.person[0]} path={svg.person[1]} number={2} title='File Complaint' /></a>
                <a href='/'><QuickAction iconClass={svg.person[0]} path={svg.person[1]} number={3} title='Click here' /></a>
                <a href='/'><QuickAction iconClass={svg.person[0]} path={svg.person[1]} number={4} title='Click here' /></a>
            </div>
        </div>
    );
}

export default ClientContent;