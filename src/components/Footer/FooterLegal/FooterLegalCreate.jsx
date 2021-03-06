import React from "react";

import {Create, SimpleForm, TextInput, required} from "react-admin";

import {defaultStyle} from "../../../style";

const FooterLegalCreate = (props) => {
    return (
        <Create {...props} title="Новая юр. информация">
            <SimpleForm>
                <TextInput
                    label="Строка"
                    source="string"
                    style={defaultStyle}
                    validate={[required()]}
                    multiline
                />
            </SimpleForm>
        </Create>
    );
};

export default FooterLegalCreate;
