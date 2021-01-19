import React from "react";

import {Edit, SimpleForm, TextInput} from "react-admin";

const TimetypeGoodsEdit = (props) => {
    const style = {width: "75%"};

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput label="Название" source="title" style={style} />
                <TextInput label="Ключ" source="key" style={style} />
            </SimpleForm>
        </Edit>
    );
};

export default TimetypeGoodsEdit;
