import classnames from 'classnames';

export default function Panel({ children, classNamesProps, ...rest }) {
  const finalClassName = classnames('border rounded p-3 shadow bg-white w-full', classNamesProps);
  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
}
