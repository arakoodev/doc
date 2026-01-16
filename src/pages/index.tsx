import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// @ts-ignore
import projectsData from '@site/tmp-data/projects.json';
import { FaGithub, FaStar, FaCode, FaTerminal } from 'react-icons/fa';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Types
type Project = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
};

// Components
const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden perspective-1000">
      {/* Background Grid */}
      <div className="retro-grid" />
      
      {/* Stranger Things Style Title - Restored */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <h2 className="font-stranger text-xl md:text-2xl text-st-red mb-6 tracking-[0.2em] opacity-80 animate-pulse">
          ARAKOO RESEARCH
        </h2>
        
        <div className="relative inline-block mb-12">
          {/* Top Bar - Iconic ST Vibe */}
          <div className="h-1 md:h-2 w-full bg-st-red shadow-[0_0_10px_#FF2A4D,0_0_20px_#FF2A4D] mb-2 transform -skew-x-12" />
          
          <h1 className="font-stranger text-5xl md:text-8xl text-transparent bg-clip-text bg-st-red text-shadow-st leading-none tracking-normal transform scale-y-110">
            SANDEEP<br/>SRINIVASA
          </h1>
          
          {/* Bottom Bar */}
          <div className="h-1 md:h-2 w-full bg-st-red shadow-[0_0_10px_#FF2A4D,0_0_20px_#FF2A4D] mt-2 transform -skew-x-12" />
        </div>
        
        <div className="mt-8 pt-8 relative">
           <div className="inline-block bg-st-red/10 px-4 py-1 text-st-red border border-st-red/30 font-terminal text-xs tracking-[0.2em] mb-6 rounded-sm">
             CORE_THESIS_V9
           </div>
           {/* Static, high-impact text - Removed glitch class */}
           <h3 className="font-stranger text-2xl md:text-4xl leading-tight mb-6 tracking-wide text-white drop-shadow-md">
             INFRASTRUCTURE IS THE MODEL.<br/>
             <span className="text-st-red">NOT THE LLM.</span>
           </h3>
           
           <p className="text-gray-400 font-sans text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
             We are identifying and exploiting the structural weaknesses in current LLM deployment strategies.
             The future belongs to those who control the <span className="text-st-red font-bold">orchestration layer</span>.
           </p>
        </div>
      </motion.div>
      
      {/* Fog/Mist Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0 pointer-events-none" />
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  // Generate a random blinking delay between 0 and 2 seconds
  const blinkDelay = useRef(Math.random() * 2).current;
  // Generate a random duration between 0.8s and 1.3s for organic feel
  const blinkDuration = useRef(0.8 + Math.random() * 0.5).current;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={project.html_url}
        className="block h-full group no-underline hover:no-underline"
      >
        {/* Darker ST Style Card */}
        <div className="relative h-full bg-black/80 border border-st-red/30 p-6 rounded-sm overflow-hidden hover:border-st-neon transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)]">
          {/* Subtle Scanlines */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              {/* Blinking Cursor Terminal Icon */}
              <div className="font-terminal text-2xl font-bold text-st-red mr-4 flex items-center">
                &gt;
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ 
                    duration: blinkDuration, 
                    repeat: Infinity, 
                    ease: "linear", // Using simpler easing to avoid type issues, step effect can be done with keyframes
                    delay: blinkDelay 
                  }}
                >
                  _
                </motion.span>
              </div>
              
              <div className="flex items-center gap-2 text-xs font-terminal text-st-neon opacity-70">
                <span className="w-2 h-2 rounded-full bg-st-neon animate-pulse" />
                ACTIVE
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-3 text-white font-display tracking-wide group-hover:text-st-neon transition-colors truncate">
              {project.name}
            </h3>
            
            <p className="text-gray-400 mb-6 text-sm font-sans line-clamp-3 min-h-[60px] group-hover:text-gray-300">
              {project.description || "Experimental repository. Classified data."}
            </p>
            
            <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
              <div className="flex items-center gap-4 text-xs font-mono text-st-red">
                {project.language && (
                  <span className="flex items-center gap-1">
                    <FaCode /> {project.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <FaStar /> {project.stargazers_count}
                </span>
              </div>
              
              <span className="text-xs font-terminal text-st-neon group-hover:underline decoration-st-neon underline-offset-4">
                ACCESS_CODE &rarr;
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center mb-16 relative">
    <motion.h2 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-4xl md:text-6xl font-bold font-display text-white mb-4 relative inline-block"
    >
      <span className="absolute -inset-1 blur-sm bg-st-red/30 animate-pulse"></span>
      <span className="relative z-10">{title}</span>
    </motion.h2>
    <div className="h-1 w-24 bg-st-neon mx-auto shadow-[0_0_10px_#00f3ff]" />
    <p className="mt-4 font-terminal text-st-neon text-sm md:text-base tracking-widest uppercase">
      {subtitle}
    </p>
  </div>
);

const AboutSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="border border-st-neon/50 p-8 bg-black/50 backdrop-blur-sm relative"
        >
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-st-neon" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-st-neon" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-st-neon" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-st-neon" />
          
          <h3 className="text-2xl font-display text-white mb-6 flex items-center gap-3">
            <span className="text-st-red">///</span> CLASSIFIED BRIEFING
          </h3>
          
          <p className="text-gray-300 mb-6 font-mono leading-relaxed">
            We are identifying and exploiting the structural weaknesses in current LLM deployment strategies.
            The future belongs to those who control the <span className="text-st-neon">orchestration layer</span>.
          </p>
          
          <ul className="space-y-4 font-terminal text-sm text-st-red">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-st-red animate-pulse" />
              SUBJECT: Enterprise AGI
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-st-red animate-pulse" />
              STATUS: Active Development
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-st-red animate-pulse" />
              THREAT LEVEL: Midnight
            </li>
          </ul>
        </motion.div>
        
        <div className="relative h-full flex items-center justify-center">
           <div className="w-64 h-64 border-4 border-st-red rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite] opacity-50">
             <div className="w-48 h-48 border-4 border-st-neon rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
             <span className="font-stranger text-6xl text-white mix-blend-overlay">AI</span>
           </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home(): React.ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const sortedProjects = (projectsData as Project[]).slice(0, 9); // Top 9 projects

  return (
    <Layout
      title={`Arakoo Research`}
      description="The Upside Down of AI Infrastructure">
      
      <main className="crt bg-st-dark min-h-screen text-white relative selection:bg-st-neon selection:text-black">
        <Hero />
        
        <div className="relative z-10 bg-st-dark/90 backdrop-blur-xl border-t border-st-red/20 shadow-[0_-20px_50px_rgba(0,0,0,1)]">
          
          <section className="py-24 container-custom">
            <SectionHeader title="ACTIVE EXPERIMENTS" subtitle="" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {sortedProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
            
            <div className="text-center mt-20">
              <Link
                to="https://github.com/arakoodev"
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent overflow-hidden"
              >
                <span className="absolute inset-0 border border-st-neon/50 group-hover:border-st-neon transition-colors duration-300" />
                <span className="absolute inset-0 bg-st-neon/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative font-terminal text-st-neon text-lg tracking-widest uppercase group-hover:text-white transition-colors">
                  View Full Protocol
                </span>
                <FaGithub className="relative w-6 h-6 text-st-neon group-hover:text-white transition-colors" />
              </Link>
            </div>
          </section>
        </div>
        
        {/* Footer Ambient Glow */}
        <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-st-neon/10 to-transparent pointer-events-none z-0" />
      </main>
    </Layout>
  );
}
