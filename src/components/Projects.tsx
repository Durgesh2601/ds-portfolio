import { motion } from 'framer-motion';
import { Terminal, ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Best Buddy',
    description: 'A comprehensive real estate platform connecting users with their dream properties. Features include user authentication, property management, and personalized property suggestions based on preferences.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=500',
    tags: ['React.js', 'Express', 'Node.js', 'MongoDB', 'React-Bootstrap'],
    github: 'https://github.com/yourusername/best-buddy',
    demo: 'https://best-buddy-demo.com'
  },
  {
    title: 'DevExplorer',
    description: 'A web application for exploring detailed information about developers on GitHub. Features include developer listings, detailed profile views, and responsive design.',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=800&h=500',
    tags: ['React', 'TypeScript', 'Material-UI', 'Context API', 'Vite'],
    github: 'https://github.com/yourusername/dev-explorer',
    demo: 'https://dev-explorer-demo.com'
  },
  // {
  //   title: 'WizCommerce Migration',
  //   description: 'Led the migration of three main SaaS applications from Create React App to Vite, improving developer productivity by 40% and reducing blocking UI render times by 20%.',
  //   image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800&h=500',
  //   tags: ['Vite', 'React', 'TypeScript', 'Payment Integration', 'Ag-Grid'],
  //   github: 'https://github.com',
  //   demo: 'https://demo.com'
  // }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 matrix-bg">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4 terminal-prompt">
            <Terminal className="text-purple-600" size={24} />
            <span className="text-sm text-gray-500">~/projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold terminal-prompt">
            ls ./featured-projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-purple-200 dark:border-purple-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/50" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Code2 className="text-white" size={20} />
                  <span className="text-white font-mono text-sm">project_{index + 1}.tsx</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github size={24} className="text-white" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink size={24} className="text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-mono terminal-prompt">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}