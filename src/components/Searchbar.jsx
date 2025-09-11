import {Search} from 'lucide-react'

function Searchbar(){
    return(
        <>
            <div className="hidden relative mx-10 items-center justify-between w-[35%] h-12 px-2 lg:flex">
                <input type="text" placeholder="Search for products" className="text-[var(--text-muted)] pr-16 outline-none shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)] w-2xl px-10 h-[90%] rounded-3xl"></input>
                <Search className="absolute right-9 text-lime-600"/>
            </div>
        </>
    )
}

export default Searchbar