import DeskNav from "./DeskNav"
import MobileNav from "./MobileNav"
const Navbar = () => {
    return (
        <div className=" ">
            <div className="hidden md:block">
                <DeskNav />
            </div>

            <div className="md:hidden ">
                <MobileNav />
            </div>
        </div>
    );
};

export default Navbar;