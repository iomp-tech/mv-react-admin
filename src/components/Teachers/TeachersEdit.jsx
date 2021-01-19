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

const TeachersEdit = (props) => {
    const style = {width: "75%"};

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput
                    source="name"
                    label="Имя и Фамилия преподавателя"
                    validate={[required()]}
                    style={style}
                />
                <BooleanInput
                    label="Добавлять в главную секцию"
                    source="main"
                    style={style}
                />
                <FormDataConsumer>
                    {({formData}) =>
                        formData.main && (
                            <>
                                <TextInput
                                    source="type"
                                    label="Должность"
                                    validate={[required()]}
                                    style={style}
                                />
                                <RichTextInput
                                    source="description"
                                    label="Описание"
                                    validate={[required()]}
                                    style={style}
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
                    style={style}
                >
                    <PreviewImage source="src" />
                </ImageInput>
            </SimpleForm>
        </Edit>
    );
};

export default TeachersEdit;
