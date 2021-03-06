import React from "react";

import {Edit, SimpleForm, TextInput} from "react-admin";

import {defaultStyle} from "../../../style";

const GoodsTimetypeEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput label="Название" source="title" style={defaultStyle} />
                <TextInput label="Ключ" source="key" style={defaultStyle} />
            </SimpleForm>
        </Edit>
    );
};

export default GoodsTimetypeEdit;
