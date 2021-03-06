import React from "react";

import {Create, SimpleForm, TextInput, required} from "react-admin";

import {defaultStyle} from "../../../style";

const FooterMenuCreate = (props) => {
    return (
        <Create {...props} title="Новая ссылка в футере (подвале)">
            <SimpleForm>
                <TextInput
                    label="Заголовок"
                    source="title"
                    style={defaultStyle}
                    validate={[required()]}
                />
                <TextInput
                    label="Ссылка"
                    source="href"
                    style={defaultStyle}
                    validate={[required()]}
                    multiline
                />
            </SimpleForm>
        </Create>
    );
};

export default FooterMenuCreate;
