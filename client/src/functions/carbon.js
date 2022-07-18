export const getCarbon = async () => {
  try {
    const res = await fetch(
      "https://api.websitecarbon.com/site?url=google.com",
      {
        method: "GET",
        headers: {
          Accept: "applicaton/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Content-type": "application/json; charset=UTF-8",
          "Content-Type": "application/json",
        },
      }
    );
    return await res.json();
  } catch (err) {}
};
