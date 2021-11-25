import React from 'react'
import portfolioSS from '../Media/portfolioSS.png';
import librarySS from '../Media/librarySS.png';
import discordSS from '../Media/discordSS.png';

export default function Projects() {
    return (
        <section className="about section " id="about">
            <h2 className="section-title">Projects</h2>

            <div className="about__container bd-grid">
                <div>           
                    <h2 className="about__subtitle">React Portfolio</h2>
                    <img className="projectImgs" src={portfolioSS} />
                    <p> This website right here, made in React.js, Meta! </p><br />
                    <a href="https://jesseobrien.net">View the homepage</a><br/>
                    <a href="https://github.com/jesseobrien247/my-portfolio">Or the code on Github</a>
                </div>
                <div>
                    <h2 className="about__subtitle">Library Tour</h2>
                    <img className="projectImgs" src={librarySS} />
                    <p> Built to serve as an orientation for a local library.</p><br />
                    <a href="https://library-tour.nmt.screencraft.net.au/">View the homepage</a><br />
                    <a href="https://github.com/jesseobrien247/Library-Tour">Or the code on Github</a>
                </div>
                <div>
                    <h2 className="about__subtitle">Discord.js Bot</h2>
                    <img className="projectImgs" src={discordSS} />
                    <p> Social media bot that uses the discord.js API.</p><br />
                    <a href="https://github.com/jesseobrien247/discordCardBot">Just the Github Code for this one</a>
                </div>
            </div>
        </section>
    )
}
