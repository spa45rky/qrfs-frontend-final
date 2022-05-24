import React from "react";

export const ComplaintCard = (props) => {




    return(
        <div className="complaint-card">
            <div className="top-status">

            </div>
            <div className="bottom-info">
                <h5 className="info-status"></h5>
                <p className="info-assign"></p>
                <div className="info-date">
                    <p className="date-created"></p>
                    <p className="date-updated"></p>
                    <p className="date-resolved"></p>
                </div>
            </div>
        </div>
    )
}