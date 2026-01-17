import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
// @ts-ignore
import projectsData from '@site/tmp-data/projects.json';
import { FaGithub, FaStar, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

type CliLine = {
  width: string;
  delay: string;
  content: React.ReactNode;
};

const cliLines: CliLine[] = [
  {
    width: '56ch',
    delay: '0s',
    content: (
      <>
        <span className="cli-prompt">
          <span className="cli-user">arakoo</span>
          <span className="cli-host">@lab</span>:<span className="cli-path">~</span>$
        </span>{' '}
        <span className="cli-command">claude</span>{' '}
        <span className="cli-arg">code</span>{' '}
        <span className="cli-arg">run</span>{' '}
        <span className="cli-path">protocol/ark-01</span>
      </>
    ),
  },
  {
    width: '40ch',
    delay: '0.9s',
    content: (
      <>
        <span className="cli-tag">[init]</span>{' '}
        <span className="cli-output">loading orchestration graph...</span>
      </>
    ),
  },
  {
    width: '32ch',
    delay: '1.6s',
    content: (
      <>
        <span className="cli-tag">[scan]</span>{' '}
        <span className="cli-output">tracing agent calls...</span>
      </>
    ),
  },
  {
    width: '36ch',
    delay: '2.4s',
    content: (
      <>
        <span className="cli-tag">[build]</span>{' '}
        <span className="cli-output">generating ledger schema...</span>
      </>
    ),
  },
  {
    width: '34ch',
    delay: '3.2s',
    content: (
      <>
        <span className="cli-diff">+ write</span>{' '}
        <span className="cli-path">src/runtime/ledger.ts</span>
      </>
    ),
  },
  {
    width: '33ch',
    delay: '3.8s',
    content: (
      <>
        <span className="cli-diff">+ write</span>{' '}
        <span className="cli-path">src/runtime/audit.ts</span>
      </>
    ),
  },
  {
    width: '37ch',
    delay: '4.4s',
    content: (
      <>
        <span className="cli-diff">+ write</span>{' '}
        <span className="cli-path">src/runtime/telemetry.ts</span>
      </>
    ),
  },
  {
    width: '26ch',
    delay: '5.1s',
    content: (
      <>
        <span className="cli-tag cli-tag-ok">[ok]</span>{' '}
        <span className="cli-output">3 files, 0 errors</span>
      </>
    ),
  },
];

const principles = [
  {
    title: 'Orchestration > Models',
    description:
      'We build around the runtime, not the model. Orchestration is where reliability, cost control, and governance actually live.',
  },
  {
    title: 'Ledgered Reality',
    description:
      'Every action creates a line item. We trace intent, cost, and outcome so enterprise teams can trust the margins.',
  },
  {
    title: 'Private by Default',
    description:
      'Research ships with security and auditability from day one. No demos, no noise, only controlled access.',
  },
];

const KnightRiderBar = () => {
  const ledCount = 28;
  const [leds, setLeds] = useState(() => Array(ledCount).fill(0));

  useEffect(() => {
    let index = 0;
    let direction = 1;
    const decay = 0.84;
    const stepMs = 60;

    const interval = setInterval(() => {
      setLeds((prev) => {
        const next = prev.map((value) => Math.max(0, value * decay));
        next[index] = 1;
        return next;
      });

      if (index === ledCount - 1) {
        direction = -1;
      } else if (index === 0) {
        direction = 1;
      }
      index += direction;
    }, stepMs);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="knight-rider-bar" aria-hidden="true">
      {leds.map((intensity, idx) => (
        <span
          key={idx}
          className="knight-led"
          style={{ '--i': intensity } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const [cliCycle, setCliCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCliCycle((prev) => prev + 1);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-sky" />
      <div className="retro-grid" />
      <div className="absolute inset-0 signal-noise pointer-events-none" />

      <div className="container-custom relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-flex font-terminal text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.5em] text-st-neon/80">
            Arakoo Research
          </span>

          <div className="space-y-4">
            <div className="inline-block">
              <div className="h-1 w-full bg-st-red shadow-[0_0_10px_rgba(255,46,111,0.7)] mb-3 transform -skew-x-12" />
              <h1 className="font-stranger text-5xl sm:text-6xl lg:text-7xl leading-tight text-shadow-st">
                Sandeep Srinivasa
              </h1>
              <div className="h-1 w-full bg-st-red shadow-[0_0_10px_rgba(255,46,111,0.7)] mt-3 transform -skew-x-12" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display text-white leading-snug">
              Infrastructure is the model.
              <br />
              <span className="text-st-neon">Not the LLM.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl">
              This private archive documents experiments in control planes, ledgered telemetry, and
              enterprise-grade agent economics.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
          className="min-w-0 w-full"
        >
          <div className="cli-terminal">
            <div className="cli-terminal-title">
              <span>xterm - arakoo@lab</span>
              <span className="cli-terminal-controls" aria-hidden="true">
                <span className="cli-window-btn" />
                <span className="cli-window-btn" />
                <span className="cli-window-btn" />
              </span>
            </div>
            <div key={cliCycle} className="cli-terminal-body">
              {cliLines.map((line) => (
                <div
                  key={line.delay}
                  className="cli-line"
                  style={{ '--line-width': line.width, '--delay': line.delay } as React.CSSProperties}
                >
                  {line.content}
                </div>
              ))}
              <div
                className="cli-line cli-line-live"
                style={{ '--line-width': '18ch', '--delay': '6.2s' } as React.CSSProperties}
              >
                <span className="cli-prompt">
                  <span className="cli-user">arakoo</span>
                  <span className="cli-host">@lab</span>:<span className="cli-path">~</span>$
                </span>
                <span className="cli-cursor" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PrinciplesSection = () => (
  <section className="relative py-20 sm:py-24">
    <div className="container-custom space-y-10">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-end">
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white">
            Operating Principles
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-400">
          Arakoo Research maps the orchestration layer that makes agent systems accountable. Each
          experiment is built to survive enterprise scrutiny: compliance constraints, cost
          accountability, and runtime auditability.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-2xl border border-st-purple/30 bg-black/40 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            <h3 className="mt-4 text-xl font-display text-white">{principle.title}</h3>
            <p className="mt-3 text-sm text-gray-400">{principle.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const blinkDelay = useRef(Math.random() * 2).current;
  const blinkDuration = useRef(0.8 + Math.random() * 0.5).current;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Link to={project.html_url} className="block h-full group no-underline hover:no-underline">
        <div className="relative h-full rounded-2xl border border-st-red/30 bg-[linear-gradient(135deg,rgba(16,12,24,0.95),rgba(7,6,10,0.95))] p-6 overflow-hidden transition-all duration-300 hover:border-st-neon/70 hover:shadow-[0_0_30px_rgba(57,242,255,0.2)]">
          <div className="absolute inset-0 signal-noise pointer-events-none opacity-20" />
          <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-st-purple/30 blur-3xl opacity-70" />

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center justify-between text-[11px] font-terminal uppercase tracking-[0.3em] text-st-neon/70">
              <span>Case File {index + 1}</span>
              <span className="flex items-center gap-2 text-st-red/80">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{
                    duration: blinkDuration,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: blinkDelay,
                  }}
                  className="h-2 w-2 rounded-full bg-st-red shadow-[0_0_8px_rgba(255,46,111,0.8)]"
                />
                Active
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-display text-white tracking-wide group-hover:text-st-neon transition-colors truncate">
              {project.name}
            </h3>

            <p className="mt-3 text-sm text-gray-400 line-clamp-3 min-h-[60px] group-hover:text-gray-300">
              {project.description || 'Experimental repository. Classified data.'}
            </p>

            {project.topics?.length ? (
              <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-terminal uppercase tracking-[0.2em] text-st-neon/70">
                {project.topics.slice(0, 3).map((topic) => (
                  <span key={topic} className="rounded-full border border-st-neon/30 px-2 py-1">
                    {topic}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-terminal text-st-neon/70">
              <div className="flex items-center gap-4 text-st-neon/70">
                {project.language && (
                  <span className="flex items-center gap-1">
                    <FaCode /> {project.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <FaStar /> {project.stargazers_count}
                </span>
              </div>
              <span className="text-st-neon group-hover:text-white transition-colors">Open repo -></span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
    <div className="space-y-4">
      <span className="font-terminal text-xs uppercase tracking-[0.4em] text-st-neon/80">
        Private Archive
      </span>
      <h2 className="text-4xl md:text-5xl font-display text-white">{title}</h2>
    <KnightRiderBar />
    {subtitle ? (
      <p className="text-sm sm:text-base text-gray-400 max-w-2xl">{subtitle}</p>
    ) : null}
  </div>
);

export default function Home(): React.ReactNode {
  const sortedProjects = (projectsData as Project[]).slice(0, 9);

  return (
    <Layout
      title="Arakoo Research"
      description="Private archive of enterprise-grade AI infrastructure research."
    >
      <main className="crt bg-st-dark min-h-screen text-white relative selection:bg-st-neon selection:text-black">
        <Hero />
        <PrinciplesSection />

        <section className="relative z-10 bg-st-dark/90 backdrop-blur-xl border-t border-st-red/20">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(91,44,255,0.18),transparent_50%)]" />
          <div className="container-custom relative py-24">
            <SectionHeader
              title="Active Experiments"
              subtitle="A private showcase of research projects exploring orchestration, governance, and enterprise economics for agent systems."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {sortedProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                to="https://github.com/arakoodev"
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent overflow-hidden"
              >
                <span className="absolute inset-0 border border-st-neon/40 group-hover:border-st-neon transition-colors duration-300" />
                <span className="absolute inset-0 bg-st-neon/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative font-terminal text-st-neon text-sm tracking-[0.3em] uppercase group-hover:text-white transition-colors">
                  View Full Protocol
                </span>
                <FaGithub className="relative w-5 h-5 text-st-neon group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </section>

        <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-st-neon/10 to-transparent pointer-events-none z-0" />
      </main>
    </Layout>
  );
}
