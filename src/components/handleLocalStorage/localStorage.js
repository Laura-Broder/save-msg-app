export const save = (list) => {
  localStorage.setItem("msgList", JSON.stringify(list));
  return list;
};

export const get = () => {
  if (!localStorage.getItem("msgList")) {
    localStorage.setItem("msgList", JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem("msgList"));
};
