import React from "react";

import {
    Edit,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    required,
} from "react-admin";

const FooterSocialEdit = (props) => {
    const style = {width: "75%"};
	
    return (
        <Edit {...props} title="Изменить соц.сеть">
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
        </Edit>
    );
};

export default FooterSocialEdit;
