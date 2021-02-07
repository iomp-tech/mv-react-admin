import React from "react";

import {
    List,
    Datagrid,
    TextField,
    EditButton,
    ImageField,
    BooleanField,
} from "react-admin";

const TeachersList = (props) => {
    return (
        <List {...props} pagination={false} title="Все преподаватели">
            <Datagrid>
                <TextField label="ID" source="id" sortable={false} />
                <ImageField label="Аватар" source="avatar" sortable={false} />
                <TextField
                    label="Имя, Фамилия"
                    source="name"
                    sortable={false}
                />
                <TextField
                    label="Должность"
                    source="type"
                    sortable={false}
                />
                <BooleanField label="Главная секция" source="main" />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default TeachersList;
