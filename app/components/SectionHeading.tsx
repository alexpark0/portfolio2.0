import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12 flex items-center gap-4">
      <span className="font-mono text-sm text-blue-bright">{index}</span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <span className="h-px flex-1 bg-gradient-to-r from-border-subtle to-transparent" />
    </Reveal>
  );
}
