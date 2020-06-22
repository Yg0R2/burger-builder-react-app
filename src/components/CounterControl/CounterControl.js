import React from 'react';

import styles from './CounterControl.module.css';

const counterControl = (props) => (
    <div className={styles.CounterControl} onClick={props.clicked}>
        {props.label}
    </div>
);

export default counterControl;