import { useAuth } from "../../contexts/useAuth";
import { useParams, useSearchParams, useLocation, Link } from "react-router-dom";

export default function SingleMyEventPage(state) {
    const location = useLocation();
    // const [searchParam, setSearchParams] = useSearchParams();
    const { user } = useAuth();
    const parms = useParams();

    if (!user) return <h1>Помилка</h1>;

    const game = user?.games.find((game) => game.id === parms.eventId);

    if (!game) return <h1>Гра недоступна</h1>;

    const fromLocation = location?.state?.from || "/my-events"

    return (
        <div>
            <Link to={fromLocation}>Назад</Link>
            <h2>{game.sportType}</h2>
            <h3>{game.date}</h3>
            <h3>{game.hostId}</h3>
        </div>
    )
};