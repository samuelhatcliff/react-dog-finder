import { useParams } from "react-router-dom";


function DogDetails({ dogs }) {
    const { name } = useParams()
    console.log(name, 'test')
    const dog = dogs.find(dog => dog.name === name);
    console.log(dog.src, 'this is the dog')
    return (
        <>
            <img src={dog.src}></img>
            <span>{dog.name}</span>
            <span>{dog.age}</span>
            <h2>Fun Facts</h2>
            <ul>
                {dog.facts.map(fact => (
                    <li>{fact}</li>)
                )}
            </ul>
        </>
    )
}

export default DogDetails;