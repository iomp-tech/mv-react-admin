import React from "react";

import {
    List,
    Datagrid,
    ArrayField,
    TextField,
    EmailField,
    EditButton,
} from "react-admin";

const FooterContactList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Контакты"
            bulkActionButtons={false}
        >
            <Datagrid>
				<EditButton />
				
                <TextField label="ID" source="id" sortable={false} />

                <EmailField label="Email" source="email" sortable={false} />

                <ArrayField source="phones" label="Телефоны" sortable={false}>
                    <Datagrid>
                        <TextField source="phone" label="" sortable={false} />
                    </Datagrid>
                </ArrayField>

                <TextField label="Адрес" source="adres" sortable={false} />
            </Datagrid>
        </List>
    );
};

export default FooterContactList;
