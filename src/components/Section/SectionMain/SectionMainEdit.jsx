import React from "react";

import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    SaveButton,
    Toolbar,
} from "react-admin";

import {defaultStyle} from "../../../style";

const UserEditToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton />
    </Toolbar>
);

const SectionMainEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm toolbar={<UserEditToolbar />}>
                <TextInput
                    label="Заголовок"
                    source="title"
                    style={defaultStyle}
                    validate={[required()]}
                />
                <TextInput
                    label="Описание"
                    source="description"
                    style={defaultStyle}
                    validate={[required()]}
                />
                <TextInput
                    label="Текст на кнопке"
                    source="buttonText"
                    style={defaultStyle}
                    validate={[required()]}
                />
                <TextInput
                    label="Ссылка на кнопке"
                    source="buttonHref"
                    style={defaultStyle}
                    validate={[required()]}
                />
            </SimpleForm>
        </Edit>
    );
};

export default SectionMainEdit;
