import classNames from "classnames";
import useNavigation from "../hook/useNavigation";

function Link({to,children, className, activeClassName}){

    const {navigate, currentPath} = useNavigation();
    const classes = classNames("text-blue-500",
    className, currentPath === to && activeClassName);
    const handleClick = (event)=>{

        if(event.metaKey || event.ctrlKey){
            return; // De esta manera evitamos el eventPrevenDefaul y así se abré en otra pagina
        }
        event.preventDefault();
        navigate(to)
    }
    
    return <a className={classes} href={to} onClick={handleClick} >{children} </a>
}

export default Link; 