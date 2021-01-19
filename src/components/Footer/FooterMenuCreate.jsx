import React from "react";

import {Create, SimpleForm, TextInput, required} from "react-admin";

const FooterMenuCreate = (props) => {
    const style = {width: "75%"};

    return (
        <Create {...props} title="Новая ссылка в футере (подвале)">
            <SimpleForm>
                <TextInput
                    label="Заголовок"
                    source="title"
                    style={style}
                    validate={[required()]}
                />
                <TextInput
                    label="Ссылка"
                    source="href"
                    style={style}
                    validate={[required()]}
                    multiline
                />
            </SimpleForm>
        </Create>
    );
};

export default FooterMenuCreate;
