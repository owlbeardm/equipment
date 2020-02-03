import React from 'react'
import './app.css'
import PageContent from '../page-content/page-content'
import Footer from '../footer'

const App = () => {
  return (
    <main className="app">
      <div className="container">
        {/* header */}
        <PageContent />
      </div>
      <Footer />
    </main>
  )
}

export default App
