"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className=" w-full  mt-16   section-gap ">
      <div className=" container px-4 py-8  md:px-6 md:py-8  mx-auto grid grid-cols-1  place-items-center place-content-center md:grid-cols-2">
        {/* content */}
        <div className=" w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-4xl font-bold">Pizza Our Craft!</h1>
          <p className="text-lg text-gray-600 mt-2">
            We are the best pizza in the world! and Prepare for the best pizza
            in the world!
          </p>

          <Button
            asChild
            variant={"default"}
            className="bg-red-600 px-4 py-2 text-white mt-2 "
          >
            <Link href="/">
              Order <ArrowRightCircle className="ml-2" />
            </Link>
          </Button>
        </div>
        {/* image */}
        <div className=" relative hidden md:block ">
          <Image
            src="/images/pizza.png"
            alt="hero"
            width={400}
            height={400}
            className="object-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
