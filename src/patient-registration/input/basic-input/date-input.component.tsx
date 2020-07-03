import React from 'react';
import { useField } from 'formik';
import styles from './../input.css';

interface DateInputProps {
  name: string;
}

export const DateInput: React.FunctionComponent<DateInputProps> = ({ name }) => {
  const [field, meta] = useField(name);

  return (
    <main className={styles.field}>
      <input
        className={`omrs-input-outlined ${meta.touched && meta.error ? styles.errorInput : null} ${styles.dateInput}`}
        type="date"
        {...field}
        value={field.value !== null ? field.value : ''}
      />
      {meta.touched && meta.error ? (
        <div className={`omrs-type-body-small ${styles.errorMessage}`}>{meta.error}</div>
      ) : null}
    </main>
  );
};
