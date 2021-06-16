import React from 'react'
import Image from 'next/image'
import style from './Sobre.module.css'

export default () => {
    return (
        <div>
            <h1 className={style.title}>Sobre</h1>
            <div className={style.center}>
                <Image className={style.img} src="/assets/perfil.jpg" alt="HTML" width={200} height={200}/>
                <h2>Gabriel Dutra</h2>
            </div>

            <div className={style.sobre}>
                <p>
                    Gabriel Dutra Amarante Carvalho, mais conhecido como Dutra. É um programador, onde deseja mostrar através desse site a possabilidade de ensinar, 
                    demostrar que está aprendendo e aprender cada vez mais com cada um que interagir com ele.
                    Seus projetos podem ser encotrados em seu <a href="https://github.com/DutraGames" target="_blank">GitHub</a>, onde ele deixa público para todos contribuirem cmo ele.
                </p>

                <p>
                    Gabriel Dutra Amarante Carvalho, mais conhecido como Dutra. É um programador, onde deseja mostrar através desse site a possabilidade de ensinar, 
                    demostrar que está aprendendo e aprender cada vez mais com cada um que interagir com ele.
                </p>
            </div>
        </div>
    )
}