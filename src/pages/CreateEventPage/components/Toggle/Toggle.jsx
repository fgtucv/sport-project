import styles from "./Toggle.module.scss";

export default function Toggle({ checked, onChange, label, hint }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={styles.toggle}
    >
      <span>
        <span className={styles.label}>{label}</span>
        {hint && <span className={styles.hint}>{hint}</span>}
      </span>
      <span className={[styles.track, checked && styles.on].filter(Boolean).join(" ")}>
        <span className={styles.thumb} />
      </span>
    </button>
  );
}
