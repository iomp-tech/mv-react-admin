import React from "react";

import {Edit, SimpleForm, TextInput, required} from "react-admin";

import {defaultStyle} from "../../../style";

const FooterLegalEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput
                    label="Строка"
                    source="string"
                    style={defaultStyle}
                    validate={[required()]}
                    multiline
                />
            </SimpleForm>
        </Edit>
    );
};

export default FooterLegalEdit;
