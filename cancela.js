function createCancela() {
    const group = new THREE.Group();
    
    // Criar o loader de texturas
    const textureLoader = new THREE.TextureLoader();

    // Base da cancela com textura e furos nas faces Z
    const baseGeometry = new THREE.BoxGeometry(3.5, 0.6, 2);
    const baseTexture = textureLoader.load('tx-md1.png');
    baseTexture.wrapS = THREE.RepeatWrapping;
    baseTexture.wrapT = THREE.RepeatWrapping;
    baseTexture.repeat.set(1, 1);
// Criar textura com furo quadrado para a face frontal (z positivo)
const canvasFront = document.createElement('canvas');
canvasFront.width = 256;
canvasFront.height = 256;
const contextFront = canvasFront.getContext('2d');
contextFront.fillStyle = 'rgba(255, 255, 255, 1)';
contextFront.fillRect(0, 0, 256, 256);
contextFront.globalCompositeOperation = 'destination-out';
contextFront.fillStyle = 'rgba(0, 0, 0, 1)';
contextFront.fillRect(205 - 20, 128 - 20, 25, 60); // Furo quadrado (retângulo) centralizado
const alphaTextureFront = new THREE.CanvasTexture(canvasFront);

// Criar textura com furo oval para a face traseira (z negativo)
const canvasBack = document.createElement('canvas');
canvasBack.width = 256;
canvasBack.height = 256;
const contextBack = canvasBack.getContext('2d');
contextBack.fillStyle = 'rgba(255, 255, 255, 1)';
contextBack.fillRect(0, 0, 256, 256);
contextBack.globalCompositeOperation = 'destination-out';
contextBack.beginPath();
contextBack.ellipse(58, 200 - 80, 8.5, 30, 0, 0, Math.PI * 2); // Furo oval centralizado
contextBack.fill();
const alphaTextureBack = new THREE.CanvasTexture(canvasBack);

    // Materiais para cada face da base (6 faces no total)
    const baseMaterials = [
        new THREE.MeshPhongMaterial({ map: baseTexture, color: 0x8B4513, shininess: 30 }), // +x
        new THREE.MeshPhongMaterial({ map: baseTexture, color: 0x8B4513, shininess: 30 }), // -x
        new THREE.MeshPhongMaterial({ map: baseTexture, color: 0x8B4513, shininess: 30 }), // +y
        new THREE.MeshPhongMaterial({ map: baseTexture, color: 0x8B4513, shininess: 30 }), // -y
        new THREE.MeshPhongMaterial({ map: baseTexture, alphaMap: alphaTextureFront, transparent: true, color: 0x8B4513, shininess: 30 }), // +z (frente, furo quadrado)
        new THREE.MeshPhongMaterial({ map: baseTexture, alphaMap: alphaTextureBack, transparent: true, color: 0x8B4513, shininess: 30 })  // -z (trás, furo redondo)
    ];

    const base = new THREE.Mesh(baseGeometry, baseMaterials);
    base.position.y = -0.3;
    group.add(base);

    // Base vertical com texturas por face e furos nas laterais
    const postGeometry = new THREE.BoxGeometry(0.1, 1.5, 2);

    // Criar textura com furo para a face esquerda (x negativo)
    const canvasLeft = document.createElement('canvas');
    canvasLeft.width = 256;
    canvasLeft.height = 256;
    const contextLeft = canvasLeft.getContext('2d');
    contextLeft.fillStyle = 'rgba(255, 255, 255, 1)';
    contextLeft.fillRect(0, 0, 256, 256);
    contextLeft.globalCompositeOperation = 'destination-out';
    contextLeft.beginPath();
    contextLeft.arc(206, 180, 15, 0, Math.PI * 2);
    contextLeft.fill();
    const alphaTextureLeft = new THREE.CanvasTexture(canvasLeft);

    // Criar textura com furo para a face direita (x positivo)
    const canvasRight = document.createElement('canvas');
    canvasRight.width = 256;
    canvasRight.height = 256;
    const contextRight = canvasRight.getContext('2d');
    contextRight.fillStyle = 'rgba(255, 255, 255, 1)';
    contextRight.fillRect(0, 0, 256, 256);
    contextRight.globalCompositeOperation = 'destination-out';
    contextRight.beginPath();
    contextRight.arc(56, 180, 15, 0, Math.PI * 2);
    contextRight.fill();
    const alphaTextureRight = new THREE.CanvasTexture(canvasRight);

    // Textura base para todas as faces
    const postTexture = textureLoader.load('tx-md2.png');
    postTexture.wrapS = THREE.RepeatWrapping;
    postTexture.wrapT = THREE.RepeatWrapping;
    postTexture.repeat.set(1, 0.75);

    // Materiais para cada face da base (6 faces no total)
    const materials = [
        new THREE.MeshPhongMaterial({ map: postTexture, alphaMap: alphaTextureRight, transparent: true, color: 0x8B4513, shininess: 30 }), // +x
        new THREE.MeshPhongMaterial({ map: postTexture, alphaMap: alphaTextureLeft, transparent: true, color: 0x8B4513, shininess: 30 }),  // -x
        new THREE.MeshPhongMaterial({ map: postTexture, color: 0x8B4513, shininess: 30 }), // +y
        new THREE.MeshPhongMaterial({ map: postTexture, color: 0x8B4513, shininess: 30 }), // -y
        new THREE.MeshPhongMaterial({ map: postTexture, color: 0x8B4513, shininess: 30 }), // +z
        new THREE.MeshPhongMaterial({ map: postTexture, color: 0x8B4513, shininess: 30 })  // -z
    ];

    // Base vertical com texturas por face
    const post = new THREE.Mesh(postGeometry, materials);
    post.position.set(1, 0.75, 0);
    group.add(post);   

    // Servo motor
    const bar1Geometry = new THREE.BoxGeometry(0.6, 0.7, 0.3);
    const bar1Material = new THREE.MeshPhongMaterial({ 
        color: 0x0000FF,
        transparent: true,
        opacity: 0.9
    });       
    const bar1 = new THREE.Mesh(bar1Geometry, bar1Material);
    bar1.position.set(0.6, 0.45, 0.6);
    group.add(bar1);

    const bar2Geometry = new THREE.BoxGeometry(0.1, 1, 0.3);
    const bar2 = new THREE.Mesh(bar2Geometry, bar1Material);
    bar2.position.set(0.95, 0.45, 0.6);
    group.add(bar2);   

    const bar3Geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.2, 32);
    const bar3Material = new THREE.MeshPhongMaterial({ color: 0xD3D3D3 });
    const bar3 = new THREE.Mesh(bar3Geometry, bar3Material);
    bar3.position.set(1.1, 0.6, 0.56);
    bar3.rotation.z = Math.PI / 2;
    group.add(bar3);

    // Barra vertical 1
    const bar4Geometry = new THREE.BoxGeometry(0.05, 1.3, 0.2);
    const bar4Material = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
    const bar4 = new THREE.Mesh(bar4Geometry, bar4Material);
    bar4.position.set(1.1, 1.5, -0.05);
    group.add(bar4);

    // Barra vertical 2
    const bar5 = new THREE.Mesh(bar4Geometry, bar4Material);
    bar5.position.set(1.1, 1.2, 0.56);
    group.add(bar5);

    // Arredondamento das pontas (cilíndrica)
    const bar6Geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.05, 32);
    const bar6Material = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
    const bar6 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar6.position.set(1.1, 0.55, 0.56);
    bar6.rotation.z = Math.PI / 2;
    group.add(bar6);

    const bar7 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar7.position.set(1.1, 1.85, 0.56);
    bar7.rotation.z = Math.PI / 2;
    group.add(bar7);

    const bar8 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar8.position.set(1.1, 2.15, -0.05);
    bar8.rotation.z = Math.PI / 2;
    group.add(bar8);

    const bar9 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar9.position.set(1.1, 0.85, -0.05);
    bar9.rotation.z = Math.PI / 2;
    group.add(bar9);

    // Barra horizontal 1
    const bar10Geometry = new THREE.BoxGeometry(0.05, 0.7, 0.2);
    const bar10Material = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
    const bar10 = new THREE.Mesh(bar10Geometry, bar10Material);
    bar10.position.set(1, 2, 0.25);
    bar10.rotation.x = 2.05;
    group.add(bar10);

    // Arredondamento
    const bar11 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar11.position.set(1, 2.157, -0.05);
    bar11.rotation.z = Math.PI / 2;
    group.add(bar11);

    const bar12 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar12.position.set(1, 1.845, 0.55);
    bar12.rotation.z = Math.PI / 2;
    group.add(bar12);

    // Espaçadores
    const bar13 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar13.position.set(1.05, 2.157, -0.045);
    bar13.rotation.z = Math.PI / 2;
    group.add(bar13);

    const bar14 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar14.position.set(1.15, 2.15, -0.045);
    bar14.rotation.z = Math.PI / 2;
    group.add(bar14);

    // Parafuso Phillips
    const screwGroup = new THREE.Group();

    // Cabeça do parafuso (cilíndrica com entalhe Phillips simulado via textura)
    const headGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.03, 32);
    const headCanvas = document.createElement('canvas');
    headCanvas.width = 256;
    headCanvas.height = 256;
    const headContext = headCanvas.getContext('2d');
    headContext.fillStyle = '#808080'; // Cor da cabeça
    headContext.fillRect(0, 0, 256, 256);
    // Desenhar o entalhe Phillips (cruz)
    headContext.fillStyle = '#606060'; // Cor mais escura para o entalhe
    headContext.fillRect(108, 0, 40, 256); // Linha vertical da cruz
    headContext.fillRect(0, 108, 256, 40); // Linha horizontal da cruz
    const headTexture = new THREE.CanvasTexture(headCanvas);
    headTexture.wrapS = THREE.RepeatWrapping;
    headTexture.wrapT = THREE.RepeatWrapping;
    headTexture.repeat.set(1, 1);
    const screwMaterial = new THREE.MeshPhongMaterial({ map: headTexture, color: 0x808080, shininess: 30 });
    const head = new THREE.Mesh(headGeometry, screwMaterial);
    head.position.set(0, 0.015, 0); // Centro da cabeça
    screwGroup.add(head);

    // Corpo roscado
    const bodyGeometry = new THREE.CylinderGeometry(0.025, 0.025, 0.1, 32);
    const threadCanvas = document.createElement('canvas');
    threadCanvas.width = 256;
    threadCanvas.height = 256;
    const threadContext = threadCanvas.getContext('2d');
    threadContext.fillStyle = '#808080';
    threadContext.fillRect(0, 0, 256, 256);
    threadContext.strokeStyle = '#606060';
    threadContext.lineWidth = 5;
    for (let i = 0; i < 10; i++) {
        threadContext.beginPath();
        threadContext.moveTo(0, i * 25);
        threadContext.lineTo(256, (i + 1) * 25);
        threadContext.stroke();
    }
    const threadTexture = new THREE.CanvasTexture(threadCanvas);
    threadTexture.wrapS = THREE.RepeatWrapping;
    threadTexture.wrapT = THREE.RepeatWrapping;
    threadTexture.repeat.set(1, 2);
    const bodyMaterial = new THREE.MeshPhongMaterial({ map: threadTexture, color: 0x808080 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, -0.05, 0); // Abaixo da cabeça
    screwGroup.add(body);

    // Ponta do parafuso
    const tipGeometry = new THREE.CylinderGeometry(0, 0.025, 0.03, 32);
    const tip = new THREE.Mesh(tipGeometry, screwMaterial);
    tip.position.set(0, -0.11, 0); // Abaixo do corpo
    tip.rotation.z = Math.PI / 1;
    screwGroup.add(tip);    

    // Posicionar e rotacionar o parafuso
    screwGroup.position.set(1.15, 0.85, -0.05);
    screwGroup.rotation.z = Math.PI / -2;
    group.add(screwGroup);

    //Palitos
    const bar15Geometry = new THREE.CylinderGeometry(0.016, 0.016, 0.25, 32);
    const bar15Material = new THREE.MeshPhongMaterial({ color: 0xA67B5B});
    const bar15 = new THREE.Mesh(bar15Geometry, bar15Material);
    bar15.position.set(1.08, 2.155, -0.05);
    bar15.rotation.z = Math.PI / 2;
    group.add(bar15);    
    const bar16 = new THREE.Mesh(bar15Geometry, bar15Material);
    bar16.position.set(1.027, 1.85, 0.57);
    bar16.rotation.z = Math.PI / 2;
    group.add(bar16);

    // Barra horizontal 2    
    const bar17 = new THREE.Mesh(bar10Geometry, bar10Material);
    bar17.position.set(1.05, 1.85, 0.88);
    bar17.rotation.x = Math.PI / 2;
    group.add(bar17);
    // Barra horizontal 3   
    const bar18 = new THREE.Mesh(bar10Geometry, bar10Material);
    bar18.position.set(0.95, 1.85, 0.88);
    bar18.rotation.x = Math.PI / 2;
    group.add(bar18);
    //Aredondamento
    const bar19 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar19.position.set(1.05, 1.85, 1.24);
    bar19.rotation.z = Math.PI / 2;
    group.add(bar19);
    const bar20 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar20.position.set(0.95, 1.85, 1.24);
    bar20.rotation.z = Math.PI / 2;
    group.add(bar20);
    const bar21 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar21.position.set(0.95, 1.85, 0.54);
    bar21.rotation.z = Math.PI / 2;
    group.add(bar21);
    const bar22 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar22.position.set(1.05, 1.85, 0.54);
    bar22.rotation.z = Math.PI / 2;
    group.add(bar22);

    // Barra horizontal 4
    const bar23Geometry = new THREE.BoxGeometry(0.05, 1, 0.2);
    const bar23Material = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
    const bar23 = new THREE.Mesh(bar23Geometry, bar23Material);
    bar23.position.set(1, 1.85, 1.5);
    bar23.rotation.x = Math.PI / 2;
    group.add(bar23);
    //Arredondamento
    const bar24 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar24.position.set(1, 1.85, 2);
    bar24.rotation.z = Math.PI / 2;
    group.add(bar24);
    const bar25 = new THREE.Mesh(bar6Geometry, bar6Material);
    bar25.position.set(1, 1.85, 1);
    bar25.rotation.z = Math.PI / 2;
    group.add(bar25);

    // Aste servo motor
    const bar26Geometry = new THREE.BoxGeometry(0.05, 0.3, 0.05);
    const bar26Material = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
    const bar26 = new THREE.Mesh(bar26Geometry, bar26Material);
    bar26.position.set(1.15, 0.75, 0.56);
    bar26.rotation.x = Math.PI / 1;
    group.add(bar26);

    //Bloco
    // Servo motor
    const bar27Geometry = new THREE.BoxGeometry(1.3, 0.7, 1.3);
    const bar27Material = new THREE.MeshPhongMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
    });       
    const bar27 = new THREE.Mesh(bar27Geometry, bar27Material);
    bar27.position.set(-0.7, 0.2, 0);
    group.add(bar27);

       // Aste servo motor
       // Aste servo motor
