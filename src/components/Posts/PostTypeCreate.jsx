import React from "react";

import {Create, SimpleForm, TextInput, required} from "react-admin";

const PostTypeCreate = (props) => {

	const style = { width: "75%" };
	
    return (
        <Create {...props} title="Новый тип поста">
            <SimpleForm>
                <TextInput
                    source="title"
                    label="Имя типа"
                    validate={[required()]}
                    style={style}
                />
                <TextInput
                    source="key"
                    label="Ключ типа"
                    validate={[required()]}
                    style={style}
                />
            </SimpleForm>
        </Create>
    );
};

export default PostTypeCreate;
