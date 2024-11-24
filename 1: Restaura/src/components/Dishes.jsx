import React from 'react';
import DishesCard from './DishesCard';
import {DISHES } from "../constants"
const Dishes = () => {
  return (
    <section id='dishes' className=' container mx-auto py-60 id="dishes'>
    <h2 className=' mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
        Our Dishes
    </h2>
    <div className=' grid grid-cols-1 gap-8 md:grid-cols-5'>
        {DISHES.map((project,index) =>(
            <DishesCard key={index} project={project}/>
        ))}
    </div>

      
    </section>
  );
}

export default Dishes;
