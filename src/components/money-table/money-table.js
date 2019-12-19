import React from 'react';
import './money-table.css';
import MoneyTableHeader from './money-table-header';
import MoneyTableRow from './money-table-row';

export default class MoneyTable extends React.Component {

    state = {
        data: {
            platinum: {
                label: "Platinum",
                value: 2,
                unit: "pp"
            },
            gold: {
                label: "Gold",
                value: 2670,
                unit: "gp"
            },
            silver: {
                label: "Silver",
                value: 500,
                unit: "sp"
            },
            copper: {
                label: "Copper",
                value: 0,
                unit: "cp"
            }
        }
    };

    render() {
        const { platinum, gold, silver, copper } = this.state.data;

        const totalAmount = 10 * platinum.value +
            gold.value +
            0.1 * silver.value +
            0.01 * copper.value;

        return (
            <div className="table-responsive">
                <table className="money-table table">
                    <MoneyTableHeader totalAmount={totalAmount} />
                    <tbody>
                        <MoneyTableRow {...platinum} />
                        <MoneyTableRow {...gold} />
                        <MoneyTableRow {...silver} />
                        <MoneyTableRow {...copper} />
                    </tbody>
                </table>
            </div>
        );
    }

}




