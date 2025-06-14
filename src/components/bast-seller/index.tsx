import React from 'react'

import PizzaCard from './PizzaCard'

const BestSeller = () => {

    const bestSeller =[{id:1, name:'pizza', price:100, image:'/images/pizza.png', description:'pizza is the best pizza in the world!'},
    {id:2, name:'pizza', price:100, image:'/images/pizza.png', description:'pizza is the best pizza in the world!'},
    {id:3, name:'pizza', price:100, image:'/images/pizza.png', description:'pizza is the best pizza in the world!'},
    
    ] 
  return (
    <section className='section-gape '>

      <div className='mx-auto container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
        {bestSeller.map((item) => (
         <PizzaCard key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} description={item.description}/>

        ))}

       
      </div>

    </section>
  )
}

export default BestSeller