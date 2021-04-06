import React from "react";

import myDataProfider from "../.././myDataProvider";

import {
    Create,
    SimpleForm,
    FormDataConsumer,
    TextInput,
    SelectInput,
    BooleanInput,
    SelectArrayInput,
    ImageInput,
    ImageField,
    required,
} from "react-admin";

import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

import {DateTimeInput} from "react-admin-date-inputs2";

import {defaultStyle, arrayInputStyle} from "../../style";

const GoodsCreate = (props) => {
    const [categories, setCategories] = React.useState([]);
    const [timetype, setTimetype] = React.useState([]);
    const [teachers, setTeachers] = React.useState([]);
    const [teachersSection, setTeachersSection] = React.useState([]);
    const [type, setType] = React.useState([]);
    const [goods, setGoods] = React.useState([]);
    const [selectedDate, handleDateChange] = React.useState(new Date());

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
            .getList("teachers", {
                pagination: {page: 1},
                sort: {order: "ASC"},
                filter: {main: true},
            })
            .then(({data}) => {
                setTeachersSection(data);
            });
        myDataProfider
            .getList("goodsType", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setType(data);
            });

        myDataProfider
            .getList("goods", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setGoods(data);
            });
    }, []);

    const blocks = [
        {title: "Главная 1", key: "main1"},
        {title: "Главная 2", key: "main2"},
        {title: "Квадраты", key: "section-squares"},
        {title: "Слайдер с текстом", key: "slider-text"},
        {title: "Состав продукта", key: "composition-product"},
        {title: "Преподаватели", key: "teachers"},
        {title: "Отзывы (фото)", key: "feedback-photos"},
        {title: "Отзывы (видео)", key: "feedback-videos"},
        {title: "Товары", key: "goods"},
    ];

    return (
        <Create {...props} title="Новый товар">
            <SimpleForm>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                    <FormDataConsumer>
                        {({formData}) => (
                            <>
                                <TextInput
                                    source="id_awo"
                                    label="ID товара на АвтоВебОфис"
                                    type="number"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="title"
                                    label="Название товара"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <BooleanInput
                                    label="Дорогой ли товар?"
                                    source="expensive"
                                />
                                {formData.expensive && (
                                    <TextInput
                                        source="href"
                                        label="Ссылка на лендинг страницу"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )}
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
                                {type.length ? (
                                    <SelectInput
                                        label="Тип"
                                        source="type"
                                        choices={type}
                                        optionValue="key"
                                        optionText="title"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                ) : null}
                                <TextInput
                                    source="time"
                                    label="Время прохождения"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                {timetype.length ? (
                                    <SelectInput
                                        label="Тип времени"
                                        source="timeType"
                                        choices={timetype}
                                        optionValue="key"
                                        optionText="title"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                ) : null}
                                {teachers.length ? (
                                    <SelectArrayInput
                                        label="Автор"
                                        validate={[required()]}
                                        source="auth"
                                        choices={teachers}
                                        style={defaultStyle}
                                    />
                                ) : null}
                                <TextInput
                                    source="searchTags"
                                    label="Теги для поиска"
                                    validate={[required()]}
                                    style={defaultStyle}
                                    multiline
                                />
                                <BooleanInput
                                    label="Добавлять в главную секцию"
                                    source="section"
                                    style={defaultStyle}
                                />
                                <BooleanInput
                                    label="Скидка на товар"
                                    source="salebool"
                                />
                                {formData.salebool && (
                                    <>
                                        <TextInput
                                            source="sale"
                                            label="Сумма скидки"
                                            type="number"
                                            validate={[required()]}
                                            style={defaultStyle}
                                        />
                                    </>
                                )}
                                <TextInput
                                    source="price"
                                    label="Полная цена со скидкой или полная цена"
                                    type="number"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                {formData.salebool && (
                                    <TextInput
                                        source="priceOld"
                                        label="Цена без скидки"
                                        type="number"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )}
                                {formData.expensive && (
                                    <TextInput
                                        source="expensiveText"
                                        label="Текст в цене у дорого товара"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )}
                                <BooleanInput
                                    label="Виден ли товар?"
                                    source="visibility"
                                />
                                <ImageInput
                                    source="thumb"
                                    label="Изображение (максимальный размер 2МБ)"
                                    maxSize="2000000"
                                    accept="image/*"
                                    placeholder={<p>Перетащите файл сюда</p>}
                                    style={defaultStyle}
                                >
                                    <ImageField source="src" />
                                </ImageInput>

                                <TextInput
                                    label="Произвольный JavaScript код (вверх страницы)"
                                    source="shopPageTopJs"
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    label="Теги HTML (вверх страницы)"
                                    source="shopPageTopHtml"
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    label="Произвольный JavaScript код (вниз страницы)"
                                    source="shopPageBottomJs"
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    label="Теги HTML (вниз страницы)"
                                    source="shopPageBottomHtml"
                                    style={defaultStyle}
                                    multiline
                                />

                                <div
                                    style={{
                                        display: "flex",
                                        ...defaultStyle,
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: "18px",
                                            fontFamily: "sans-serif",
                                            paddingTop: "7px",
                                            paddingRight: "15px",
                                            color: "#ccc",
                                        }}
                                    >
                                        http://iomp.ru/shop/pages/
                                    </p>

                                    <TextInput
                                        source="url"
                                        label="Ссылка на Лендинг страницу"
                                        style={defaultStyle}
                                    />
                                </div>
                            </>
                        )}
                    </FormDataConsumer>
                </MuiPickersUtilsProvider>
            </SimpleForm>
        </Create>
    );
};

export default GoodsCreate;
