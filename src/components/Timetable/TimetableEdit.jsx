import React from "react";

import myDataProfider from "../.././myDataProvider";

import {
    Edit,
    SimpleForm,
    FormDataConsumer,
    TextInput,
    SelectInput,
    SelectArrayInput,
    BooleanInput,
    ImageInput,
    required,
} from "react-admin";

import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

import {DateTimeInput} from "react-admin-date-inputs2";

import {PreviewImage} from ".././";

import {defaultStyle, arrayInputStyle} from "../../style";

const TimetableEdit = (props) => {
    const [type, setType] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [teachers, setTeachers] = React.useState([]);
    const [goods, setGoods] = React.useState([]);
    const [teachersSection, setTeachersSection] = React.useState([]);
    const [selectedDate, handleDateChange] = React.useState(new Date());

    React.useEffect(() => {
        myDataProfider
            .getList("categories", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setCategories(data);
            });
        myDataProfider
            .getList("teachers", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setTeachers(data);
            });
        myDataProfider
            .getList("teachers", {
                pagination: {page: 1},
                sort: {order: "ASC"},
                filter: {main: true},
            })
            .then(({data}) => {
                setTeachersSection(data);
            });
        myDataProfider
            .getList("timetableType", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setType(data);
            });
        myDataProfider
            .getList("goods", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setGoods(data);
            });
    }, []);

    const blocks = [
        {title: "?????????????? 1", key: "main1"},
        {title: "?????????????? 2", key: "main2"},
        {title: "????????????????", key: "section-squares"},
        {title: "?????????????? ?? ??????????????", key: "slider-text"},
        {title: "???????????? ????????????????", key: "composition-product"},
        {title: "??????????????????????????", key: "teachers"},
        {title: "???????????? (????????)", key: "feedback-photos"},
        {title: "???????????? (??????????)", key: "feedback-videos"},
        {title: "????????????", key: "goods"},
    ];

    return (
        <Edit {...props}>
            <SimpleForm redirect={false}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                    <FormDataConsumer>
                        {({formData}) => (
                            <>
                                <TextInput
                                    source="subtitle"
                                    label="????????????????????????"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="title"
                                    label="??????"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="key"
                                    label="????????"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="description"
                                    label="????????????????"
                                    validate={[required()]}
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    source="id_awo"
                                    label="ID ???????????? ???? ??????????????????????"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="action"
                                    label="?????????????? ???????????????? ???????????????? 'action' ?? ???????? '<form>'"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="formId"
                                    label="?????????????? ???????????????? ???????????????? 'value' ?? ???????? '<input>' ?? 'name=formId'"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="formVc"
                                    label="?????????????? ???????????????? ???????????????? 'value' ?? ???????? '<input>' ?? 'name=formVc'"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <BooleanInput
                                    label="????????"
                                    source="auto"
                                    style={defaultStyle}
                                />
                                {formData.auto && (
                                    <TextInput
                                        source="day"
                                        label="???? ?????????????? ???????? ???????????????????????? ??????????????????????"
                                        validate={[required()]}
                                        style={defaultStyle}
                                        type="number"
                                    />
                                )}
                                <BooleanInput
                                    label="????????????????"
                                    source="range"
                                    style={defaultStyle}
                                />
                                {formData.range ? (
                                    <>
                                        <DateTimeInput
                                            options={{
                                                inputVariant: "outlined",
                                                format: "yyyy-MM-dd, HH:mm",
                                            }}
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            source="minDate"
                                            label="??"
                                            validate={[required()]}
                                            style={defaultStyle}
                                        />
                                        <DateTimeInput
                                            options={{
                                                inputVariant: "outlined",
                                                format: "yyyy-MM-dd, HH:mm",
                                            }}
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            source="maxDate"
                                            label="????"
                                            validate={[required()]}
                                            style={defaultStyle}
                                        />
                                    </>
                                ) : (
                                    <DateTimeInput
                                        options={{
                                            inputVariant: "outlined",
                                            format: "yyyy-MM-dd, HH:mm",
                                            clearable: true,
                                        }}
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        source="date"
                                        label="???????? ?? ?????????? ????????????????????"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )}
                                {!formData.auto && (
                                    <DateTimeInput
                                        options={{
                                            inputVariant: "outlined",
                                            format: "yyyy-MM-dd, HH:mm",
                                        }}
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        source="dateDelete"
                                        label="???????? ?? ?????????? ????????????????"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )}
                                <BooleanInput
                                    label="???????????? ???? ???????????????????????"
                                    source="visibility"
                                    style={defaultStyle}
                                />
                                {type.length ? (
                                    <SelectInput
                                        label="??????"
                                        source="type"
                                        choices={type}
                                        optionValue="key"
                                        optionText="title"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                ) : null}
                                {categories.length ? (
                                    <SelectInput
                                        label="??????????????????"
                                        source="category"
                                        choices={categories}
                                        optionValue="key"
                                        optionText="title"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                ) : null}
                                {teachers.length ? (
                                    <SelectArrayInput
                                        label="??????????"
                                        validate={[required()]}
                                        source="auth"
                                        choices={teachers}
                                        style={defaultStyle}
                                    />
                                ) : null}
                                <BooleanInput
                                    label="???????????????? ?????????? VK"
                                    source="vk"
                                    style={defaultStyle}
                                />
                                <FormDataConsumer>
                                    {({formData}) =>
                                        formData.vk && (
                                            <TextInput
                                                source="vkUrl"
                                                label="???????????? VK"
                                                validate={[required()]}
                                                style={defaultStyle}
                                            />
                                        )
                                    }
                                </FormDataConsumer>
                                <BooleanInput
                                    label="???????????????? ?????????? Telegram"
                                    source="telegram"
                                    style={defaultStyle}
                                />
                                {formData.telegram && (
                                    <TextInput
                                        source="telegramUrl"
                                        label="???????????? Telegram"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )}
                                <BooleanInput
                                    label="?????????????????? ?? ?????????????? ??????????????"
                                    source="slider"
                                    style={defaultStyle}
                                />

                                {formData.slider && (
                                    <>
                                        <ImageInput
                                            source="thumb"
                                            label="?????????????????????? (???????????????????????? ???????????? 2????)"
                                            maxSize="2000000"
                                            accept="image/*"
                                            placeholder={
                                                <p>???????????????????? ???????? ????????</p>
                                            }
                                            validate={[required()]}
                                            style={defaultStyle}
                                        >
                                            <PreviewImage source="src" />
                                        </ImageInput>
                                    </>
                                )}

                                <TextInput
                                    label="???????????????????????? JavaScript ?????? (?????????? ????????????????)"
                                    source="timetablePageTopJs"
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    label="???????? HTML (?????????? ????????????????)"
                                    source="timetablePageTopHtml"
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    label="???????????????????????? JavaScript ?????? (???????? ????????????????)"
                                    source="timetablePageBottomJs"
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    label="???????? HTML (???????? ????????????????)"
                                    source="timetablePageBottomHtml"
                                    style={defaultStyle}
                                    multiline
                                />

                                <div style={{display: "flex"}}>
                                    <p
                                        style={{
                                            fontSize: "18px",
                                            fontFamily: "sans-serif",
                                            paddingTop: "7px",
                                            paddingRight: "15px",
                                            color: "#ccc",
                                        }}
                                    >
                                        https://mastervision.su/timetable/pages/
                                    </p>

                                    <TextInput
                                        source="url"
                                        label="???????????? ???? ?????????????? ????????????????"
                                        style={defaultStyle}
                                    />
                                </div>
                            </>
                        )}
                    </FormDataConsumer>
                </MuiPickersUtilsProvider>
            </SimpleForm>
        </Edit>
    );
};

export default TimetableEdit;
