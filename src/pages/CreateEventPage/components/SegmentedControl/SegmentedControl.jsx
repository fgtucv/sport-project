import styles from "./SegmentedControl.module.scss";

export default function SegmentedControl({ options, value, onChange }) {
  return (
    <div className={styles.group}>
      {options.map(({ value: optValue, label, icon: Icon }) => (
        <button
          key={optValue}
          type="button"
          onClick={() => onChange(optValue)}
          className={[styles.option, value === optValue && styles.active]
            .filter(Boolean)
            .join(" ")}
        >
          {Icon && <Icon size={16} />}
          {label}
        </button>
      ))}
    </div>
  );
}
