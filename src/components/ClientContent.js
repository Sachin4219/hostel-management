import React from 'react';
import QuickAction from './QuickAction';

const svg = {
    person: ['bi bi-person-fill', 'M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
    write: ['bi bi-pencil-square', 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z', 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z', 'evenodd'],
    logout: ['bi bi-sign-turn-left-fill', 'M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7 8.466V7h1.5A1.5 1.5 0 0 1 10 8.5V11h1V8.5A2.5 2.5 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 7 8.466Z', 'evenodd'],
    status: ['bi bi-check-square-fill', 'M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z']
}

function ClientContent() {
    return (
        <div className="clientContent">
            <h1>Quick Actions : </h1>
            <div className="quickActionBlock">
                <a href='/student/profile'><QuickAction iconClass={svg.person[0]} path={svg.person[1]} number={1} title='Student Profile' /></a>
                <a href='/student/complaints/new'><QuickAction iconClass={svg.write[0]} path={svg.write[1]} fillRule={svg.write[3]} path2={svg.write[2]} number={2} title='File Complaint' /></a>
                <a href='/student/complaints'><QuickAction iconClass={svg.status[0]} path={svg.status[1]} number={3} title='View Complaints' /></a>
                <a href='/'><QuickAction iconClass={svg.logout[0]} path={svg.logout[1]} fillRule={svg.logout[2]} number={4} title='Logout' /></a>
            </div>
        </div>
    );
}

export default ClientContent;