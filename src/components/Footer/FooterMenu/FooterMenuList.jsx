import React from "react";

import {List, Datagrid, TextField, UrlField, EditButton} from "react-admin";

const FooterMenuList = (props) => {
    return (
        <List {...props} pagination={false} title="Футер (подвал)">
            <Datagrid>
                <TextField label="ID" source="id" sortable={false} />
                <TextField label="Заголовок" source="title" sortable={false} />
                <UrlField label="Ссылка" source="href" sortable={false} />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default FooterMenuList;
