import React from "react";

import {
    Create,
    SimpleForm,
    TextInput,
    BooleanInput,
    ImageInput,
	ImageField,
    FormDataConsumer,
    required,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

import {defaultStyle} from "../../style";

const TeachersCreate = (props) => {
    return (
        <Create {...props} title="Новый преподаватель">
            <SimpleForm>
                <TextInput
                    source="name"
                    label="Имя и Фамилия преподавателя"
                    validate={[required()]}
                    style={defaultStyle}
                />
                <BooleanInput
                    label="Добавлять в главную секцию"
                    source="main"
                    style={defaultStyle}
                />
                <FormDataConsumer>
                    {({formData}) =>
                        formData.main && (
                            <>
                                <TextInput
                                    source="type"
                                    label="Должность"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <RichTextInput
                                    source="description"
                                    label="Описание"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                            </>
                        )
                    }
                </FormDataConsumer>
                <ImageInput
                    source="avatar"
                    label="Аватар (максимальный размер 2МБ)"
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

export default TeachersCreate;
