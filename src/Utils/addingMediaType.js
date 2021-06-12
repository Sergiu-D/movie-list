export default function addingMediaType(data, mediaType) {
  console.log(
    "🚀 ~ file: addingMediaType.js ~ line 2 ~ addingMediaType ~ data",
    data
  );
  let modifiedDataObj = [];

  //Injecting property
  data.forEach((movie) => {
    modifiedDataObj.push(
      Object.assign({}, movie, {
        media_type: `${mediaType}`,
      })
    );
  });

  return modifiedDataObj;
}
