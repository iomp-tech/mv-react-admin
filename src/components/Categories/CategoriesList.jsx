import React from "react";
import {
    List,
    Datagrid,
    TextField,
    ChipField,
    ImageField,
    EditButton,
} from "react-admin";

const CategoriesList = (props) => {
    return (
        <List {...props} pagination={false} title="Категории">
            <Datagrid>
                <EditButton />
                <TextField label="ID" source="id" sortable={false} />
                <ImageField
                    label="Изображение"
                    source="thumb"
                    sortable={false}
                />
                <TextField label="Имя" source="title" sortable={false} />
                <ChipField
                    label="Ключ категории"
                    source="key"
                    sortable={false}
                />
            </Datagrid>
        </List>
    );
};

export default CategoriesList;
