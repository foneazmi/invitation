export const PB_BASE_URL = "xxxxxxx";

const getList = async (collection, params) => {
  const query = new URLSearchParams(params).toString();
  return fetch(
    `${PB_BASE_URL}/api/collections/${collection}/records?${query}`,
    {
      method: "GET",
    }
  ).then(async (response) => await response.json());
};

export const pb = {
  getList,
};
