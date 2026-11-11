import styles from './SnackForm.module.css';
import { useState, useEffect } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  useEffect(() => {
    if (isEditing) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
      setTouched({ name: false, rating: false });
    } else {
      setName('');
      setRating('');
      setTouched({ name: false, rating: false });
    }
  }, [editingSnack]);

  function handleSubmit(e) {
    e.preventDefault();
    if (validateName && validateRating) {
      if (isEditing) {
        updateSnack(editingSnack.id, name, rating);
      } else {
        addSnack(name, rating);
        setName('');
        setRating('');
        setTouched({ name: false, rating: false });
      }
    } else {
      setTouched({ name: true, rating: true });
    }
  }

  function handleName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleRating(e) {
    e.preventDefault();
    setRating(e.target.value);
  }

  function handleFocusName() {
    setTouched((prev) => ({ ...prev, name: true }));
  }

  function handleFocusRating() {
    setTouched((prev) => ({ ...prev, rating: true }));
  }

  function validateName() {
    if (name.trim() === '') {
      return false;
    } else {
      return true;
    }
  }

  function validateRating() {
    if (rating === '') {
      return false;
    } else {
      return true;
    }
  }

  function getNameError() {
    if (!validateName() && touched.name) {
      return 'Snack Name not set!';
    }
  }

  function getRatingError() {
    if (validateRating && touched.rating) {
      return 'Rating not selected!';
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          onFocus={handleFocusName}
          className={styles['field-input']}
          placeholder="Enter snack name"
        />
      </div>
      {!validateName() && touched.name && (
        <div className={styles.error}>{getNameError()}</div>
      )}

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={handleRating}
          onFocus={handleFocusRating}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
        />
      </div>
      {!validateRating() && touched.rating && (
        <div className={styles.error}>{getRatingError()}</div>
      )}

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
