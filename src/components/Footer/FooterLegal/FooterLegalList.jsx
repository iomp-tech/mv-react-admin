import React from "react";

import {List, Datagrid, TextField, EditButton} from "react-admin";

const FooterLegalList = (props) => {
    return (
        <List {...props} pagination={false} title="Футер (подвал)">
            <Datagrid>
                <EditButton />
                <TextField label="ID" source="id" sortable={false} />
                <TextField label="Строка" source="string" sortable={false} />
            </Datagrid>
        </List>
    );
};

export default FooterLegalList;
