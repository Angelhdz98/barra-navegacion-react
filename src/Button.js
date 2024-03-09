import PropTypes from 'prop-types';
function Button ({children,    
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded}){
        if (primary && secondary){
        }
        return <button>{children} </button>
}

Button.propTypes= {
    checkVariation: ({primary, secondary, success, warning, danger }) =>{
        //console.log(props);
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) 
        + Number(!!warning) + Number(!!danger); 

        if(count >1){
            return new Error('Only one of primary, socondary, warning, danger can be true');
        }

        
    }
}

export default Button