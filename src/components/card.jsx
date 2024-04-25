import Card from "react-bootstrap/Card";
import Style from "./card.module.css"


function CardCompenent(props){
    return(
        <div className="col-lg-6 col-xxl-4 mb-5">
        <Card className="card bg-light border-0 h-100">
            <Card.Body className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
                <div  className={`${Style.iconLocation} ${props.Style} d-inline-block bg-primary bg-gradient p-3 text-white rounded-3 mb-4`} >                 
                    {/* <FontAwesomeIcon className={Style.feature} icon={faFolder} /> */}
                    {props.icon}
                </div>
                    <h2 className="fs-4 fw-bold">{props.title}</h2>
                    <p className="mb-0">{props.content}</p>
            </Card.Body>
        </Card>
        </div>
    )
}

export default CardCompenent;