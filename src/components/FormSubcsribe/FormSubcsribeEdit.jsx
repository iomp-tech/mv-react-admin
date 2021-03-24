import React from "react";

import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    Toolbar,
    SaveButton,
} from "react-admin";

import {defaultStyle} from "../../style";

const UserEditToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton />
    </Toolbar>
);

const FormSubcsribeEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm redirect={false} toolbar={<UserEditToolbar />}>
                <TextInput
                    label="ID группы подписчиков на которую надо подписать"
                    source="id_awo"
                    validate={[required()]}
                    style={defaultStyle}
                />
                <TextInput
                    source="action"
                    label="Введите значения атрибута 'action' в теге '<form>'"
                    validate={[required()]}
                    style={defaultStyle}
                />
                <TextInput
                    source="formId"
                    label="Введите значения атрибута 'value' в теге '<input>' с 'name=formId'"
                    validate={[required()]}
                    style={defaultStyle}
                />
                <TextInput
                    source="formVc"
                    label="Введите значения атрибута 'value' в теге '<input>' с 'name=formVc'"
                    validate={[required()]}
                    style={defaultStyle}
                />
            </SimpleForm>
        </Edit>
    );
};

export default FormSubcsribeEdit;
