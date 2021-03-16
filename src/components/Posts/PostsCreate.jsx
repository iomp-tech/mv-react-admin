import React from "react";

import myDataProfider from "../.././myDataProvider";

import {
    Create,
    SimpleForm,
    SimpleFormIterator,
    TextInput,
    ArrayInput,
    ImageInput,
    ImageField,
    SelectArrayInput,
    SelectInput,
    required,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";

import {defaultStyle, arrayInputStyle} from "../../style";

const PostsCreate = (props) => {
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
        <Create {...props} title="Новый пост">
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
                    <ImageField source="src" />
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
                            <ImageField source="src" title="title" />
                        </ImageInput>
                    </SimpleFormIterator>
                </ArrayInput>

                <TextInput
                    label="Произвольный JavaScript код"
                    source="postPageJs"
                    style={defaultStyle}
                    multiline
                />
                <TextInput
                    label="Теги HTML"
                    source="postPageHtml"
                    style={defaultStyle}
                    multiline
                />
            </SimpleForm>
        </Create>
    );
};

export default PostsCreate;
