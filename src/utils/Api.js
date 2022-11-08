export async function getApi(url) {
  let response = await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

  return response;
}

export async function postApi(url, formData) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  let resStatus = fetch(url, requestOptions).then((res) => res.status);

  return resStatus;
}
