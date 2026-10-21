// components/AuthLayout/AuthLayout.jsx
import { Container } from '../../../../components/Container/Container.jsx';
import style from './AuthLayuot.module.scss';

export const AuthLayout = ({ brand, children }) => {
  return (
    <section className={style.layout}>
      <Container className={style.container}>
        {brand}
        {children}
      </Container>
    </section>
  );
}