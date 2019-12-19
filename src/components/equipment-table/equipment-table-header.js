import React from 'react';

const EquipmentTableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                {/* <th>Slot</th> */}
                <th>Value</th>
                <th>Weight</th>
                <th className="align-right small-width"></th>
                <th className="align-right small-width"></th>
            </tr>
        </thead>
    );
}

export default EquipmentTableHeader;