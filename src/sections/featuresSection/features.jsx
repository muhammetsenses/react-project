import React from "react";
import { Container } from "react-bootstrap";
import CardCompenents from "../../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Style from "../../components/card.module.css"

function Feature(){
    return(
        <section className="pt-4">
            <Container className="px-lg-5">
                <div className="row gx-lg-5">
                    <CardCompenents 
                    Style={Style.lightred}
                    icon={<FontAwesomeIcon className={Style.feature} icon={faFolder} />}
                    title={"Project Manaagement"}
                    content={"Keep tasks in order, deadlines on track, and team members aligned with Trello"} />
                    <CardCompenents
                    Style={Style.green}
                    icon={<FontAwesomeIcon className={Style.feature} icon={faBullhorn} />}
                    title={"Meetings"}
                    content={"Empower your team meetings to be more productive empowering, and dare we sayfun."} />
                    <CardCompenents 
                    Style={Style.orange}
                    icon={<FontAwesomeIcon className={Style.feature} icon={faLeaf} />}
                    title={"Onboarding"}
                    content={"Onboarding to a new company or project is a snap with Trello's visual layout of to-do',resources, and progresss tracking"} />
                    <CardCompenents
                    Style={Style.purple}
                    icon={<FontAwesomeIcon className={Style.feature} icon={faRectangleList} />}
                    title={"Task Management"}
                    content={"Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team’s projects a cohesive success every time."} />
                    <CardCompenents
                    Style={Style.turquoise}
                    icon={<FontAwesomeIcon className={Style.feature} icon={faCloud} />}
                    title={"Brainstorming"}
                    content={"Unleash your team’s creativity and keep ideas visible, collaborative, and actionable."} />
                    <CardCompenents 
                    Style={Style.pink}
                    icon={<FontAwesomeIcon className={Style.feature} icon={faBook} />}
                    title={"Resource hub"}
                    content={"Save time with a well-designed hub that helps teams find information easily and quickly."}/>
                    
                </div>
            </Container>
        </section>
    )
}

export default Feature;