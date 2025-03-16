type SubjectProps = {
  active: boolean;
  title: string;
  onClick: () => void;
};

export default function Subject({ active, title, onClick }: SubjectProps) {
  return (
    <p onClick={onClick} className={active ? "active" : undefined}>
      {title}
    </p>
  );
}
