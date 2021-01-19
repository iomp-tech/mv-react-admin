import React from "react";

import {
    Create,
    SimpleForm,
    TextInput,
    required,
} from "react-admin";

const TimetypeGoodsCreate = (props) => {
	const style = {width: "75%"};

    return (
        <Create {...props} title="Новый тип времени">
            <SimpleForm>
                <TextInput
                    source="title"
                    label="Название"
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
}

export default TimetypeGoodsCreate
