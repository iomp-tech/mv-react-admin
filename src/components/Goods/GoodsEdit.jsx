import React from "react";
import myDataProfider from "../.././myDataProvider";

import {
    Edit,
    SimpleForm,
    FormDataConsumer,
    TextInput,
    SelectInput,
    BooleanInput,
    SelectArrayInput,
    ImageInput,
    ArrayInput,
    SimpleFormIterator,
    required,
} from "react-admin";

import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

import {DateTimeInput} from "react-admin-date-inputs2";

import {defaultStyle, arrayInputStyle} from "../../style";

import {PreviewImage} from ".././";

const GoodsEdit = (props) => {
    const [categories, setCategories] = React.useState([]);
    const [timetype, setTimetype] = React.useState([]);
    const [teachers, setTeachers] = React.useState([]);
    const [teachersSection, setTeachersSection] = React.useState([]);
    const [type, setType] = React.useState([]);
    const [goods, setGoods] = React.useState([]);
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
            .getList("goodsTimetype", {
                pagination: {page: 1},
                sort: {order: "ASC"},
            })
            .then(({data}) => {
                setTimetype(data);
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
            .getList("goodsType", {
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
        <Edit {...props} title="?????????????????????????? ??????????">
            <SimpleForm redirect={false}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                    <FormDataConsumer>
                        {({formData}) => (
                            <>
                                <TextInput
                                    source="id_awo"
                                    label="ID ???????????? ???? ??????????????????????"
                                    type="number"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <SelectInput
                                    label="?????????????????????????? ???????????????? ?????????????????????? ???? ???????? ??????????"
                                    source="awo_shop"
                                    choices={[
                                        {
                                            key: "shop.mastervision.su",
                                            title: "shop.mastervision.su",
                                        },
                                        {
                                            key: "shop.mv-centr.ru",
                                            title: "shop.mv-centr.ru",
                                        },
                                    ]}
                                    optionValue="key"
                                    optionText="title"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="awo_shop_title"
                                    label="???????????????? ???????????????? ?????????????????????? ???? ???????? ??????????"
                                    type="text"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <TextInput
                                    source="title"
                                    label="???????????????? ????????????"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                <BooleanInput
                                    label="?????????????? ???? ???????????"
                                    source="expensive"
                                />
                                {formData.expensive && (
                                    <TextInput
                                        source="href"
                                        label="???????????? ???? ?????????????? ????????????????"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )}
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
                                <TextInput
                                    source="time"
                                    label="?????????? ??????????????????????"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                {timetype.length ? (
                                    <SelectInput
                                        label="?????? ??????????????"
                                        source="timeType"
                                        choices={timetype}
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
                                <TextInput
                                    source="searchTags"
                                    label="???????? ?????? ????????????"
                                    validate={[required()]}
                                    style={defaultStyle}
                                    multiline
                                />
                                <BooleanInput
                                    label="?????????????????? ?? ?????????????? ????????????"
                                    source="section"
                                    style={defaultStyle}
                                />
                                <BooleanInput
                                    label="???????????? ???? ??????????"
                                    source="salebool"
                                />
                                {formData.salebool && (
                                    <>
                                        <TextInput
                                            source="sale"
                                            label="?????????? ????????????"
                                            type="number"
                                            validate={[required()]}
                                            style={defaultStyle}
                                        />
                                    </>
                                )}
                                <TextInput
                                    source="price"
                                    label="???????????? ???????? ???? ?????????????? ?????? ???????????? ????????"
                                    type="number"
                                    validate={[required()]}
                                    style={defaultStyle}
                                />
                                {formData.salebool && (
                                    <TextInput
                                        source="priceOld"
                                        label="???????? ?????? ????????????"
                                        type="number"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )}
                                {formData.expensive && (
                                    <TextInput
                                        source="expensiveText"
                                        label="?????????? ?? ???????? ?? ???????????? ????????????"
                                        validate={[required()]}
                                        style={defaultStyle}
                                    />
                                )}
                                <BooleanInput
                                    label="?????????? ???? ???????????"
                                    source="visibility"
                                />

                                <ImageInput
                                    source="thumb"
                                    label="?????????????????????? (???????????????????????? ???????????? 2????)"
                                    maxSize="2000000"
                                    accept="image/*"
                                    placeholder={<p>???????????????????? ???????? ????????</p>}
                                    style={defaultStyle}
                                >
                                    <PreviewImage source="src" />
                                </ImageInput>

                                <TextInput
                                    label="???????????????????????? JavaScript ?????? (?????????? ????????????????)"
                                    source="shopPageTopJs"
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    label="???????? HTML (?????????? ????????????????)"
                                    source="shopPageTopHtml"
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    label="???????????????????????? JavaScript ?????? (???????? ????????????????)"
                                    source="shopPageBottomJs"
                                    style={defaultStyle}
                                    multiline
                                />
                                <TextInput
                                    label="???????? HTML (???????? ????????????????)"
                                    source="shopPageBottomHtml"
                                    style={defaultStyle}
                                    multiline
                                />

                                <div
                                    style={{
                                        display: "flex",
                                        ...defaultStyle,
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: "18px",
                                            fontFamily: "sans-serif",
                                            paddingTop: "7px",
                                            paddingRight: "15px",
                                            color: "#ccc",
                                        }}
                                    >
                                        https://mastervision.su/shop/pages/
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

export default GoodsEdit;
