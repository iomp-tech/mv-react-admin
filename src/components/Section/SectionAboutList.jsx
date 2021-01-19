import React from "react";

import {List, Datagrid, TextField, EditButton} from "react-admin";

const SectionAboutList = (props) => {
    return (
        <List {...props} pagination={false} title="О нас">
            <Datagrid>
                <TextField label="ID" source="id" sortable={false} />
                <TextField label="Заголовок" source="title" sortable={false} />
                <TextField
                    label="Описание"
                    source="subtitle"
                    sortable={false}
                />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default SectionAboutList;
