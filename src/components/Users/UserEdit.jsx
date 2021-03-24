import React from "react";

import {
    Edit,
    SimpleForm,
    TextInput,
    ImageInput,
    BooleanInput,
    required,
} from "react-admin";

import {PreviewImage} from ".././";

import {defaultStyle} from "../../style";

const UserEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm redirect={false}>
                <TextInput
                    label="Имя"
                    source="first_name"
                    style={defaultStyle}
                />
                <TextInput
                    label="Фамилия"
                    source="last_name"
                    style={defaultStyle}
                />
                <TextInput label="Email" source="email" style={defaultStyle} />
                <TextInput
                    label="Пароль"
                    source="password"
                    style={defaultStyle}
                />
                <BooleanInput
                    label="Подтвержден"
                    source="confirmed"
                    style={defaultStyle}
                />
                <ImageInput
                    source="avatar"
                    label="Аватар"
                    accept="image/*"
                    placeholder={<p>Перетащите файл сюда</p>}
                    style={defaultStyle}
                >
                    <PreviewImage source="src" />
                </ImageInput>
            </SimpleForm>
        </Edit>
    );
};

export default UserEdit;
