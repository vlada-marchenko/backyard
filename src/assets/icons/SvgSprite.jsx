import sprite from "./sprite.svg?raw";

export default function SvgSprite() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: sprite.replace('class="hidden"', '') }}
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', left: -9999, top: -9999 }}
      aria-hidden="true"
    />
  );
}
