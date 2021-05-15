import React from "react";
    const Card = (props) => {
        return (<>
        
                <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                    <img className="card-img-top" 
                    src={props.imasrc} 
                    alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                        {props.title}</h5>
                        <p className="card-text font-weight-bold text-primary Detail-font">{props.detail}</p>
                        <a exact to="/">
                        <button type="button" class="btn btn-outline-success">Learn more</button>
                        </a>
                 </div>
                    </div>
                    </div>
                </>);
    };
export default Card;    