const bar28Geometry = new THREE.BoxGeometry(1.25, 0.05, 1.25);

// Criar o loader de texturas
const textureLoader1 = new THREE.TextureLoader();
const topTexture = textureLoader1.load('Press Switch.png'); // Substitua pelo caminho da textura
topTexture.wrapS = THREE.RepeatWrapping;
topTexture.wrapT = THREE.RepeatWrapping;
topTexture.repeat.set(1, 1); // Ajuste a repetição conforme necessário

// Materiais para cada face (6 faces no total)
const bar28Materials = [
    new THREE.MeshPhongMaterial({ color: 0xFFFFFF }), // +X
    new THREE.MeshPhongMaterial({ color: 0xFFFFFF }), // -X
    new THREE.MeshPhongMaterial({ color: 0xFFFFFF }), // +Y (ficará para baixo após rotação)
    new THREE.MeshPhongMaterial({ map: topTexture, color: 0xFFFFFF }), // -Y (face superior visível após rotação)
    new THREE.MeshPhongMaterial({ color: 0xFFFFFF }), // +Z
    new THREE.MeshPhongMaterial({ color: 0xFFFFFF })  // -Z
];

const bar28 = new THREE.Mesh(bar28Geometry, bar28Materials);
bar28.position.set(-0.7, 0.3, 0);
bar28.rotation.x = Math.PI / 1; // Rotação de 180 graus no eixo X
group.add(bar28);

 // Arredondamento das pontas (cilíndrica)
 const bar29Geometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 32);
 const bar29Material = new THREE.MeshPhongMaterial({ color: 0x000000 });
 const bar29 = new THREE.Mesh(bar29Geometry, bar29Material);
 bar29.position.set(-0.7, 0.5, 0);
 bar29.rotation.z = Math.PI / 1;
 group.add(bar29);

 // Arredondamento das pontas (cilíndrica com furo no meio)
