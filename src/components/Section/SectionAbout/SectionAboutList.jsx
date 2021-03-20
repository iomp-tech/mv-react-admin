import React from "react";

import {List, Datagrid, TextField, EditButton} from "react-admin";

const SectionAboutList = (props) => {
    return (
        <List {...props} pagination={false} title="О нас">
            <Datagrid>
                <EditButton />
                <TextField label="ID" source="id" sortable={false} />
                <TextField label="Заголовок" source="title" sortable={false} />
                <TextField
                    label="Описание"
                    source="subtitle"
                    sortable={false}
                />
            </Datagrid>
        </List>
    );
};

export default SectionAboutList;
