import React from 'react'
import Image from 'next/image'
import style from './Cursos.module.css'
import Link from 'next/link'

export default () =>{

    const onHTML = () =>{
        return(
            <Link href='/Cursos/html'><a></a></Link>
        )
    }


    return(
        <div>
            <h1 className={style.title}>Cursos</h1>
            <div className={style.grid}>
                <div className={style.box}>
                    <Image src="/assets/html.png" alt="HTML" width={150} height={150}/>
                    <h2>HTML5</h2>
                    <p>O curso de HTML5 trará os crítérios e metódos do HTML5 para o que você precisa saber.</p>
                    <Link href='/Cursos/html'><a>Saiba Mais</a></Link>
                </div>
                
                <div className={style.box}>
                    <Image src="/assets/react.png" alt="HTML" width={150} height={150}/>
                    <h2>ReactJS</h2>
                    <p>O curso de ReactJS trará os crítérios e metódos do ReactJS para o que você precisa saber.</p>
                    <Link href='/Cursos/react'><a>Saiba Mais</a></Link>
                </div>

                <div className={style.box}>
                    <Image src="/assets/css.png" alt="CSS" width={150} height={150}/>
                    <h2>CSS</h2>
                    <p>O curso de CSS trará os crítérios e metódos do ReactJS para o que você precisa saber.</p>
                    <Link href='/Cursos/css'><a>Saiba Mais</a></Link>
                </div>

                <div className={style.box}>
                    <Image src="/assets/JS.png" alt="HTML" width={150} height={150}/>
                    <h2>JavaScript</h2>
                    <p>O curso de JavaScript trará os crítérios e metódos do ReactJS para o que você precisa saber.</p>
                    <Link href='/Cursos/react'><a>Saiba Mais</a></Link>
                </div>

            </div>
        </div>

        
    )
}
