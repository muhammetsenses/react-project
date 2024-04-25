
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Style from "./hero.module.css"

function HeroSection(){
    return(
        <>
        <header className="py-5">
            <Container className="px-lg-5">
                <div className={`${Style.background} p-4 p-lg-5 bg-light rounded-3 text-center`}  >
                    <div className="m-5">
                        <h1 className="display-5 fw-bold">A productivity powerhouse</h1>
                        <p className="fs-4">Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our guide for getting started.</p>
                        <Button className="btn btn-light btn-lg">Getting Started</Button>
                    </div>
                </div>

            </Container>

        </header>
        </>
    )
}
export default HeroSection;