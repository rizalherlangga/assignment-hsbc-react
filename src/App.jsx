import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import About from "./pages/About"
import Article from './pages/Article';
import Upload from './pages/Upload';
import Update from './pages/Update'

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="article" element={<Article  />} />
      <Route path="upload" element={<Upload />} />
      <Route path="edit/:id" element={<Update />} />
    </Routes>
  </div>
  )
}

export default App
