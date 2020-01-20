import React from 'react'
import './app.css'
import PageContent from '../page-content/page-content'
import Footer from '../footer'

const App = () => {
  return (
    <div className="container">
      {/* header */}
      <PageContent />
      <Footer />
    </div>
  )
}

export default App
