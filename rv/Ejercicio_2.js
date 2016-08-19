var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
var forma = new THREE.CylinderGeometry(5, 5, 20, 32);
var material = new THREE.MeshNormalMaterial();
var cilindro = new THREE.Mesh( forma, material);
cilindro.rotateX(-Math.PI/4);
escena.add(cilindro);
renderizador.render( escena, camara);
