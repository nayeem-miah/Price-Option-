import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu} from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


const NabBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/portfolio", name: "Portfolio" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="text-black bg-yellow-300">
      <div className="md:hidden" onClick={()=> setOpen(!open)}>
        {
            open === true ? <RxCross2 className="text-3xl"></RxCross2> : <IoIosMenu className="text-3xl "></IoIosMenu>
        }
        
      </div>
      {/* ${open? '' : 'hidden'} */}
      <ul className={`md:flex absolute md:static duration-1000

      ${open ? 'top-7' : '-top-60'}
       bg-yellow-300 px-6 `}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NabBar;
