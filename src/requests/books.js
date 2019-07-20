import { BOOK_DATA_ENDPOINT } from "../../config";

export const fetchByTitle = title => {
  return fetch(`${BOOK_DATA_ENDPOINT}/google-books/title/${title}`)
    .then(res => res.json())
    .then(json => {
      return json;
    })
    .catch(err => {
      console.error(err);
    });
};

export const fetchByISBN = isbn => {
  return fetch(`${BOOK_DATA_ENDPOINT}/google-books/isbn/${isbn}`)
    .then(res => res.json())
    .then(json => {
      return json;
    })
    .catch(err => {
      console.error(err);
    });
};
