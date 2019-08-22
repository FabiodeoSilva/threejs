// Create a Cube Mesh with basic material
let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: "#433F81" });
let cube = new THREE.Mesh(geometry, material);

scene.add(cube);
