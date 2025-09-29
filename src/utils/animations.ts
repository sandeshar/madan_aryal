// Centralized animation configs for framer-motion
export const heroLeft = {
    initial: { x: -200, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
} as const;

export const heroRight = {
    initial: { x: 200, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
} as const;

export const fadeUp = {
    initial: { translateY: 100 },
    whileInView: { translateY: 0 },
    transition: { duration: 0.3 },
    viewport: { once: true, amount: 0.2 },
} as const;

export const slideLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.2 },
} as const;

export const slideRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.2 },
} as const;

export const btnInteraction = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
} as const;
