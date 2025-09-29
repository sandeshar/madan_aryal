"use client";
import { motion } from "framer-motion";
import React from "react";

type AnyObj = { [key: string]: any };

const Animated: React.FC<AnyObj> = ({ children, ...props }) => {
    return (
        <motion.div {...(props as AnyObj)}>
            {children}
        </motion.div>
    );
};

export default Animated;
