import React from 'react'
import Navbar from '../header/Navbar'
import { Link } from "react-router-dom";
import './About.css'

const About = () => {
  return (
    <div className='abt-pg'>
      <Navbar />
      <div className='heading'>Why this App?</div>

      <div className='full-content'>
        <div className='content'>
        Welcome to the Sorting Visualizer! This interactive application was developed as a personal project to enhance my understanding of sorting algorithms and to visually demonstrate how these algorithms work. Built with React, the Sorting Visualizer offers an engaging way to explore the mechanics behind various sorting techniques including Merge Sort, Quick Sort, Heap Sort, and Bubble Sort.
        </div>
        <div className='content'>
        The primary goal of this project is to provide an educational tool that visually explains the step-by-step process of sorting, helping both beginners and advanced learners grasp the underlying principles. Each algorithm is displayed with real-time animations that highlight the comparisons and swaps made during sorting, making it easier to follow the logic and efficiency of each method.

        </div>
        <div className='content'>
        This project includes detailed explanations of each sorting algorithm, combining visualizations with theoretical knowledge. Users can see how algorithms like Merge Sort divide arrays into smaller subarrays, or how Quick Sort uses pivot elements to sort efficiently. The Heap Sort visualization shows how a binary heap structure is utilized, while the Bubble Sort animation illustrates the simplicity and inefficiency of this elementary algorithm.
        </div>
        <div className='content'>
        By integrating theory alongside the visualizations, this tool serves as a comprehensive resource for anyone looking to deepen their understanding of sorting algorithms. The Sorting Visualizer not only helps in learning and teaching but also showcases the power of React in creating dynamic, educational web applications.

        </div>

      </div>
    </div>
  )
}

export default About