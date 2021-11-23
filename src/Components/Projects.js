import React from 'react'
import portfolioSS from './portfolioSS.png';
import librarySS from './librarySS.png';
import discordSS from './discordSS.png';
import merchSS from './merchSS.png';
import tttSS from './tttSS.png';
import pokeSS from './pokeSS.png';

export default function Projects() {
    return (
        <section className="about section " id="about">
            <h2 className="section-title">Projects</h2>

            <div className="about__container bd-grid">
                <div>           
                    <h2 className="about__subtitle">React Portfolio</h2>
                    <img className="projectImgs" src={portfolioSS} />
                    <p> This website right here, made in React.js, Meta. </p>
                    <a href="https://github.com/jesseobrien247/my-portfolio">Github Code</a>
                </div>
                <div>
                    <h2 className="about__subtitle">Library Tour</h2>
                    <img className="projectImgs" src={librarySS} />
                    <p> Built to serve as a tour to a local library. Made in wordpress using a custom theme. </p>
                    <a href="https://github.com/jesseobrien247/my-portfolio">Github Code Coming</a>
                </div>
                <div>
                    <h2 className="about__subtitle">PHP Shopping Cart and CRUD</h2>
                    <img className="projectImgs" src={merchSS} />
                    <p> A shopping cart template and backend CRUD system built using php and mysql.</p>
                    <a href="https://github.com/jesseobrien247/shoppingcart_template">Github Code</a>
                </div>
                <div>
                    <h2 className="about__subtitle">Discord.js Bot</h2>
                    <img className="projectImgs" src={discordSS} />
                    <p> Social media bot that uses the discord.js API.</p>
                    <a href="https://github.com/jesseobrien247/discordCardBot">Github Code</a>
                </div>
                <div>
                    <h2 className="about__subtitle">React pokemon tracker</h2>
                    <img className="projectImgs" src={pokeSS} />
                    <p> Pokemon tracker with details of locations, encounter methods, rates and more.</p>
                    <a href="https://github.com/jesseobrien247/reactpokemontracker">Github Code</a>
                </div>
                <div>
                    <h2 className="about__subtitle">Naughts and crosses AI</h2>
                    <img className="projectImgs" src={tttSS} />
                    <p> Battle friends or the computer with different AI difficulty levels.</p>
                    <a href="https://github.com/jesseobrien247/tictactoe">Github Code</a>
                </div>
            </div>
        </section>
    )
}
