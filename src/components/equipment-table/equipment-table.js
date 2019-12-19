import React from 'react';
import './equipment-table.css'
import EquipmentTableRow from './equipment-table-row';
import EquipmentTableHeader from './equipment-table-header';

export default class EquipmentTable extends React.Component {

    state = {
        data: [
            {
                name: "Grappling Hook",
                slot: "",
                value: "1gp",
                weight: "small"
            },
            {
                name: "Corset of the Vishkanya",
                slot: "body",
                value: "3000gp",
                weight: "1"
            },
            {
                name: "Steel Dragon Wing",
                slot: "",
                value: "",
                weight: "small"
            },
            {
                name: "Thieves' Tools, Masterwork",
                slot: "",
                value: "100gp",
                weight: "small"
            }
        ]
    };

    render() {
        const { data } = this.state;
        const content = data.map((elem) => {
            return <EquipmentTableRow {...elem} />
        });

        return (
            <div className="table-responsive">
                <table className="equipment-table table">
                    <EquipmentTableHeader />
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
        );
    }

}



