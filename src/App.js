import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Subpages/Home"
import Projects from "./Components/Subpages/Projects"
import Contact from "./Components/Subpages/Contact"
import "./app.css"

class App extends Component {

  /*mobile navigation menu visibility*/
  state = {
    active: false,
  }

  render() {
    return (
      <div className="App">

        <Router>
          <header className="l-header">

            <nav className="nav bd-grid">

              <div><Link to="/" className="nav__logo">Jesse O'Brien</Link></div>

              <div id="nav-menu" className={ this.state.active ? "nav__menu show" : "nav__menu"} >
                <ul className="nav__list">

                  <li className="nav__item"><Link to="/" className="nav__link active">Home</Link></li>
                  <li className="nav__item"><Link to="Projects" className="nav__link active">Projects</Link></li>
                  <li className="nav__item"><Link to="Contact" className="nav__link active">Contact</Link></li>
                </ul>
              </div>

              {/*onclick div changes state on line 12*/}
              <div className="nav__toggle" id="nav-toggle" onClick={() => this.setState({ active: !this.state.active})}>
                <i className='bx bx-menu'></i>
              </div>

            </nav>
          </header>

          {/*swap container content from /components on when nav item is clicked */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="Home" element={<Home />} />
            <Route exact path="Projects" element={<Projects />} />
            <Route exact path="Contact" element={<Contact />} />
          </Routes>
        </Router>

      </div>
    );
  }
}

export default App;