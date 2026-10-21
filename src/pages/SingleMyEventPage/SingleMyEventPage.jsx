// import { useUserStore } from "../../contexts/useUserStore";
// import { useParams } from "react-router-dom";

// export const SingleMyEventPage = () => {
//     const [searchParam, setSearchParams] = useSearchParams();
//     const { user, isLoading, error } = useUserStore()
//     const parms = useParams();

//     if (isLoading && !user) {
//         return <h1>Завантаження...</h1>
//     } else if (!user?.games || user?.games == []) {
//         return <h1>Немає ігор</h1>
//     }

//             // console.log(user)

//     const game = user?.games.find((game) => game.id === parms.eventId);

//     console.log(game)

//     return (
//         <div>
//             <h2>{game.sportType}</h2>
//             <h3>{game.date}</h3>
//             <h3>{game.hostId}</h3>
//         </div>
//     )
// };