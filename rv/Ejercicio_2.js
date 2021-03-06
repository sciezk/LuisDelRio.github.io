var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 20;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
var formaesf = new THREE.SphereGeometry(3, 20, 20);
var formacil = new THREE.CylinderGeometry(1, 1, 10, 20, 2, false);
var material = new THREE.MeshNormalMaterial();
var esfera = new THREE.Mesh(formaesf, material);
var cilindro = new THREE.Mesh( formacil, material);
esfera.position.y = 3;
cilindro.position.y = -1;
escena.add(esfera, cilindro);
renderizador.render( escena, camara);
