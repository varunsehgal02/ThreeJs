import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();
scene.add(group);
group.position.y = 2;

/**
 * Objects
 */
const box1 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: "red" })
);
box1.position.x = -3;
group.add(box1);

const box2 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: "blue" })
);
box2.position.x = 0;
group.add(box2);

const box3 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: "yellow" })
);
box3.position.x = 3;
group.add(box3);

// Group transformations (optional)
// group.position.y = 1;
// group.scale.set(1, 2, 1);
// group.rotation.y = Math.PI / 4;

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(1, 0, 10);
scene.add(camera);

// Look at the group
camera.lookAt(group.position);

// Vector calculation example
console.log(box1.position.distanceTo(camera.position));

/**
 * Helpers
 */
const axisHelper = new THREE.AxesHelper(5);
// scene.add(axisHelper);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
