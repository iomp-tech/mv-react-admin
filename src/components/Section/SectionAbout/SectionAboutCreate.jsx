import React from "react";

import {Create, SimpleForm, TextInput, required} from "react-admin";

import {defaultStyle} from "../../../style";

const SectionAboutCreate = (props) => {
    return (
        <Create {...props} title='Новый блок в секции "О нас"'>
            <SimpleForm>
                <TextInput
                    label="Заголовок"
                    source="title"
                    style={defaultStyle}
                    validate={[required()]}
                />
                <TextInput
                    label="Описание"
                    source="subtitle"
                    style={defaultStyle}
                    validate={[required()]}
                    multiline
                />
            </SimpleForm>
        </Create>
    );
};

export default SectionAboutCreate;
