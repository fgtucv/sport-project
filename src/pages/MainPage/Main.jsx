import { Container } from "../../components/Container/Container"

export const Main = () => {
    return <main>
        <Container>
            <ul>
                <li>
                    <h2>Всі</h2>
                </li>
                <li>
                    <h2>Падель</h2>
                </li>
                <li>
                    <h2>Теніс</h2>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Пн</h3>
                    <h3>20</h3>
                </li>
                <li>
                    <h3>Вт</h3>
                    <h3>21</h3>
                </li>
                <li>
                    <h3>Ср</h3>
                    <h3>22</h3>
                </li>
                <li>
                    <h3>Чт</h3>
                    <h3>23</h3>
                </li>
            </ul>
            <ul>
                <li>
                    <div>
                        <ul>
                            <li>
                                <span>Падель</span>
                            </li>
                            <li>
                                <span>Level 4+</span>
                            </li>
                        </ul>
                        <div>
                            <time datetime="18:30">18:30</time>
                            <time datetime="PT90M">90 хв</time>
                        </div>
                        <address>
                            Padel Oviedo, Корт 3
                        </address>
                    </div>
                    <div></div>
                    <div></div>
                </li>
            </ul>
        </Container>
    </main>
}