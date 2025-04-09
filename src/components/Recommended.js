const Recommended = () => {
    return (
        <div className="text-white m-10">
            <p>RECOMMENDED</p>
            <div id="recommendedCard" className="flex h-[25rem] pt-3">
                <div id="recommendedImage" className="bg-yellow-600 w-[100%] h-full flex justify-center">
                    <img className="w-full object-cover" src="https://picsum.photos/600/400"/>
                </div>
                <div id="recommendedDesc" className="bg-red-700 w-[60%] h-full hidden md:flex flex-col">
                    <p id="currentTitle" className="p-5">Title</p>
                    <div id="recommendedThumbnails" className="">
                        <img className="inline-block mr-2 mb-2 ml-2" src="https://picsum.photos/150/70"/>
                        <img className="inline-block mr-5 mb-2 ml-2" src="https://picsum.photos/150/70"/>
                        <img className="inline-block mr-2 mb-2 ml-2" src="https://picsum.photos/150/70"/>
                        <img className="inline-block mr-5 mb-2 ml-2" src="https://picsum.photos/150/70"/>
                    </div>
                    <p id="recommendedDescAvailable" className="pl-5">Available now!</p>
                    <p id="recommendedPrice" className="p-5 pt-20">59.95€</p>
                </div>
            </div>
        </div>
    );
}
export default Recommended;