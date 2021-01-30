import React from "react";

import {
    List,
    Datagrid,
    TextField,
    SelectField,
    UrlField,
    ImageField,
    BooleanField,
    EditButton,
} from "react-admin";

import myDataProfider from "../.././myDataProvider";

const TimetableList = (props) => {
    const [categories, setCategories] = React.useState([]);
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
            .getList("timetableType", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setType(data);
            });
    }, []);

    return (
        <List {...props} pagination={false} title="Расписание">
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
                <BooleanField
                    label="Видимо ли мероприятие?"
                    source="visibility"
                    sortable={false}
                />
                <SelectField
                    label="Категория"
                    source="category"
                    optionValue="key"
                    optionText="title"
                    sortable={false}
                    choices={categories}
                />
                <SelectField
                    label="Тип"
                    source="type"
                    optionValue="key"
                    optionText="title"
                    sortable={false}
                    choices={type}
                />
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
