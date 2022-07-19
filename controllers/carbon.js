// exports.getCarbon = async (req, res) => {
//   res.status(200).json({
//     message: "Carbon Test API is working!",
//   });
// };

exports.getCarbon = async (req, res) => {
  fetch("https://api.websitecarbon.com/site?url=google.com", {
    method: "GET",
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    })
    .then((data) => {
      console.log(data);
      setData(data);
    })
    .catch((error) => {
      console.error("error fetching data:", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
};

// exports.getTest = async (req, res) => {
//   res.status(200).json({
//     message: "Test API is working!",
//   });
// };

// exports.getCarbon = async (req, res) => {
//   res.status(200).json({
//     method: "GET",
//     headers: {
//       Accept: "applicaton/json",
//       "Access-Control-Allow-Headers": "*",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "*",
//       "Content-type": "application/json; charset=UTF-8",
//       "Content-Type": "application/json",
//     },
//     message: "Test API is working!",
//   });
// };
