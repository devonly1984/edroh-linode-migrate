import React from 'react';
import {Trending,Tech} from './(home)';

const Home = ()=> {
  return (
    <main className="px-10 leading-7">
	<Trending/>
<div className="md:flex gap-10 mb-5">
<div className="basis-3/4">
<Tech/>
{/*<Travel/>*/}
{/*<Other/>*/}
<div className="hidden md:block">
{/*<Subscribe/>*/}
</div>
<div className="basis-1/4">
{/*<Sidebar/>*/}
</div>
</div>
</div>
    </main>
  )
}
export default Home;