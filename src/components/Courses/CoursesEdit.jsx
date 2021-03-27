import React from "react";

import {
    Edit,
    SimpleForm,
    required,
    Toolbar,
    SaveButton,
    SelectArrayInput,
} from "react-admin";

import {defaultStyle} from "../../style";

import myDataProfider from "../.././myDataProvider";

const EditToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton />
    </Toolbar>
);

const CoursesEdit = (props) => {
    const [courses, setCourses] = React.useState([]);

    React.useEffect(() => {
        myDataProfider
            .getList("coursesAwo", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setCourses(data);
            });
    }, []);

    return (
        <Edit {...props} title="Курсы открывающие доступ в сессионную комнату">
            <SimpleForm redirect={false} toolbar={<EditToolbar />}>
                <SelectArrayInput
                    label="Курсы"
                    source="id_awo_courses"
                    choices={courses}
                    optionValue="id_training"
                    optionText="training"
                    validate={[required()]}
                    style={defaultStyle}
                />
            </SimpleForm>
        </Edit>
    );
};

export default CoursesEdit;
