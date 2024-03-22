import { useState, useEffect, useRef } from "react"
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";


function Dropdown({options, value, onChange}){
    const [isOpen, setIsOpen] = useState(false);
    const divEl= useRef();//tengo una referencia a une elemento div

useEffect(() =>{
    const handler = (event) =>{
        if (!divEl.current){//evitamos un falso positivo cuando no se ha declarado la referencia 
            
            return;
        }
       if(!divEl.current.contains(event.target)){
        setIsOpen(false);
       }
    };
    document.addEventListener('click', handler, true);
    return () =>{
        document.removeEventListener('click',handler); // esta función se invoca cuando se remueve el componente
    }
}, []);

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

    return (<div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer " onClick={handleClick}>
            { value?.label || 'Select. . ' } 
            <GoChevronDown className="text-lg"/>
               </Panel>
    {isOpen && (<Panel className="absolute top-full" > {renderOptions} </Panel>)}
    </div>
    )
    
}
export default Dropdown