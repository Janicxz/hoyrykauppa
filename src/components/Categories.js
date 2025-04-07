import { FaSearchengin } from "react-icons/fa6";

const Categories = () => {
    return (
        <div className="gradient my-10 mx-10 rounded-sm hidden md:flex items-center justify-between">
            { /* Categories links*/}
            <ul className="flex items-center text-[#d1d1d1]">
                <li className="hover:bg-gradient-to-r from-green-600 to-transparent py-2 px-4">Your store</li>
                <li className="hover:bg-gradient-to-r from-green-600 to-transparent py-2 px-4">New</li>
                <li className="hover:bg-gradient-to-r from-green-600 to-transparent py-2 px-4">Categories</li>
                <li className="hover:bg-gradient-to-r from-green-600 to-transparent py-2 px-4">News</li>
            </ul>
            { /*  Search on right */}
            <div className="flex items-center gap-1 rounded-sm border-2 border-transparent hover:border-green-500">
                <input className="py-1" type="text" placeholder="Search"></input>
                <FaSearchengin className="text-[25px] bg-transparent hover:bg-green-500 rounded-sm"/>
            </div>
        </div>
    );
}
export default Categories;