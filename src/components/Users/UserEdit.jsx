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

const UserEdit = (props) => {
    const style = {width: "75%"};

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput
                    label="Имя"
                    source="first_name"
                    style={style}
                />
                <TextInput
                    label="Фамилия"
                    source="last_name"
                    style={style}
                />
                <TextInput
                    label="Email"
                    source="email"
                    style={style}
                />
                <TextInput
                    label="Пароль"
                    source="password"
                    style={style}
                />
                <BooleanInput
                    label="Подтвержден"
                    source="confirmed"
                    style={style}
                />
                <ImageInput
                    source="avatar"
                    label="Аватар"
                    accept="image/*"
                    placeholder={<p>Перетащите файл сюда</p>}
                    style={style}
                >
                    <PreviewImage source="src" />
                </ImageInput>
            </SimpleForm>
        </Edit>
    );
};

export default UserEdit;
