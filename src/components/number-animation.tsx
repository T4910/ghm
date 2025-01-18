"use client";
import { AnimatedNumber } from '@/components/ui/animated-number';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

const NumberAnimation = ({ defaultNum }: {defaultNum: number}) => {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);
  
    if (isInView && value === 0) {
      setValue(defaultNum);
    }
    
  return (
    <span ref={ref}>
        <AnimatedNumber
            className='text-6xl font-bold md:text-5xl mb-2 font-grotesk inline-flex'
            
            springOptions={{
                bounce: 0,
                duration: 1100,
                damping: 70,

            }}
            value={value}
        />
    </span>
  )
}

export default NumberAnimation