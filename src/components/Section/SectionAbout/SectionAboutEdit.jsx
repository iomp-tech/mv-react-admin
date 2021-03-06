import React from "react";

import {Edit, SimpleForm, TextInput, required} from "react-admin";

import {defaultStyle} from "../../../style";

const SectionAboutEdit = (props) => {
    return (
        <Edit {...props}>
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
        </Edit>
    );
};

export default SectionAboutEdit;
