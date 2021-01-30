import React from "react";

import myDataProfider from "../.././myDataProvider";

import {
    Create,
    SimpleForm,
    FormDataConsumer,
    TextInput,
    DateTimeInput,
    SelectInput,
    SelectArrayInput,
    BooleanInput,
    ImageInput,
    ImageField,
    required,
} from "react-admin";

const TimetableCreate = (props) => {
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

    const dateParser = (v) => {
        return v;
    };

    return (
        <Create {...props} title="Новое расписание">
            <SimpleForm>
                <TextInput
                    source="title"
                    label="Имя"
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
                <DateTimeInput
                    parse={dateParser}
                    source="date"
                    label="Дата и время проведения"
                    validate={[required()]}
                    style={style}
                />
                <DateTimeInput
                    source="dateDelete"
                    label="Дата и время удаления"
                    validate={[required()]}
                    style={style}
                />
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
                                    placeholder={<p>Перетащите файл сюда</p>}
                                    validate={[required()]}
                                    style={style}
                                >
                                    <ImageField source="src" />
                                </ImageInput>
                            </>
                        )
                    }
                </FormDataConsumer>
            </SimpleForm>
        </Create>
    );
};

export default TimetableCreate;
