import React from 'react'

const UseText = () => {
    return (
        <div>
            <p className='text-xl text-white font-bold pb-3.5'>How to Use</p>
            <div
                className="mb-4 rounded-[20px] overflow-hidden backdrop-blur-[62px] px-4.5 py-5 "
                style={{
                    background: `
              linear-gradient(#1D2127, #1D2127) padding-box,
              linear-gradient(90deg, #69778D, #1D2127) border-box
            `,
                    border: "1px solid transparent",
                    borderRadius: "20px"
                }}
            >

                <p className='text-white text-[16px] leading-relaxed tracking-wide '>To get started with Elysium Finance, create an account or log in if you're an existing user. Once inside, explore your personalized dashboard, which offers quick access to resources like Elysium Academy for courses and tutorials, the Elysium Simulator for hands-on practice, and direct links to partner sites. Begin by browsing Elysium Academy to access learning materials suited to your skill level, then move to the Simulator to test your knowledge with real-world scenarios in a safe environment. Each feature is intuitively designed for a smooth, guided experience.</p>


            </div>
        </div>

    )
}

export default UseText
