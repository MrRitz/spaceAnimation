//import * as THREE from 'https://cdn.skypack.dev/three@0.129.0';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, innerWidth / innerHeight, .1, 1500);
const light = new THREE.DirectionalLight( 0xffffff, 1);
light.position.set(0, 1, 1);
const backLight = new THREE.DirectionalLight( 0xffffff, 1);
backLight.position.set(0, 0, -1);
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setPixelRatio(window.devicePixelRatio)
scene.add(light);
scene.add(backLight);



renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio); 
document.body.appendChild(renderer.domElement);
camera.position.z = 200;



const starsGeo = new THREE.BufferGeometry()
const starMaterial = new THREE.PointsMaterial({color: 0xffffff, size: 1, sizeAttenuation: false})
const stars = new THREE.Points(starsGeo, starMaterial)
const starVert = [] 
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() -0.5) * 2000
    const y = (Math.random() -0.5) * 2000
    const z = -Math.random() * 5000
    starVert.push(x,y,z)
}
starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVert, 3))

scene.add(stars)

const mercury = new THREE.Mesh(new THREE.SphereGeometry(.5, 50, 50), new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/mercury.jpg') }))
mercury.position.x = 4
mercury.position.y = 0
mercury.position.z = -100
scene.add(mercury)

const venus = new THREE.Mesh(new THREE.SphereGeometry(4, 50, 50), new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/venus.jpg') }))
venus.position.x = 6
venus.position.y = 0
venus.position.z = -250
scene.add(venus)


const moon = new THREE.Mesh(new THREE.SphereGeometry(.5, 50, 50), new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/moon.jpg') }))
moon.position.x = 12
moon.position.y = 2
moon.position.z = -380
scene.add(moon)

const earth = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/earth2.jpg') }))
earth.position.x = 8
earth.position.y = 2
earth.position.z = -400

scene.add(earth)

const mars = new THREE.Mesh(new THREE.SphereGeometry(2, 50, 50), new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/mars.jpg') }))
mars.position.x = 10
mars.position.y = 4
mars.position.z = -550

scene.add(mars)

const jupiter = new THREE.Mesh(new THREE.SphereGeometry(20, 50, 50), new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/jupiter.jpg')}))
jupiter.position.x = 12
jupiter.position.y = 8
jupiter.position.z = -700
scene.add(jupiter)

const saturn = new THREE.Mesh(new THREE.SphereGeometry(18, 50, 50), new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/saturn.jpg')}))
saturn.position.set(14, 10, -850)
scene.add(saturn)

const saturnRings = new THREE.RingGeometry(20, 25, 40)
const ringMaterial = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/saturnrings.jpg'), side: THREE.DoubleSide})
const saturnMesh = new THREE.Mesh(saturnRings, ringMaterial);
saturnMesh.position.set(14,10,-845)
saturnMesh.rotation.x = 5.3
scene.add(saturnMesh)



const uranus = new THREE.Mesh(new THREE.SphereGeometry(6, 50, 50), new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/uranus.jpg')}))
uranus.position.set(16, 12, -1000)
scene.add(uranus)

const neptune = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/neptune.jpg')}))
neptune.position.set(18, 14, -1150)
scene.add(neptune)

const pluto = new THREE.Mesh(new THREE.SphereGeometry(1, 50, 50), new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/pluto.jpg')}))
pluto.position.set(20, 16, -1300)
scene.add(pluto)



const shootingStar = new THREE.Mesh(new THREE.SphereGeometry(.7, 50, 50), new THREE.MeshBasicMaterial({color: 0xffffff }))
shootingStar.position.set(120, 120, -250)
scene.add(shootingStar)

const shootingStar2 = new THREE.Mesh(new THREE.SphereGeometry(.8, 50, 50), new THREE.MeshBasicMaterial({color: 0xffffff }))
shootingStar2.position.set(120, 120, -450)
scene.add(shootingStar2)


const blackHole = new THREE.Mesh(new THREE.SphereGeometry(20, 50, 50), new THREE.MeshBasicMaterial({color: 0x000000 }))
blackHole.position.set(50, 50, -100)
scene.add(blackHole)

const galaxy = new THREE.Mesh(new THREE.CircleGeometry(5, 32), new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/galaxy.jpg') }))
galaxy.position.set(-50, -100, 70)
scene.add(galaxy)

const sun = new THREE.Mesh(new THREE.SphereGeometry(500, 50, 50), new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/sun.jpg')}))
sun.position.set(-750, 20, -1000)
scene.add(sun)


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    camera.position.z += -.25
   

    mercury.rotation.y += -.01
    mercury.position.x += -.004
    mercury.position.y += .001
   

    venus.rotation.y += -.01
    venus.position.x += -.003
    venus.position.y += .0007
  

    earth.rotation.y += -.01
    earth.position.x += -.005
    earth.position.y += .001
   

    moon.rotation.y += -.01
    moon.position.x += -.005
    moon.position.y += .001
    moon.position.z += -.001

    mars.rotation.y += -.02
    mars.position.x += -.005
    mars.position.y += .001
   

    jupiter.rotation.y += -.02
    jupiter.position.x += -.005
    jupiter.position.y += .005
   

    saturn.rotation.y += -.02
    saturn.position.x += -.005
    saturn.position.y += .005
    

    saturnMesh.rotation.z += -.02
    saturnMesh.position.x += -.005
    saturnMesh.position.y += .005
    

    uranus.rotation.y += -.02
    uranus.position.x += -.003
    uranus.position.y += .001

    neptune.rotation.y += -.02
    neptune.position.x += -.004
    neptune.position.y += .0004

    pluto.rotation.y += -.02
    pluto.position.x += -.004
    pluto.position.y += -.002
    

    galaxy.rotation.z += .008
    galaxy.position.z += -.25
    galaxy.position.y += .0001

    shootingStar.position.x += -.5
    shootingStar.position.y += -.5
    shootingStar.position.z += .5

    shootingStar2.position.x += -.81
    shootingStar2.position.y += -.80
    shootingStar2.position.z += 4.1
   
    stars.rotation.z += .0005
    stars.position.z += .5

    sun.rotation.y += -.002
    sun.position.z += -.25

    blackHole.position.x += -.2
    blackHole.position.y += -.2
}

animate();

window.addEventListener('resize', function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}); 