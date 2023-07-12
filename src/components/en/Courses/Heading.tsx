interface Props {
  children?: string | JSX.Element | JSX.Element[];
  pageSlug: string;
}

const Heading = ({ children, pageSlug }: Props) => {
  return (
    pageSlug == "faculty_members" ? (
      <h4>
        {children}
      </h4>
    ) : (
      <h3>
        {children}
      </h3>
    )
  );
}

export default Heading;
