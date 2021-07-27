import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// Off the bat, the camera is going to be placed at the middle of the scene,
// To get a better perspective on our scene, we need to move the camera back a little bit

// Torus Knot shape
const geomotry = new THREE.TorusKnotGeometry(20, 8, 120, 32);
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});
const torusKnot = new THREE.Mesh(geomotry, material);
torusKnot.position.set(-150, -50, -120);
scene.add(torusKnot);

// point lights
const pointLight1 = new THREE.PointLight(0xffffff);
pointLight1.position.set(15, 15, 15);
const pointLight2 = new THREE.PointLight(0xffffff);
pointLight2.position.set(-50, -45, -30);
const pointLight3 = new THREE.PointLight(0xffffff);
pointLight3.position.set(55, -50, -160);
const lightHelper = new THREE.PointLightHelper(pointLight2);
scene.add(pointLight1, pointLight3, lightHelper);
const controls = new OrbitControls(camera, renderer.domElement);

function randomCircle() {
  const geomotry = new THREE.SphereGeometry(0.25, 24, 24);
  //   const geomotry = new THREE.TubeGeometry(THREE.Curve(THREE.Vector2));
  const material = new THREE.MeshStandardMaterial(0xffffff);
  const shape = new THREE.Mesh(geomotry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  shape.position.set(x, y, z);
  scene.add(shape);
}
Array(200).fill().forEach(randomCircle);

function randomTorusKnot() {
  const [w, x, y, z] = Array(4)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(5, 80));
  const geomotry = new THREE.TorusKnotGeometry(w, x, y, z);
  const material = new THREE.MeshBasicMaterial(0xffffff);
  const knot = new THREE.Mesh(geomotry, material);

  const [a, b, c] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(24));
  knot.position.set(a, b, c);

  scene.add(knot);
}
Array(50).fill().forEach(randomTorusKnot);

const cubeTexture = new THREE.TextureLoader().load(
  `${process.env.PUBLIC_URL}/imgs/cubes.png`
);
scene.background = cubeTexture;

export function animate() {
  requestAnimationFrame(animate);

  torusKnot.rotation.x += 0.002;
  torusKnot.rotation.y += 0.002;

  controls.update();

  renderer.render(scene, camera);
}

window.scroll(0, 0);
let lastScrollTop = 0;
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.005;

  // or window.addEventListener("scroll"....
  const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    // downscroll code
    torusKnot.position.z -= 1;
  } else {
    // upscroll code
    torusKnot.position.z += 1;
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}

document.body.onscroll = moveCamera;
