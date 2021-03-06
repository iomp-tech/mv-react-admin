import React from "react";

import {
    Create,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    required,
} from "react-admin";

import {defaultStyle} from "../../../style";

const FooterSocialCreate = (props) => {
    return (
        <Create {...props} title="Новая соц.сеть">
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
        </Create>
    );
};

export default FooterSocialCreate;
