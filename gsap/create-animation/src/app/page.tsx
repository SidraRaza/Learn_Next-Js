'use client'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

import gsap from 'gsap';

export default function AnimatedBox() {
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  
  // Using useGSAP to run animation on mount
  useGSAP(() => {
    gsap.to(boxRef.current, { x: 700, duration: 3,borderRadius: "50%" }
    );
    gsap.from(boxRef2.current, { y: 700, duration: 3, delay: 1,rotate: 360,backgroundColor: "green",
      borderRadius: "50%"

     }
    );
  }, []);

  return <div  >
 <h1 ref={boxRef} className="w-[200px] h-[200px] bg-red-500 flex justify-center items-center p-5 text-white">   I'm animated!</h1>
 <h2 ref={boxRef2} className="w-[200px] h-[200px] bg-yellow-500 flex justify-center items-center p-5 text-white">I'm animated!</h2>
  
  </div>;
}