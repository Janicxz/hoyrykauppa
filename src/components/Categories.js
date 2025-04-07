const Categories = () => {
    return (
        <div className="gradient my-10 mx-10 rounded-sm hidden md:flex items-center">
            { /* Categories links*/}
            <ul className="flex items-center text-[#d1d1d1]">
                <li className="hover:bg-gradient-to-r from-green-600 to-transparent py-2 px-4">Your store</li>
                <li className="hover:bg-gradient-to-r from-green-600 to-transparent py-2 px-4">New</li>
                <li className="hover:bg-gradient-to-r from-green-600 to-transparent py-2 px-4">Categories</li>
                <li className="hover:bg-gradient-to-r from-green-600 to-transparent py-2 px-4">News</li>
            </ul>
            { /*  Search on right */}
            <div>
                <input className="rounded-sm py-1" type="text"></input>
            </div>
        </div>
    );
}
export default Categories;