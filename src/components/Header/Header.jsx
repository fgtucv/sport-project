import { Container } from "../Container/Container.jsx"

export const Header = () => {
    return <header class="header">
        <Container>
            <ul>
                <li>
                    <a>Доступні події</a>
                </li>
                <li>
                    <a>МІй профіль</a>
                </li>
                <li>
                    <a>Створити подію</a>
                </li>
            </ul>
            <div class="header__icon-div">
                <svg>
                    <use></use>
                </svg>
                <svg>
                    <use></use>
                </svg>
            </div>
        </Container>
    </header>
};