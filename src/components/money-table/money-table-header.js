import React from 'react';

const MoneyTableHeader = ({ totalAmount, hidden, toggleHidden }) => {
    const actionArrow = hidden ? "down" : "up";
    return (
        <thead>
            <tr onClick={toggleHidden} >
                <th>Money</th>
                <th className="align-right">{totalAmount + "GP"}</th>
                <th className="align-right small-width"></th>
                <th className="align-right small-width">
                    <i className={`fa fa-chevron-${actionArrow}`}></i>
                </th>
            </tr>
        </thead>
    );
}

export default MoneyTableHeader;