export default function Eyebrow({
  num,
  children,
}: {
  num?: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow flex items-center gap-3">
      {num && <span className="num">{num}</span>}
      <span>{children}</span>
    </p>
  );
}
