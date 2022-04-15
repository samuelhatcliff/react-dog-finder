import { Link } from "react-router-dom";



function DogList({ dogs }) {
    return (
        <>
            <h1>Dog List</h1>
            <ul>
                {dogs.map(dog => (
                    <li><Link to="/dogs/Perry">Test</Link></li>)
                )}
            </ul>
        </>
    )

}
export default DogList;