import React from "react";

import {Edit, SimpleForm, TextInput, required} from "react-admin";

const SectionAboutEdit = (props) => {
    const style = {width: "75%"};
    return (
        <Edit {...props}>
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
        </Edit>
    );
};

export default SectionAboutEdit;
