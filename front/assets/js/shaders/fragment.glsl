#define PI 3.1415926535897932384626433832795

varying vec2 vUv;
uniform float uTime;
uniform float uWidth;
uniform float uHeight;
uniform vec3 uColor1;
uniform vec3 uColor2;

void main()
{
  vec2 st = vUv;
  vec2 size = vec2(uWidth, uHeight);
  vec2 pos = vec2(0.5);
  float radius = 0.8 * min(size.x, size.y);
  vec2 d = max(abs(st - pos) - size + vec2(radius), 0.0);
  float dist = length(d);
  float alpha = smoothstep(radius, 0.0, dist);
  vec3 color = mix(uColor2, uColor1, st.y * abs(sin(uTime/2.)));
  gl_FragColor = vec4(color, alpha);
}
  