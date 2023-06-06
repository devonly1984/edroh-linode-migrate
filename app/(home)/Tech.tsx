import React from 'react';

type Props = {}

const Tech = (props:Props) => {
return (
<section>
   <hr className="border-1"/>
   <div className="flex items-center gap-3 my">
     <h4 className="bg-accent-orange py-2 px-5 text-sm text-wh-900 "> Hot</h4>
     <p className="font-bold text-2xl">Latest News in Technology</p>
    </div>
    <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8  my-5">
    	<div className="bg-wh-500 col-span-1 row-span-3">Testing</div>
    	<div className="bg-wh-500 col-span-1 row-span-1">Testing</div>
    	<div className="bg-wh-500 col-span-1 row-span-1">Testing</div>
    	<div className="bg-wh-500 col-span-1 row-span-1">Testing</div>
    </div>
 </section>
)
}

export default Tech
