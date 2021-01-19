import React from "react";

import {Create, SimpleForm, TextInput, required} from "react-admin";

const TimetableTypeCreate = (props) => {
    const style = {width: "75%"};

    return (
        <Create {...props} title="Новый тип расписания">
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

export default TimetableTypeCreate;
