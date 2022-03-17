import React from 'react';

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <nav>
            <ul className="mt-2 flex-center">
                {pageNumber.map(number => (
                    <li key={number}>
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;