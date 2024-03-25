
import { GoFlame } from "react-icons/go";
import Button from "../components/Button"



function ButtonPage(){
    const handleClick = () =>{
     
    }
    return (<div><div>App</div>
    <div>
        <Button className="mb-3" onClick={handleClick} primary>Click me</Button>
    </div>
    <div>
    <Button secondary>buy it <GoFlame  /> </Button>
</div>

    <div>
        <Button success> give us your money</Button>
        </div>
        <div>
             <Button warning outline > give us your money</Button>  
        </div>
 <div>
        <Button danger rounded> give us your money</Button>
   </div> 
    </div>);

}

export default ButtonPage