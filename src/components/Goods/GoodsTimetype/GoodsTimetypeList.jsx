import React from "react";
import {List, Datagrid, TextField, ChipField, EditButton} from "react-admin";

const GoodsTimetypeList = (props) => {
    return (
        <List {...props} pagination={false} title="Тип времени товаров">
            <Datagrid>
                <EditButton />
                <TextField label="ID" source="id" sortable={false} />
                <TextField label="Название" source="title" sortable={false} />
                <ChipField label="Ключ" source="key" sortable={false} />
            </Datagrid>
        </List>
    );
};

export default GoodsTimetypeList;
