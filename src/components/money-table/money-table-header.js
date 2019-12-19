import React from 'react';

const MoneyTableHeader = ({ totalAmount }) => {
    return (
        <thead>
            <tr>
                <th>Money</th>
                <th className="align-right">{totalAmount + "GP"}</th>
                <th className="align-right small-width"></th>
                <th className="align-right small-width"></th>
            </tr>
        </thead>
    );
}

export default MoneyTableHeader;