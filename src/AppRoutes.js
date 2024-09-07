import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import About from "./components/pages/About"
import BubbleVisualizer from "./components/pages/BubbleVisualizer"
import MergeVisualizer from "./components/pages/MergeVisualizer"
import QuickVisualizer from "./components/pages/QuickVisualizer"
import HeapVisualizer from "./components/pages/HeapVisualizer"
import Main from "./components/pages/Main/Main"

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<About />} />
            <Route path='/Bubble' element={<BubbleVisualizer />} />
            <Route path='/Merge' element={<MergeVisualizer />} />
            <Route path='/Heap' element={<HeapVisualizer />} />
            <Route path='/Quick' element={<QuickVisualizer />} />
            {/* <Route path='/Main' element={<Main />} /> */}
        </Routes>
    </Router>
  )
}

export default AppRoutes;