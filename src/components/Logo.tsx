interface Props { link?: boolean }

export default function Logo({ link = true }: Props) {
  const content = (
    <span>
      <span className="logo__ec">ec</span>onverse
    </span>
  );

  return link ? (
    <a className="logo" href="/" aria-label="Econverse - página inicial">
      {content}
    </a>
  ) : (
    <span className="logo" role="img" aria-label="Econverse">
      {content}
    </span>
  );
}