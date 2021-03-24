import React from "react";

import {Edit, SimpleForm, TextInput, SelectInput, required} from "react-admin";

import {defaultStyle} from "../../../style";

const SectionServicesEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm redirect={false}>
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
                    multiline
                />
                <SelectInput
                    label="Размер"
                    source="type"
                    choices={[
                        {key: "small", title: "Маленький"},
                        {key: "big", title: "Большой"},
                    ]}
                    optionValue="key"
                    optionText="title"
                    style={defaultStyle}
                    validate={[required()]}
                />
            </SimpleForm>
        </Edit>
    );
};

export default SectionServicesEdit;
