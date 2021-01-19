import React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    SelectInput,
    required,
} from "react-admin";

const SectionServicesCreate = (props) => {
    const style = {width: "75%"};

    return (
        <Create {...props} title='Новый блок в секции "Инфо о образовании"'>
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
        </Create>
    );
};

export default SectionServicesCreate;
