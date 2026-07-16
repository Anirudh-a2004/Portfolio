import { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type RevealVariant = "fade-up" | "fade" | "scale" | "slide-right";

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

const hidden: Record<RevealVariant, CSSProperties> = {
  "fade-up": { opacity: 0, transform: "translate3d(0, 16px, 0)" },
  fade: { opacity: 0 },
  scale: { opacity: 0, transform: "scale(0.96)" },
  "slide-right": { opacity: 0, transform: "translate3d(24px, 0, 0)" },
};

const shown: CSSProperties = { opacity: 1, transform: "translate3d(0,0,0) scale(1)" };

const Reveal = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  className,
  as: Tag = "div",
}: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const style: CSSProperties = {
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
    ...(visible ? shown : hidden[variant]),
  };

  const Component = Tag as any;
  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
};

export default Reveal;
