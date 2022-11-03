export default {
  label: {
    type: String,
  },
  inputDataInValid: {
    type: String,
    attribute: true,
    converter: (value) => {
      return value === "true" ? true : false;
    },
  },
};
