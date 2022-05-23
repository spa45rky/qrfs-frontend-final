import React from "react";

export const LargeCard = (props) => {

    const graphic = props.img || null
    const heading = props.heading || "Heading"
    const largeSubheading = props.subheading || "LARGER TEXT"
    const list = props.list || [{
        title: "Category A",
        number: 20
        },
        {
        title: "Category B",
        number: 21 
        },
        {
        title: "Category C",
        number: 23
        }
    ]


    return(
        <div className="card-container">
            <div className="top-graphic">
                <img src={graphic} className="graphic"/>
            </div>
            <div className="bottom-info">
                <div className="info">
                    <h5 className="info-heading">{heading}</h5>
                    <p className="info-subheading">{largeSubheading}</p>

                    <div className="list">
                        <div className="item">
                            <p className="list-title">{list[0].title}</p>
                            <p className="list-number">{list[0].number}</p>
                        </div>
                        <div className="item">
                            <p className="list-title">{list[1].title}</p>
                            <p className="list-number">{list[1].number}</p>
                        </div>
                        <div className="item">
                            <p className="list-title">{list[2].title}</p>
                            <p className="list-number">{list[2].number}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}