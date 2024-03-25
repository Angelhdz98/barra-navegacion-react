import useNavigation from "../hook/useNavigation";
function Route({path, children}){
const {currentPath} =useNavigation(); //para usar una pieza de estado del context
if (path === currentPath){
    return children;
}
return null; 
}

export default Route;