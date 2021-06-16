import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './HTML.module.css'
import TimerIcon from '@material-ui/icons/Timer';
import BookIcon from '@material-ui/icons/Book';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';

export default() =>{
    return(
        <div>
            <div className={style.center}>
                <h1 className={style.title}>HTML</h1>
                <Image src="/assets/html.png" alt="HTML" width={200} height={200}/>
            </div>

            <div className={style.flex}>
                <div className={style.flex2}>
                    <div>
                        <h2>Resumo do curso</h2>
                        <ul className={style.list}>
                            <li>Aprenda o que é o HTML e o CSS</li>
                            <li>Entenda a estrutura básica de um arquivo HTML</li>
                            <li>Utilize o navegador para inspecionar elementos</li>
                            <li>Aprenda a definir estilos para elementos usando o CSS</li>
                            <li>Desenvolva um página Web</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Público Alvo</h2>
                        <p>Desenvolvedores front-end que estejam iniciando com HTML5 e CSS3.</p>
                    </div>

                    <div>
                        <h2>Última Atualização</h2>
                        <p>15/06/2021</p>
                    </div>

                </div>

                <div>
                    <div className={style.flex3}>
                        <div className={style.flex4}>
                            <TimerIcon className={style.color} />
                            <p className={style.paf}>8Hrs</p>
                            <p className={style.paf2}>p/Conclusão</p>
                        </div>

                        <div className={style.flex4}>
                            <BookIcon  className={style.color} />
                            <p className={style.paf}>52</p>
                            <p className={style.paf2}>Atividades</p>
                        </div>
                    </div>
                
                <h2 className={style.color}>Formações com esse curso</h2>
                <div className={style.flex5}>
                    <div className={style.flex6}>
                        <CodeIcon/>
                        <p>HTML e CSS</p>
                    </div>
                    
                    <div className={style.flex6}>
                        <CodeIcon/>
                        <p>Iniciante em programação</p>
                    </div>

                    <div className={style.flex6}>
                        <CodeIcon/>
                        <p>Front end</p>
                    </div>
                </div>
                
                <h2 className={style.color}>Instrutor:</h2>
                <div className={style.flex7}>
                    <Image className={style.img} src="/assets/perfil.jpg" alt="HTML" width={150} height={150}/>
                    <div className={style.flex8}>
                        <Link href="/Sobre"><a><p>Gabriel Dutra</p></a></Link>
                        <a href=""><GitHubIcon /> GitHub</a>
                    </div>

                </div>

                </div>
            </div>

            <h2 className={style.h2}>Conteúdo Detalhado</h2>
            <div className={style.flex9}>

                <div className={style.list2}>
                    <h3>1. Marcação do primeiro texto</h3>
                    <div className={style.flex10}>
                        <ul>
                            <li>Introdução</li>
                            <li>Download do texto base</li>
                            <li>Definindo texto</li>
                            <li>Uso de tags</li>
                            <li>Melhorando o texto</li>
                        </ul>
                    </div>
                </div>

                <div className={style.list2}>
                    <h3>2. Separando o conteúdo e informações</h3>
                    <div className={style.flex10}>
                        <ul>
                            <li>Estrutura básica</li>
                            <li>Estrutura do HTML</li>
                            <li>Passando dados para o navegador</li>
                            <li>Lidando com a acentuação</li>
                            <li>Estrutura de conteúdo</li>
                        </ul>
                    </div>
                </div>

                <div className={style.list2}>
                    <h3>3. Trabalhando com CSS</h3>
                    <div className={style.flex10}>
                        <ul>
                            <li>Começando com css</li>
                            <li>Propriedade e o seu valor no CSS</li>
                            <li>Organizando o estilo</li>
                            <li>Mesmo CSS em várias páginas</li>
                            <li>Mudando a cor</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className={style.flex9}>

                <div className={style.list2}>
                    <h3>4. Estilizando imagens</h3>
                    <div className={style.flex10}>
                        <ul>
                            <li>Identificador de elemento</li>
                            <li>Tag de imagem</li>
                            <li>Adicionando uma imagem</li>
                            <li>CSS para imagens</li>
                            <li>Alterando a largura de um elemento</li>
                        </ul>
                    </div>
                </div>

                <div className={style.list2}>
                    <h3>5. Listas e divisões de conteúdo</h3>
                    <div className={style.flex10}>
                        <ul>
                            <li>Trabalhando com listas</li>
                            <li>Estrutura de uma lista em HTML</li>
                            <li>Divisões de conteúdo</li>
                            <li>Criando blocos de conteúdo</li>
                            <li>Quando usar a propriedade class</li>
                        </ul>
                    </div>
                </div>

                <div className={style.list2}>
                    <h3>6. Finalizando a página</h3>
                    <div className={style.flex10}>
                        <ul>
                            <li>Cabeçalho</li>
                            <li>Tag de Cabeçalho</li>
                            <li>Rodapé</li>
                            <li>Tag Rodapé</li>
                            <li>Página Completa</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className={style.com}>
                <h2>Ainda não estuda com a gente?</h2>
                <h2>Invista na transformação da sua carreira!</h2>
                <a href="">COMECE AGORA!</a>
            </div>

        </div>
    )
}