import type { ReactNode } from "react";

export default function SectionHeading({ no, children }: { no: string; children: ReactNode }) {
  return (
    <div className="heading reveal">
      <p className="label">{no}</p>
      <h2>{children}</h2>
    </div>
  );
}
