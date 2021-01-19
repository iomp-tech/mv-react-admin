import React from "react";

import {List, Datagrid, TextField, EditButton} from "react-admin";

const FormSubcsribeList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Форма подписки"
            bulkActionButtons={false}
        >
            <Datagrid>
                <TextField
                    label="ID группы подписчиков на которую надо подписать"
                    source="id_awo"
                    sortable={false}
                />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default FormSubcsribeList;
