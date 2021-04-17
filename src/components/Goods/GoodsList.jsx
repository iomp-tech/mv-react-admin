import React from "react";
import {
    List,
    Filter,
    Datagrid,
    ReferenceManyField,
    ReferenceArrayField,
    SingleFieldList,
    ChipField,
    TextField,
    TextInput,
    UrlField,
    BooleanField,
    ImageField,
    EditButton,
} from "react-admin";

const GoodsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Название" source="title" alwaysOn />
    </Filter>
);

const GoodsList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Товары"
            filters={<GoodsFilter />}
        >
            <Datagrid>
                <EditButton />
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
                <div>https://mastervision.su/shop/pages/</div>
                <TextField
                    label="Ссылка на лендинг страницу"
                    source="url"
                    sortable={false}
                />
                <ReferenceManyField
                    label="Категория"
                    reference="categories"
                    source="category"
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
                    reference="goodsType"
                    target="key"
                    sortable={false}
                >
                    <SingleFieldList>
                        <ChipField source="title" />
                    </SingleFieldList>
                </ReferenceManyField>

                <TextField
                    label="Время прохождения"
                    source="time"
                    sortable={false}
                />

                <ReferenceManyField
                    label="Длина прохождения"
                    source="timeType"
                    reference="goodsTimetype"
                    target="key"
                    sortable={false}
                >
                    <SingleFieldList>
                        <ChipField source="title" />
                    </SingleFieldList>
                </ReferenceManyField>

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
                <BooleanField
                    label="Виден ли товар"
                    source="visibility"
                    sortable={false}
                />
                <TextField
                    label="Теги для поиска"
                    source="searchTags"
                    sortable={false}
                />
            </Datagrid>
        </List>
    );
};

export default GoodsList;
