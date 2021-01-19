import React from "react";

import myDataProfider from "../.././myDataProvider";

import {
    Edit,
    SimpleForm,
    TextInput,
    BooleanInput,
    required,
    FormDataConsumer,
    SelectArrayInput,
    AutocompleteArrayInput,
    ReferenceArrayInput,
    SelectInput,
    ImageInput,
    ImageField,
} from "react-admin";

import {PreviewImage} from ".././";

const GoodsEdit = (props) => {
    const [categories, setCategories] = React.useState([]);
    const [timetype, setTimetype] = React.useState([]);
    const [teachers, setTeachers] = React.useState([]);
    const [type, setType] = React.useState([]);

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
            .getList("goodsTimetype", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setTimetype(data);
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
            .getList("goodsType", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setType(data);
            });
    }, []);

    const style = {width: "75%"};

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput
                    source="id_awo"
                    label="ID товара на АвтоВебОфис"
                    type="number"
                    validate={[required()]}
                    style={style}
                />
                <TextInput
                    source="title"
                    label="Название товара"
                    validate={[required()]}
                    style={style}
                />
                <BooleanInput label="Дорогой ли товар?" source="expensive" />
                <FormDataConsumer>
                    {({formData}) =>
                        formData.expensive && (
                            <TextInput
                                source="href"
                                label="Ссылка на лендинг страницу"
                                validate={[required()]}
                                style={style}
                            />
                        )
                    }
                </FormDataConsumer>
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
                {type.length ? (
                    <SelectInput
                        label="Тип"
                        source="type"
                        choices={type}
                        optionValue="key"
                        optionText="title"
                        validate={[required()]}
                        style={style}
                    />
                ) : null}
                <TextInput
                    source="time"
                    label="Время прохождения"
                    validate={[required()]}
                    style={style}
                />
                {timetype.length ? (
                    <SelectInput
                        label="Тип времени"
                        source="timeType"
                        choices={timetype}
                        optionValue="key"
                        optionText="title"
                        validate={[required()]}
                        style={style}
                    />
                ) : null}
                {teachers.length ? (
                    <SelectArrayInput
                        label="Автор"
                        validate={[required()]}
                        source="auth"
                        choices={teachers}
                        style={style}
                    />
                ) : null}
                <TextInput
                    source="searchTags"
                    label="Теги для поиска"
                    validate={[required()]}
                    style={style}
                    multiline
                />
                <BooleanInput
                    label="Добавлять в главную секцию"
                    source="section"
                    style={style}
                />
                <BooleanInput label="Скидка на товар" source="salebool" />
                <FormDataConsumer>
                    {({formData}) =>
                        formData.salebool && (
                            <>
                                <TextInput
                                    source="sale"
                                    label="Сумма скидки"
                                    type="number"
                                    validate={[required()]}
                                    style={style}
                                />
                            </>
                        )
                    }
                </FormDataConsumer>
                <TextInput
                    source="price"
                    label="Полная цена со скидкой или полная цена"
                    type="number"
                    validate={[required()]}
                    style={style}
                />
                <FormDataConsumer>
                    {({formData}) =>
                        formData.salebool && (
                            <TextInput
                                source="priceOld"
                                label="Цена без скидки"
                                type="number"
                                validate={[required()]}
                                style={style}
                            />
                        )
                    }
                </FormDataConsumer>
                <FormDataConsumer>
                    {({formData}) =>
                        formData.expensive && (
                            <TextInput
                                source="expensiveText"
                                label="Текст в цене у дорого товара"
                                validate={[required()]}
                                style={style}
                            />
                        )
                    }
                </FormDataConsumer>
                <ImageInput
                    source="thumb"
                    label="Изображение (максимальный размер 2МБ)"
                    maxSize="2000000"
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

export default GoodsEdit;
