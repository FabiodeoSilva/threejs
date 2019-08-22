const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

//scene
const scene = new THREE.Scene();
const textureCube = new THREE.CubeTextureLoader()
  .setPath("textures/cube/Park3Med/")
  .load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);
scene.background = textureCube;

//lights
const ambient = new THREE.AmbientLight(0xffffff);
scene.add(ambient);

const pointLight = new THREE.PointLight(0xffffff, 2);
scene.add(pointLight);

//light representation
let lightSphere = new THREE.SphereBufferGeometry(100, 16, 8);
let lightMesh = new THREE.Mesh(
  lightSphere,
  new THREE.MeshBasicMaterial({ color: 0xffffff })
);
lightMesh.scale.set(0.05, 0.05, 0.05);
pointLight.add(lightMesh);

//camera
const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
camera.position.z = 270;

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

//Glass Box
const gbGeo = new THREE.BoxGeometry(WIDTH / 6, HEIGHT / 6, 20);
/*const gbMat = new THREE.MeshBasicMaterial({
  color: 0x30aaff,
  envMap: scene.background,
  refractionRatio: 0.95
});
gbMat.envMap.mapping = THREE.CubeRefractionMapping;*/
const glassMaterial = THREE.MeshPhongMaterial({
  color: 0xccddff,
  envMap: textureCube,
  refractionRatio: 0.98,
  reflectivity: 0.9
});

const gbMat = new THREE.MeshNormalMaterial({ wireframe: true });
const glassBox = new THREE.Mesh(gbGeo, glassMaterial);

scene.add(glassBox);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
