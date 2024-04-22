"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Training.module.css";

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

  return (
    <section id="TrainingProgram">
      <div className="container">
        {/* Heading */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="text-white">Our Training Programs</h2>
          </div>
        </div>

        {/* Training Programs List */}
        {trainingPrograms.map((program, index) => (
          <React.Fragment key={program.id}>
            <div className="row align-items-center my-3">
              {/* Image Column */}
              <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-2' : ''} d-none d-md-block`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={program.img} alt={program.title} className="img-fluid" />
                </motion.div>
              </div>

              {/* Text Column */}
              <div className="col-12 col-md-6">
                <div className="text-white">
                  <h3>{program.title}</h3>
                  <p>{program.shortDesc}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedProgram(program)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Separator (except after the last item) */}
            {index < trainingPrograms.length - 1 && (
              <hr className={`my-4 ${styles.decorativeSeparator}`} />
            )}
          </React.Fragment>
        ))}

        {/* Modal for selected program details */}
        {selectedProgram && (
          <div className={styles.modal} onClick={() => setSelectedProgram(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h2>{selectedProgram.title}</h2>
              <p>{selectedProgram.fullDesc}</p>
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedProgram(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrainingProgram;
