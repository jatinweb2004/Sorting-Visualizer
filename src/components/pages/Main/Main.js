import React, { useEffect, useState } from 'react'
import './Main.css'
// import GenerateBtn from './GenerateBtn'
import getMergeSortAnimation from '../../../sortingAlgos/MergeSort';
import getBubbleSortAnimation from '../../../sortingAlgos/BubbleSort';
import getHeapSortAnimation from '../../../sortingAlgos/HeapSort';
import getQuickSortAnimation from '../../../sortingAlgos/QuickSort';
import Navbar from '../../header/Navbar'


// Change this value for the speed of the animation.
const ANIMATION_SPEED_MS = 3;
const ANIMATION_SPEED = 0.5;

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

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < 100; i++) {
            newArray.push(randomIntFromInterval(5, 730));
        }
        setArray(newArray);
    };

    useEffect(() => {
        resetArray();
    }, []);


    // let run = props.run;
    // if(run) {
        // let algorithm = props.algo;
        // let arr = props.arr;
        // const arrCopy = arr.slice();
        // let animation = [];
        // switch (algorithm) {
        //     case 'Merge Sort': animation = getMergeSortAnimation(arrCopy); break;

        //     case 'Bubble Sort': animation = getBubbleSortAnimation(arrCopy); break;

        //     case 'Quick Sort': animation = getQuickSortAnimation(arrCopy); break;

        //     case 'Heap Sort': animation = getHeapSortAnimation(arrCopy); break;

        //     default: console.log('No animation')
        // }

    // }

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
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    };

    const QuickSort = () =>{
        const animation = getQuickSortAnimation(array.slice());
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
                    barOneStyle.height = `${newHeight}px`;
                    barOneStyle.margin = `${730 - newHeight}px ${10/props.array.length}% auto`
                }, i * ANIMATION_SPEED);
            }
        }

        setTimeout(() => {
            props.stopAnimation();
            props.copyArray(array.slice());
        }, animation.length * ANIMATION_SPEED)
        

    };

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
                    barOneStyle.height = `${newHeight}px`;
                    barOneStyle.margin = `${730 - newHeight}px ${10/props.array.length}% auto`
                }, i * ANIMATION_SPEED);
            }
        }

        setTimeout(() => {
            props.stopAnimation();
            props.copyArray(array.slice());
        }, animation.length * ANIMATION_SPEED)
        

    };

    const BubbleSort = () =>{

        const animation = getBubbleSortAnimation(array.slice());
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
                    barOneStyle.height = `${newHeight}px`;
                    barOneStyle.margin = `${730 - newHeight}px ${10/props.array.length}% auto`
                }, i * ANIMATION_SPEED);
            }
        }

        setTimeout(() => {
            props.stopAnimation();
            props.copyArray(array.slice());
        }, animation.length * ANIMATION_SPEED)
        

    };


  return (
    <div className='array-container'>
        <Navbar/>

        {array.map((value, idx) => (
            <div className='array-bar' key={idx} style={{height: `${value}px`}}>
                {/* {value} */}
            </div>
        ))}
        {/* <GenerateBtn/> */}
        <button onClick={resetArray}>Generate new Array</button>
        <button onClick={MergeSort}>Merge Sort</button>
        <button onClick={QuickSort}>Quick Sort</button>
        <button onClick={HeapSort}>Heap Sort</button>
        <button onClick={BubbleSort}>Bubble Sort</button>
    </div>
  )
}

export default Main
