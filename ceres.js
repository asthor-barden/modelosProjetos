function createCeres() {
    // Criação do grupo que conterá todos os componentes do modelo
    const group = new THREE.Group();

    // --- Corpo principal do motor DC ---
    const motorGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32);
    const motorMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xC0C0C0,
        shininess: 100
    });
    const motor = new THREE.Mesh(motorGeometry, motorMaterial);
    motor.position.set(0, 2, 0);

    // --- Caixa de redução (cubo amarelo) ---
    const gearboxGeometry = new THREE.BoxGeometry(1.1, 2.3, 1.2);
    const gearboxMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xFFFF00,
        shininess: 30
    });

    // Definir cores do MDF1
    const mdfColor = 0x8B5A2B;
    const darkerMdfColor = 0x5C3A1B;

    const gearbox = new THREE.Mesh(gearboxGeometry, gearboxMaterial);
    gearbox.position.set(0, 0.8, 0);

    // --- Parte plástica amarela do motor DC ---
    const motor1Geometry = new THREE.CylinderGeometry(0.55, 0.55, 0.5, 32);
    const motor1 = new THREE.Mesh(motor1Geometry, gearboxMaterial);
    motor1.position.set(0, 2.11, 0);

    // --- Partes pretas do motor DC ---
    const motor2Geometry = new THREE.CylinderGeometry(0.48, 0.5, 0.1, 32);
    const motor2Material = new THREE.MeshPhongMaterial({ 
        color: 0x2B2B2B,
        shininess: 10
    });
    const motor2 = new THREE.Mesh(motor2Geometry, motor2Material);
    motor2.position.set(0, 2.8, 0);

    const motor3Geometry = new THREE.CylinderGeometry(0.3, 0.35, 0.1, 32);
    const motor3 = new THREE.Mesh(motor3Geometry, motor2Material);
    motor3.position.set(0, 2.9, 0);

    // --- Pino central metálico ---
    const motor4Geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.1, 32);
    const motor4 = new THREE.Mesh(motor4Geometry, motorMaterial);
    motor4.position.set(0, 2.91, 0);

    // --- Cilindro horizontal amarelo ---
    const motor5Geometry = new THREE.CylinderGeometry(0.1, 0.1, 1.35, 32);
    const motor5 = new THREE.Mesh(motor5Geometry, gearboxMaterial);
    motor5.position.set(0, 0.9, 0);
    motor5.rotation.z = Math.PI / 2;

    // --- Eixos duplos (esquerdo e direito) ---
    const shaftGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.5, 32);
    const shaftMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x808080,
        shininess: 30
    });

    const leftShaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    leftShaft.rotation.z = Math.PI / 2;
    leftShaft.position.set(-0.7, 0.2, 0);

    const rightShaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    rightShaft.rotation.z = Math.PI / 2;
    rightShaft.position.set(0.7, 0.2, 0);

    // --- Conectores elétricos (terminais) ---
    const terminalGeometry = new THREE.BoxGeometry(0.1, 0.2, 0.05);
    const terminalMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xaaaaaa,
        shininess: 40
    });

    const terminal1 = new THREE.Mesh(terminalGeometry, terminalMaterial);
    terminal1.position.set(0.4, 2.875, -0.25);

    const terminal2 = new THREE.Mesh(terminalGeometry, terminalMaterial);
    terminal2.position.set(0.4, 2.875, 0.25);

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

    // --- Quarto de cilindro para arredondar bordas ---
    const quarterCylinderGeometry = new THREE.CylinderGeometry(
        0.8, // Raio externo
        0.8, // Raio externo (mantido igual para um cilindro sólido)
        0.11, // Espessura como altura do cilindro
        32, // Segmentos radiais
        1, // Segmentos de altura
        false, // Não aberto
        0, // Ângulo inicial
        Math.PI / 2 // Ângulo de 90 graus (1/4 do cilindro)
    );
    const quarterCylinder1Geometry = new THREE.CylinderGeometry(
        0.81, // Raio externo
        0.81, // Raio externo (mantido igual para um cilindro sólido)
        0.1, // Espessura como altura do cilindro
        32, // Segmentos radiais
        1, // Segmentos de altura
        false, // Não aberto
        0, // Ângulo inicial
        Math.PI / 2 // Ângulo de 90 graus (1/4 do cilindro)
    );
   
    const quarterCylinder = new THREE.Mesh(quarterCylinderGeometry, cubeMaterial);
    
    // Posicionamento inicial (ajuste conforme necessário)
    quarterCylinder.position.set(0.6, 1.8, -0.4); // Centralizado no grupo, ajuste para a junção desejada
    quarterCylinder.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
    quarterCylinder.rotation.z = Math.PI / -2;
    quarterCylinder.rotation.y = Math.PI / 1;

    const quarterCylinder1 = new THREE.Mesh(quarterCylinder1Geometry, cube1Material);
    
    // Posicionamento inicial (ajuste conforme necessário)
    quarterCylinder1.position.set(0.6, 1.8, -0.4); // Centralizado no grupo, ajuste para a junção desejada
    quarterCylinder1.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
    quarterCylinder1.rotation.z = Math.PI / -2;
    quarterCylinder1.rotation.y = Math.PI / 1;

    const quarterCylinder2 = new THREE.Mesh(quarterCylinderGeometry, cubeMaterial);
    
    // Posicionamento inicial (ajuste conforme necessário)
    quarterCylinder2.position.set(-0.6, 1.8, -0.4); // Centralizado no grupo, ajuste para a junção desejada
    quarterCylinder2.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
    quarterCylinder2.rotation.z = Math.PI / -2;
    quarterCylinder2.rotation.y = Math.PI / 1;

    const quarterCylinder3 = new THREE.Mesh(quarterCylinder1Geometry, cube1Material);
    
    // Posicionamento inicial (ajuste conforme necessário)
    quarterCylinder3.position.set(-0.6, 1.8, -0.4); // Centralizado no grupo, ajuste para a junção desejada
    quarterCylinder3.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
    quarterCylinder3.rotation.z = Math.PI / -2;
    quarterCylinder3.rotation.y = Math.PI / 1;

    // --- Adiciona todos os componentes ao grupo ---
    group.add(motor, motor1, motor2, motor3, motor4, motor5, gearbox, leftShaft, rightShaft, 
              terminal1, terminal2, cube, cube1, cube2, cube3, quarterCylinder, quarterCylinder1,quarterCylinder2, quarterCylinder3);

    // Ajuste final da posição do grupo no espaço
    group.position.y = -0.7;
    group.position.z = -1;
    group.rotation.y = -1;

    return group;
}
