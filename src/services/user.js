import axios from "axios";
import urlGlobal from "../routes/BaseUrl";

var baseURL = urlGlobal.url;

axios.defaults.withCredentials = true;

const GetUserById = async () => {
    const { data } = await axios.post(`${baseURL}get-user-by-id`);
    return data;
}

const moduleExport = {
    GetUserById
}

export default moduleExport;