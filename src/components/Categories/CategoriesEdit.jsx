import React from "react";

import {
    Edit,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    required,
} from "react-admin";

import {PreviewImage} from ".././";

import {defaultStyle} from "../../style";

const CategoriesEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput
                    label="Название"
                    source="title"
                    style={defaultStyle}
                    validate={[required()]}
                />
                <TextInput
                    label="Ключ категории для системы (Только англиский язык. Пример: psychology)"
                    source="key"
                    style={defaultStyle}
                    validate={[required()]}
                />
                <ImageInput
                    source="thumb"
                    label="Изображение (максимальный размер 2МБ)"
                    maxSize="2000000"
                    accept="image/*"
                    placeholder={<p>Перетащите файл сюда</p>}
                    validate={[required()]}
                    style={defaultStyle}
                >
                    <PreviewImage source="src" />
                </ImageInput>
            </SimpleForm>
        </Edit>
    );
};

export default CategoriesEdit;
