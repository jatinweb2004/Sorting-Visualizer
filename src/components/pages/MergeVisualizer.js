import React, { useEffect, useState } from 'react'
import './Main/Main.css'
import getMergeSortAnimation from '../../sortingAlgos/MergeSort';
import Navbar from '../header/Navbar'
import Slider from 'react-input-slider';
import merge1 from '../assets/merge1.png';


// Change this value for the speed of the animation.
const ANIMATION_SPEED_MS = 10;

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



    const validateIndices = (barOneIdx, barTwoIdx, arrayBars) => {
        return barOneIdx >= 0 && barOneIdx < arrayBars.length && barTwoIdx >= 0 && barTwoIdx < arrayBars.length;
    }


    const MergeSort = () =>{
        const animation = getMergeSortAnimation(array.slice());
        for (let i = 0; i < animation.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animation[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animation[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}vh`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    };

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

    const code = `// C++ program for Merge Sort
    #include <bits/stdc++.h>
    using namespace std;
    
    // Merges two subarrays of array[].
    // First subarray is arr[begin..mid]
    // Second subarray is arr[mid+1..end]
    void merge(int array[], int const left, int const mid,
               int const right)
    {
        int const subArrayOne = mid - left + 1;
        int const subArrayTwo = right - mid;
    
        // Create temp arrays
        auto *leftArray = new int[subArrayOne],
             *rightArray = new int[subArrayTwo];
    
        // Copy data to temp arrays leftArray[] and rightArray[]
        for (auto i = 0; i < subArrayOne; i++)
            leftArray[i] = array[left + i];
        for (auto j = 0; j < subArrayTwo; j++)
            rightArray[j] = array[mid + 1 + j];
    
        auto indexOfSubArrayOne = 0, indexOfSubArrayTwo = 0;
        int indexOfMergedArray = left;
    
        // Merge the temp arrays back into array[left..right]
        while (indexOfSubArrayOne < subArrayOne
               && indexOfSubArrayTwo < subArrayTwo) {
            if (leftArray[indexOfSubArrayOne]
                <= rightArray[indexOfSubArrayTwo]) {
                array[indexOfMergedArray]
                    = leftArray[indexOfSubArrayOne];
                indexOfSubArrayOne++;
            }
            else {
                array[indexOfMergedArray]
                    = rightArray[indexOfSubArrayTwo];
                indexOfSubArrayTwo++;
            }
            indexOfMergedArray++;
        }
    
        // Copy the remaining elements of
        // left[], if there are any
        while (indexOfSubArrayOne < subArrayOne) {
            array[indexOfMergedArray]
                = leftArray[indexOfSubArrayOne];
            indexOfSubArrayOne++;
            indexOfMergedArray++;
        }
    
        // Copy the remaining elements of
        // right[], if there are any
        while (indexOfSubArrayTwo < subArrayTwo) {
            array[indexOfMergedArray]
                = rightArray[indexOfSubArrayTwo];
            indexOfSubArrayTwo++;
            indexOfMergedArray++;
        }
        delete[] leftArray;
        delete[] rightArray;
    }
    
    // begin is for left index and end is right index
    // of the sub-array of arr to be sorted
    void mergeSort(int array[], int const begin, int const end)
    {
        if (begin >= end)
            return;
    
        int mid = begin + (end - begin) / 2;
        mergeSort(array, begin, mid);
        mergeSort(array, mid + 1, end);
        merge(array, begin, mid, end);
    }
    
    // UTILITY FUNCTIONS
    // Function to print an array
    void printArray(int A[], int size)
    {
        for (int i = 0; i < size; i++)
            cout << A[i] << " ";
        cout << endl;
    }
    
    // Driver code
    int main()
    {
        int arr[] = { 12, 11, 13, 5, 6, 7 };
        int arr_size = sizeof(arr) / sizeof(arr[0]);
    
        cout << "Given array is \n";
        printArray(arr, arr_size);
    
        mergeSort(arr, 0, arr_size - 1);
    
        cout << "\nSorted array is \n";
        printArray(arr, arr_size);
        return 0;
    }
    
    // This code is contributed by Mayank Tyagi
    // This code was revised by Joshua Estes
    `;


  return (
    <div className='array-container'>
        <Navbar/>

        <div className='sort-heading'>Merge Sort</div>
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
          <button className='start-btn' onClick={MergeSort}>Start Merge Sort</button>

        </div>

        <div className='theory-content'>
          <div>
          <strong style={{fontStyle: 'italic'}}>Merge Sort</strong> Merge sort is a sorting algorithm that follows the divide-and-conquer approach. It works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array.</div>
          <img src={merge1}></img>
          <h2>How does Merge Sort Work?</h2>
          <div>Merge sort is a popular sorting algorithm known for its efficiency and stability. It follows the divide-and-conquer approach to sort a given array of elements.</div>
          <div>Here’s a step-by-step explanation of how merge sort works:</div>
          <ol>
            <li><strong>Divide:</strong> Divide the list or array recursively into two halves until it can no more be divided.</li>
            <li><strong>Conquer: </strong>
            Each subarray is sorted individually using the merge sort algorithm.
            </li>
            <li><strong>Merge</strong>The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged.</li>
          </ol>

          <h3>Illustration of Merge Sort:</h3>
          <div><strong>Let’s sort the array or list  </strong> arr[] = [38, 27, 43, 10] using Merge Sort</div>
          <div style={{fontStyle: 'italic'}}><strong>Divide: </strong></div>
          <ul>
            <li><strong>[38, 27, 43, 10] </strong> is divided into <strong>[38, 27] </strong> and <strong>[43, 10] </strong>.</li>
            <li><strong>[38, 27] </strong> is divided into <strong>[38] </strong> and <strong>[27] </strong>.</li>
            <li><strong>[43, 10] </strong> is divided into <strong>[43] </strong> and <strong>[10] </strong>.</li>
            
          </ul>
          <div style={{fontStyle: 'italic'}}><strong>Conquer: </strong></div>
          <ul>
            <li><strong>[38] </strong> is already sorted.</li>
            <li><strong>[27] </strong> is already sorted.</li>
            <li><strong>[43] </strong> is already sorted.</li>
            <li><strong>[10] </strong> is already sorted.</li>
          </ul>
          <div style={{fontStyle: 'italic'}}><strong>Merge: </strong></div>
          <ul>
          <li>Merge <strong>[38] </strong> and <strong>[27] </strong> to get <strong> [27, 38]</strong>.</li>
          <li>Merge <strong>[43] </strong> and <strong>[10] </strong> to get <strong> [10, 43]</strong>.</li>
          <li>Merge <strong>[27, 38] </strong> and <strong>[10, 43] </strong> to get <strong> [10, 27, 38, 43]</strong>.</li>
          </ul>

          <div>Therefore, the sorted list is <strong> [10, 27, 38, 43]</strong>.</div>

          <div className='codes'>
            <h3>Code: </h3>
            <pre>
              <code className='code-block'>{code}</code>
            </pre>
              <div><strong>Output</strong></div>
            <div className='code-output'>
              <div>Given array is</div>
              <div>12 11 13 5 6 7</div>
              <br></br>
              <div>Sorted array is</div>
              <div>5 6 7 11 12 13</div>

            </div>
          </div>

          <h3>Complexity Analysis</h3>
          <div style={{fontStyle: 'italic'}}><strong>Time Complexity: </strong> O(Nlog(N)), for all cases.</div>
          <div style={{fontStyle: 'italic'}}><strong>Auxiliary Space: </strong> O(N)</div>
        </div>
    </div>
  )
}

export default Main
