import React from "react";

import {List, Datagrid, TextField, EditButton} from "react-admin";

const IntegrationPageList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Интеграции"
            bulkActionButtons={false}
        >
            <Datagrid>
                <span>Интеграции (Произвольный JavaScript код)</span>
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default IntegrationPageList;
