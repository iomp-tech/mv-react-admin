import React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    required,
} from "react-admin";

const GoodsCreate = (props) => {
	const style = {width: "75%"};

    return (
        <Create {...props} title="Новая категория">
            <SimpleForm>
                <TextInput
                    source="title"
                    label="Имя категории"
                    validate={[required()]}
                    style={style}
                />
                <TextInput
                    source="key"
                    label="Ключ категории для системы (Только англиский язык. Пример: psychology)"
                    validate={[required()]}
                    style={style}
                />
                <ImageInput
                    source="thumb"
                    label="Изображение (максимальный размер 2МБ)"
                    maxSize="2000000"
                    accept="image/*"
                    placeholder={<p>Перетащите файл сюда</p>}
                    validate={[required()]}
                    style={style}
                >
                    <ImageField source="src" />
                </ImageInput>
            </SimpleForm>
        </Create>
    );
};

export default GoodsCreate;
