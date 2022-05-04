import React from 'react';
import DefaultIcon from '../../Assets/Images/icons/user.svg';


export const InfoCard = (props) => {
    const sanitizedProps = {
        Icon: props.Icon || DefaultIcon,
        Heading: props.Heading || "Default Text",
        Number: props.Number || "1000"
    }

    return(
        <div className='info-card-body d-flex justify-content-center align-items-center'>
            <div className='left-icon col-5'>
                <div className='icon-container d-flex align-items-center justify-content-center'>
                    <img src={sanitizedProps.Icon} className="info-card-icon" />
                </div>
            </div>
            <div className='right-info col-7'>
                <p className='info-card-heading'>{sanitizedProps.Heading}</p>
                <h1 className='m-0'>{sanitizedProps.Number}</h1>
            </div>
        </div>

    )
}