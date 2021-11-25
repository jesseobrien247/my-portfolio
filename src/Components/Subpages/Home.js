import React from 'react'

export default function Home() {
    return (
        <section className="home bd-grid" id="home">
            <div className="home__data">
                <h1 className="home__title">Hey, I'm <span className="home__title-color">Jesse</span><br></br>I make websites</h1>
                <h2>SASS / REACT / WORDPRESS</h2>

                <a href="https://github.com/jesseobrien247" className="button">Github</a>
                <a href="https://www.linkedin.com/in/jesse-o-brien-623711172/" className="button">linkedin</a>
            </div>

            <div className="home__social">
            </div>

            <div className="home__img">
                <img src="assets/img/perfil.png" alt=""></img>
            </div>
        </section>
    )
}
