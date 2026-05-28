import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, viewportOnce } from "./motion";

export default function ScrollReveal({
  children,
  className,
  as = "div",
  stagger = true,
  variants,
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={viewportOnce}
      variants={variants ?? (stagger ? staggerContainer : undefined)}
    >
      {children}
    </Component>
  );
}
