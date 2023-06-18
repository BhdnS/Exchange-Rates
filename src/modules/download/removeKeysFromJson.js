function removeKeysFromJson(data) {
  return data.map((item) => Object.values(item));
}

export default removeKeysFromJson;
