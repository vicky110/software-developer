
import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const TeamSection = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c4',
      bio: 'Former Google engineer with 10+ years in enterprise software',
      skills: [95, 90, 85, 88, 92], // React, Node.js, AWS, Leadership, Strategy
      social: { linkedin: '#', github: '#', twitter: '#' }
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bio: 'AI/ML expert and full-stack architect',
      skills: [98, 95, 90, 85, 88], // React, Node.js, AWS, Leadership, Strategy
      social: { linkedin: '#', github: '#', twitter: '#' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      bio: 'UX/UI specialist creating beautiful, functional designs',
      skills: [92, 88, 85, 95, 90], // React, Node.js, AWS, Leadership, Strategy
      social: { linkedin: '#', github: '#', twitter: '#' }
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Full-stack developer passionate about clean code',
      skills: [96, 94, 88, 82, 85], // React, Node.js, AWS, Leadership, Strategy
      social: { linkedin: '#', github: '#', twitter: '#' }
    },
  ];

  const skillLabels = ['Frontend', 'Backend', 'Cloud', 'Leadership', 'Innovation'];

  return (
    <section id="team" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Our diverse team of experts is passionate about creating exceptional software solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 text-center group"
            >
              <div className="relative mb-6">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent rounded-full group-hover:from-indigo-500/40 transition-all" />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-indigo-400 font-semibold mb-3">{member.role}</p>
              <p className="text-zinc-300 text-sm mb-6">{member.bio}</p>

              {/* Skills radar chart simulation */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Skills</h4>
                <div className="space-y-2">
                  {skillLabels.map((skill, skillIndex) => (
                    <div key={skill} className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">{skill}</span>
                      <div className="flex-1 mx-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${member.skills[skillIndex]}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + skillIndex * 0.1, duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        />
                      </div>
                      <span className="text-zinc-300">{member.skills[skillIndex]}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={member.social.linkedin}
                  className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-500 transition-colors"
                >
                  <FiLinkedin size={16} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={member.social.github}
                  className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-500 transition-colors"
                >
                  <FiGithub size={16} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={member.social.twitter}
                  className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-500 transition-colors"
                >
                  <FiTwitter size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
