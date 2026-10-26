// pages/LoginPage.jsx
import { AuthLayout } from '../../components/AuthLauot/AuthLauot.jsx';
import { BrandPanel } from '../../components/BrandPanel/BrandPanel.jsx';
import { LoginForm } from '../../components/LoginForm/LoginForm.jsx';

export default function LoginPage() {
    return (
        <AuthLayout
            brand={
                <BrandPanel
                    title="Грай. Змагайся."
                    accent="Перемагай."
                    text="Усі ваші матчі, події та статистика — в одному місці."
                />
            }
        >
            <LoginForm />
        </AuthLayout>
    );
}