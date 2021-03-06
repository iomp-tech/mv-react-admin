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

import {defaultStyle, arrayInputStyle} from "../../style";

const InstituteCreate = (props) => {
    return (
        <Create {...props} title="Новый раздел">
            <SimpleForm>
                <TextInput
                    label="Имя"
                    source="title"
                    style={defaultStyle}
                    validate={[required()]}
                />
                <ArrayInput
                    source="content"
                    label="Содержание и подразделы"
                    style={defaultStyle}
                    validate={[required()]}
                >
                    <SimpleFormIterator>
                        <TextInput
                            source="title"
                            label="Имя подраздела"
                            validate={[required()]}
                            style={defaultStyle}
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
                                        style={arrayInputStyle}
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
                                        style={arrayInputStyle}
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
