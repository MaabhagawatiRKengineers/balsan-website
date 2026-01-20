import React from "react";

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<Props> = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
};

export default Section;
