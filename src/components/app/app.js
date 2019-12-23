import React from 'react'
import './app.css'
import PageContent from '../page-content/page-content'

const App = () => {
  return (
    <div className="container">
      <PageContent />
      <div className="card">
        <div className="card-body">
          <div className="controls-panel">
            <button className="btn btn-success">Add item</button>
            <span>Total weight: 5</span>
          </div>
          <div className="card card-plain" id="money">
            <div className="card-header card-header-primary">
              <h4 className="mb-0 text-dark">
                <a href="/#">
                  Money
                  <i className="float-right fas fa-chevron-down expanded-flip"></i>
                </a>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <td>Platinum</td>
                    <td className="align-right">2pp</td>
                    <td>
                      <a href="/#" className="text-primary">
                        <i className="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Gold</td>
                    <td className="align-right">2670gp</td>
                    <td>
                      <a href="/#" className="text-primary">
                        <i className="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Silver</td>
                    <td className="align-right">500sp</td>
                    <td>
                      <a href="/#" className="text-primary">
                        <i className="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Copper</td>
                    <td className="align-right">0cp</td>
                    <td>
                      <a href="/#" className="text-primary">
                        <i className="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card card-plain">
            <div className="card-header card-header-primary">
              <h4 className="mb-0 text-dark">Equipment</h4>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Weight</th>
                    <th className="align-right small-width"></th>
                    <th className="align-right small-width"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Grappling Hook</td>
                    <td>1gp</td>
                    <td>small</td>
                    <td>
                      <a href="/#" className="text-primary">
                        <i className="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                    <td>
                      <a href="/#" className="text-danger">
                        <i className="fas fa-trash  push-shadow"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Corset of the Vishkanya</td>
                    <td>3000gp</td>
                    <td>1</td>
                    <td>
                      <a href="/#" className="text-primary">
                        <i className="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                    <td>
                      <a href="/#" className="text-danger">
                        <i className="fas fa-trash  push-shadow"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Steel Dragon Wing</td>
                    <td></td>
                    <td>small</td>
                    <td>
                      <a href="/#" className="text-primary">
                        <i className="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                    <td>
                      <a href="/#" className="text-danger">
                        <i className="fas fa-trash  push-shadow"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Thieves' Tools, Masterwork</td>
                    <td>100gp</td>
                    <td>small</td>
                    <td>
                      <a href="/#" className="text-primary">
                        <i className="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                    <td>
                      <a href="/#" className="text-danger">
                        <i className="fas fa-trash  push-shadow"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
