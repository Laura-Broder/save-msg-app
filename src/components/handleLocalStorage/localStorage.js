export const save = (list) => {
  localStorage.setItem("msgList", JSON.stringify(list));
  return list;
};

export const get = () => {
  return JSON.parse(localStorage.getItem("msgList"));
};
