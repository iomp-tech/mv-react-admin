import React from "react";

import {
    List,
    Datagrid,
    SingleFieldList,
    ReferenceManyField,
    ReferenceArrayField,
    TextField,
    ImageField,
    ChipField,
    EditButton,
} from "react-admin";

const PostsList = (props) => {
    return (
        <List {...props} pagination={false} title="Посты">
            <Datagrid>
                <EditButton />
                <TextField label="ID" source="id" sortable={false} />
                <ImageField
                    label="Изображение"
                    source="thumb"
                    sortable={false}
                />
                <TextField label="Имя" source="title" sortable={false} />
                <TextField
                    label="Краткое описание"
                    source="smallDescription"
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
                <TextField label="Дата публикации" source="date" />
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
                    reference="postType"
                    target="key"
                    sortable={false}
                >
                    <SingleFieldList>
                        <ChipField source="title" />
                    </SingleFieldList>
                </ReferenceManyField>
            </Datagrid>
        </List>
    );
};

export default PostsList;
