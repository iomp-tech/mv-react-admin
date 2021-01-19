import React from "react";

import {
    Create,
    SimpleForm,
    TextInput,
    required,
} from "react-admin";

const GoodsTypeCreate = (props) => {
    const style = {width: "75%"};

    return (
        <Create {...props} title="Новый тип товара">
            <SimpleForm>
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
            </SimpleForm>
        </Create>
    );
};

export default GoodsTypeCreate;
