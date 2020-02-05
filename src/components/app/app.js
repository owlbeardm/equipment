import React from 'react'
import './app.css'
import PageContent from '../page-content/page-content'
import Footer from '../footer'

const App = () => {
  return (
    <div>
      {/* header */}
      <div className="container">
        <PageContent />
      </div>
      <Footer />
    </div>
  )
}

export default App
