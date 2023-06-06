export default function getProps(obj) {
  let props = "";
  for (const [key, value] of Object.entries(obj)) {
    props += `${key}="${value}" `;
  }
  return props.trim();
}
