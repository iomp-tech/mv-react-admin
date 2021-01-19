import { fetchUtils } from "react-admin";
import restServerProvider from 'ra-data-json-server';
import moment from "moment";
import "moment/locale/ru";

//https://iomp.ru/api/public/api
export const servicesHost = 'http://127.0.0.1:8000/api';

const httpClient = (url, options = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: 'application/json' });
	}
	const token = sessionStorage.getItem('token');
	options.headers.set('Authorization', `Bearer ${token}`);
	return fetchUtils.fetchJson(url, options);
};

const dataProvider = restServerProvider(servicesHost, httpClient);

const myDataProfider = {
	...dataProvider,
	create: (resource, params) => {
		let formData = new FormData();

		console.log(params);

		for (let key in params.data) {
			if (key === "thumb" || key === "avatar") {
				formData.append(key, params.data[key].rawFile);
			} else if (key === "block") {
				formData.append('block', JSON.stringify(params.data[key]));

				for (let key2 in params.data[key]) {
					formData.append('thumb-' + key2, params.data[key][key2].thumbBlock.rawFile);
				}

			} else if (key === "content") {
				formData.append('content', JSON.stringify(params.data[key]));

				for (let key2 in params.data[key]) {
					if (params.data[key][key2].file) {
						formData.append('file-' + key2, params.data[key][key2].file.rawFile);
					}
				}
			} else if (key === "date" || key === "dateDelete") {
				const d = moment(params.data[key], "YYYY-MM-DDTHH:mm")
					.locale("ru")
					.format("DD.MM.YYYY HH:mm");
				formData.append(key, d);
			} else {
				formData.append(key, params.data[key]);
			}
		}

		return httpClient(`${servicesHost}/${resource}`, {
			method: 'POST',
			body: formData,
		}).then(({ json }) => {
			if (json.error) {
				sessionStorage.removeItem("token");

				return false;
			}
			return {
				data: { ...params.data, id: json.id }
			};
		});
	},
	update: (resource, params) => {
		let formData = new FormData();

		for (let key in params.data) {
			if (params.data[key]) {
				if (key === "thumb" || key === "avatar") {
					if (params.data[key].rawFile) {
						formData.append(key, params.data[key].rawFile);
					}
				} else if (key === "block") {
					formData.append('block', JSON.stringify(params.data[key]));

					for (let key2 in params.data[key]) {
						if (params.data[key][key2].thumbBlock.rawFile) {
							formData.append('thumb-' + key2, params.data[key][key2].thumbBlock.rawFile);
						}
					}
				} else if (key === "content") {
					formData.append('content', JSON.stringify(params.data[key]));

					for (let key2 in params.data[key]) {
						if (params.data[key][key2].file) {
							formData.append('file-' + key2, params.data[key][key2].file.rawFile);
						}
					}
				} else if (key === "date" || key === "dateDelete") {
					const d = moment(params.data[key], "YYYY-MM-DDTHH:mm")
						.locale("ru")
						.format("DD.MM.YYYY HH:mm");
					formData.append(key, d);
				} else {
					formData.append(key, params.data[key]);
				}
			}
		}

		formData.append("_method", "PUT");

		return httpClient(`${servicesHost}/${resource}/${params.data.id}`, {
			method: 'POST',
			body: formData,
		}).then(({ json }) => ({ data: { ...params.data, id: json.id } }));
	},
	getOne: (resource, params) => {
		return httpClient(`${servicesHost}/${resource}/${params.id}`).then(({ json }) => ({ data: json }));
	}
};

export default myDataProfider;