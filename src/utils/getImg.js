export default function getImageUrl(name) {
  return new URL(`../../static/${name}`, import.meta.url).href;
}
