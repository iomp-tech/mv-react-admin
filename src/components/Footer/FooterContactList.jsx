import React from "react";

import {List, Datagrid, TextField, UrlField, EmailField, EditButton} from "react-admin";

const FooterContactList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Контакты"
            bulkActionButtons={false}
        >
            <Datagrid>
                <TextField label="ID" source="id" sortable={false} />

                <EmailField label="Email" source="email" sortable={false} />
                <TextField label="Телефон" source="phone" sortable={false} />
                <TextField label="Адрес" source="adres" sortable={false} />

                <EditButton />
            </Datagrid>
        </List>
    );
};

export default FooterContactList;
