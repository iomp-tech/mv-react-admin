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

const InstituteEdit = (props) => {
    const style = {width: "75%"};

    return (
        <Edit {...props}>
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
                                        <PreviewImage source="src" />
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
        </Edit>
    );
};

export default InstituteEdit;
