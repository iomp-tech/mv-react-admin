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
            <TabbedForm toolbar={<UserEditToolbar />} redirect={false}>
                <FormTab label="На каждую страницу">
                    <TextInput
                        label="Произвольный JavaScript код (вверх страницы)"
                        source="allTopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вверх страницы)"
                        source="allTopHtml"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Произвольный JavaScript код (вниз страницы)"
                        source="allBottomJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вниз страницы)"
                        source="allBottomHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Главная">
                    <TextInput
                        label="Произвольный JavaScript код (вверх страницы)"
                        source="mainTopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вверх страницы)"
                        source="mainTopHtml"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Произвольный JavaScript код (вниз страницы)"
                        source="mainBottomJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вниз страницы)"
                        source="mainBottomHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Магазин курсов">
                    <TextInput
                        label="Произвольный JavaScript код (вверх страницы)"
                        source="shopTopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вверх страницы)"
                        source="shopTopHtml"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Произвольный JavaScript код (вниз страницы)"
                        source="shopBottomJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вниз страницы)"
                        source="shopBottomHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Преподаватели">
                    <TextInput
                        label="Произвольный JavaScript код (вверх страницы)"
                        source="teachersTopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вверх страницы)"
                        source="teachersTopHtml"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Произвольный JavaScript код (вниз страницы)"
                        source="teachersBottomJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вниз страницы)"
                        source="teachersBottomHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Расписание">
                    <TextInput
                        label="Произвольный JavaScript код (вверх страницы)"
                        source="timetableTopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вверх страницы)"
                        source="timetableTopHtml"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Произвольный JavaScript код (вниз страницы)"
                        source="timetableBottomJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вниз страницы)"
                        source="timetableBottomHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Журнал">
                    <TextInput
                        label="Произвольный JavaScript код (вверх страницы)"
                        source="magazineTopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вверх страницы)"
                        source="magazineTopHtml"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Произвольный JavaScript код (вниз страницы)"
                        source="magazineBottomJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вниз страницы)"
                        source="magazineBottomHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Корзина">
                    <TextInput
                        label="Произвольный JavaScript код (вверх страницы)"
                        source="cartTopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вверх страницы)"
                        source="cartTopHtml"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Произвольный JavaScript код (вниз страницы)"
                        source="cartBottomJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вниз страницы)"
                        source="cartBottomHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Страница входа">
                    <TextInput
                        label="Произвольный JavaScript код (вверх страницы)"
                        source="loginTopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вверх страницы)"
                        source="loginTopHtml"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Произвольный JavaScript код (вниз страницы)"
                        source="loginBottomJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вниз страницы)"
                        source="loginBottomHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Страница регистрации">
                    <TextInput
                        label="Произвольный JavaScript код (вверх страницы)"
                        source="registerTopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вверх страницы)"
                        source="registerTopHtml"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Произвольный JavaScript код (вниз страницы)"
                        source="registerBottomJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вниз страницы)"
                        source="registerBottomHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Кабинет">
                    <TextInput
                        label="Произвольный JavaScript код (вверх страницы)"
                        source="cabinetTopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вверх страницы)"
                        source="cabinetTopHtml"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Произвольный JavaScript код (вниз страницы)"
                        source="cabinetBottomJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вниз страницы)"
                        source="cabinetBottomHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Мои курсы">
                    <TextInput
                        label="Произвольный JavaScript код (вверх страницы)"
                        source="libraryTopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вверх страницы)"
                        source="libraryTopHtml"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Произвольный JavaScript код (вниз страницы)"
                        source="libraryBottomJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вниз страницы)"
                        source="libraryBottomHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
                <FormTab label="Сведения">
                    <TextInput
                        label="Произвольный JavaScript код (вверх страницы)"
                        source="instituteTopJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вверх страницы)"
                        source="instituteTopHtml"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Произвольный JavaScript код (вниз страницы)"
                        source="instituteBottomJs"
                        style={defaultStyle}
                        multiline
                    />
                    <TextInput
                        label="Теги HTML (вниз страницы)"
                        source="instituteBottomHtml"
                        style={defaultStyle}
                        multiline
                    />
                </FormTab>
            </TabbedForm>
        </Edit>
    );
};

export default IntegrationPageEdit;
