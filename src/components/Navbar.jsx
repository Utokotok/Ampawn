import {CircleUser, ShoppingBasket, Store, Menu, X, Search} from 'lucide-react'
import {useState} from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'

function Navbar(){
    const [isOpen, setIsOpen] = useState(false)

    const modifyState = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <div className="flex justify-between px-6 h-16 z-1 items-center sticky top-0 md:px-14 lg:px-16 bg-[var(--bg)]">
                <Logo/>
                <Searchbar/>

                <Menu className="block md:hidden text-lime-600" onClick={() => modifyState()}/>

                <ul className="list-none absolute -translate-x-52 md:relative md:flex md:justify-between md:w-112 md:translate-x-0 lg:w-96">
                    <li className="srch-btn flex lg:hidden"><Search/>Search</li>
                    <li className="nav-btn"><Store/>Shop</li>
                    <li className="nav-btn"><ShoppingBasket/>Cart</li>
                    <li className="nav-btn"><CircleUser/>Account</li>
                </ul>

            </div>

            <div className={`fixed bg-white z-10 right-0 top-0 shadow-2xl w-[40%] h-full p-6 transition-all duration-200 linear block md:hidden ${isOpen ? "translate-x-0" : "translate-x-[100vw]"}`}>
                
                <X className="text-lime-600 absolute right-7" onClick={() => modifyState()}/>
                
                <ul className="list-none flex flex-col gap-4 text-[0.8rem] sm:text-[1rem] my-12 sm:px-10">
                    <li className="nav-btn"><Search/>Search</li>
                    <li className="nav-btn"><Store/>Shop</li>
                    <li className="nav-btn"><ShoppingBasket/>Cart</li>
                    <li className="nav-btn"><CircleUser/>Account</li>
                </ul>

            </div>
            
        </>
    )
}

export default Navbar