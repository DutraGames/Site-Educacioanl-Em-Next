// Import de React, porque quis trabalhar com ele, invés de JS Puro ou TS
import React from 'react'

// Import das necessidades do next que iria trabalhar nesse componente
import Link from 'next/link'
import Image from 'next/image'

// Import de CSS
import style from './Menu.module.css'

export default () =>{
    return(
        <header className={style.header}>
            <Link href="/"><a><Image
        src="/assets/book.png"
        alt="book"
        width={100}
        height={100}
      /></a></Link>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/Cursos"><a>Cursos</a></Link></li>
                <li><Link href="/Sobre"><a>Sobre</a></Link></li>
            </ul>
        </header>
    )
}