'use client'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

import gsap from 'gsap';

export default function AnimatedBox() {
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  
  // Using useGSAP to run animation on mount
  useGSAP(() => {
    // gsap.to(boxRef.current, { x: 700, duration: 3,borderRadius: "50%" }
    // );
    // gsap.from(boxRef2.current, { y: 700, duration: 3, delay: 1,rotate: 360,backgroundColor: "green",
    //   borderRadius: "50%"

    //  }
    // );
    gsap.from([boxRef.current, boxRef2.current],{ opacity: 0, duration: 3 ,rotate: 360,x:700,borderRadius: "50%",yoyo: true,delay:3,stagger:0.5,repeat:1});
  }, []);

  return <div  >
 <h1 ref={boxRef} className="text-3xl font-bold bg-red-700 p-10 w-[300px]">   I'm animated!</h1>
 <h2 ref={boxRef2} className="text-3xl font-bold">I'm animated!</h2>
  
  </div>;
}