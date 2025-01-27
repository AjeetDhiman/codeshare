import client from "../utils/sanityClient";

export const getSanityMenuData = async () => {
  try {
    const data = await client.fetch(
      '*[_type == "menu"] | order(sortOrder asc) ',
    );
    return data;
  } catch (error) {
    console.error("Error fetching Sanity data:", error);
    throw error;
  }
};

export const getDropDownMenuData = async (slug) => {
  const query = `*[_type == "dropdowns" && slug.current == $slug][0]{
    action,
    marker,
    dropdownList[] {
      url,
      menuName,
      menuOrder
    }
  }`;
  const params = { slug };
  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error("Error fetching Sanity data:", error);
    throw error;
  }
};
