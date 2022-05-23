import React from "react";
import ProfileImg from '../../Assets/Images/default-pfp.jpeg';
import User1 from '../../Assets/Images/temp/user1.jpg';
import User2 from '../../Assets/Images/temp/user2.jpeg';
import StarIcon from '../../Assets/Images/icons/star.svg';

export const Leaderboard = (props) => {
    // const list = props || [{
    //     pfp: ProfileImg,
    //     name: "Rafay Faheem",
    //     email: "spa45rky@gmail.com",
    //     rating: 4.2
    // }]

    const list = [{
        pfp: User1,
        name: "Rafay Faheem",
        email: "spa45rky@gmail.com",
        rating: 4.2
        },
        {
        pfp: User2,
        name: "Rehber Odhano",
        email: "spa45rky@gmail.com",
        rating: 3.7
        },
    ]

    return(
        <div className="lb-container">
            {list.map((user) => 
                <div className="lb-row">
                    <div className="lb-img-row">
                        <img src={user.pfp} className="lb-img"/>
                    </div>
                    <div className="lb-info">
                        <h5 className="lb-info-name">{user.name}</h5>
                        <p className="lb-info-email">{user.email}</p>
                    </div>
                    <div className="lb-rating-row">
                        <img src={StarIcon} className="lb-star" />
                        <h5 className="lb-rating">{user.rating}</h5>
                    </div>
                </div>
            )}
        </div>
    )
}