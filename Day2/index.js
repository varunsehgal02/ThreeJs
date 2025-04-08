// Scene
const scene = new THREE.Scene();

// Box geometry and material
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// Size setup
const size = {
  width: 700,
  height: 500,
};

// Camera setup
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 5; 
camera.position.x =  3;
camera.position.y = 2;

scene.add(camera);

// Renderer
const target = document.querySelector(".wbgl");
const renderer = new THREE.WebGLRenderer({ canvas: target });
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
