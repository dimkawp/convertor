// list
import list from './current_list.json';

const currencies = Object.keys(list.currencies).join(',');

const api = {
    requestOptions: () => {
        let myHeaders = new Headers();
        myHeaders.append("apikey", "zTcFA4bw9KesU5PV65HczovL0QPRjhdp");
        return {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        }
    },
	getConvert: async (data, setResponse) => {
        const { value, currency, to } = data;
		fetch(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${currency.toUpperCase()}&amount=${value}`, api.requestOptions())
            .then(response => response.text())
            .then(result => setResponse(JSON.parse(result)))
	},
    getList: async (source, setResponse) => {
		fetch(`https://api.apilayer.com/currency_data/live?source=${source}&currencies=${currencies}`, api.requestOptions())
            .then(response => response.text())
            .then(result => setResponse(JSON.parse(result)))
	}
}

export default api;
