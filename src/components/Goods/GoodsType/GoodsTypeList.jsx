import React from "react";

import {List, Datagrid, TextField, EditButton} from "react-admin";

const GoodsTypeList = (props) => {
    return (
        <List {...props} pagination={false} title="Типы товаров">
            <Datagrid>
                <TextField label="ID" source="id" sortable={false} />
                <TextField label="Имя" source="title" sortable={false} />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default GoodsTypeList;
