varying vec2 vUv;
uniform float uTime;
uniform float uWidth;
uniform float uHeight;
uniform vec3 uColor1;
uniform vec3 uColor2;

void main()
{
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  vUv = uv;
}