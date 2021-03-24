import React from "react";

import {Edit, SimpleForm, TextInput, required} from "react-admin";

import {defaultStyle} from "../../../style";

const PostTypeEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm redirect={false}>
                <TextInput
                    source="title"
                    label="Имя типа"
                    validate={[required()]}
                    style={defaultStyle}
                />
                <TextInput
                    source="key"
                    label="Ключ типа"
                    validate={[required()]}
                    style={defaultStyle}
                />
            </SimpleForm>
        </Edit>
    );
};

export default PostTypeEdit;
