export default function getImageUrl(name: string): string {
  return new URL(`../../static/${name}`, import.meta.url).href;
}
