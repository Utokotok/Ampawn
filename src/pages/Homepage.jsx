import HeaderImage from '../assets/shop-bg-img.png'
import '../styles/homepage.css'
import Accessories from '../assets/categories/accessories.jpg'
import Carriages from '../assets/categories/carriages.jpg'
import Foods from '../assets/categories/foods.jpg'
import Litters from '../assets/categories/litters.jpg'
import Shampoos from '../assets/categories/shampoos.jpg'
import Toys from '../assets/categories/toys.jpg'

function Homepage(){
    return(
        <>
            <div className="hidden sticky text-[0.8rem] sm:grid md:text-[1rem] grid-cols-[repeat(6,1fr)] w-full h-8 top-16 bg-lime-500 z-40 text-white">
                    <a className="nav-categories-option">Foods</a>
                    <a className="nav-categories-option">Accessories</a>
                    <a className="nav-categories-option">Shampoos</a>
                    <a className="nav-categories-option">Toys</a>
                    <a className="nav-categories-option">Carriages</a>
                    <a className="nav-categories-option">Litters</a>
            </div>

            <div className="flex relative">
                <img src={HeaderImage} className="relative w-full"></img>
                <p className="absolute top-[30%] left-[50%] w-[clamp(160px,calc(30%+0.5rem),100rem)] text-[clamp(0.75rem,calc(2vw+0.5rem),10rem)] font-extrabold">Your one stop <span className="text-lime-600">shop</span> for <span className="text-lime-600">Purr-fect</span> finds</p>
            </div>

            <div className="relative grid w-full h-52 grid-cols-[repeat(2,1fr)] grid-rows-[repeat(3,1fr)] sm:grid-cols-[repeat(3,1fr)] sm:grid-rows-[repeat(2,1fr)] md:max-w-[90vw] md:left-[50%] md:-translate-x-[50%]">
                <a className="categories-option bg-lime-500"><img src={Foods} className="categories-img"></img><p>Foods</p></a>
                <a className="categories-option bg-emerald-500"><img src={Accessories} className="categories-img"></img><p>Accessories</p></a>
                <a className="categories-option bg-green-400"><img src={Shampoos} className="categories-img"></img><p>Shampoos</p></a>
                <a className="categories-option bg-green-400"><img src={Toys} className="categories-img"></img><p>Toys</p></a>
                <a className="categories-option bg-lime-500"><img src={Carriages} className="categories-img"></img><p>Carriages</p></a>
                <a className="categories-option bg-emerald-500"><img src={Litters} className="categories-img"></img><p>Litters</p></a>
            </div>
        </>
    )
}

export default Homepage