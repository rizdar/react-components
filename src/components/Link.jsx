import classNames from 'classnames';

import { useContext } from 'react';
import NavigationContext from '../context/navigation';

export default function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const classes = classNames('text-blue-500');

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
