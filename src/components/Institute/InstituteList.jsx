import React from "react";

import {List, Datagrid, TextField, EditButton} from "react-admin";

const InstituteList = (props) => {
    return (
        <List {...props} pagination={false} title="О Институте">
            <Datagrid>
                <EditButton />
                <TextField
                    label="Имя раздела"
                    source="title"
                    sortable={false}
                />
            </Datagrid>
        </List>
    );
};

export default InstituteList;
