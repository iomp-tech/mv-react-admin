import React from "react";

import {
    Create,
    SimpleForm,
    FormDataConsumer,
    TextInput,
    ArrayInput,
    SimpleFormIterator,
    ImageInput,
    ImageField,
    required,
    BooleanInput,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";

const InstituteCreate = (props) => {
    const style = {width: "75%"};

    return (
        <Create {...props} title="Новый раздел">
            <SimpleForm>
                <TextInput
                    label="Имя"
                    source="title"
                    style={style}
                    validate={[required()]}
                />
                <ArrayInput
                    source="content"
                    label="Содержание и подразделы"
                    style={style}
                    validate={[required()]}
                >
                    <SimpleFormIterator>
                        <TextInput
                            source="title"
                            label="Имя подраздела"
                            validate={[required()]}
                            style={style}
                        />
                        <BooleanInput
                            label="Есть ли файл?"
                            source="fileBoolean"
                        />
                        <FormDataConsumer>
                            {({scopedFormData, getSource}) =>
                                scopedFormData && scopedFormData.fileBoolean ? (
                                    <ImageInput
                                        source={getSource("file")}
                                        label="Документы"
                                        placeholder={
                                            <p>Перетащите файл сюда</p>
                                        }
                                        validate={[required()]}
                                        style={style}
                                    >
                                        <ImageField
                                            source="src"
                                            title="title"
                                        />
                                    </ImageInput>
                                ) : (
                                    <RichTextInput
                                        source={getSource("text")}
                                        label="Текст"
                                        validate={[required()]}
                                        style={style}
                                    />
                                )
                            }
                        </FormDataConsumer>
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    );
};

export default InstituteCreate;
