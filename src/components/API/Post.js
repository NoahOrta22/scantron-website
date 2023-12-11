//
//  Takes in a raw dictionary and the URL to the API and makes a post request
//
//
export async function APIPost(raw, URL) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myBody = JSON.stringify(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: myBody,
      redirect: "follow",
    };

    const response = await fetch("http://127.0.0.1:8000/" + URL, requestOptions);

    if (!response.ok) {
      // If the response is not OK (status code other than 2xx), throw an error.
      throw new Error(`Registration failed with status: ${response.status}`);
    }

    const result = await response.text();
    console.log(result);
  };