import React from "react";

import {
    List,
    Datagrid,
    ReferenceArrayField,
    ReferenceManyField,
    SingleFieldList,
    TextField,
    Filter,
    UrlField,
    ChipField,
    ImageField,
	BooleanField,
	TextInput,
    EditButton,
} from "react-admin";

const TimetableFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Ключ" source="key" alwaysOn />
    </Filter>
);

const TimetableList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Расписание"
            filters={<TimetableFilter />}
        >
            <Datagrid>
                <TextField label="ID" source="id" sortable={false} />
                <TextField
                    label="ID на АвтоВебОфис"
                    source="id_awo"
                    sortable={false}
                />
                <ImageField
                    label="Изображение"
                    source="thumb"
                    sortable={false}
                />
                <TextField label="Имя" source="title" sortable={false} />
                <TextField label="Ключ" source="key" sortable={false} />
                <UrlField
                    label="Ссылка на лендинг страницу"
                    source="url"
                    sortable={false}
                />
                <BooleanField
                    label="Видимо ли мероприятие?"
                    source="visibility"
                    sortable={false}
                />

                <ReferenceArrayField
                    label="Авторы"
                    reference="teachers"
                    source="auth"
                    sortable={false}
                >
                    <SingleFieldList>
                        <ChipField source="name" />
                    </SingleFieldList>
                </ReferenceArrayField>

                <ReferenceManyField
                    label="Категория"
                    source="category"
                    reference="categories"
                    target="key"
                    sortable={false}
                >
                    <SingleFieldList>
                        <ChipField source="title" />
                    </SingleFieldList>
                </ReferenceManyField>

                <ReferenceManyField
                    label="Тип"
                    source="type"
                    reference="timetableType"
                    target="key"
                    sortable={false}
                >
                    <SingleFieldList>
                        <ChipField source="title" />
                    </SingleFieldList>
                </ReferenceManyField>

                <BooleanField label="Авто" source="auto" sortable={false} />
                <TextField
                    label="На сколько дней продлевается мероприятие"
                    source="day"
                    sortable={false}
                />
                <BooleanField
                    label="Диапазон"
                    source="range"
                    sortable={false}
                />
                <TextField label="С" source="minDate" sortable={false} />
                <TextField label="До" source="maxDate" sortable={false} />
                <TextField
                    label="Дата проведения"
                    source="date"
                    sortable={false}
                />
                <TextField
                    label="Дата удаления"
                    source="dateDelete"
                    sortable={false}
                />
                <UrlField label="Url Страницы" source="url" sortable={false} />
                <BooleanField
                    label="Добавлять в слайдер"
                    source="slider"
                    sortable={false}
                />
                <BooleanField
                    label="Подписка через VK"
                    source="vk"
                    sortable={false}
                />
                <UrlField
                    label="Ссылка на VK"
                    source="vkUrl"
                    sortable={false}
                />
                <BooleanField
                    label="Подписка через Telegram"
                    source="telegram"
                    sortable={false}
                />
                <UrlField
                    label="Ссылка на Telegram"
                    source="telegramUrl"
                    sortable={false}
                />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default TimetableList;