const shape = new THREE.Shape();
shape.absarc(0, 0, 0.1, 0, Math.PI * 2, false); // Círculo externo (raio 0.1)

const hole = new THREE.Path();
hole.absarc(0, 0, 0.05, 0, Math.PI * 2, true); // Círculo interno (furo com raio 0.05)
shape.holes.push(hole); // Adiciona o furo ao shape

const bar30Geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.3, // Altura do cilindro (mesma do original)
    bevelEnabled: false // Sem bordas arredondadas
});
const bar30Material = new THREE.MeshPhongMaterial({ color: 0xFFD700 });
const bar30 = new THREE.Mesh(bar30Geometry, bar30Material);
bar30.position.set(-1.1, 0.6, -0.4);
bar30.rotation.x = Math.PI / 2;
group.add(bar30);
const bar31 = new THREE.Mesh(bar30Geometry, bar30Material);
bar31.position.set(-1.1, 0.6, 0.4);
bar31.rotation.x = Math.PI / 2;
group.add(bar31);

const bar32Material = new THREE.MeshPhongMaterial({ color: 0x4169E1});
const bar32 = new THREE.Mesh(bar30Geometry, bar32Material);
bar32.position.set(-0.28, 0.6, -0.4);
bar32.rotation.x = Math.PI / 2;
group.add(bar32);
const bar33 = new THREE.Mesh(bar30Geometry, bar32Material);
bar33.position.set(-0.28, 0.6, 0.4);
bar33.rotation.x = Math.PI / 2;
group.add(bar33);

return group;
   
}
