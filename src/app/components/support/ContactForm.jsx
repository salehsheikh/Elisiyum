import React from 'react'

const ContactForm = () => {
    return (
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

            <form className="space-y-3">
                {/* Top Text */}
                <h2 className="text-xl font-bold text-white">Contact Us Forum</h2>

                {/* Email & Subject Fields */}
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2.5 bg-[#FFFFFF33]  text-white placeholder:text-white rounded-[10px] focus:outline-none "
                        required
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full px-4 py-2.5 bg-[#FFFFFF33] rounded-[10px] text-white placeholder:text-white focus:outline-none "
                        required
                    />
                </div>

                {/* Message Textarea */}
                <textarea
                    rows="7"
                    placeholder="Your Message"
                    className="w-full px-4 py-2.5 bg-[#FFFFFF33]  text-white placeholder:text-white rounded-[10px]  focus:outline-none "
                    required
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#006EFF] text-white py-2.5 rounded-[10px]  "
                >
                    Submit
                </button>
            </form>


        </div>
    )
}

export default ContactForm
