import { useState } from "react"
import { GoChevronDown } from "react-icons/go";
function Dropdown({options, value, onChange}){
    const [isOpen, setIsOpen] = useState(false);


    const handleClick = () =>{
        //setIsOpen((current)=>!current) // modo funcional que haría que cada que el usuario genere un cambio este se genere increiblemente rapido 
        setIsOpen(!isOpen);
    }
    const handleOptionClick = (option) => {
        // los Objetivos de esta función son: 
        setIsOpen(false);
        //Conocer la selección del usuario
        onChange(option);
    }
    const renderOptions = options.map((option)=>{
        return (<div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=>handleOptionClick(option)} key={option.value}>
            {option.label}
            </div>);
    });

    return (<div className="w-48 relative">
        <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full " onClick={handleClick}>
            { value?.label || 'Select. . ' } 
            <GoChevronDown className="text-lg"/>
               </div>
    {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full" > {renderOptions} </div>}
    </div>
    )
    
}
export default Dropdown