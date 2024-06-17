import ApiClient from "./ApiClient"

export const getDataByQueryParams = async ({ pathname = "", queryParams = {} }) => {
    try {
        const res = await ApiClient.get(pathname, {
            params: queryParams
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
};