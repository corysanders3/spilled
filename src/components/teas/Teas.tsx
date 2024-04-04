import './Teas.css';
import Card from '../card/Card';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTea } from '../../apiCalls';


function Teas() {
    const category = useParams<string>().category
    const [teas , setTeas] = useState<[Tea] | null>(null) // change the [Tea] cuz im pretrty sure its and arrya of teas but it could be a object idk i cant see the data but thats just a place holder for now 

    interface Tea {
        _id:string,
        name:string,
        slug:string,
        altnames:string,
        image:string,
        origin:string,
        type:string,
        caffeine:string,
        caffenieLevel:string,
        decription:string,
        sources:[string],
        colorDescription:string,
        tasteDescription:string
    }

    useEffect(() => {
        async function fetchData() {
            const fetchedTeaData = await fetchTea();
            const filteredTeaData = fetchedTeaData?.filter((tea: Tea) => tea.type === category);
            setTeas(filteredTeaData);//clean up/filter teas then set state
        }
        fetchData();
    }, [])

    // const filteredTeas = teaData?.filter((tea: Tea) => tea.type === category)

    const teaCards = teas?.map((tea: Tea) => {
        return (
            <Card img={tea.image} name={tea.name}/>
        )
    })

    return (
        <>
        {teaCards}
        </>
    )
    // function filterTeas(tea:Tea){
    //     return(tea.type === category)
    // }
    
    // function displayTeas(data){
    //     let filteredTea = data.filter(filterTeas)
    //     return filteredTea?.map((tea:Tea) => {
    //         <Card img = {tea.image} name = {tea.name}/>
    //     })
    // }

   
    // const teaCategory = teaData.filter((tea: Tea) => {
    //     //Tea category
    //     return (
    //         <Card img = {tea.img} name = {tea.name}/>
    //     )
    // })
    // interface Tea {name : string, img :string}
    // interface Categories { categories: object[]}
    // let categoryTeas: Categories[] = teaData.filter(() => {

    // })
    
    
    // function displayTeas() {
            
        
    // }

    
}

export default Teas;
/*
{
        "_id": "63092102a643c85c74b00e73",
        "name": "Darjeeling Tea",
        "slug": "darjeeling",
        "altnames": "",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Darjeeling%2C_India%2C_Darjeeling_tea_in_variety%2C_Black_tea.jpg/1920px-Darjeeling%2C_India%2C_Darjeeling_tea_in_variety%2C_Black_tea.jpg?20210606141050",
        "origin": "India",
        "type": "black",
        "caffeine": "50-120mg",
        "caffeineLevel": "very high",
        "decription": "Darjeeling tea is a black tea that is grown and processed in the Darjeeling or Kalimpong Districts in West Bengal, also among the only teas in the world with a Geographical Indication trademark",
        "sources": [
            "https://en.wikipedia.org/wiki/Darjeeling_tea",
            "https://www.thespruceeats.com/tea-flushes-in-darjeeling-765194",
            "https://www.seriouseats.com/why-you-should-drink-more-darjeeling-tea-what-is-first-flush"
        ],
        "colorDescription": "ranging from golden yellow to orange to deep red.",
        "tasteDescription": "musky-sweet tasting notes similar to muscat wine"
    }
 */