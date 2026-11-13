export function buildPlanet({ THREE, radius, detail }) {
  const segments = detail === "near" ? 128 : 32;
  const root = new THREE.Group();
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, segments / 2),
    new THREE.MeshStandardMaterial({ color: 0xff9861, roughness: 0.82 })
  );
  sphere.name = "surface";
  sphere.userData.astraSurface = true;
  root.add(sphere);
  return root;
}
