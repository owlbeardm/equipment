import React from 'react'
import PageContent from '../page-content/page-content'

const App = () => {
  return (
    <div className="container">
      <PageContent />
      <div class="card">
        <div class="card-body">
          <div class="controls-panel">
            <button class="btn btn-success">Add item</button>
            <span>Total weight: 5</span>
          </div>
          <div class="card card-plain" id="money">
            <div class="card-header card-header-primary">
              <h4 class="mb-0 text-dark">
                <a href="/#">
                  Money
                  <i class="float-right fas fa-chevron-down expanded-flip"></i>
                </a>
              </h4>
            </div>
            <div class="card-body">
              <table class="table table-sm">
                <tbody>
                  <tr>
                    <td>Platinum</td>
                    <td class="align-right">2pp</td>
                    <td>
                      <a href="/#" class="text-primary">
                        <i class="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Gold</td>
                    <td class="align-right">2670gp</td>
                    <td>
                      <a href="/#" class="text-primary">
                        <i class="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Silver</td>
                    <td class="align-right">500sp</td>
                    <td>
                      <a href="/#" class="text-primary">
                        <i class="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Copper</td>
                    <td class="align-right">0cp</td>
                    <td>
                      <a href="/#" class="text-primary">
                        <i class="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card card-plain">
            <div class="card-header card-header-primary">
              <h4 class="mb-0 text-dark">Equipment</h4>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Weight</th>
                    <th class="align-right small-width"></th>
                    <th class="align-right small-width"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Grappling Hook</td>
                    <td>1gp</td>
                    <td>small</td>
                    <td>
                      <a href="/#" class="text-primary">
                        <i class="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                    <td>
                      <a href="/#" class="text-danger">
                        <i class="fas fa-trash  push-shadow"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Corset of the Vishkanya</td>
                    <td>3000gp</td>
                    <td>1</td>
                    <td>
                      <a href="/#" class="text-primary">
                        <i class="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                    <td>
                      <a href="/#" class="text-danger">
                        <i class="fas fa-trash  push-shadow"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Steel Dragon Wing</td>
                    <td></td>
                    <td>small</td>
                    <td>
                      <a href="/#" class="text-primary">
                        <i class="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                    <td>
                      <a href="/#" class="text-danger">
                        <i class="fas fa-trash  push-shadow"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Thieves' Tools, Masterwork</td>
                    <td>100gp</td>
                    <td>small</td>
                    <td>
                      <a href="/#" class="text-primary">
                        <i class="fas fa-edit push-shadow float-right"></i>
                      </a>
                    </td>
                    <td>
                      <a href="/#" class="text-danger">
                        <i class="fas fa-trash  push-shadow"></i>
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
