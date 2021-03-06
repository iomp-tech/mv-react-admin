import React from "react";

import {
    List,
    Datagrid,
    TextField,
    EditButton,
    SelectField,
} from "react-admin";

const SectionServicesList = (props) => {
    return (
        <List {...props} pagination={false} title="Инфо о образовании">
            <Datagrid>
                <TextField label="ID" source="id" sortable={false} />
                <TextField label="Заголовок" source="title" sortable={false} />
                <TextField
                    label="Описание"
                    source="description"
                    sortable={false}
                />
                <SelectField
                    label="Размер"
                    source="type"
                    optionValue="key"
                    optionText="title"
                    sortable={false}
                    choices={[
                        {key: "small", title: "Маленький"},
                        {key: "big", title: "Большой"},
                    ]}
                />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default SectionServicesList;
