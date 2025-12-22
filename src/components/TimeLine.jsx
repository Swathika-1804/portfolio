import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'B.E. Computer Science and Design',
    institution: 'Kongu Engineering College, Erode',
    period: '2022 – Present',
    grade: 'CGPA: 7.33 (till 6th semester)',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'St. Joseph Matriculation Higher Secondary School, Hosur',
    period: '2022',
    grade: '88%',
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'St. Joseph Matriculation Higher Secondary School, Hosur',
    period: '2020',
    grade: '95.6%',
  },
];

const TimelineItem = ({ item, index, isLeft }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div
      ref={ref}
      className={`relative flex items-center w-full ${
        isLeft ? 'justify-start' : 'justify-end'
      }`}
    >
      {/* Center DOT */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        className="absolute left-1/2 w-5 h-5 rounded-full
                   bg-fuchsia-500 border-4 border-background
                   -translate-x-1/2 z-10"
      />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`w-5/12 ${
          isLeft ? 'pr-10 text-right' : 'pl-10 text-left'
        }`}
      >
        <div className="card-glass p-6 hover:glow-box transition-all duration-300">
          <div
            className={`flex items-center gap-3 mb-3 ${
              isLeft ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-lg gradient-bg flex items-center justify-center ${
                isLeft ? 'order-2' : ''
              }`}
            >
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-primary font-semibold text-sm">
              {item.period}
            </span>
          </div>

          <h3 className="font-bold text-foreground mb-1">
            {item.degree}
          </h3>
          <p className="text-muted-foreground text-sm mb-2">
            {item.institution}
          </p>
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            {item.grade}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative">
      <div className="section-container relative" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            My Journey
          </span>
          <h2 className="heading-lg mt-4 gradient-text">
            Education
          </h2>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Continuous Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1 }}
            style={{ originY: 0 }}
            className="absolute left-1/2 top-0 h-full w-[4px]
                       bg-gradient-to-b from-fuchsia-500 via-purple-500 to-fuchsia-500
                       -translate-x-1/2"
          />

          {/* Items */}
          <div className="space-y-20">
            {educationData.map((item, index) => (
              <TimelineItem
                key={item.degree}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
