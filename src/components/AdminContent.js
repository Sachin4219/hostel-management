import React from 'react';
import QuickAction from './QuickAction';

const svg = {
    person: ['bi bi-person-fill', 'M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
    archive: ['bi bi-archive-fill', 'M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z'],
    logout: ['bi bi-sign-turn-left-fill', 'M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7 8.466V7h1.5A1.5 1.5 0 0 1 10 8.5V11h1V8.5A2.5 2.5 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 7 8.466Z', 'evenodd'],
    student: ['bi bi-person-badge-fill', 'M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z']
}

function AdminContent() {
    return (
        <div className="adminContent">
            <h1>Quick Actions : </h1>
            <div className="quickActionBlock">
                <a href='/admin/profile'><QuickAction iconClass={svg.person[0]} path={svg.person[1]} number={1} title='Admin Profile' /></a>
                <a href='/admin/complaints'><QuickAction iconClass={svg.archive[0]} path={svg.archive[1]} number={2} title='View Complaints' /></a>
                <a href='/'><QuickAction iconClass={svg.student[0]} path={svg.student[1]} number={3} title='Student Details' /></a>
                <a href='/'><QuickAction iconClass={svg.logout[0]} path={svg.logout[1]} fillRule={svg.logout[2]} number={4} title='Logout' /></a>
            </div>
        </div>
    );
}

export default AdminContent;