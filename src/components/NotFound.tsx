import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="flex flex-col items-center text-white justify-center h-screen">
            <h2 className="md:text-4xl text-3xl font-bold mb-5">Sorry</h2>
            <p className="mb-5">That page cannot be found</p>
            <p>
            <Link to='/' className="p-2 bg-black rounded-xl text-white">Click Here</Link> to go back home
            </p>
        </div>
     );
}
 
export default NotFound;