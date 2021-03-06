import React from "react";

import {Create, SimpleForm, TextInput, required} from "react-admin";

import {defaultStyle} from "../../../style";

const GoodsTimetypeCreate = (props) => {
    return (
        <Create {...props} title="Новый тип времени">
            <SimpleForm>
                <TextInput
                    source="title"
                    label="Название"
                    validate={[required()]}
                    style={defaultStyle}
                />
                <TextInput
                    source="key"
                    label="Ключ"
                    validate={[required()]}
                    style={defaultStyle}
                />
            </SimpleForm>
        </Create>
    );
};

export default GoodsTimetypeCreate;
