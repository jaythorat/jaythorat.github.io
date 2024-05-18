import React from 'react';
import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {technologies} from "../constants"

const Tech = () => {
  return (
    // <div>Tech</div>

    <div
      className='flex flex-wrap flex-row justify-center gap-10'
    >
    { technologies.map((technology) =>
        <div className='w-28 h-28 ' key={technology.name}>
        <BallCanvas icon = {technology.icon} />
        {/* <img  src={technology.icon}/> */}
        {/* {technology.name} */}
        </div>
    )}
    </div>
  )
}

export default SectionWrapper(Tech,"tech");