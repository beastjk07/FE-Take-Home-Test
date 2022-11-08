export async function api(url) {
  let response = await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

  return response;
}
