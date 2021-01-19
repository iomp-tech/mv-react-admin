import React from "react";

import {
    List,
    Datagrid,
    TextField,
    ImageField,
    SelectField,
    EditButton,
} from "react-admin";

import myDataProfider from "../.././myDataProvider";

const PostsList = (props) => {
    const [categories, setCategories] = React.useState([]);
    const [teachers, setTeachers] = React.useState([]);
    const [postType, setPostType] = React.useState([]);

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
            .getList("postType", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setPostType(data);
            });
    }, []);

    return (
        <List {...props} pagination={false} title="Посты">
            <Datagrid>
                <TextField label="ID" source="id" sortable={false} />
                <ImageField
                    label="Изображение"
                    source="thumb"
                    sortable={false}
                />
                <TextField label="Имя" source="title" sortable={false} />{" "}
                <TextField
                    label="Краткое описание"
                    source="smallDescription"
                    sortable={false}
                />
                <TextField label="ID автора" source="auth" sortable={false} />
                <TextField label="Дата публикации" source="date" />
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
                    choices={postType}
                />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default PostsList;
