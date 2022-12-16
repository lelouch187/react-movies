import s from './filter.module.css'

export default function Filter({onFilter,filter}) {
  return (<div className={s.filter}>
    <input checked={filter === 'all'} 
    onChange={(e) =>onFilter(e)}
    type="radio" id="contactChoice1"
     name="contact" value="all"/>
    <label htmlFor="contactChoice1">All</label>

    <input checked={filter === 'movie'} 
    onChange={(e) =>onFilter(e)}
    type="radio" id="contactChoice2"
     name="contact" value="movie"/>
    <label htmlFor="contactChoice2">movie</label>

    <input checked={filter === 'series'} 
    onChange={(e) =>onFilter(e)}
    type="radio" id="contactChoice3"
     name="contact" value="series"/>
    <label htmlFor="contactChoice3">series</label>
  </div>
  )
}
