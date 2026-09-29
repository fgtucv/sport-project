import { useContext, useEffect, useState } from "react";

import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { Sorted } from "../../components/Sorted/Sorted";
import { MyEventItem } from "./components/MyEventItem/MyEventItem.jsx";
import { Pagination } from "../../components/Pagination/Pagination.jsx";
import { NoData } from "../../components/NoData/NoData.jsx";

import { LoginedUserContext } from '../../contexts/UserContext/UserContext.jsx';

import style from "./MyEvent.module.scss";

const text = {
    title: "Ваші ігри",
    subtitle: "Переглядайте свої ігри та керуйте ними",
};

const PAGE_SIZE = 9;

export const MyEvent = () => {
    const { userData, loading } = useContext(LoginedUserContext);
    
    const [allGames, setAllGames] = useState([]);
    const [renderGames, setRenderGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getSlicedGames = (gamesList, page) => {
        const totalPages = Math.ceil(gamesList.length / PAGE_SIZE) || 1;
        const validPage = page > totalPages ? totalPages : page;
        const startIndex = (validPage - 1) * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE;

        return {
            slicedGames: gamesList.slice(startIndex, endIndex),
            validPage: validPage,
        };
    };

    useEffect(() => {
        if (userData?.games) {
            const games = userData.games;
            const { slicedGames, validPage } = getSlicedGames(games, 1);
            
            setAllGames(games);
            setRenderGames(slicedGames);
            setCurrentPage(validPage);
        }
    }, [userData]);

    const reloadApiAndState = async (newData) => {
        try {
            const userId = JSON.parse(localStorage.getItem("userId"));
            if (!userId) return;

            const patchResponse = await fetch(
                `https://6aa2acebccb3db9689a6e211.mockapi.io/user/${userId}`,
                {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...userData,
                        games: newData,
                    }),
                }
            );

            if (patchResponse.ok) {
                const { slicedGames, validPage } = getSlicedGames(newData, currentPage);

                setAllGames(newData);
                setRenderGames(slicedGames);
                setCurrentPage(validPage);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const deleteCard = (clickedCardId) => {
        const newArray = allGames.filter((game) => game.id !== clickedCardId);
        reloadApiAndState(newArray);
    };

    const paginate = (pageNumber) => {
        const { slicedGames } = getSlicedGames(allGames, pageNumber);
        setRenderGames(slicedGames);
        setCurrentPage(pageNumber);
    };

    // if (loading) {
    //     return (
    //         <section className={style.myEvent}>
    //             <Container>
    //                 <MainTitle text={text} />
    //                 <p>Завантаження ігор...</p>
    //             </Container>
    //         </section>
    //     );
    // }

    return (
        <section className={style.myEvent}>
            <Container>
                <MainTitle text={text} />
                <div className={style.myEventFilter}>
                    <ul className={style.myEventTypes}>
                        <li className={`${style.myEventType} ${style.activeType}`}>Всі</li>
                        <li className={style.myEventType}>Минулі</li>
                        <li className={style.myEventType}>Майбутні</li>
                        <li className={style.myEventType}>Чернетки</li>
                    </ul>
                    <Sorted />
                </div>

                <ul className={style.myEventGames}>
                    {renderGames.length > 0 ? (
                        renderGames.map((obj) => (
                            <MyEventItem
                                deleteCard={deleteCard}
                                key={obj.id}
                                obj={obj}
                            />
                        ))
                    ) : (
                        <NoData/>
                    )}
                </ul>

                {allGames.length > PAGE_SIZE && (
                    <Pagination
                        paginate={paginate}
                        paginateData={allGames}
                        currentPage={currentPage}
                    />
                )}
            </Container>
        </section>
    );
};