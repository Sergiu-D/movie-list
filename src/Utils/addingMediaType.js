export default function addingMediaType(data, mediaType) {
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
