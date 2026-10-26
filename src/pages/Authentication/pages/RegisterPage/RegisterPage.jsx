// pages/RegisterPage.jsx
import { AuthLayout } from '../../components/AuthLauot/AuthLauot.jsx';
import { BrandPanel } from '../../components/BrandPanel/BrandPanel';
import { RegisterForm } from '../../components/RegisterFrom/RegisterFrom.jsx';

export default function RegisterPage () {
  return (
    <AuthLayout
      brand={
        <BrandPanel
          title="Твоя команда"
          accent="чекає на корті."
          text="Створіть акаунт і знаходьте ігри поруч за хвилину."
        />
      }
    >
      <RegisterForm />
    </AuthLayout>
  );
}