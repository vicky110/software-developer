
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiMail, FiPhone, FiMapPin, FiUpload, FiSend } from 'react-icons/fi';
import { toast } from 'sonner';

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Invalid email format'),
  projectType: yup.string().required('Please select a project type'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
  gdprConsent: yup.boolean().oneOf([true], 'You must accept the GDPR consent'),
});

type FormData = yup.InferType<typeof schema>;

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const projectTypes = [
    'Custom Software Development',
    'SaaS Development',
    'Mobile Application',
    'Enterprise Solution',
    'AI/ML Solution',
    'Cybersecurity',
    'Other',
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge software? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-300 mb-2">Name *</label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-zinc-300 mb-2">Email *</label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 mb-2">Project Type *</label>
                <select
                  {...register('projectType')}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-red-400 text-sm mt-1">{errors.projectType.message}</p>
                )}
              </div>

              <div>
                <label className="block text-zinc-300 mb-2">Message *</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div>
                <label className="block text-zinc-300 mb-2">Project Requirements (Optional)</label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-zinc-300 hover:bg-slate-600 transition-colors cursor-pointer"
                  >
                    <FiUpload className="mr-2" />
                    Upload Requirements Document
                  </label>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  {...register('gdprConsent')}
                  type="checkbox"
                  id="gdpr"
                  className="mt-1 w-4 h-4 text-indigo-500 bg-slate-700 border-slate-600 rounded focus:ring-indigo-500 focus:ring-2"
                />
                <label htmlFor="gdpr" className="text-zinc-300 text-sm">
                  I agree to the processing of my personal data in accordance with the{' '}
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">
                    GDPR regulations
                  </a>
                  . *
                </label>
              </div>
              {errors.gdprConsent && (
                <p className="text-red-400 text-sm">{errors.gdprConsent.message}</p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <FiMail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-zinc-300">Email us</p>
                    <p className="text-white font-semibold">hello@devstudio.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <FiPhone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-zinc-300">Call us</p>
                    <p className="text-white font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <FiMapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-zinc-300">Visit us</p>
                    <p className="text-white font-semibold">123 Tech Street, San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
              <div className="w-full h-64 bg-slate-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FiMapPin size={48} className="text-indigo-500 mx-auto mb-4" />
                  <p className="text-zinc-300">Interactive Map</p>
                  <p className="text-zinc-400 text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
