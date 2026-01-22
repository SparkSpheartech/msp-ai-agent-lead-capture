"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

// Validation Schema
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data) => {
        // Here you would typically send the data to an API
        // For now, we'll just simulate a success
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSuccess(true);
        reset();
    };

    return (
        <section id="contact-us" className="section contact-section bg-dark py-24 relative overflow-hidden">
            {/* Gradient Blob for depth */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-900/10 rounded-full blur-3xl -z-10"></div>

            <div className="container" style={{ maxWidth: '600px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="section-header text-center mb-12"
                >
                    <span className="tag text-lime-400 font-bold tracking-wider">CONTACT US</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to discuss your project? <span className="text-lime-500">Drop us a line.</span></h2>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="contact-form bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-sm"
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                    <div className="form-group">
                        <label className="text-gray-300 text-sm font-semibold mb-2 block">Name</label>
                        <input
                            {...register("name")}
                            placeholder="Your Name *"
                            className="form-input w-full p-4 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-all outline-none"
                        />
                        {errors.name && <span className="text-red-400 text-sm mt-1 block">{errors.name.message}</span>}
                    </div>

                    <div className="form-group">
                        <label className="text-gray-300 text-sm font-semibold mb-2 block">Email</label>
                        <input
                            {...register("email")}
                            placeholder="Type Your Email *"
                            className="form-input w-full p-4 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-all outline-none"
                        />
                        {errors.email && <span className="text-red-400 text-sm mt-1 block">{errors.email.message}</span>}
                    </div>

                    <div className="form-group">
                        <label className="text-gray-300 text-sm font-semibold mb-2 block">Message</label>
                        <textarea
                            {...register("message")}
                            placeholder="How can we help you?"
                            className="form-input w-full p-4 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-all outline-none"
                            rows={4}
                        />
                        {errors.message && <span className="text-red-400 text-sm mt-1 block">{errors.message.message}</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-lime-500 text-black font-bold text-lg rounded-lg hover:bg-lime-400 transition-all shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    <p className="mt-4 text-center text-gray-400 font-mono text-sm">
                        Or call us at: <a href="tel:2602670641" className="text-lime-400 hover:underline">(260) 267-0641</a>
                    </p>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactForm;
