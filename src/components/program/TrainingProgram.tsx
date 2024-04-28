// TrainingProgram.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Training.module.css";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { useAppDispatch } from "@/redux/hooks";

interface TrainingProgram {
  id: number;
  title: string;
  img: string;
  shortDesc: string;
  fullDesc: string;
}

interface TrainingProgramProps {
  trainingPrograms: TrainingProgram[];
}

const TrainingProgram: React.FC<TrainingProgramProps> = ({ trainingPrograms }) => {
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);
  const dispatch = useAppDispatch();

  const handlePackageSelection = (packageName: string) => {
    dispatch(toggleContactModalOpen({ packageName, packageType: 'program' }));
    setSelectedProgram(null);
  };

  return (
    <section id="TrainingProgram" className={styles.trainingProgramSection}>
      <div className="container">
        {/* Heading */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className={styles.sectionHeading}>Our Training Programs</h2>
          </div>
        </div>

        {/* Training Programs List */}
        <div className={styles.programList}>
          {trainingPrograms.map((program, index) => (
            <div key={program.id} className={styles.programItem}>
              <div className={styles.programContent}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className={styles.programTitle}>{program.title}</h3>
                  <p className={styles.programDescription}>{program.shortDesc}</p>
                  <div className={styles.buttonWrapper}>
                    <button
                      className={`${styles.button} ${styles.learnMoreButton}`}
                      onClick={() => setSelectedProgram(program)}
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </div>
              <div className={styles.programImage}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img src={program.img} alt={program.title} className={styles.programImg} />
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {selectedProgram && (
          <div className={styles.modal} onClick={() => setSelectedProgram(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h2>{selectedProgram.title}</h2>
              <p>{selectedProgram.fullDesc}</p>
              <button
                className={`${styles.button} ${styles.getStartedButton}`}
                onClick={() => handlePackageSelection(selectedProgram.title)}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrainingProgram;