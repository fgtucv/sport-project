import { Logo } from '../../../../components/Logo/Logo.jsx';

import style from './BrandPanel.module.scss';

export const BrandPanel = ({ title, accent, text }) => {
    return (
        <div className={style.brand}>
            <Logo className={style.brandLogo} />
            <h1 className={style.brandTitle}>
                {title}
                <span className={style.brandAccent}>{accent}</span>
            </h1>
            <p className={style.brandText}>{text}</p>
            <span className={style.brandCopy}>© 2026 PadelHub. Усі права захищено.</span>
        </div>
    );
}