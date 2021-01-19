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

                <UrlField label="Facebook" source="facebook" sortable={false} />
                <UrlField label="Instagram" source="inst" sortable={false} />
                <UrlField label="VK" source="vk" sortable={false} />
                <UrlField label="YouTube" source="youtube" sortable={false} />
                <UrlField label="Telegram" source="telegram" sortable={false} />
                <EmailField label="Email" source="email" sortable={false} />

                <TextField label="Телефон" source="phone" sortable={false} />
                <TextField label="Адрес" source="adres" sortable={false} />

                <EditButton />
            </Datagrid>
        </List>
    );
};

export default FooterContactList;
