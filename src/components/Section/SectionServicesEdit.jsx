import React from "react";

import {Edit, SimpleForm, TextInput, SelectInput, required} from "react-admin";

const SectionServicesEdit = (props) => {
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
                    source="description"
                    style={style}
                    validate={[required()]}
                    multiline
                />
                <SelectInput
                    label="Размер"
                    source="type"
                    choices={[
                        {key: "small", title: "Маленький"},
                        {key: "big", title: "Большой"},
                    ]}
                    optionValue="key"
                    optionText="title"
                    style={style}
                    validate={[required()]}
                />
            </SimpleForm>
        </Edit>
    );
};

export default SectionServicesEdit;
