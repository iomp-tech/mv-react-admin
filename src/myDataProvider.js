import { fetchUtils } from "react-admin";
import restServerProvider from 'ra-data-json-server';
import { format, isDate } from "date-fns";

export const servicesHost = 'https://api.iomp.ru/public/api';
//http://127.0.0.1:8000/api
//https://api.iomp.ru/public/api

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

		for (let key in params.data) {
			if (key === "thumb" || key === "avatar" || key === "icon") {
				formData.append(key, params.data[key].rawFile);
			} else if (key === "block") {
				formData.append('block', JSON.stringify(params.data[key]));

				for (let key2 in params.data[key]) {
					if (params.data[key][key2].thumbBlock) {
						formData.append('thumb-' + key2, params.data[key][key2].thumbBlock.rawFile);
					}
				}

			} else if (key === "date" || key === "dateDelete" || key === "minDate" || key === "maxDate") {
				formData.append(key, format(params.data[key], 'yyyy-MM-dd, HH:mm'));

			} else if (key === "content") {
				formData.append('content', JSON.stringify(params.data[key]));

				for (let key2 in params.data[key]) {
					if (params.data[key][key2].file) {
						formData.append('file-' + key2, params.data[key][key2].file.rawFile);
					}
				}
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
				if (key === "thumb" || key === "avatar" || key === "icon") {
					if (params.data[key].rawFile) {
						formData.append(key, params.data[key].rawFile);
					}
				} else if (key === "block") {
					formData.append('block', JSON.stringify(params.data[key]));

					for (let key2 in params.data[key]) {
						if (params.data[key][key2].thumbBlock) {
							formData.append('thumb-' + key2, params.data[key][key2].thumbBlock.rawFile);
						}
					}
				} else if (key === "date" || key === "dateDelete" || key === "minDate" || key === "maxDate") {
					if (isDate(params.data[key])) {
						formData.append(key, format(params.data[key], 'yyyy-MM-dd, HH:mm'));
					}
				} else if (key === "content") {
					formData.append('content', JSON.stringify(params.data[key]));

					for (let key2 in params.data[key]) {
						if (params.data[key][key2].file) {
							formData.append('file-' + key2, params.data[key][key2].file.rawFile);
						}
					}
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