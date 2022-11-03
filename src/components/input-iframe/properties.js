export default {
  src: {
    type: String,
  },
  label: {
    type: String,
  },
  focused: {
    type: String,
    attribute: true,
    converter: (value) => {
      return value === "true" ? true : false;
    },
  },
  valid: {
    type: String,
    attribute: true,
    converter: (value) => {
      return value === "true" ? true : false;
    },
  },
};
