
import Cart from './cart/Cart'
import Search from './search/Search'

import s from './main.module.css'
import Filter from './filter/Filter'


export default function Main({ films = [],loading,filter, value, setValue, onSearch, onFilter}) {
    return (
        <div className={s.main}>
            <div className="container">
                <Search onSearch={onSearch}
                setValue={setValue}
                value={value} />
                <Filter filter={filter}
                onFilter={onFilter} />
                <div className={s.carts}>
                    {loading? <div className={s.ldsDualRing}></div>
                    :films.length>0?films.map(item => {
                        return <Cart key={item.imdbID} id={item.imdbID} film={item} />
                    }):<h1>Not Found</h1>}
                </div>
            </div>
        </div>
    )
}
