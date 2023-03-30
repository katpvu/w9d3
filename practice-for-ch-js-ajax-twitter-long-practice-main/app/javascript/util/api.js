const csrfToken = document.querySelector("meta[name=csrf-token]").content;

export async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    "X-CSRF-Token": csrfToken,
    Accept: "application/json",
    ...options.headers
  };
  let response = await fetch(url, options)
  console.log(response.ok, "response")
  if (response.ok) {
    console.log("response ok")
    return response.json()
  } else {
    console.log("response not ok")
    throw response
  }
  // return await fetch(url, options);
}

export function followUser(id) {
  let path = `/users/${id}/follow`;
  let options = {
    method: "post",
  }

  return customFetch(path, options);
}

export function unfollowUser(id) {
  console.log("calling unfollowUser")
  let path = `/users/${id}/follow`;
  let options = {
    method: "delete",
  }

  return customFetch(path, options);
}
