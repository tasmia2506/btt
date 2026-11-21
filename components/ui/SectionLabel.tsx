export default function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`font-oswald uppercase tracking-[0.3em] text-xs font-semibold mb-4 ${
        light ? "text-ice/70" : "text-moss"
      }`}
    >
      {children}
    </p>
  );
}
