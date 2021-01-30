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

    const style = {width: "75%"};

    return (
        <Create {...props} title="Новый пост">
            <SimpleForm>
                <TextInput
                    source="title"
                    label="Имя поста"
                    validate={[required()]}
                    style={style}
                />
                <TextInput
                    source="smallDescription"
                    label="Краткое описание"
                    validate={[required()]}
                    style={style}
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
                        style={style}
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
                        style={style}
                    />
                ) : null}
                {teachers.length ? (
                    <SelectArrayInput
                        label="Автор"
                        source="auth"
                        choices={teachers}
                        validate={[required()]}
                        style={style}
                    />
                ) : null}
                <ImageInput
                    source="thumb"
                    label="Изображение (максимальный размер 2МБ)"
                    maxSize="2000000"
                    accept="image/*"
                    placeholder={<p>Перетащите файл сюда</p>}
                    validate={[required()]}
                    style={style}
                >
                    <ImageField source="src" />
                </ImageInput>
                <ArrayInput
                    source="block"
                    label="Блоки"
                    style={style}
                    validate={[required()]}
                >
                    <SimpleFormIterator>
                        <TextInput
                            source="title"
                            label="Имя блока"
                            validate={[required()]}
                            style={style}
                        />
                        <RichTextInput
                            label="Тело блока"
                            source="body"
                            validate={[required()]}
                            style={style}
                        />
                        <ImageInput
                            source="thumbBlock"
                            label="Изображение (максимальный размер 2МБ)"
                            maxSize="2000000"
                            accept="image/*"
                            placeholder={<p>Перетащите файл сюда</p>}
                            style={style}
                        >
                            <ImageField source="src" title="title" />
                        </ImageInput>
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    );
};

export default PostsCreate;
