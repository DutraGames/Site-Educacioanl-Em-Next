import React from 'react'
import style from './Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default () =>{
    
    return(
        <div>
            <div className={style.part}>
                <p>Quer Aprender a Programar?</p>
                <Link href='/Cursos'><a>Conheça os Cursos</a></Link>
            </div>

            <div className={style.con}>
                <h2>Acompanhe-me</h2>
                <div className={style.flex}>
                    <div className={style.icons}>
                        <a href="https://www.youtube.com/lutriz" target="_blank">
                        <Image className={style.img} src="/assets/youtube.png" alt="youtube" width={100} height={100}/>
                        </a>
                        <p>Meu Canal de conteúdo sobre tecnologia e informação.</p>
                    </div>

                    <div className={style.icons}>
                        <a href="https://github.com/DutraGames" target="_blank">
                        <Image className={style.img} src="/assets/github.png" alt="github" width={100} height={100}/>
                        </a>
                        <p>Meu GitHub, onde posto meus projetos e testes que posso desevolver.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
