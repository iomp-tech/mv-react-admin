import React from "react";

import {
    Edit,
    SimpleForm,
    TextInput,
	ArrayInput,
	SimpleFormIterator,
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

const FooterContactEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm redirect={false} toolbar={<UserEditToolbar />}>
                <TextInput
                    label="Email"
                    source="email"
                    style={defaultStyle}
                    validate={[required()]}
                    multiline
                />
                <ArrayInput
                    source="phones"
                    label="Телефоны"
                    style={defaultStyle}
                    validate={[required()]}
                >
                    <SimpleFormIterator>
                        <TextInput
                            label="Телефон"
                            source="phone"
                            style={defaultStyle}
                            validate={[required()]}
                        />
                    </SimpleFormIterator>
                </ArrayInput>

                <TextInput
                    label="Адрес"
                    source="adres"
                    style={defaultStyle}
                    validate={[required()]}
                    multiline
                />
            </SimpleForm>
        </Edit>
    );
};

export default FooterContactEdit;
