const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

let scene, camera, renderer, controls;

const init = () => {
  //scene
  scene = new THREE.Scene();

  //camera
  camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
  camera.position.z = 4;

  //renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setClearColor("#000000");
  renderer.setSize(WIDTH, HEIGHT);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  camera.position.set(0, 20, 100);
  controls.update();

  document.body.appendChild(renderer.domElement);
};

let animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

init();
animate();
