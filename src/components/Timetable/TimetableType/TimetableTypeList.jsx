import React from "react";

import {List, Datagrid, TextField, ChipField, EditButton} from "react-admin";

const TimetableTypeList = (props) => {
    return (
        <List {...props} pagination={false} title="Типы расписания">
            <Datagrid>
                <EditButton />
                <TextField label="ID" source="id" sortable={false} />
                <TextField label="Имя" source="title" sortable={false} />
                <ChipField label="Ключ" source="key" sortable={false} />
            </Datagrid>
        </List>
    );
};

export default TimetableTypeList;
