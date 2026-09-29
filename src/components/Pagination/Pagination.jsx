import { PaginationIcon } from "../Icons/Icons.jsx";
import style from "./Pagination.module.scss";

export const Pagination = ({ paginate, paginateData = [], currentPage }) => {
    const pageNumbers = paginateData.length > 0 ? Math.ceil(paginateData.length / 9) : 0;

    return (
        <div className={style.pagination}>
            <button 
                className={`${style.paginationButton} ${style.paginationPrevButton}`} 
                type="button" 
                onClick={() => {
                    if (currentPage > 1) {
                        paginate(currentPage - 1);
                    }
                }}
            >
                <PaginationIcon />
            </button>
            <ul className={style.paginationList}>
                {Array.from({ length: pageNumbers }, (_, i) => {
                    const pageNumber = i + 1;

                    return (
                        <li key={`page-${pageNumber}`}>
                            <button 
                                className={`${style.paginationPageButton} ${currentPage === pageNumber ? style.activePage : ""}`} 
                                type="button" 
                                onClick={() => paginate(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <button 
                className={`${style.paginationButton} ${style.paginationNextButton}`} 
                type="button" 
                onClick={() => {
                    if (currentPage < pageNumbers) {
                        paginate(currentPage + 1);
                    }
                }}
            >
                <PaginationIcon />
            </button>
        </div>
    );
};