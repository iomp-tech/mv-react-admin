import React from "react";

import {
    Edit,
    TabbedForm,
    FormTab,
    TextInput,
    required,
    Toolbar,
    SaveButton,
} from "react-admin";

import {defaultStyle} from "../../style";

const UserEditToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton />
    </Toolbar>
);

const IntegrationPageEdit = (props) => {
    return (
        <Edit {...props} title="Интеграции">
            <TabbedForm toolbar={<UserEditToolbar />}>
                <FormTab label="На каждую страницу">
                    <TextInput
                        label="Произвольный JavaScript код"
                        source="allJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML"
                        source="allHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Главная">
                    <TextInput
                        label="Произвольный JavaScript код"
                        source="mainJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML"
                        source="mainHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Магазин курсов">
                    <TextInput
                        label="Произвольный JavaScript код"
                        source="shopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML"
                        source="shopHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Преподаватели">
                    <TextInput
                        label="Произвольный JavaScript код"
                        source="teachersJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML"
                        source="teachersHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Расписание">
                    <TextInput
                        label="Произвольный JavaScript код"
                        source="timetableJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML"
                        source="timetableHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Журнал">
                    <TextInput
                        label="Произвольный JavaScript код"
                        source="magazineJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML"
                        source="magazineHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Корзина">
                    <TextInput
                        label="Произвольный JavaScript код"
                        source="cartJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML"
                        source="cartHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Страница входа">
                    <TextInput
                        label="Произвольный JavaScript код"
                        source="loginJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML"
                        source="loginHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Страница регистрации">
                    <TextInput
                        label="Произвольный JavaScript код"
                        source="registerJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML"
                        source="registerHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Кабинет">
                    <TextInput
                        label="Произвольный JavaScript код"
                        source="cabinetJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML"
                        source="cabinetHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Мои курсы">
                    <TextInput
                        label="Произвольный JavaScript код"
                        source="libraryJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML"
                        source="libraryHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Сведения">
                    <TextInput
                        label="Произвольный JavaScript код"
                        source="instituteJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML"
                        source="instituteHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
            </TabbedForm>
        </Edit>
    );
};

export default IntegrationPageEdit;
