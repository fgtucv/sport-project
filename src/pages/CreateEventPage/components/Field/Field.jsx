import styles from "./Field.module.scss";

export default function Field({ label, icon: Icon, children }) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>
        {Icon && <Icon size={14} />}
        {label}
      </span>
      {children}
    </label>
  );
}
