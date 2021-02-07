import React from "react";

import {
    Create,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    required,
} from "react-admin";

const FooterSocialCreate = (props) => {
    const style = {width: "75%"};

    return (
        <Create {...props} title="Новая соц.сеть">
            <SimpleForm>
                <TextInput
                    label="Заголовок"
                    source="title"
                    style={style}
                    validate={[required()]}
                />
                <TextInput
                    label="Ссылка"
                    source="href"
                    style={style}
                    validate={[required()]}
                    multiline
                />
                <ImageInput
                    source="icon"
                    label="Иконка (максимальный размер 2МБ)"
                    maxSize="2000000"
                    accept="image/*"
                    placeholder={<p>Перетащите файл сюда</p>}
                    style={style}
                >
                    <ImageField source="src" />
                </ImageInput>
            </SimpleForm>
        </Create>
    );
};

export default FooterSocialCreate;
