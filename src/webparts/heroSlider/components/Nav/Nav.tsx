import * as React from 'react';
import { NavProps } from './NavProps';
import styles from './Nav.module.scss';
import PropTypes from 'prop-types';

const Nav: React.StatelessComponent<NavProps> = ({
  navItems,
  activeIndex,
  onItemSelected,
}) => {
  return (
    <nav className={styles.nav}>
      {navItems.map((item, index) => (
        <button
          className={[
            styles.navItem,
            index === activeIndex ? styles.active : '',
          ].join(' ')}
          type="button"
          key={item.id}
          onClick={() => onItemSelected(index)}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
};

Nav.defaultProps = {
  navItems: [],
};

Nav.propTypes = {
  navItems: PropTypes.array,
};

export default Nav;
