import React from "react";
import {
    List,
    Datagrid,
    TextField,
    UrlField,
	BooleanField,
	SelectField,
    ImageField,
    EditButton,
} from "react-admin";

import myDataProfider from "../.././myDataProvider";

const GoodsList = (props) => {
    const [categories, setCategories] = React.useState([]);
    const [timetype, setTimetype] = React.useState([]);
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
            .getList("goodsType", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setType(data);
            });
    }, []);

    return (
        <List {...props} pagination={false} title="Товары">
            <Datagrid>
                <TextField label="ID" source="id" sortable={false} />
                <ImageField
                    label="Изображение"
                    source="thumb"
                    sortable={false}
                />
                <TextField label="Имя" source="title" sortable={false} />
                <UrlField
                    label="Ссылка на доп.сайт"
                    source="href"
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
                    label="Время прохождения"
                    source="time"
                    sortable={false}
                />
                <SelectField
                    label="Длина прохождения"
                    source="timeType"
                    optionValue="key"
                    optionText="title"
                    sortable={false}
                    choices={timetype}
                />
                <TextField label="ID автора" source="auth" sortable={false} />
                <TextField label="Скидка" source="sale" sortable={false} />
                <TextField
                    label="Цена без скидки"
                    source="priceOld"
                    sortable={false}
                />
                <TextField
                    label="Цена в месяц"
                    source="priceMonth"
                    sortable={false}
                />
                <TextField label="Цена" source="price" sortable={false} />
                <BooleanField
                    label="Дорогой"
                    source="expensive"
                    sortable={false}
                />
                <BooleanField
                    label="На главный экран"
                    source="section"
                    sortable={false}
                />
                <TextField
                    label="Теги для поиска"
                    source="searchTags"
                    sortable={false}
                />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default GoodsList;
