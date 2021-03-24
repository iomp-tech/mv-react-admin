import React from "react";

import {
    Edit,
    SimpleForm,
    FormDataConsumer,
    TextInput,
    ArrayInput,
    SimpleFormIterator,
    ImageInput,
    BooleanInput,
    required,
} from "react-admin";

import PreviewImage from "../All/PreviewImage";

import RichTextInput from "ra-input-rich-text";

import {defaultStyle, arrayInputStyle} from "../../style";

const InstituteEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm redirect={false}>
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
                                        <PreviewImage source="src" />
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
        </Edit>
    );
};

export default InstituteEdit;
