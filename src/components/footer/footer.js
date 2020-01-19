import React from 'react'
import './footer.css'

const Footer = () => {
  const version = APP_VERSION || null
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <nav className="float-md-left">
              <ul>
                <li>
                  <a href="https://github.com/owlbeardm/scrollbear">GitHub</a>
                </li>
                <li>
                  <a href="https://twitter.com/OwlbearDm">Twitter</a>
                </li>
                <li>
                  <a href="mailto:owlbeardm@gmail.com?subject=Scrollbear: ">Email Me</a>
                </li>
                <li>
                  <a href="https://c7d5a6.com/">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-auto">
            <div className="copyright float-sm-right">
              <div className="row">
                <div className="col-md-auto pr-1">
                  <span>2020 © Nadzeya Ivashchanka & Mikita Kukavenka,</span>
                </div>
                <div className="col-md pl-0">
                  <a href="https://owlbeardm.com/" rel="noreferrer" target="_blank">OwlbearDM</a><span>, {version}</span>
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
