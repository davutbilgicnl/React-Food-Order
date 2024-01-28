export default function Button({ children, textOnly, cssClassName, ...props }) {
  const cssStyles = textOnly ? `text-button ${cssClassName}` : "button";
  return (
    <button className={cssStyles} {...props}>
      {children}
    </button>
  );
}
