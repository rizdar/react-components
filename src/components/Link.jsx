import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

export default function Link({ to, children, className, activeClassname }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames('text-blue-500', 'cursor-pointer', className, currentPath === to && activeClassname);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} onClick={handleClick}>
      {children}
    </a>
  );
}
