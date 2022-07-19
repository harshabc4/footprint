export const getCarbon = async () => {
  try {
    const res = await fetch("site?url=google.com", {
      method: "GET",
      headers: {
        Accept: "applicaton/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await res.json();
  } catch (err) {}
};

// useEffect(() => {
//   fetch("/site?url=google.com", {
//     method: "GET",
//     headers: {
//       "Access-Control-Allow-Headers": "*",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "*",
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       throw res;
//     })
//     .then((data) => {
//       console.log(data);
//       setData(data);
//     })
//     .catch((error) => {
//       console.error("error fetching data:", error);
//       setError(error);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }, []);
