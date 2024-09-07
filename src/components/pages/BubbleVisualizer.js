import React, { useEffect, useState } from 'react'
import './Main/Main.css'
import getBubbleSortAnimation from '../../sortingAlgos/BubbleSort';
import Navbar from '../header/Navbar'
import Slider from 'react-input-slider';
import bubble1 from '../assets/bubble1.png'
import bubble2 from '../assets/bubble2.png'
import bubble3 from '../assets/bubble3.png'


// Change this value for the speed of the animation.
const ANIMATION_SPEED_MS = 1;
const ANIMATION_SPEED = 3;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animation.
const SECONDARY_COLOR = 'red';

const randomIntFromInterval = (min, max) => {
    // min and max inculded
    return Math.floor(Math.random() * (max-min+1) + min);
};

const Main = (props) => {

    const [array, setArray] = useState([]);
    const [arraySize, setArraySize] = useState(30);

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < arraySize; i++) {
            newArray.push(randomIntFromInterval(1, 60));
        }
        setArray(newArray);
    };

    useEffect(() => {
        resetArray();
    }, [arraySize]);



    const BubbleSort = () => {

          let animation = getBubbleSortAnimation(array.slice());
          
  
          for (let i=0; i<animation.length; i++) {
              const arrayBars = document.getElementsByClassName('array-bar');
              if(i%4 === 0) {
                  const [barOneId, barTwoId] = animation[i];
                  const barOneStyle = arrayBars[barOneId].style;
                  const barTwoStyle = arrayBars[barTwoId].style;
  
                  setTimeout(() => {
                      barOneStyle.backgroundColor = SECONDARY_COLOR;
                      barTwoStyle.backgroundColor = SECONDARY_COLOR;
                  }, i * ANIMATION_SPEED);
              } else if (i%4 === 1) {
                  const [barOneId, barTwoId] = animation[i];
                  const barOneStyle = arrayBars[barOneId].style;
                  const barTwoStyle = arrayBars[barTwoId].style;
  
                  setTimeout(() => {
                      barOneStyle.backgroundColor = PRIMARY_COLOR;
                      barTwoStyle.backgroundColor = PRIMARY_COLOR;
                  }, i * ANIMATION_SPEED);
              }
              else {
                  const [barOneId, newHeight] = animation[i];
                  const barOneStyle = arrayBars[barOneId].style;
                  setTimeout(() => {
                      barOneStyle.height = `${newHeight}vh`;
                      // barOneStyle.margin = `${730 - newHeight}px ${10/props.array.length}% auto`
                  }, i * ANIMATION_SPEED);
              }
          }
    }

    let width ;
    if(arraySize<10){
      width = '9vw';
    }else if(arraySize < 15 && arraySize>=10){
      width = '6vw';
    }else if(arraySize>=15 && arraySize<20){
      width = '4vw'
    }else if(arraySize < 30 && arraySize>=20){
      width = '2.8vw';
    }else if(arraySize < 40 && arraySize>=30){
      width = '1.9vw'
    }else if(arraySize < 50 && arraySize>=40){
      width = '1.5vw'
    }else if(arraySize < 75 && arraySize>=50){
      width = '1vw'
    }else if(arraySize<100 && arraySize>=75){
      width = '0.7vw'
    }else if(arraySize<125 && arraySize>=100){
      width = '0.5vw'
    }else{
      width = '0.4vw'
    }

    const code = `// Optimized implementation of Bubble sort
    #include <bits/stdc++.h>
    using namespace std;
    
    // An optimized version of Bubble Sort
    void bubbleSort(int arr[], int n)
    {
        int i, j;
        bool swapped;
        for (i = 0; i < n - 1; i++) {
            swapped = false;
            for (j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr[j], arr[j + 1]);
                    swapped = true;
                }
            }
    
            // If no two elements were swapped
            // by inner loop, then break
            if (swapped == false)
                break;
        }
    }
    
    // Function to print an array
    void printArray(int arr[], int size)
    {
        int i;
        for (i = 0; i < size; i++)
            cout << " " << arr[i];
    }
    
    // Driver program to test above functions
    int main()
    {
        int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
        int N = sizeof(arr) / sizeof(arr[0]);
        bubbleSort(arr, N);
        cout << "Sorted array: \n";
        printArray(arr, N);
        return 0;
    }
    // This code is contributed by shivanisinghss2110
    `;


  return (
    <div className='array-container'>
        <Navbar/>
        <div className='sort-heading'>Bubble Sort</div>

        <div className='slider'>
                <label>Array Size: {arraySize}</label>
                <Slider
                    axis="x"
                    x={arraySize}
                    xmin={5}
                    xmax={150}
                    onChange={({ x }) => setArraySize(x)}
                />
          </div>
          <div className='genDiv'>
           <button className='genBtn' onClick={resetArray}>Generate new Array</button>

          </div>

          <div className='box'>
            {array.map((value, idx) => (
                <div className='array-bar' key={idx} style={{height: `${value}vh`, width: width}}>
                    {/* {value} */}
                </div>
            ))}

          </div>

        <div className='start-btn-div'>
          <button className='start-btn' onClick={BubbleSort}>Start Bubble Sort</button>

        </div>

        <div className='theory-content'>
          <div>
          <strong>Bubble Sort</strong> is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.
          </div>
          <h2>Bubble Sort Algorithm</h2>
          <ul>
            <li>traverse from left and compare adjacent elements and the higher one is placed at right side. </li>
            <li>n this way, the largest element is moved to the rightmost end at first. </li>
            <li>This process is then continued to find the second largest and place it and so on until the data is sorted.</li>
          </ul>

          <h3> Working Explaination with Example</h3>
          <div><strong>Input: </strong> arr[] = [6, 0, 3, 5] </div>
          <div style={{fontStyle: 'italic'}}><strong >First Pass:</strong></div>
          <img src={bubble1}></img>
          <div style={{fontStyle: 'italic'}}><strong >Second Pass:</strong></div>
          <img src={bubble2}></img>
          <div style={{fontStyle: 'italic'}}><strong >Third Pass:</strong></div>
          <img src={bubble3}></img>

          <div className='codes'>
            <h3>Code: </h3>
            <pre>
              <code className='code-block'>{code}</code>
            </pre>
              <div><strong>Output</strong></div>
            <div className='code-output'>
              <div>Sorted array :</div>
              <div>11 12 22 25 34 64 90</div>

            </div>
          </div>

          <h3>Complexity Analysis</h3>
          <div style={{fontStyle: 'italic'}}><strong>Time Complexity: </strong> O(N^2)</div>
          <div style={{fontStyle: 'italic'}}><strong>Auxiliary Space: </strong> O(1)</div>
        </div>
    </div>
  )
}

export default Main
