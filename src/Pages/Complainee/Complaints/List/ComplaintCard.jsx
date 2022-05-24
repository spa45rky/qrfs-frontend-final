import React from "react";
import Tick from '../../../../Assets/Images/complaint/tick.png';
import Cross from '../../../../Assets/Images/complaint/cross.png';
import Exclamation from '../../../../Assets/Images/complaint/exclamation.png';
import Progress from '../../../../Assets/Images/complaint/progress.png';

export const ComplaintCard = (props) => {

    const status = props.status || "HALTED"
    let statusImg = Cross
    const assignedTo = props.assignedTo || "NONE"
    const dateCreated = props.dateCreated || ""
    const dateUpdated = props.dateUpdated || ""
    const dateResolved = props.dateResolved || ""
    const title = props.title || "COMPLAINT # 1"

    switch (status) {
        case "FILED":
            statusImg = Exclamation
            break;
        case "ASSIGNED":
            statusImg = Progress
            break;
        case "RESOLVED":
            statusImg = Tick
            break;
        case "HALTED":
            statusImg = Cross
    }


    return(
        <div className="complaint-card">
            <div className="top-status">
                <h5 className="status-title">{title}</h5>
                <img src={statusImg} className="status-img"/>
            </div>
            <div className="bottom-info">
                <h5 className="info-status">STATUS: <span className={`${status}`}>{status}</span></h5>
                <p className="info-assign">ASSIGNED TO: <span className="assign-text">{assignedTo}</span></p>
                <div className="info-date">
                    <p className="date-created">DATE CREATED: <span className="date">{dateCreated}</span></p>
                    <p className="date-updated">DATE UPDATED: <span className="date">{dateUpdated}</span></p>
                    <p className="date-resolved">DATE RESOLVED: <span className="date">{dateResolved}</span></p>
                </div>
            </div>
        </div>
    )
}