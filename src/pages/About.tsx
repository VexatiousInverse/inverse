import { motion } from 'framer-motion';
import { Code, Database, Layout, Server } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Layout className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      category: 'Backend',
      icon: <Server className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      technologies: ['Node.js', 'Express', 'Python', 'Django'],
    },
    {
      category: 'Database',
      icon: <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
    },
    {
      category: 'Other',
      icon: <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      technologies: ['Git', 'Docker', 'AWS', 'CI/CD'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience in
            building web applications. I love learning new technologies and solving
            complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed ">
              I started my journey as a self-taught developer, learning through
              online resources and building projects. Over the years, I've worked
              with various startups and companies, helping them build scalable
              applications and improve their development processes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl text-center font-bold text-gray-900 dark:text-white mb-4">My Approach</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and following best
              practices. I'm passionate about creating intuitive user experiences
              and building robust backend systems. I enjoy working in collaborative
              environments and sharing knowledge with others.
            </p>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h4 className="text-xl font-semibold ml-2 text-gray-900 dark:text-white">{skill.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;