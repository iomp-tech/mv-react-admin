import React from "react";

import {List, Datagrid, TextField, EditButton} from "react-admin";

const GoodsTypeList = (props) => {
    return (
        <List {...props} pagination={false} title="Типы товаров">
            <Datagrid>
                <EditButton />
                <TextField label="ID" source="id" sortable={false} />
                <TextField label="Имя" source="title" sortable={false} />
            </Datagrid>
        </List>
    );
};

export default GoodsTypeList;
