import React from "react";

import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    SaveButton,
    Toolbar,
} from "react-admin";

const UserEditToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton />
    </Toolbar>
);

const SectionMainEdit = (props) => {
    const style = {width: "75%"};

    return (
        <Edit {...props}>
            <SimpleForm toolbar={<UserEditToolbar />}>
                <TextInput
                    label="Заголовок"
                    source="title"
                    style={style}
                    validate={[required()]}
                />
                <TextInput
                    label="Описание"
                    source="description"
                    style={style}
                    validate={[required()]}
                />
                <TextInput
                    label="Текст на кнопке"
                    source="buttonText"
                    style={style}
                    validate={[required()]}
                />
                <TextInput
                    label="Ссылка на кнопке"
                    source="buttonHref"
                    style={style}
                    validate={[required()]}
                />
            </SimpleForm>
        </Edit>
    );
};

export default SectionMainEdit;
