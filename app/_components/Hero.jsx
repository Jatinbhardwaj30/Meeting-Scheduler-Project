"use client"
import { Button } from '@/components/ui/button'
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

function Hero() {
  return (
    <div>

      <section
        className="relative bg-[url(https://media.istockphoto.com/id/1521680686/photo/e-learning-on-virtual-screen.jpg?s=612x612&w=0&k=20&c=R8g3baa8-JWn8E-K7wSUQIjj5FuUFvpCv5PjR1GGkGk=)] bg-cover bg-center bg-no-repeat"
      >

        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-left">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">

              SchedulerPro
            </h1>

            <p className="mt-4 max-w-lg text-emerald-100 sm:text-xl/relaxed">
              Easy and automated meeting scheduling at your fingertips. Collaborate efficiently with real-time calendar sync.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <RegisterLink><Button
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-zinc-300 focus:outline-none focus:ring active:bg-black sm:w-auto"
              >
                Sign Up
              </Button>
              </RegisterLink>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-zinc-300 focus:outline-none focus:ring active:text-black sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero