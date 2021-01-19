import React from "react";

import {Create, SimpleForm, TextInput, required} from "react-admin";

const SectionAboutCreate = (props) => {
    const style = {width: "75%"};

    return (
        <Create {...props} title='Новый блок в секции "О нас"'>
            <SimpleForm>
                <TextInput
                    label="Заголовок"
                    source="title"
                    style={style}
                    validate={[required()]}
                />
                <TextInput
                    label="Описание"
                    source="subtitle"
                    style={style}
                    validate={[required()]}
                    multiline
                />
            </SimpleForm>
        </Create>
    );
};

export default SectionAboutCreate;
