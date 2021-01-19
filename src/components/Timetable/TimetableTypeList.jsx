import React from 'react';

import {List, Datagrid, TextField, ChipField, EditButton} from "react-admin";

const TimetableTypeList = (props) => {
	return (
        <List {...props} pagination={false} title="Типы расписания">
            <Datagrid>
                <TextField label="ID" source="id" sortable={false} />
                <TextField label="Имя" source="title" sortable={false} />
				<ChipField label="Ключ" source="key" sortable={false} />
				<EditButton />
            </Datagrid>
        </List>
    );
}

export default TimetableTypeList;