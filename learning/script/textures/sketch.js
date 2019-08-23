//Background
let BGgeometry = new THREE.BoxGeometry(WIDTH / 7, HEIGHT / 7, 1);
let BGmaterial = new THREE.MeshBasicMaterial({ color: "#433F81" });
let background = new THREE.Mesh(BGgeometry, BGmaterial);

scene.add(background);

//custon cursor

let cursorGeometry = new THREE.BoxGeometry(1, 1, 1);
let cursorMaterial = new THREE.MeshBasicMaterial({ color: "#ffffff" });
let cursor = new THREE.Mesh(cursorGeometry, cursorMaterial);

scene.add(cursor);

//light
let light = new THREE.PointLight(0xffffff);
light.position.set(0, 250, 0);
scene.add(light);

animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};
let x, y;

renderer.domElement.addEventListener("mousemove", e => {
  x = e.clientX - WIDTH / 2;
  y = HEIGHT / 2 - e.clientY;
  cursor.position.set(x, y, 1);
  console.log(e.clientX, x);
});
