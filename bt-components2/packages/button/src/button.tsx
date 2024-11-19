import React from 'react';
import styles from './button.module.scss';

export type ButtonProps = {
    /**
     * Adds a className to the root element for additional styling from the parent
     */
    className?: string;
};

export const Button: React.FC<ButtonProps> = ({
    className,
}) => {
    return (
        <div className={styles.container}>
            Button component
        </div>
    );
};
