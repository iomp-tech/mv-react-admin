import React from "react";

import {
    Edit,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    required,
} from "react-admin";

import {defaultStyle} from "../../../style";

const FooterSocialEdit = (props) => {
    return (
        <Edit {...props} title="Изменить соц.сеть">
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
                <ImageInput
                    source="icon"
                    label="Иконка (максимальный размер 2МБ)"
                    maxSize="2000000"
                    accept="image/*"
                    placeholder={<p>Перетащите файл сюда</p>}
                    style={defaultStyle}
                >
                    <ImageField source="src" />
                </ImageInput>
            </SimpleForm>
        </Edit>
    );
};

export default FooterSocialEdit;
