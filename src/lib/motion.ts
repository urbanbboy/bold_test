export const textVariant = (delay = 0) => ({
    hidden: {
        y: -50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.25,
            delay: delay,
        },
    },
});

export const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 1) => ({
    hidden: {
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0, // сдвиг влево или вправо
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0, // сдвиг по вертикали
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: "easeOut",
        },
    },
});

