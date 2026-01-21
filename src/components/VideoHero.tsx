import BackgroundVideo from "@/assets/background.mp4";
import type { ReactNode } from "react";

interface VideoHeroProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  kicker?: string;
  className?: string;
  heightClass?: string;
  children?: ReactNode;
}

const VideoHero = ({
  title,
  highlight,
  subtitle,
  kicker,
  className,
  heightClass = "py-20",
  children,
}: VideoHeroProps) => {
  return (
    <section
      className={["relative overflow-hidden text-white", heightClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ pointerEvents: "none" }}
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        {kicker && (
          <p className="mb-3 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
            {kicker}
          </p>
        )}
        <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
          {title}
          {highlight && (
            <span className="text-yellow-300"> {highlight}</span>
          )}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6 flex justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
};

export default VideoHero;
