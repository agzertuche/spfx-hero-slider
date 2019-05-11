import * as React from 'react';
import { ControlProps } from './ControlsProps';
import styles from './Controls.module.scss';

const Controls: React.StatelessComponent<ControlProps> = (props) => {
    return (
        <nav className={styles.controls}>
            <button type="button" className={styles.arrowLeft} ></button>
            <button type="button" className={styles.arrowRight} ></button>
        </nav>
    );
};

export default Controls;