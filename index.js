//import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 5000);
const renderer = new THREE.WebGLRenderer({antialias: true});



const points = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1, 1, 1),
    new THREE.Vector3(2, 2, 2),
]

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const materiall = new THREE.LineBasicMaterial({color: 0xdddddd});

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, materiall);
scene.add(line);

const ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);

//OrbitControls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();
// controls.enableDamping = true;
// controls.minDistance = 40;

function animate() {
    requestAnimationFrame(animate);
    //controls.update();
    renderer.render(scene, camera);
}
animate();
