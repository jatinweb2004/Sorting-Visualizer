import React, { useEffect, useState } from 'react'
import './Main/Main.css'
import getHeapSortAnimation from '../../sortingAlgos/HeapSort';
import Navbar from '../header/Navbar'
import Slider from 'react-input-slider';
import heap1 from '../assets/heap1.png';
import heap2 from '../assets/heap2.png';
import heap3 from '../assets/heap3.png';
import heap4 from '../assets/heap4.png';
import heap6 from '../assets/heap6.png';
import heap7 from '../assets/heap7.png';


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


    const HeapSort = () =>{

        const animation = getHeapSortAnimation(array.slice());
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

    const code = `// C++ program for implementation of Heap Sort

    #include <iostream>
    using namespace std;
    
    // To heapify a subtree rooted with node i
    // which is an index in arr[].
    // n is size of heap
    void heapify(int arr[], int N, int i)
    {
    
        // Initialize largest as root
        int largest = i;
    
        // left = 2*i + 1
        int l = 2 * i + 1;
    
        // right = 2*i + 2
        int r = 2 * i + 2;
    
        // If left child is larger than root
        if (l < N && arr[l] > arr[largest])
            largest = l;
    
        // If right child is larger than largest
        // so far
        if (r < N && arr[r] > arr[largest])
            largest = r;
    
        // If largest is not root
        if (largest != i) {
            swap(arr[i], arr[largest]);
    
            // Recursively heapify the affected
            // sub-tree
            heapify(arr, N, largest);
        }
    }
    
    // Main function to do heap sort
    void heapSort(int arr[], int N)
    {
    
        // Build heap (rearrange array)
        for (int i = N / 2 - 1; i >= 0; i--)
            heapify(arr, N, i);
    
        // One by one extract an element
        // from heap
        for (int i = N - 1; i > 0; i--) {
    
            // Move current root to end
            swap(arr[0], arr[i]);
    
            // call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }
    
    // A utility function to print array of size n
    void printArray(int arr[], int N)
    {
        for (int i = 0; i < N; ++i)
            cout << arr[i] << " ";
        cout << "\n";
    }
    
    // Driver's code
    int main()
    {
        int arr[] = { 12, 11, 13, 5, 6, 7 };
        int N = sizeof(arr) / sizeof(arr[0]);
    
        // Function call
        heapSort(arr, N);
    
        cout << "Sorted array is \n";
        printArray(arr, N);
    }
    `;

  return (
    <div className='array-container'>
        <Navbar/>
        <div className='sort-heading'>Heap Sort</div>

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
          <button className='start-btn' onClick={HeapSort}>Start Heap Sort</button>

        </div>

        <div className='theory-content'>
          <div>
          <strong style={{fontStyle: 'italic'}}>Heap Sort</strong> is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements.
          </div>
          <h2>Heap Sort Algorithm</h2>
          <div>First convert the array into heap data structure using heapify, then one by one delete the root node of the Max-heap and replace it with the last node in the heap and then heapify the root of the heap. Repeat this process until size of heap is greater than 1.</div>
          <ul>
            <li>Build a heap from the given input array. </li>
            <li>
            Repeat the following steps until the heap contains only one element:
            <ul>
              <li>Swap the root element of the heap (which is the largest element) with the last element of the heap.</li>
              <li>Remove the last element of the heap (which is now in the correct position).</li>
              <li>Heapify the remaining elements of the heap.</li>
            </ul>
            </li>
            <li>The sorted array is obtained by reversing the order of the elements in the input array.</li>
          </ul>

          <h3> Detailed Working with Example</h3>
          <div><strong>Input: </strong> arr[] = [4, 10, 3, 5, 1] </div>
          <li ><strong style={{fontStyle: 'italic'}}>Build Complete Binary Tree: </strong> Build a complete binary tree from the array.</li>
          <img src={heap1}></img>
          <li ><strong style={{fontStyle: 'italic'}}>Transform into max heap:</strong> After that, the task is to construct a tree from that unsorted array and try to convert it into max heap.</li>
          <img src={heap2}></img>
          <div ><strong style={{fontStyle: 'italic'}}>Perform heap sort: </strong> Remove the maximum element in each step (i.e., move it to the end position and remove that) and then consider the remaining elements and transform it into a max heap.</div>
          <img src={heap3}></img>
          <li ><strong style={{fontStyle: 'italic'}}>Now, </strong>Repeat the above steps and it will look like the following:</li>
          <img src={heap4}></img>
          <li ><strong style={{fontStyle: 'italic'}}>Now ,</strong> remove the root (i.e. 3) again and perform heapify.</li>
          <img src={heap6}></img>
          <li ><strong style={{fontStyle: 'italic'}}>Now, </strong>when the root is removed once again it is sorted. and the sorted array will be like arr[] = [1, 3, 4, 5, 10].</li>
          <img src={heap7}></img>

          <div className='codes'>
            <h3>Code: </h3>
            <pre>
              <code className='code-block'>{code}</code>
            </pre>
              <div><strong>Output</strong></div>
            <div className='code-output'>
              <div>Sorted array is</div>
              <div>5 6 7 11 12 13</div>

            </div>
          </div>

          <h3>Complexity Analysis</h3>
          <div style={{fontStyle: 'italic'}}><strong>Time Complexity: </strong> O(Nlog(N))</div>
          <div style={{fontStyle: 'italic'}}><strong>Auxiliary Space: </strong> O(log(N))</div>
        </div>
    </div>
  )
}

export default Main
