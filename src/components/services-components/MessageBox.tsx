'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function MessageModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Floating Chat Icon */}
      <motion.button
        onClick={() => setOpen(!open)} // toggle open/close
        whileHover={{
          scale: [1, 1.25, 1.05, 1.15, 1], // bounce motion
          transition: {
            duration: 0.4,
            times: [0, 0.2, 0.4, 0.7, 1],
            ease: "easeInOut",
          },
        }}
        whileTap={{
          scale: 0.9,
          transition: { type: "spring", stiffness: 500, damping: 10 },
        }}
        className="fixed top-[130px] left-[20px] bg-white border border-black rounded-3xl p-2 shadow-md hover:shadow-lg transition-all duration-300 z-50"
      >
        <ChatBubbleLeftRightIcon className="w-12 h-12 text-black" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-opacity-30"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed top-[120px] left-[90px] w-[670px] h-[450px] bg-black border border-black rounded-4xl shadow-xl overflow-hidden z-50"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Left Side (slides from left) */}
                <motion.div
                  className="w-full md:w-[60%] p-6 border-r bg-white rounded-4xl border-black flex flex-col justify-between"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0 }}
                >
                  <div>
                    <h2 className="text-4xl mb-4 flex items-center">
                      Let’s Talk! <ChatBubbleLeftRightIcon className="w-6 h-6 ml-2" />
                    </h2>
                    <form className="flex flex-col gap-3">
                      <input
                        type="text"
                        placeholder="Name"
                        className="border border-black rounded-md px-3 py-2 text-base focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Contact Number"
                        className="border border-black rounded-md px-3 py-2 text-base focus:outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="border border-black rounded-md px-3 py-2 text-base focus:outline-none"
                      />
                      <textarea
                        placeholder="Your Message"
                        className="border border-black rounded-md px-3 py-2 text-base focus:outline-none resize-none"
                        rows="4"
                      />
                    </form>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 ml-36 bg-black text-white py-2 rounded-4xl hover:bg-gray-800 text-base transition-all duration-200"
                  >
                    Send
                  </button>
                </motion.div>

                {/* Right Side (slides from right with delay) */}
                <motion.div
                  className="w-full md:w-[40%] bg-black text-white p-8 flex flex-col text-[15px]"
                  initial={{ x: 20, opacity: 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.25 }}
                >
                  <div>
                    <p className=" mb-2 text-xl">Other Contacts:</p>
                    <a href="mailto:example@email.com" className="text-xl block underline hover:text-gray-300">
                      Email
                    </a>
                    <a href="tel:+123456789" className="text-xl block underline mb-3 hover:text-gray-300">
                      Phone
                    </a>

                    <p className="text-xl  mb-2">Want to Connect?</p>
                    <a href="#" className="text-xl block underline hover:text-gray-300">
                      LinkedIn
                    </a>
                    <a href="#" className="text-xl block underline hover:text-gray-300">
                      Instagram
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
