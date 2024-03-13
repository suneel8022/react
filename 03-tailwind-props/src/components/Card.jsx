import React from 'react'

/*function Card() {
  return (
    <div>
        <img src="https://wallpapercave.com/wp/wp1887619.jpg" alt="" />
        <h1 className='text-3xl bg-green-500 p-3 rounded'> A Card for Photos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolore!</p>
    </div>
  )
}
*/


function Card({username=" TSK ", post = "Fresher"}){
    // console.log(props);
    return (
        <div>
                <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://wallpapercave.com/wp/wp1887619.jpg" alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolore!</p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {/* {username || 'suneel'} */}
                        {post}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        Steve Rogers, Avengers
                    </div>
                    </figcaption>
                </div>
                </figure>
        </div>
    )
}




export default Card