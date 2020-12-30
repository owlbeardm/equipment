import React from 'react'
import './footer.css'

const Footer = () => {
  const version = APP_VERSION || null
  return (
    <footer className="footer" data-test="component-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg">
            <nav className="float-lg-left">
              <ul>
                <li>
                  <a href="https://github.com/owlbeardm/equipment" data-test="social-link">GitHub</a>
                </li>
                <li>
                  <a href="https://twitter.com/OwlbearDm" data-test="social-link">Twitter</a>
                </li>
                <li>
                  <a href="mailto:owlbeardm@gmail.com?subject=Scrollbear: " data-test="social-link">Email Me</a>
                </li>
                <li>
                  <a href="https://c7d5a6.com/" data-test="social-link">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-auto">
            <div className="copyright float-lg-right" data-test="project-credits">
              <div className="row">
                <div className="col-lg-auto pr-1">
                  <span>© Nadzeya Ivashchanka & Mikita Kukavenka,</span>
                </div>
                <div className="col-lg pl-0">
                  <span>2020, </span>
                  <a href="https://owlbeardm.com/" rel="noopener noreferrer" target="_blank">OwlbearDM</a>
                  <span>, {version}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
