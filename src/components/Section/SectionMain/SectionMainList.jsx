import React from "react";

import {List, Datagrid, TextField, EditButton} from "react-admin";

const SectionMainList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Главная секция"
            bulkActionButtons={false}
        >
            <Datagrid>
                <EditButton />
                <TextField label="Заголовок" source="title" sortable={false} />
                <TextField
                    label="Описание"
                    source="description"
                    sortable={false}
                />
                <TextField
                    label="Текст на кнопке"
                    source="buttonText"
                    sortable={false}
                />
                <TextField
                    label="Ссылка на кнопке"
                    source="buttonHref"
                    sortable={false}
                />
            </Datagrid>
        </List>
    );
};

export default SectionMainList;
