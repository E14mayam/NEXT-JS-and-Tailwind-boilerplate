import Image from "next/image";

const Nav = () => {
    return(
            <div className="flex justify-between px-5 pt-5 items-center animate__animated animate__fadeInDown animate__slow">
            <h2 className="font-medium text-2xl flex items-center"> <Image className="w-9" src="https://thechurchco-production.s3.amazonaws.com/uploads/sites/2482/2022/02/white-logo-100x100.png" width={30} height={30} alt=""/><span className="pl-2">The Kings Assembly</span></h2>
            <nav className="font-medium hidden md:flex lg:flex">
                <a href="#" className="px-2">
                    Live Service
                </a>
                <a href="#" className="px-2">
                    Ministries
                </a>
                <a href="#" className="px-2">
                    Read
                </a>
                <a href="#" className="px-2">
                    Events
                </a>
            </nav>
        </div>
    )
};

export default Nav;
