"use client";

import { motion } from "framer-motion";
import { useState, useEffect, type ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";

export function MotionDiv(props: HTMLMotionProps<"div">) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={props.className}>{props.children as ReactNode}</div>;
  }

  return <motion.div {...props} />;
}

export function MotionA(props: HTMLMotionProps<"a">) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <a
        className={props.className}
        href={props.href as string}
        target={props.target as string}
        rel={props.rel}
      >
        {props.children as ReactNode}
      </a>
    );
  }

  return <motion.a {...props} />;
}
