import React from 'react'

import {Edit, SimpleForm, TextInput, required, Toolbar, SaveButton} from "react-admin";

const UserEditToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton />
    </Toolbar>
);

const FormSubcsribeEdit = (props) => {
	const style = { width: "75%" };
	
	return (
        <Edit {...props}>
            <SimpleForm toolbar={<UserEditToolbar />}>
                <TextInput
                    label="ID группы подписчиков на которую надо подписать"
                    source="id_awo"
                    validate={[required()]}
                    style={style}
                />
            </SimpleForm>
        </Edit>
    );
}

export default FormSubcsribeEdit
