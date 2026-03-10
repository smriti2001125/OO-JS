// api.js

const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

// search for objects
export async function getMuseumSearch(query) {

    const url = `${BASE_URL}/search?q=${query}&hasImages=true`;

    const response = await fetch(url);
    const data = await response.json();

    return data.objectIDs || [];
}

// get details of one object
export async function getMuseumObject(objectId) {

    const url = `${BASE_URL}/objects/${objectId}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}