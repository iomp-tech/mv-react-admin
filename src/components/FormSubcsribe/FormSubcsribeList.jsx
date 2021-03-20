import React from "react";

import {List, Datagrid, TextField, EditButton} from "react-admin";

const FormSubcsribeList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Рассылка института"
            bulkActionButtons={false}
        >
            <Datagrid>
                <EditButton />
                <TextField
                    label="ID группы подписчиков на которую надо подписать"
                    source="id_awo"
                    sortable={false}
                />
                <TextField
                    label="Значения атрибута 'action' в теге '<form>'"
                    source="action"
                    sortable={false}
                />
                <TextField
                    label="Значения атрибута 'value' в теге '<input>' с 'name=formId'"
                    source="formId"
                    sortable={false}
                />
                <TextField
                    label="Значения атрибута 'value' в теге '<input>' с 'name=formVc'"
                    source="formVc"
                    sortable={false}
                />
            </Datagrid>
        </List>
    );
};

export default FormSubcsribeList;
