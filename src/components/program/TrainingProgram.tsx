"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { trainingProgramData } from "@/data/Data";
import { useAppDispatch } from "@/redux/hooks";
import { toggleLightboxOpen } from "@/redux/features/lightboxSlice";
import styles from "./Training.module.css";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
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
  const dispatch = useAppDispatch();
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openModal = (program: TrainingProgram) => {
    setSelectedProgram(program);
  };

  const closeModal = () => {
    setSelectedProgram(null);
  };




  const openContactModal = () => {
    dispatch(toggleContactModalOpen());
    setSelectedProgram(null);
   
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };


  return (
    <section id="TrainingProgram">
      <div className={styles.trainingProgram10}>
        <div className={styles.container}>
          <div className={styles.sectionHeading8}>
            <div className={`${styles.row} ${styles.alignItemsCenter} ${styles.rowGapLg0} ${styles.rowGap5}`}>
              <motion.div
                className={styles.col6}
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{ once: true }}
              >
                <h2 className={`${styles.titleAnimHeader} ${styles.textWhite}`}>
                  <CustomGsapTextSplit>Our Training Programs</CustomGsapTextSplit>
                </h2>
              </motion.div>
              <motion.div
                className={styles.col4}
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{ once: true }}
              >
              </motion.div>
            </div>
          </div>
          <div className={styles.trainingProgramRowWrap}>
            {trainingProgramData.map((item) => {
              const openLightbox = () => {
                dispatch(toggleLightboxOpen(item.img));
              };
              return (
                <div
                  className={`${styles.trainingProgramCol} ${styles.fadeBottom}`}
                  key={item.id}
                >
                  <div className={styles.singleProgramBox}>
                    <div className={styles.row}>
                      <div className={styles.col6}>
                        <motion.div
                          className={styles.partImg}
                          initial={{
                            x: -50,
                            opacity: 0,
                          }}
                          whileInView={{
                            x: 0,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 1.2 + 0.2 * item.id,
                          }}
                          viewport={{ once: true }}
                        >
                          <a role="button" onClick={openLightbox}>
                            <img src={item.img} alt="image" />
                          </a>
                        </motion.div>
                      </div>
                      <div className={styles.col6}>
                        <motion.div
                          className={`${styles.partTxt} ${styles.titleAnim}`}
                          initial={{
                            x: 30,
                            opacity: 0,
                          }}
                          whileInView={{
                            x: 0,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 1 + 0.2 * item.id,
                          }}
                          viewport={{ once: true }}
                        >
                          <h3 className={`${styles.programTitle} ${styles.textWhite}`}>
                            <CustomGsapTextSplit>{item.title}</CustomGsapTextSplit>
                          </h3>
                          <div className={styles.textWhite}>
                            <CustomGsapTextSplitLine>
                              {item.shortDesc}
                            </CustomGsapTextSplitLine>
                          </div>
                          <div className={styles.buttonWrapper}>
                            <button
                              className={styles.viewBtn}
                              onClick={() => openModal(item)}
                            >
                              Learn More
                            </button>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedProgram && (
        <div
          className={styles.modal}
          onClick={closeModal}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProgram.title}</h2>
            <p>{selectedProgram.fullDesc}</p>
            <button
              className={styles.contactBtn}
              onClick={(e) => {
                e.stopPropagation();
                openContactModal();
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {isContactModalOpen && (
        <div
          className={styles.modal}
          onClick={closeContactModal}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Contact Us</h2>
            {/* Add your contact form or content here */}
            <button
              className={styles.closeBtn}
              onClick={closeContactModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrainingProgram;