import Accordion from '../components/Accordion'



function AccordionPage(){
    const items =[
        {
        id: 'jfalkdjf',
        label: 'label 1',
        content: 'Content label 1'
    },
    {
        id: '4iurioeur',
        label: 'label 2',
        content: 'content label 2'
    },
    {
        id: 'i4mfwf',
        label: 'label 3',
        content: 'Content label 3'
    }];

    return <Accordion items = {items}/>
}


export default AccordionPage