import React from "react";

import {
    Edit,
    SimpleForm,
    TextInput,
	ImageInput,
	BooleanInput,
	ImageField,
	FormDataConsumer,
    required,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

import {PreviewImage} from ".././";

import {defaultStyle} from "../../style";

const TeachersEdit = (props) => {
    return (
        <Edit {...props}>
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

export default TeachersEdit;
