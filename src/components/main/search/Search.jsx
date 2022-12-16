import s from './search.module.css'

export default function Search({value, setValue, onSearch}) {
    return (
        <div className={s.d2}>
            <form>
                <input onChange={(e)=>setValue(e.target.value)}
                value={value}
                type="text" 
                placeholder="Искать здесь..." />
                <button onClick={(e) => onSearch(e)}
                type="submit"></button>
            </form>
        </div>
    )
}
