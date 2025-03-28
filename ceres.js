function createCeres() {
    // Criação do grupo que conterá todos os componentes do modelo
    const group = new THREE.Group();

    // --- Corpo principal do motor DC ---
    const motorGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32); // Raio superior/inferior 0.5, altura 1.5, 32 segmentos
    const motorMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xC0C0C0, // Cor prata metálica
        shininess: 100   // Brilho elevado para efeito metálico
    });
    const motor = new THREE.Mesh(motorGeometry, motorMaterial);
    motor.position.set(0, 2, 0); // Posicionado em pé, elevado em y=2

    // --- Caixa de redução (cubo amarelo) ---
    const gearboxGeometry = new THREE.BoxGeometry(1.1, 2.3, 1.2); // Largura 1.1, altura 2.3, profundidade 1.2
    const gearboxMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xFFFF00, // Cor amarela
        shininess: 30    // Brilho moderado
    });

     // Definir cores do MDF1
     const mdfColor = 0x8B5A2B; // Marrom original parecido com MDF
     const darkerMdfColor = 0x5C3A1B; // Marrom mais escuro para a duplicação

    const gearbox = new THREE.Mesh(gearboxGeometry, gearboxMaterial);
    gearbox.position.set(0, 0.8, 0); // Acoplado no topo do motor, ajustado em y

    // --- Parte plástica amarela do motor DC ---
    const motor1Geometry = new THREE.CylinderGeometry(0.55, 0.55, 0.5, 32); // Raio 0.55, altura 0.5
    const motor1 = new THREE.Mesh(motor1Geometry, gearboxMaterial); // Reutiliza material amarelo
    motor1.position.set(0, 2.11, 0); // Posicionado acima do corpo principal

    // --- Partes pretas do motor DC ---
    const motor2Geometry = new THREE.CylinderGeometry(0.48, 0.5, 0.1, 32); // Raio variável, altura fina 0.1
    const motor2Material = new THREE.MeshPhongMaterial({ 
        color: 0x2B2B2B, // Cor preta fosca
        shininess: 10    // Baixo brilho
    });
    const motor2 = new THREE.Mesh(motor2Geometry, motor2Material);
    motor2.position.set(0, 2.8, 0); // Acima da parte plástica amarela

    const motor3Geometry = new THREE.CylinderGeometry(0.3, 0.35, 0.1, 32); // Raio variável, altura 0.1
    const motor3 = new THREE.Mesh(motor3Geometry, motor2Material); // Reutiliza material preto
    motor3.position.set(0, 2.9, 0); // Empilhado acima

    // --- Pino central metálico ---
    const motor4Geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.1, 32); // Raio fino 0.04
    const motor4 = new THREE.Mesh(motor4Geometry, motorMaterial); // Reutiliza material prata
    motor4.position.set(0, 2.91, 0); // No topo do motor

    // --- Cilindro horizontal amarelo ---
    const motor5Geometry = new THREE.CylinderGeometry(0.1, 0.1, 1.35, 32); // Raio 0.1, comprimento 1.35
    const motor5 = new THREE.Mesh(motor5Geometry, gearboxMaterial); // Material amarelo
    motor5.position.set(0, 0.9, 0); // Centralizado na caixa de redução
    motor5.rotation.z = Math.PI / 2; // Rotacionado para ficar horizontal

    // --- Eixos duplos (esquerdo e direito) ---
    const shaftGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.5, 32); // Raio 0.08, comprimento 0.5
    const shaftMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x808080, // Cinza metálico
        shininess: 30    // Brilho moderado
    });

    const leftShaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    leftShaft.rotation.z = Math.PI / 2; // Rotacionado para horizontal
    leftShaft.position.set(-0.7, 0.2, 0); // Sai pela esquerda da caixa de redução

    const rightShaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    rightShaft.rotation.z = Math.PI / 2; // Rotacionado para horizontal
    rightShaft.position.set(0.7, 0.2, 0); // Sai pela direita da caixa de redução

    // --- Conectores elétricos (terminais) ---
    const terminalGeometry = new THREE.BoxGeometry(0.1, 0.2, 0.05); // Pequenos cubos
    const terminalMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xaaaaaa, // Cor dourada
        shininess: 40    // Brilho metálico
    });

    const terminal1 = new THREE.Mesh(terminalGeometry, terminalMaterial);
    terminal1.position.set(0.4, 2.875, -0.25); // Terminal inferior

    const terminal2 = new THREE.Mesh(terminalGeometry, terminalMaterial);
    terminal2.position.set(0.4, 2.875, 0.25); // Terminal superior

    // Corpo lado direito
    const cubeGeometry = new THREE.BoxGeometry(2.3, 1.2, 0.11);    
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: mdfColor });    
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);    
    cube.position.set(0.6, 0.8, 0); 
    cube.rotation.y = Math.PI / 2; 
    cube.rotation.z = Math.PI / 2; 
    const cube1Geometry = new THREE.BoxGeometry(2.31, 1.21, 0.1);    
    const cube1Material = new THREE.MeshBasicMaterial({ color: darkerMdfColor });    
    const cube1 = new THREE.Mesh(cube1Geometry, cube1Material);    
    cube1.position.set(0.6, 0.8, 0); 
    cube1.rotation.y = Math.PI / 2; 
    cube1.rotation.z = Math.PI / 2; 

    // Corpo lado esquerdo   
    const cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);    
    cube2.position.set(-0.6, 0.8, 0); 
    cube2.rotation.y = Math.PI / 2; 
    cube2.rotation.z = Math.PI / 2;    
      
    const cube3 = new THREE.Mesh(cube1Geometry, cube1Material);    
    cube3.position.set(-0.6, 0.8, 0); 
    cube3.rotation.y = Math.PI / 2; 
    cube3.rotation.z = Math.PI / 2; 

    // --- Adiciona todos os componentes ao grupo ---
    group.add(motor, motor1, motor2, motor3, motor4, motor5, gearbox, leftShaft, rightShaft, terminal1, terminal2, cube, cube1, cube2, cube3);

    // Ajuste final da posição do grupo no espaço
    group.position.y = -0.7;
    group.position.z = -1;
    group.rotation.y = -1

    return group; // Retorna o grupo completo
}
