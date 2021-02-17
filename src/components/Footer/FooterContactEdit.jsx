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

const FooterContactEdit = (props) => {
    const style = {width: "75%"};

    return (
        <Edit {...props}>
            <SimpleForm toolbar={<UserEditToolbar />}>
                <TextInput
                    label="Email"
                    source="email"
                    style={style}
                    validate={[required()]}
                    multiline
                />
                <TextInput
                    label="Телефон"
                    source="phone"
                    style={style}
                    validate={[required()]}
                />
                <TextInput
                    label="Адрес"
                    source="adres"
                    style={style}
                    validate={[required()]}
                    multiline
                />
            </SimpleForm>
        </Edit>
    );
};

export default FooterContactEdit;
