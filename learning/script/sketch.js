const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

let scene, camera, renderer;

const init = () => {
  //scene
  scene = new THREE.Scene();

  //camera
  camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
  camera.position.z = 4;

  //renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setClearColor("#000000");
  renderer.setSize(WIDTH, HEIGHT);

  document.body.appendChild(renderer.domElement);
};

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

init();
animate();
