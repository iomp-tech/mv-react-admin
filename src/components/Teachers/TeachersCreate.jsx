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

const TeachersCreate = (props) => {
    const style = {width: "75%"};

    return (
        <Create {...props} title="Новый преподаватель">
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
                    label="Аватар (максимальный размер 2МБ)"
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

export default TeachersCreate;
