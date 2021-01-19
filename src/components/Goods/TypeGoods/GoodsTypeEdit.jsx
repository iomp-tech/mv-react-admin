import React from "react";

import {Edit, SimpleForm, TextInput, required} from "react-admin";

const GoodsTypeEdit = (props) => {
    const style = {width: "75%"};

    return (
        <Edit {...props}>
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
        </Edit>
    );
};

export default GoodsTypeEdit;
