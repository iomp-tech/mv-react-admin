import React from "react";

import {
    List,
    Datagrid,
    TextField,
    BooleanField,
    EditButton,
    ImageField,
    Filter,
    TextInput,
} from "react-admin";

const UsersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Email" source="email" alwaysOn />
    </Filter>
);

const UsersList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Пользователи"
            filters={<UsersFilter />}
        >
            <Datagrid>
                <EditButton />
                <ImageField label="Аватар" source="avatar" sortable={false} />
                <TextField
                    label="ID на АвтоВебОфис на магазине №1"
                    source="id_awo_shop1"
                    sortable={false}
                />
                <TextField
                    label="ID на АвтоВебОфис на магазине №2"
                    source="id_awo_shop2"
                    sortable={false}
                />
                <TextField label="Имя" source="first_name" sortable={false} />
                <TextField
                    label="Фамилиля"
                    source="last_name"
                    sortable={false}
                />
                <TextField label="Email" source="email" sortable={false} />
                <BooleanField
                    label="Подтвержден"
                    source="confirmed"
                    sortable={false}
                />
            </Datagrid>
        </List>
    );
};

export default UsersList;
