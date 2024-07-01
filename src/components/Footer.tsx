// import React from 'react'

const Footer = () => {
  return (
    <footer>
        <h1>I can probably help <br/>with what you're working on.</h1>
        <h1>Let's <br/> Connect</h1>
        <a className="footer-email" id="style-2" data-replace="Victorgbayedev@gmail.com" href="mailto:victorgbayedev@gmail.com" style={{textDecoration:'none', color:'inherit'}} target="_blank"><span>Victorgbayedev@gmail.com</span></a>
        <hr></hr>
        <section className="footer-links-container">
            <p>Copyright © 2024</p>
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/victor-gbaye/" target="_blank" style={{textDecoration:'none', color:'inherit'}}>Linkedin</a>
                <a href="https://github.com/victorgbaye" target="_blank" style={{textDecoration:'none', color:'inherit'}}>Github</a>
                <a href="mailto:victorgbayedev@gmail.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>Contact</a>

            </div>
        </section>
    </footer>
  )
}

export default Footer