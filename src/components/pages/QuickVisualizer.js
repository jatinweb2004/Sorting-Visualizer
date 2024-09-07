import React, { useEffect, useState } from 'react'
import Slider from 'react-input-slider';
import './Main/Main.css'
import getQuickSortAnimation from '../../sortingAlgos/QuickSort';
import Navbar from '../header/Navbar'
import quick1 from '../assets/quick1.png';
import quick2 from '../assets/quick2.png';
import quick3 from '../assets/quick3.png';
import quick4 from '../assets/quick4.png';
import quick5 from '../assets/quick5.png';
import quick6 from '../assets/quick6.png';
import quick7 from '../assets/quick7.png';
import quick8 from '../assets/quick8.png';


// Change this value for the speed of the animation.
const ANIMATION_SPEED = 3;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animation.
const SECONDARY_COLOR = 'red';

const randomIntFromInterval = (min, max) => {
    // min and max inculded
    return Math.floor(Math.random() * (max-min+1) + min);
};

const Main = () => {

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



    const QuickSort = () =>{
        const animation = getQuickSortAnimation(array);
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
                    // barOneStyle.margin = `30px ${10/array.length}% auto`
                    console.log(barOneStyle.margin);
                }, i * ANIMATION_SPEED);
            }
        }

        // setTimeout(() => {
        //     props.stopAnimation();
        //     props.copyArray(array.slice());
        // }, animation.length * ANIMATION_SPEED)
        

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

    const code = `#include <bits/stdc++.h>
    using namespace std;
    
    int partition(int arr[],int low,int high)
    {
      //choose the pivot
      
      int pivot=arr[high];
      //Index of smaller element and Indicate
      //the right position of pivot found so far
      int i=(low-1);
      
      for(int j=low;j<=high;j++)
      {
        //If current element is smaller than the pivot
        if(arr[j]<pivot)
        {
          //Increment index of smaller element
          i++;
          swap(arr[i],arr[j]);
        }
      }
      swap(arr[i+1],arr[high]);
      return (i+1);
    }
    
    // The Quicksort function Implement
               
    void quickSort(int arr[],int low,int high)
    {
      // when low is less than high
      if(low<high)
      {
        // pi is the partition return index of pivot
        
        int pi=partition(arr,low,high);
        
        //Recursion Call
        //smaller element than pivot goes left and
        //higher element goes right
        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
      }
    }
                 
     
    int main() {
      int arr[]={10,7,8,9,1,5};
      int n=sizeof(arr)/sizeof(arr[0]);
      // Function call
      quickSort(arr,0,n-1);
      //Print the sorted array
      cout<<"Sorted Array\n";
      for(int i=0;i<n;i++)
      {
        cout<<arr[i]<<" ";
      }
      return 0;
    }
    // This Code is Contributed By Diwakar Jha
    `;


  return (
    <div className='array-container'>
        <Navbar/>

        <div className='sort-heading'>Quick Sort</div>
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
          <button className='start-btn' onClick={QuickSort}>Start Quick Sort</button>

        </div>

        
        <div className='theory-content'>
          <div>
          <strong style={{fontStyle: 'italic'}}>Quick Sort</strong> is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.
          </div>
          <h2>How does Quick Sort Work?</h2>
          <div>The key process in quickSort is a partition(). The target of partitions is to place the pivot (any element can be chosen to be a pivot) at its correct position in the sorted array and put all smaller elements to the left of the pivot, and all greater elements to the right of the pivot.</div>

          <div>Partition is done recursively on each side of the pivot after the pivot is placed in its correct position and this finally sorts the array.</div>
          <img src={quick1}></img>
          <h4 style={{textDecoration: "underline"}}>Choice of Pivot</h4>
          <div>There are many different choices for picking pivots. </div>
          <ul>
            <li>Always pick the first element as a pivot. </li>
            <li>
            Always pick the last element as a pivot (implemented below)
            </li>
            <li>Pick a random element as a pivot.</li>
            <li>Pick the middle as the pivot.</li>
          </ul>

          <h3 style={{textDecoration: "underline"}}>Partition Algorithm</h3>
          <div>The logic is simple, we start from the leftmost element and keep track of the index of smaller (or equal) elements as i. While traversing, if we find a smaller element, we swap the current element with arr[i]. Otherwise, we ignore the current element.</div>
          <h5>Let us understand the working of partition and the Quick Sort algorithm with the help of the following example:</h5>
          <div><strong>Input: </strong> arr[] = [10, 80, 30, 90, 40] </div>
          <li >Compare 10 with the pivot and as it is less than pivot arrange it accrodingly.</li>
          <img src={quick2}></img>
          <li >Compare 80 with the pivot. It is greater than pivot.</li>
          <img src={quick3}></img>
          <li >Compare 30 with pivot. It is less than pivot so arrange it accordingly.</li>
          <img src={quick4}></img>
          <li >Compare 90 with the pivot. It is greater than the pivot.</li>
          <img src={quick5}></img>
          <li >Arrange the pivot in its correct position.</li>
          <img src={quick6}></img>

          <h3 style={{textDecoration: "underline"}}>Illustration of Quick Sort</h3>
          <div>As the partition process is done recursively, it keeps on putting the pivot in its actual position in the sorted array. Repeatedly putting pivots in their actual position makes the array sorted.</div>
          <div>Follow the below images to understand how the recursive implementation of the partition algorithm helps to sort the array. </div>
          <li >Initial partition on the main array:</li>
          <img src={quick7}></img>
          <li >Partitioning of the subarrays:</li>
          <img src={quick8}></img>

          <div className='codes'>
            <h3>Code: </h3>
            <pre>
              <code className='code-block'>{code}</code>
            </pre>
              <div><strong>Output</strong></div>
            <div className='code-output'>
              <div>Sorted Array </div>
              <div>1 5 7 8 9 10 </div>

            </div>
          </div>

          <h3>Complexity Analysis</h3>
          <div style={{fontStyle: 'italic'}}><strong>Time Complexity: </strong></div>
          <ul>
            <li><strong>Best Case: </strong> Ω (N log (N))</li>
            <li><strong>Average Case: </strong>  θ ( N log (N))</li>
            <li><strong>Best Case: </strong> O(N2)</li>
          </ul>
          <div style={{fontStyle: 'italic'}}><strong>Auxiliary Space: </strong> O(1)</div>
        </div>
    </div>
  )
}

export default Main
