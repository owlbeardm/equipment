import React from 'react'
import './app.css'
import PageContent from '../page-content/page-content'
import Footer from '../footer'
import Header from '../header'

const App = () => {
  return (
    <div className="main-panel" data-test="component-app">
      <Header />
      <div className="content container">
        <PageContent />
      </div>
      <Footer />
    </div>
  )
}

export default App
