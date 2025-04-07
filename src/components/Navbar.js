import { FaAlignJustify, FaDownload, FaChevronDown  } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="navbar flex items-center justify-center lg:justify-start bg-[#222525] py-4 px-6">
            { /* Logo */}
            <div className="lg:hidden text-[#d1d1d1]  absolute left-4">
                <FaAlignJustify className="text-[30px]"/>
            </div>
            { /* Store name */}
            <div className=" text-[#d1d1d1] font-semibold text-[30px]">
            <a href="/">Store</a>
            </div>

            { /* Nav links */}
            <div className="pl-4 hidden lg:flex text-[#d1d1d1] text-[14px]">
                <ul className="flex gap-4">
                    <li><a href="/">Store</a></li>
                    <li><a href="/community">Community</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/support">Support</a></li>
                </ul>
            </div>

            { /* Right side items */}
            <div className="hidden lg:flex items-center gap-2 absolute right-20 top-1 text-[#d1d1d1] text-[12px] ">
                <a href="/download" className="flex  items-center gap-1 bg-[#208629] hover:bg-[#34a73d] hover:transition border-black border-1 py-1 px-2">
                    <FaDownload />
                    <p>Download client</p>
                </a>
                <a href="/login">Login</a>
                <p>|</p>
                <div className="flex gap-1 items-center">
                    <p>Select language</p>
                    <FaChevronDown />
                </div>
            </div>
        </div>
    );
}
export default Navbar;