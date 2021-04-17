import React from "react";

import myDataProfider from "../.././myDataProvider";

import {
    Edit,
    SimpleForm,
    FormDataConsumer,
    TextInput,
    SelectInput,
    SelectArrayInput,
    BooleanInput,
    ImageInput,
    required,
} from "react-admin";

import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

import {DateTimeInput} from "react-admin-date-inputs2";

import {PreviewImage} from ".././";

import {defaultStyle, arrayInputStyle} from "../../style";

const TimetableEdit = (props) => {
    const [type, setType] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [teachers, setTeachers] = React.useState([]);
    const [goods, setGoods] = React.useState([]);
    const [teachersSection, setTeachersSection] = React.useState([]);
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
            .getList("timetableType", {
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
        <Edit {...props}>
            <SimpleForm redirect={false}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                    <FormDataConsumer>
                        {({formData}) => (
                            <>
                                <TextInput
                                    source="subtitle"
                                    label="Надзаголовок"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="title"
                                    label="Имя"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="key"
                                    label="Ключ"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="description"
                                    label="Описание"
                                    validate={[required()]}
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    source="id_awo"
                                    label="ID группы на АвтоВебОфис"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="action"
                                    label="Введите значения атрибута 'action' в теге '<form>'"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="formId"
                                    label="Введите значения атрибута 'value' в теге '<input>' с 'name=formId'"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="formVc"
                                    label="Введите значения атрибута 'value' в теге '<input>' с 'name=formVc'"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <BooleanInput
                                    label="Авто"
                                    source="auto"
                                    style={defaultStyle}
                                />
                                {formData.auto && (
                                    <TextInput
                                        source="day"
                                        label="На сколько дней продлевается мероприятие"
                                        validate={[required()]}
                                        style={defaultStyle}
                                        type="number"
                                    />
                                )}
                                <BooleanInput
                                    label="Диапазон"
                                    source="range"
                                    style={defaultStyle}
                                />
                                {formData.range ? (
                                    <>
                                        <DateTimeInput
                                            options={{
                                                inputVariant: "outlined",
                                                format: "yyyy-MM-dd, HH:mm",
                                            }}
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            source="minDate"
                                            label="С"
                                            validate={[required()]}
                                            style={defaultStyle}
                                        />
                                        <DateTimeInput
                                            options={{
                                                inputVariant: "outlined",
                                                format: "yyyy-MM-dd, HH:mm",
                                            }}
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            source="maxDate"
                                            label="До"
                                            validate={[required()]}
                                            style={defaultStyle}
                                        />
                                    </>
                                ) : (
                                    <DateTimeInput
                                        options={{
                                            inputVariant: "outlined",
                                            format: "yyyy-MM-dd, HH:mm",
                                            clearable: true,
                                        }}
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        source="date"
                                        label="Дата и время проведения"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )}
                                {!formData.auto && (
                                    <DateTimeInput
                                        options={{
                                            inputVariant: "outlined",
                                            format: "yyyy-MM-dd, HH:mm",
                                        }}
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        source="dateDelete"
                                        label="Дата и время удаления"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )}
                                <BooleanInput
                                    label="Видимо ли мероприятие?"
                                    source="visibility"
                                    style={defaultStyle}
                                />
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
                                {teachers.length ? (
                                    <SelectArrayInput
                                        label="Автор"
                                        validate={[required()]}
                                        source="auth"
                                        choices={teachers}
                                        style={defaultStyle}
                                    />
                                ) : null}
                                <BooleanInput
                                    label="Подписка через VK"
                                    source="vk"
                                    style={defaultStyle}
                                />
                                <FormDataConsumer>
                                    {({formData}) =>
                                        formData.vk && (
                                            <TextInput
                                                source="vkUrl"
                                                label="Ссылка VK"
                                                validate={[required()]}
                                                style={defaultStyle}
                                            />
                                        )
                                    }
                                </FormDataConsumer>
                                <BooleanInput
                                    label="Подписка через Telegram"
                                    source="telegram"
                                    style={defaultStyle}
                                />
                                {formData.telegram && (
                                    <TextInput
                                        source="telegramUrl"
                                        label="Ссылка Telegram"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )}
                                <BooleanInput
                                    label="Добавлять в главный слайдер"
                                    source="slider"
                                    style={defaultStyle}
                                />

                                {formData.slider && (
                                    <>
                                        <ImageInput
                                            source="thumb"
                                            label="Изображение (максимальный размер 2МБ)"
                                            maxSize="2000000"
                                            accept="image/*"
                                            placeholder={
                                                <p>Перетащите файл сюда</p>
                                            }
                                            validate={[required()]}
                                            style={defaultStyle}
                                        >
                                            <PreviewImage source="src" />
                                        </ImageInput>
                                    </>
                                )}

                                <TextInput
                                    label="Произвольный JavaScript код (вверх страницы)"
                                    source="timetablePageTopJs"
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    label="Теги HTML (вверх страницы)"
                                    source="timetablePageTopHtml"
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    label="Произвольный JavaScript код (вниз страницы)"
                                    source="timetablePageBottomJs"
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    label="Теги HTML (вниз страницы)"
                                    source="timetablePageBottomHtml"
                                    style={defaultStyle}
                                    multiline
                                />

                                <div style={{display: "flex"}}>
                                    <p
                                        style={{
                                            fontSize: "18px",
                                            fontFamily: "sans-serif",
                                            paddingTop: "7px",
                                            paddingRight: "15px",
                                            color: "#ccc",
                                        }}
                                    >
                                        https://mastervision.su/timetable/pages/
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
        </Edit>
    );
};

export default TimetableEdit;
