import React from "react";

import myDataProfider from "../.././myDataProvider";

import {
    Edit,
    SimpleForm,
    SimpleFormIterator,
    TextInput,
    ArrayInput,
    ImageInput,
    SelectArrayInput,
    SelectInput,
    required,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";

import {PreviewImage} from ".././";

import {defaultStyle, arrayInputStyle} from "../../style";

const PostsEdit = (props) => {
    const [categories, setCategories] = React.useState([]);
    const [teachers, setTeachers] = React.useState([]);
    const [postType, setPostType] = React.useState([]);

    React.useEffect(() => {
        myDataProfider
            .getList("categories", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setCategories(data);
            });
        myDataProfider
            .getList("teachers", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setTeachers(data);
            });
        myDataProfider
            .getList("postType", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setPostType(data);
            });
    }, []);

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput
                    source="title"
                    label="Имя поста"
                    validate={[required()]}
                    style={defaultStyle}
                />
                <TextInput
                    source="smallDescription"
                    label="Краткое описание"
                    validate={[required()]}
                    style={defaultStyle}
                    multiline
                />
                {categories.length ? (
                    <SelectInput
                        label="Категория"
                        source="category"
                        choices={categories}
                        optionValue="key"
                        optionText="title"
                        validate={[required()]}
                        style={defaultStyle}
                    />
                ) : null}
                {postType.length ? (
                    <SelectInput
                        label="Тип"
                        source="type"
                        choices={postType}
                        optionValue="key"
                        optionText="title"
                        validate={[required()]}
                        style={defaultStyle}
                    />
                ) : null}
                {teachers.length ? (
                    <SelectArrayInput
                        label="Автор"
                        source="auth"
                        choices={teachers}
                        validate={[required()]}
                        style={defaultStyle}
                    />
                ) : null}
                <ImageInput
                    source="thumb"
                    label="Изображение (максимальный размер 2МБ)"
                    maxSize="2000000"
                    accept="image/*"
                    placeholder={<p>Перетащите файл сюда</p>}
                    validate={[required()]}
                    style={defaultStyle}
                >
                    <PreviewImage source="src" />
                </ImageInput>
                <ArrayInput
                    source="block"
                    label="Блоки"
                    style={defaultStyle}
                    validate={[required()]}
                >
                    <SimpleFormIterator>
                        <TextInput
                            source="title"
                            label="Имя блока"
                            validate={[required()]}
                            style={arrayInputStyle}
                        />
                        <RichTextInput
                            label="Тело блока"
                            source="body"
                            validate={[required()]}
                            style={arrayInputStyle}
                        />
                        <ImageInput
                            source="thumbBlock"
                            label="Изображение (максимальный размер 2МБ)"
                            maxSize="2000000"
                            accept="image/*"
                            placeholder={<p>Перетащите файл сюда</p>}
                            style={arrayInputStyle}
                        >
                            <PreviewImage source="src" />
                        </ImageInput>
                    </SimpleFormIterator>
                </ArrayInput>

                <TextInput
                    label="Произвольный JavaScript код (вверх страницы)"
                    source="postPageTopJs"
                    style={defaultStyle}
                    multiline
                />
                <TextInput
                    label="Теги HTML (вверх страницы)"
                    source="postPageTopHtml"
                    style={defaultStyle}
                    multiline
                />
                <TextInput
                    label="Произвольный JavaScript код (вниз страницы)"
                    source="postPageBottomJs"
                    style={defaultStyle}
                    multiline
                />
                <TextInput
                    label="Теги HTML (вниз страницы)"
                    source="postPageBottomHtml"
                    style={defaultStyle}
                    multiline
                />
            </SimpleForm>
        </Edit>
    );
};

export default PostsEdit;
