import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Terminal,
  Box,
  Cpu,
  GitBranch,
  Container,
  Cloud,
  TestTube,
  Boxes,
  Figma as FigmaIcon
} from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: [
      { name: 'HTML/CSS', icon: Code2 },
      { name: 'JavaScript', icon: Box },
      { name: 'TypeScript', icon: Box },
      { name: 'React', icon: Code2 },
      { name: 'Next.js', icon: Globe },
      { name: 'Redux', icon: Boxes },
      { name: 'Tailwind CSS', icon: Layout }
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', icon: Server },
      { name: 'Express', icon: Terminal },
      { name: 'MongoDB', icon: Database },
      { name: 'MySQL', icon: Database },
      { name: 'TypeScript', icon: Box },
      { name: 'REST APIs', icon: Globe }
    ]
  },
  {
    category: 'Tools & Others',
    icon: Terminal,
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'Webpack', icon: Boxes },
      { name: 'Vite', icon: Container },
      { name: 'Cypress', icon: TestTube },
      { name: 'Material-UI', icon: Layout },
      { name: 'Ant Design', icon: Layout }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <skillSet.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-semibold">{skillSet.category}</h3>
              </div>
              <div className="space-y-3">
                {skillSet.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span>{skill.name}</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}