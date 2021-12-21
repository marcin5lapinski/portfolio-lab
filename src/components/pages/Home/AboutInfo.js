import React from "react";
import TitleWithDecoration from "../../sub-components/TitleWithDecoration";
import signature from "../../../assets/Signature.svg"

const AboutInfo = () => {
    return (
        <div className="about-info">
            <TitleWithDecoration title={"O nas"} />
            <p className="about-description">
                Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. 
                Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
            </p>
            <img src={signature} alt="signature" className="signature" />
        </div>
    )
}

export default AboutInfo;