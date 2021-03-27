import React from "react";

import {
    List,
    Datagrid,
    EditButton,
} from "react-admin";

const CoursesList = (props) => {
    return (
        <List
            {...props}
            pagination={false}
            title="Курсы открывающие доступ в сессионную комнату"
            bulkActionButtons={false}
        >
            <Datagrid>
                <span>Курсы открывающие доступ в сессионную комнату</span>
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default CoursesList;
