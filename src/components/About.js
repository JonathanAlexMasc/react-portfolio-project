import React from "react"

export default function About () {

    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Jonathan Mascarenhas.
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    I'm a computer science major at the South Dakota School of Mines and Technology. I have an 
                    upcoming software engineering internship with Anthology Inc. for the summer of 2023, where I'll be working on their 
                    Ultra Platform.
                    <br />
                    <br />
                    Currently a teaching assistant for CS 170 @ sd mines. Connect with me on <a 
                    href="http://linkedin.com/in/jonathanmascarenhas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                    LinkedIn.</a>

            
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./myphoto.jpg"
                        />
                    </div>
            </div>
      </section>
    )
}