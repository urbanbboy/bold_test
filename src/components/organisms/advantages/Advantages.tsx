"use client";

import React from "react";
import styles from "./Advantages.module.scss";
import Image from "next/image";
import bgCircle from "../../../../public/advantageCircle.png";
import { useGetCompanyAchievementsQuery } from "@/api/Company";

// 🔹 Анимация контейнера (плавное появление всех элементов)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Появление элементов с задержкой
        },
    },
};

// 🔹 Анимация для заголовка и подзаголовка
const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// 🔹 Анимация кружков (сначала увеличиваются, затем появляются)
const circleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

interface Smm {
    isSmm?: boolean;
}

const advantagesStatic = [
    {
        title: "15+",
        sub_title: "Успешные SMM-компании",
    },
    {
        title: "600%",
        sub_title:
            "ROI от рекламы:",
    },
    {
        title: "80%",
        sub_title:
            "Средний рост заявок клиентов:",
    },
    {
        title: "1.5+",
        sub_title:
            "Количество просмотров органического контента в млн:",
    },
];

export const Advantages: React.FC<Smm> = ({ isSmm = false }) => {

    const { data } = useGetCompanyAchievementsQuery()
    const advantages = isSmm ? advantagesStatic : data?.items;

    return (
        <div className={styles.advantages__container}>

            {/* 🔹 Заголовок и подзаголовок */}
            <div className={styles.advantages__text} style={isSmm ? { marginLeft: 0, maxWidth: '25rem' } : undefined}>
                <h3 className={styles.advantages__title} style={isSmm ? { color: '#AAADB5', fontSize: '24px' } : undefined}>{isSmm ? 'Цифры которые говорят сами за себя' : data?.title}</h3>
                <span style={isSmm ? { display: 'none' } : undefined} className={styles.advantages__subtitle}>
                    {data?.sub_title}
                </span>
            </div>

            <div
                className={styles.advantages__circles}
            >
                <div className={styles.advantages__col1}>
                    {advantages && advantages.slice(0, 2).map((advantage, index) => (
                        <div
                            key={index}
                            className={styles.advantages__circle}
                        >
                            <Image
                                src={bgCircle}
                                width={422}
                                height={422}
                                alt={`circle${index + 1}`}
                                className={styles.image}
                                loading="lazy"
                            />
                            <div className={`${styles.advantages__cirlceText} `} style={isSmm ? { flexDirection: 'column-reverse' } : undefined}>
                                <span className={styles.advantages__circleTitle}>
                                    {advantage.title}
                                </span>
                                <span className={styles.advantages__circleSubtitle}>
                                    {advantage.sub_title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.advantages__col2}>
                    {advantages && advantages.slice(2, 4).map((advantage, index) => (
                        <div
                            key={index + 2}
                            className={styles.advantages__circle}
                        >
                            <Image
                                src={bgCircle}
                                width={422}
                                height={422}
                                alt={`circle${index + 3}`}
                                className={styles.image}
                                loading="lazy"
                            />
                            <div className={`${styles.advantages__cirlceText}`} style={isSmm ? { flexDirection: 'column-reverse' } : undefined}>
                                <span className={styles.advantages__circleTitle}>
                                    {advantage.title}
                                </span>
                                <span className={styles.advantages__circleSubtitle}>
                                    {advantage.sub_title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
