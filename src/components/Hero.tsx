import { motion } from "framer-motion";
import {
  Terminal,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code2,
} from "lucide-react";
import profilePic from "../assets/profile.jpg";

export default function Hero() {

  return (
    <section id="about" className="min-h-screen pt-20 matrix-bg relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 md:order-1"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400 font-medium">
                <Code2 size={18} />
                <span>Frontend Developer</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Durgesh Kumar Singh
                </span>
              </h1>

              <div className="font-mono bg-black/80 dark:bg-gray-900 rounded-lg p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <Terminal size={16} />
                  <span className="text-sm">developer.profile</span>
                </div>
                <pre className="text-sm">
                  <code className="text-green-400">
                    Software Engineer | Frontend at{" "}
                    <a
                      href="https://wizcommerce.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      WizCommerce
                    </a>{" "}
                    (May 2022 - Present)
                  </code>
                </pre>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                Dynamic and results-driven Software Engineer specializing in
                Frontend development, with a strong focus on creating intuitive
                and visually appealing user interfaces. Proven track record of
                delivering high-quality solutions and optimizing performance.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  <Terminal size={18} />
                  <span>Let's Connect</span>
                </motion.a>

                <div className="flex gap-4">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/Durgesh2601",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/siinghdurgesh/",
                      label: "LinkedIn",
                    },
                    {
                      icon: Mail,
                      href: "mailto:dk829445@gmail.com",
                      label: "Email",
                    },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                      aria-label={item.label}
                    >
                      <item.icon
                        size={20}
                        className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full blur-2xl opacity-20 animate-pulse" />
              <motion.div
                className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-72 h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/80 text-sm font-mono">
                    <Terminal size={14} />
                    <span>~/developer/profile.jpg</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-purple-600" />
      </motion.div>
    </section>
  );
}
