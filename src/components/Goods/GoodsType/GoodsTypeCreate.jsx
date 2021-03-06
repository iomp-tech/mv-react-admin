import React from "react";

import {
    Create,
    SimpleForm,
    TextInput,
    required,
} from "react-admin";

import {defaultStyle} from "../../../style";

const GoodsTypeCreate = (props) => {
    return (
        <Create {...props} title="Новый тип товара">
            <SimpleForm>
                <TextInput
                    source="title"
                    label="Имя"
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

export default GoodsTypeCreate;
