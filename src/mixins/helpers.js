export function dataCreator({ text, author, genre, dateUpdate = null }) {
  return {
    id: "id" + Math.random().toString(16).slice(2),
    text: text,
    author: author,
    genre: genre,
    dateCreate: new Date().toLocaleString(),
    dateUpdate: dateUpdate,
  };
}
