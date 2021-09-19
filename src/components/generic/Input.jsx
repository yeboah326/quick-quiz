import {MontserratLightText} from "./index";

function Input({type, className, Text, onChange, errorMessage}){
    return(
        <div style={{marginBottom:"1.5rem"}}>
            <MontserratLightText Text={Text} fontSize={1.3} />
            <input type={type} className={className} onChange={onChange}/>
            <small>{errorMessage}</small>
        </div>
    );
}

export default Input;