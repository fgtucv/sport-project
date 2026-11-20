import styles from "./Input.module.scss";

// as="input" (за замовчуванням) або as="select"
export default function Input({ as: Tag = "input", className = "", ...props }) {
  return <Tag className={[styles.input, className].join(" ")} {...props} />;
}
