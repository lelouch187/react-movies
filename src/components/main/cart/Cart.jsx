import React from 'react'

import s from './cart.module.css'

export default function Cart({ film }) {
    return (
        <div className={s.wrapper}>
            <img className={s.cart__img} src={film.Poster} alt={film.Title} />
            <h3 className={s.cart__title}>{film.Title}</h3>
            <div className={s.cart__info}>
                <span>{film.Year}</span>
                <span>{film.Type}</span>
            </div>

        </div>
    )
}
