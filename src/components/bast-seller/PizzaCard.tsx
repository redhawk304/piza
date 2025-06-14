'use client'

import Image from "next/image"
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"
import { formatCurrency } from "@/lib/formats"

const PizzaCard = ( {id, name, price, description, image}:{id : number, name:string, price :number, description:string, image:string}) => {
  return (
    <Card className="cursor-pointer bg-gray-50 hover:bg-background shadow duration-300 transition-all hover:scale-105">
        <CardTitle className="flex items-center justify-center">
            <Image src={image} alt={name} width={300} height={300} className='rounded-full' />
        </CardTitle>
        <CardContent>
            <div className="w-full flex items-center justify-between">

            <h1 className='text-2xl font-bold px-4'>{name}</h1>
            <p className='text-lg text-gray-600 font-semibold italic mt-2'>{formatCurrency(price)} </p>
            </div>
            <p className='text-lg py-5 text-gray-500 px-4 mt-2'>{description}</p>

        </CardContent>
        <CardFooter>
            <Button asChild variant={"default"} className='bg-red-600 px-4  w-full py-2 text-white mt-2 '>
                <Link href={`/pizza/${id}`}>
                    Order {name}
                </Link>
            </Button>
        </CardFooter>
        </Card>
  )
}

export default PizzaCard