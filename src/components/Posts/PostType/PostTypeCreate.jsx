import React from "react";

import {Create, SimpleForm, TextInput, required} from "react-admin";

import { defaultStyle } from "../../../style";

const PostTypeCreate = (props) => {
    return (
        <Create {...props} title="Новый тип поста">
            <SimpleForm>
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
        </Create>
    );
};

export default PostTypeCreate;
