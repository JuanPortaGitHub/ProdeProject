export const getObjectToSubmit = (data) => {
  const keys = Object.keys(data);
  const values = Object.values(data);

  for (let key in keys) {
    console.log(keys[key]);
    const matchObject = keys[key];
    console.log(keys[key].substring(0, keys[key].indexOf("/")));
    const newObject = {
      idpartido: keys[key].substring(0, keys[key].indexOf("/")),
      golesLocal: values[key],
      golesVisitante: values[key],
    };
  }
  //   const newObject = keys.map((key, i) => ({
  //     ...key.substring(0, key.indexOf("/")),
  //   }));
  //   console.log(newObject);
};
