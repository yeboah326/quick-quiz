import "../../styles/generic/choice.css";
import { BreeText, MontserratLightText } from "../generic";
import { IconmonstrAngelLeftCircleThin } from "../icons";

function Choice({type}) {
    return (
        <div className="choice-container">
            <div className="choice-navigation">
                <IconmonstrAngelLeftCircleThin style={{fill:"white"}}/>
            </div>
            <div className="choice-title">
                <BreeText Text={(type==="signup") ? "Sign Up" : "Login" } fontSize={2.5} color={"white"}/>
            </div>
            <div className="choice-tutor-div">

            </div>
            <div className="choice-tutor-name">
                <MontserratLightText Text={"Tutor"} fontSize={1.5} color={"white"}/>
            </div>
            <div className="choice-student-div"></div>
            <div className="choice-student-name">
            <MontserratLightText Text={"Student"} fontSize={1.5} color={"white"}/>
            </div>
        </div>
    );

}

export default Choice;