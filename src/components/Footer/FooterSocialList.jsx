import React from "react";

import {
    List,
    Datagrid,
    TextField,
    UrlField,
    ImageField,
    EditButton,
} from "react-admin";

const FooterSocialList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Контакты"
            bulkActionButtons={false}
        >
            <Datagrid>
                <TextField label="ID" source="id" sortable={false} />
                <ImageField label="Иконка" source="icon" sortable={false} />
                <TextField label="Название" source="title" sortable={false} />
                <UrlField label="Ссылка" source="href" sortable={false} />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default FooterSocialList;
