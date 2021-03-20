import React from "react";

import myDataProfider from "../.././myDataProvider";

import {
    Edit,
    TabbedForm,
    FormTab,
    FormDataConsumer,
    TextInput,
    SelectInput,
    SelectArrayInput,
    BooleanInput,
    ArrayInput,
    ImageInput,
    SimpleFormIterator,
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
            <TabbedForm>
                <FormTab label="Расписание">
                    <MuiPickersUtilsProvider
                        utils={DateFnsUtils}
                        locale={ruLocale}
                    >
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
                        <FormDataConsumer>
                            {({formData}) =>
                                formData.auto && (
                                    <TextInput
                                        source="day"
                                        label="На сколько дней продлевается мероприятие"
                                        validate={[required()]}
                                        style={defaultStyle}
                                        type="number"
                                    />
                                )
                            }
                        </FormDataConsumer>
                        <BooleanInput
                            label="Диапазон"
                            source="range"
                            style={defaultStyle}
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
                                            style={defaultStyle}
                                        />
                                        <DateTimeInput
                                            options={{
                                                inputVariant: "outlined",
                                                format: "yyyy-MM-dd, HH:mm",
                                            }}
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
                                        }}
                                        source="date"
                                        label="Дата и время проведения"
                                        validate={[required()]}
                                        style={defaultStyle}
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
                                        style={defaultStyle}
                                    />
                                )
                            }
                        </FormDataConsumer>
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
                        <FormDataConsumer>
                            {({formData}) =>
                                formData.telegram && (
                                    <TextInput
                                        source="telegramUrl"
                                        label="Ссылка Telegram"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )
                            }
                        </FormDataConsumer>
                        <BooleanInput
                            label="Добавлять в главный слайдер"
                            source="slider"
                            style={defaultStyle}
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
                                            style={defaultStyle}
                                        >
                                            <PreviewImage source="src" />
                                        </ImageInput>
                                    </>
                                )
                            }
                        </FormDataConsumer>

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
                                http://iomp.ru/timetable/pages/
                            </p>

                            <TextInput
                                source="url"
                                label="Ссылка на Лендинг страницу"
                                style={defaultStyle}
                            />
                        </div>
                    </MuiPickersUtilsProvider>
                </FormTab>

                <FormTab label="Конструктор">
                    <MuiPickersUtilsProvider
                        utils={DateFnsUtils}
                        locale={ruLocale}
                    >
                        <ArrayInput
                            source="page"
                            label="Лендинг мероприятия"
                            style={defaultStyle}
                        >
                            <SimpleFormIterator>
                                <SelectInput
                                    label="Блок"
                                    validate={[required()]}
                                    source="type"
                                    choices={blocks}
                                    style={defaultStyle}
                                    optionText="title"
                                    optionValue="key"
                                />

                                <FormDataConsumer>
                                    {({scopedFormData, getSource}) =>
                                        scopedFormData ? (
                                            <>
                                                {scopedFormData.type ===
                                                "main1" ? (
                                                    <>
                                                        <TextInput
                                                            source={getSource(
                                                                "subtitle"
                                                            )}
                                                            label="Надзаголовок"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                        <TextInput
                                                            source={getSource(
                                                                "title"
                                                            )}
                                                            label="Оффер"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                        <TextInput
                                                            source={getSource(
                                                                "description"
                                                            )}
                                                            label="Описание"
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                        <TextInput
                                                            source={getSource(
                                                                "btnText"
                                                            )}
                                                            label="Кнопка"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                    </>
                                                ) : null}

                                                {scopedFormData.type ===
                                                "main2" ? (
                                                    <>
                                                        <TextInput
                                                            source={getSource(
                                                                "subtitle"
                                                            )}
                                                            label="Надзаголовок"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                        <TextInput
                                                            source={getSource(
                                                                "title"
                                                            )}
                                                            label="Оффер"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                        <TextInput
                                                            source={getSource(
                                                                "description"
                                                            )}
                                                            label="Описание"
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                    </>
                                                ) : null}

                                                {scopedFormData.type ===
                                                "section-squares" ? (
                                                    <>
                                                        <TextInput
                                                            source={getSource(
                                                                "title"
                                                            )}
                                                            label="Заголовок"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />

                                                        <ArrayInput
                                                            source={getSource(
                                                                "squares"
                                                            )}
                                                            label="Блоки"
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                            validate={[
                                                                required(),
                                                            ]}
                                                        >
                                                            <SimpleFormIterator>
                                                                <SelectInput
                                                                    label="Размер"
                                                                    source="type"
                                                                    choices={[
                                                                        {
                                                                            key:
                                                                                "small",
                                                                            title:
                                                                                "Маленький",
                                                                        },
                                                                        {
                                                                            key:
                                                                                "big",
                                                                            title:
                                                                                "Большой",
                                                                        },
                                                                    ]}
                                                                    optionValue="key"
                                                                    optionText="title"
                                                                    style={
                                                                        defaultStyle
                                                                    }
                                                                    validate={[
                                                                        required(),
                                                                    ]}
                                                                />
                                                                <TextInput
                                                                    source="title"
                                                                    label="Заголовок блока"
                                                                    style={
                                                                        arrayInputStyle
                                                                    }
                                                                />
                                                                <TextInput
                                                                    source="description"
                                                                    label="Описание блока"
                                                                    style={
                                                                        arrayInputStyle
                                                                    }
                                                                />
                                                            </SimpleFormIterator>
                                                        </ArrayInput>
                                                    </>
                                                ) : null}

                                                {scopedFormData.type ===
                                                "slider-text" ? (
                                                    <>
                                                        <TextInput
                                                            source={getSource(
                                                                "title"
                                                            )}
                                                            label="Заголовок"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                        <ArrayInput
                                                            source={getSource(
                                                                "tabs"
                                                            )}
                                                            label="Табы"
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                            validate={[
                                                                required(),
                                                            ]}
                                                        >
                                                            <SimpleFormIterator>
                                                                <TextInput
                                                                    source="title"
                                                                    label="Заголовок таба"
                                                                    validate={[
                                                                        required(),
                                                                    ]}
                                                                    style={
                                                                        arrayInputStyle
                                                                    }
                                                                />
                                                                <ArrayInput
                                                                    source="items"
                                                                    label="Пункты"
                                                                    style={
                                                                        arrayInputStyle
                                                                    }
                                                                    validate={[
                                                                        required(),
                                                                    ]}
                                                                >
                                                                    <SimpleFormIterator>
                                                                        <TextInput
                                                                            source="text"
                                                                            label="Текст"
                                                                            validate={[
                                                                                required(),
                                                                            ]}
                                                                            style={
                                                                                arrayInputStyle
                                                                            }
                                                                        />
                                                                    </SimpleFormIterator>
                                                                </ArrayInput>
                                                            </SimpleFormIterator>
                                                        </ArrayInput>
                                                        <TextInput
                                                            source={getSource(
                                                                "btnText"
                                                            )}
                                                            label="Кнопка"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                    </>
                                                ) : null}

                                                {scopedFormData.type ===
                                                "composition-product" ? (
                                                    <>
                                                        <TextInput
                                                            source={getSource(
                                                                "title"
                                                            )}
                                                            label="Заголовок"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                        <ArrayInput
                                                            source={getSource(
                                                                "modules"
                                                            )}
                                                            label="Модули"
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                            validate={[
                                                                required(),
                                                            ]}
                                                        >
                                                            <SimpleFormIterator>
                                                                <TextInput
                                                                    source="title"
                                                                    label="Заголовок"
                                                                    validate={[
                                                                        required(),
                                                                    ]}
                                                                    style={
                                                                        arrayInputStyle
                                                                    }
                                                                />
                                                                <TextInput
                                                                    source="description"
                                                                    label="Описание"
                                                                    validate={[
                                                                        required(),
                                                                    ]}
                                                                    style={
                                                                        arrayInputStyle
                                                                    }
                                                                    multiline
                                                                />

                                                                <ArrayInput
                                                                    source="items"
                                                                    label="Список"
                                                                    style={
                                                                        arrayInputStyle
                                                                    }
                                                                    validate={[
                                                                        required(),
                                                                    ]}
                                                                >
                                                                    <SimpleFormIterator>
                                                                        <TextInput
                                                                            source="title"
                                                                            label="Заголовок"
                                                                            validate={[
                                                                                required(),
                                                                            ]}
                                                                            style={
                                                                                arrayInputStyle
                                                                            }
                                                                        />
                                                                        <TextInput
                                                                            source="description"
                                                                            label="Описание"
                                                                            validate={[
                                                                                required(),
                                                                            ]}
                                                                            style={
                                                                                arrayInputStyle
                                                                            }
                                                                            multiline
                                                                        />
                                                                    </SimpleFormIterator>
                                                                </ArrayInput>

                                                                {goods.length ? (
                                                                    <SelectInput
                                                                        label="Товар модуля"
                                                                        validate={[
                                                                            required(),
                                                                        ]}
                                                                        optionText="title"
                                                                        optionValue="id"
                                                                        source="goodModule"
                                                                        choices={
                                                                            goods
                                                                        }
                                                                        style={
                                                                            arrayInputStyle
                                                                        }
                                                                    />
                                                                ) : null}

                                                                <BooleanInput
                                                                    label="Акция"
                                                                    source="stockBoolean"
                                                                />

                                                                {goods.length ? (
                                                                    <SelectInput
                                                                        label="Товар акции"
                                                                        optionText="title"
                                                                        optionValue="id"
                                                                        source="goodModuleStock"
                                                                        choices={
                                                                            goods
                                                                        }
                                                                        style={
                                                                            arrayInputStyle
                                                                        }
                                                                    />
                                                                ) : null}
                                                                <TextInput
                                                                    source="titleStock"
                                                                    label="Заголовок"
                                                                    style={
                                                                        arrayInputStyle
                                                                    }
                                                                />

                                                                <TextInput
                                                                    source="descriptionStock"
                                                                    label="Описание"
                                                                    style={
                                                                        arrayInputStyle
                                                                    }
                                                                />
                                                                <TextInput
                                                                    source="btnTextStock"
                                                                    label="Кнопка"
                                                                    style={
                                                                        arrayInputStyle
                                                                    }
                                                                />
                                                            </SimpleFormIterator>
                                                        </ArrayInput>

                                                        <BooleanInput
                                                            label="Форма"
                                                            source={getSource(
                                                                "formBoolean"
                                                            )}
                                                        />
                                                    </>
                                                ) : null}

                                                {scopedFormData.type ===
                                                "teachers" ? (
                                                    <>
                                                        <TextInput
                                                            source={getSource(
                                                                "title"
                                                            )}
                                                            label="Заголовок"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                        {teachersSection.length ? (
                                                            <SelectArrayInput
                                                                label="Автор"
                                                                validate={[
                                                                    required(),
                                                                ]}
                                                                source={getSource(
                                                                    "auth"
                                                                )}
                                                                choices={
                                                                    teachersSection
                                                                }
                                                                style={
                                                                    defaultStyle
                                                                }
                                                            />
                                                        ) : null}
                                                    </>
                                                ) : null}

                                                {scopedFormData.type ===
                                                "feedback-photos" ? (
                                                    <>
                                                        <TextInput
                                                            source={getSource(
                                                                "title"
                                                            )}
                                                            label="Заголовок"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                        <ArrayInput
                                                            source={getSource(
                                                                "photos"
                                                            )}
                                                            label="Фото (отзывы)"
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        >
                                                            <SimpleFormIterator>
                                                                <ImageInput
                                                                    source="imageFeedback"
                                                                    label="Изображение (максимальный размер 2МБ)"
                                                                    maxSize="2000000"
                                                                    accept="image/*"
                                                                    placeholder={
                                                                        <p>
                                                                            Перетащите
                                                                            файл
                                                                            сюда
                                                                        </p>
                                                                    }
                                                                    style={
                                                                        arrayInputStyle
                                                                    }
                                                                >
                                                                    <PreviewImage source="src" />
                                                                </ImageInput>
                                                            </SimpleFormIterator>
                                                        </ArrayInput>
                                                    </>
                                                ) : null}

                                                {scopedFormData.type ===
                                                "feedback-videos" ? (
                                                    <>
                                                        <TextInput
                                                            source={getSource(
                                                                "title"
                                                            )}
                                                            label="Заголовок"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                        <ArrayInput
                                                            source={getSource(
                                                                "videos"
                                                            )}
                                                            label="Видео с YouTube (отзывы)"
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        >
                                                            <SimpleFormIterator>
                                                                <TextInput
                                                                    source={
                                                                        "videoCode"
                                                                    }
                                                                    label='Вставьте значение из поля src=""'
                                                                    style={
                                                                        arrayInputStyle
                                                                    }
                                                                    validate={[
                                                                        required(),
                                                                    ]}
                                                                    multiline
                                                                />
                                                            </SimpleFormIterator>
                                                        </ArrayInput>
                                                    </>
                                                ) : null}

                                                {scopedFormData.type ===
                                                "goods" ? (
                                                    <>
                                                        <TextInput
                                                            source={getSource(
                                                                "title"
                                                            )}
                                                            label="Заголовок"
                                                            validate={[
                                                                required(),
                                                            ]}
                                                            style={
                                                                arrayInputStyle
                                                            }
                                                        />
                                                        {goods.length ? (
                                                            <SelectArrayInput
                                                                label="Товары"
                                                                validate={[
                                                                    required(),
                                                                ]}
                                                                source={getSource(
                                                                    "goods"
                                                                )}
                                                                choices={goods}
                                                                style={
                                                                    arrayInputStyle
                                                                }
                                                                optionValue="id"
                                                                optionText="title"
                                                            />
                                                        ) : null}
                                                    </>
                                                ) : null}
                                            </>
                                        ) : null
                                    }
                                </FormDataConsumer>
                            </SimpleFormIterator>
                        </ArrayInput>
                    </MuiPickersUtilsProvider>
                </FormTab>
            </TabbedForm>
        </Edit>
    );
};

export default TimetableEdit;
