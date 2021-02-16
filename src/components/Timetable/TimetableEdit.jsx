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
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import { DateTimeInput } from "react-admin-date-inputs2";

import {PreviewImage} from ".././";

const TimetableEdit = (props) => {
    const [type, setType] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [teachers, setTeachers] = React.useState([]);

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
            .getList("timetableType", {
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
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                    <TextInput
                        source="title"
                        label="Имя"
                        validate={[required()]}
                        style={style}
                    />
                    <TextInput
                        source="key"
                        label="Ключ"
                        validate={[required()]}
                        style={style}
                    />
                    <TextInput
                        source="description"
                        label="Описание"
                        validate={[required()]}
                        style={style}
                        multiline
                    />
                    <TextInput
                        source="id_awo"
                        label="ID группы на АвтоВебОфис"
                        validate={[required()]}
                        style={style}
                    />
                    <TextInput
                        source="action"
                        label="Введите значения атрибута 'action' в теге '<form>'"
                        validate={[required()]}
                        style={style}
                    />
                    <TextInput
                        source="formId"
                        label="Введите значения атрибута 'value' в теге '<input>' с 'name=formId'"
                        validate={[required()]}
                        style={style}
                    />
                    <TextInput
                        source="formVc"
                        label="Введите значения атрибута 'value' в теге '<input>' с 'name=formVc'"
                        validate={[required()]}
                        style={style}
                    />
                    <BooleanInput label="Авто" source="auto" style={style} />
                    <FormDataConsumer>
                        {({formData}) =>
                            formData.auto && (
                                <TextInput
                                    source="day"
                                    label="На сколько дней продлевается мероприятие"
                                    validate={[required()]}
                                    style={style}
                                    type="number"
                                />
                            )
                        }
                    </FormDataConsumer>
                    <BooleanInput
                        label="Диапазон"
                        source="range"
                        style={style}
                    />
                    <FormDataConsumer>
                        {({formData}) =>
                            formData.range ? (
                                <>
                                    <DateTimeInput
                                        options={{
                                            inputVariant: "outlined",
                                            format: "yyyy-MM-dd, HH:mm",
                                        }}
                                        source="minDate"
                                        label="С"
                                        validate={[required()]}
                                        style={style}
                                    />
                                    <DateTimeInput
                                        options={{
                                            inputVariant: "outlined",
                                            format: "yyyy-MM-dd, HH:mm",
                                        }}
                                        source="maxDate"
                                        label="До"
                                        validate={[required()]}
                                        style={style}
                                    />
                                </>
                            ) : (
                                <DateTimeInput
                                    options={{
                                        inputVariant: "outlined",
                                        format: "yyyy-MM-dd, HH:mm",
                                    }}
                                    source="date"
                                    label="Дата и время проведения"
                                    validate={[required()]}
                                    style={style}
                                />
                            )
                        }
                    </FormDataConsumer>
                    <FormDataConsumer>
                        {({formData}) =>
                            !formData.auto && (
                                <DateTimeInput
                                    options={{
                                        inputVariant: "outlined",
                                        format: "yyyy-MM-dd, HH:mm",
                                    }}
                                    source="dateDelete"
                                    label="Дата и время удаления"
                                    validate={[required()]}
                                    style={style}
                                />
                            )
                        }
                    </FormDataConsumer>
                    <BooleanInput
                        label="Видимо ли мероприятие?"
                        source="visibility"
                        style={style}
                    />
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
                    {teachers.length ? (
                        <SelectArrayInput
                            label="Автор"
                            validate={[required()]}
                            source="auth"
                            choices={teachers}
                            style={style}
                        />
                    ) : null}
                    <BooleanInput
                        label="Подписка через VK"
                        source="vk"
                        style={style}
                    />
                    <FormDataConsumer>
                        {({formData}) =>
                            formData.vk && (
                                <TextInput
                                    source="vkUrl"
                                    label="Ссылка VK"
                                    validate={[required()]}
                                    style={style}
                                />
                            )
                        }
                    </FormDataConsumer>
                    <BooleanInput
                        label="Подписка через Telegram"
                        source="telegram"
                        style={style}
                    />
                    <FormDataConsumer>
                        {({formData}) =>
                            formData.telegram && (
                                <TextInput
                                    source="telegramUrl"
                                    label="Ссылка Telegram"
                                    validate={[required()]}
                                    style={style}
                                />
                            )
                        }
                    </FormDataConsumer>
                    <BooleanInput
                        label="Добавлять в главный слайдер"
                        source="slider"
                        style={style}
                    />
                    <FormDataConsumer>
                        {({formData}) =>
                            formData.slider && (
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
                                        style={style}
                                    >
                                        <PreviewImage source="src" />
                                    </ImageInput>
                                </>
                            )
                        }
                    </FormDataConsumer>
                </MuiPickersUtilsProvider>
            </SimpleForm>
        </Edit>
    );
};

export default TimetableEdit;
