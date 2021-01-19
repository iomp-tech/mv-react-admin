import React from "react";

import {List, Datagrid, TextField, EditButton} from "react-admin";

const InstituteList = (props) => {
    return (
        <List {...props} pagination={false} title="О Институте">
            <Datagrid>
                <TextField
                    label="Имя раздела"
                    source="title"
                    sortable={false}
                />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default InstituteList;
