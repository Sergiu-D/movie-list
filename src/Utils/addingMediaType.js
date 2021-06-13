export default function addingMediaType(data, mediaType) {
  let modifiedDataObj = [];

  //Injecting property
  data.forEach((obj) => {
    modifiedDataObj.push(
      Object.assign({}, obj, {
        media_type: `${mediaType}`,
      })
    );
  });

  return modifiedDataObj;
}
