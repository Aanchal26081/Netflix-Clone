import React from 'react'
import "./PlansScreen.css"

function PlansScreen() {
    
    return (
        <div className="plansScreen">
            <div className="plans">
                <div className="basicPlan">
                    <div className="buttonkadiv">
                        <button className="basic-button">Subscribe</button>
                    </div>
                    <div className="basic_plan">
                        <h4 className="basic">Basic Plan</h4>
                        <h5>720p</h5>
                    </div>
                </div>

                <div className="standardPlan">
                    <div className="buttonkadiv">                    
                        <button className="basic-button">Subscribe</button>
                    </div>
                    <div className="standard_plan"><h4 className="basic">Standard Plan</h4>
                        <h5>1080p</h5></div>
                </div>

                <div className="premiumPlan">
                    <div className="buttonkadiv">
                        <button className="basic-button">Subscribe</button>
                    </div>
                    <div className="premium_plan"> <h4 className="basic">Premium Plan</h4>
                        <h5>4K + HDR</h5>
                    </div>

                </div>
            </div>
            {/* <div className="plan_button">    
                <button className="basic-button">Subscribe</button>
                <button className="basic-button">Subscribe</button>
                <button className="basic-button">Subscribe</button>
            </div> */}
        </div>
    )
}

export default PlansScreen

