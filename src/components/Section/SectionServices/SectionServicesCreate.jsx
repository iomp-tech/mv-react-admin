import React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    SelectInput,
    required,
} from "react-admin";

import {defaultStyle} from "../../../style";

const SectionServicesCreate = (props) => {
    return (
        <Create {...props} title='Новый блок в секции "Инфо о образовании"'>
            <SimpleForm>
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
        </Create>
    );
};

export default SectionServicesCreate;
