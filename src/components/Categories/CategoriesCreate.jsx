import React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    required,
} from "react-admin";

import {defaultStyle} from "../../style";

const CategoriesCreate = (props) => {
    return (
        <Create {...props} title="Новая категория">
            <SimpleForm>
                <TextInput
                    source="title"
                    label="Имя категории"
                    validate={[required()]}
                    style={defaultStyle}
                />
                <TextInput
                    source="key"
                    label="Ключ категории для системы (Только англиский язык. Пример: psychology)"
                    validate={[required()]}
                    style={defaultStyle}
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
                    <ImageField source="src" />
                </ImageInput>
            </SimpleForm>
        </Create>
    );
};

export default CategoriesCreate;
