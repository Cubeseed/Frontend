import { ReactElement, useState } from "react";


export function useMultiSteps (steps:ReactElement[]) {

    const [currentIndex, setCurrentIndex ] = useState(0)
    

    const  next = () =>{
        setCurrentIndex(i =>{
           
            if (i >= steps.length - 1) return i

            return i + 1

        })
    }

    const back = () =>{
        setCurrentIndex(i =>{
           
            if (i <= 0 ) return i

            return i - 1

        })
    }

    return {
        currentIndex,
        steps,
        step:steps[currentIndex],
        next,
        back,
        isFirstStep:currentIndex === 0,
        isLastStep:currentIndex === steps.length  - 1
    }
}