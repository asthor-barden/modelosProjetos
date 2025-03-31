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
        0.7, // Raio externo
        0.7, // Raio externo (mantido igual para um cilindro sólido)
        0.11, // Espessura como altura do cilindro
        32, // Segmentos radiais
        1, // Segmentos de altura
        false, // Não aberto
        0, // Ângulo inicial
        Math.PI / 2 // Ângulo de 90 graus (1/4 do cilindro)
    );
    const quarterCylinder1Geometry = new THREE.CylinderGeometry(
        0.71, // Raio externo
        0.71, // Raio externo (mantido igual para um cilindro sólido)
        0.1, // Espessura como altura do cilindro
        32, // Segmentos radiais
        1, // Segmentos de altura
        false, // Não aberto
        0, // Ângulo inicial
        Math.PI / 2 // Ângulo de 90 graus (1/4 do cilindro)
    );
   
    const quarterCylinder = new THREE.Mesh(quarterCylinderGeometry, cubeMaterial);
    
    // Posicionamento inicial (ajuste conforme necessário)
    quarterCylinder.position.set(0.6, 1.8, -0.6); // Centralizado no grupo, ajuste para a junção desejada
    quarterCylinder.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
    quarterCylinder.rotation.z = Math.PI / -2;
    quarterCylinder.rotation.y = Math.PI / 1;

    const quarterCylinder1 = new THREE.Mesh(quarterCylinder1Geometry, cube1Material);
    
    // Posicionamento inicial (ajuste conforme necessário)
    quarterCylinder1.position.set(0.6, 1.8, -0.6); // Centralizado no grupo, ajuste para a junção desejada
    quarterCylinder1.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
    quarterCylinder1.rotation.z = Math.PI / -2;
    quarterCylinder1.rotation.y = Math.PI / 1;

    const quarterCylinder2 = new THREE.Mesh(quarterCylinderGeometry, cubeMaterial);
    
    // Posicionamento inicial 
    quarterCylinder2.position.set(-0.6, 1.8, -0.6); // Centralizado no grupo, ajuste para a junção desejada
    quarterCylinder2.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
    quarterCylinder2.rotation.z = Math.PI / -2;
    quarterCylinder2.rotation.y = Math.PI / 1;

    const quarterCylinder3 = new THREE.Mesh(quarterCylinder1Geometry, cube1Material);
    
    // Posicionamento inicial 
    quarterCylinder3.position.set(-0.6, 1.8, -0.6); // Centralizado no grupo, ajuste para a junção desejada
    quarterCylinder3.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
    quarterCylinder3.rotation.z = Math.PI / -2;
    quarterCylinder3.rotation.y = Math.PI / 1;

    const quarterCylinder4 = new THREE.Mesh(quarterCylinderGeometry, cubeMaterial);

     // Posicionamento inicial 
     quarterCylinder4.position.set(-0.6, 0.353, -0.6); // Centralizado no grupo, ajuste para a junção desejada
     quarterCylinder4.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
     quarterCylinder4.rotation.z = Math.PI / 2;
     quarterCylinder4.rotation.y = Math.PI / 1;
     quarterCylinder4.rotation.x = Math.PI / -2;
 
     const quarterCylinder5 = new THREE.Mesh(quarterCylinder1Geometry, cube1Material);
     
     // Posicionamento inicial 
     quarterCylinder5.position.set(-0.6, 0.353, -0.6); // Centralizado no grupo, ajuste para a junção desejada
     quarterCylinder5.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
     quarterCylinder5.rotation.z = Math.PI / 2;
     quarterCylinder5.rotation.y = Math.PI / 1;
     quarterCylinder5.rotation.x = Math.PI / -2;

     const quarterCylinder6 = new THREE.Mesh(quarterCylinderGeometry, cubeMaterial);

     // Posicionamento inicial 
     quarterCylinder6.position.set(0.6, 0.353, -0.6); // Centralizado no grupo, ajuste para a junção desejada
     quarterCylinder6.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
     quarterCylinder6.rotation.z = Math.PI / 2;
     quarterCylinder6.rotation.y = Math.PI / 1;
     quarterCylinder6.rotation.x = Math.PI / -2;
 
     const quarterCylinder7 = new THREE.Mesh(quarterCylinder1Geometry, cube1Material);
     
     // Posicionamento inicial 
     quarterCylinder7.position.set(0.6, 0.353, -0.6); 
     quarterCylinder7.rotation.x = Math.PI / 2; 
     quarterCylinder7.rotation.z = Math.PI / 2;
     quarterCylinder7.rotation.y = Math.PI / 1;
     quarterCylinder7.rotation.x = Math.PI / -2;
 
     const cube4Geometry = new THREE.BoxGeometry(1.47,1, 0.11);     
     const cube4 = new THREE.Mesh(cube4Geometry, cubeMaterial);
     cube4.position.set(0.6, 1.07, -0.803);
     cube4.rotation.y = Math.PI / 2;
     cube4.rotation.z = Math.PI / 2;
     const cube5Geometry = new THREE.BoxGeometry(1.48, 1.01, 0.1);     
     const cube5 = new THREE.Mesh(cube5Geometry, cube1Material);
     cube5.position.set(0.6, 1.07, -0.803);
     cube5.rotation.y = Math.PI / 2;
     cube5.rotation.z = Math.PI / 2;         
     const cube6 = new THREE.Mesh(cube4Geometry, cubeMaterial);
     cube6.position.set(-0.6, 1.07, -0.803);
     cube6.rotation.y = Math.PI / 2;
     cube6.rotation.z = Math.PI / 2;      
     const cube7 = new THREE.Mesh(cube5Geometry, cube1Material);
     cube7.position.set(-0.6, 1.07, -0.803);
     cube7.rotation.y = Math.PI / 2;
     cube7.rotation.z = Math.PI / 2;

     //Laterais altas
   
    const cube8Geometry = new THREE.BoxGeometry(4.3, 0.2, 0.11);
   
    const cube8 = new THREE.Mesh(cube8Geometry, cubeMaterial);
    cube8.position.set(0.6, 1.5, 0.5);
    cube8.rotation.y = Math.PI / 2;
    cube8.rotation.z = Math.PI / 2;
    const cube10 = new THREE.Mesh(cube8Geometry, cubeMaterial);
    cube10.position.set(-0.6, 1.5, 0.5);
    cube10.rotation.y = Math.PI / 2;
    cube10.rotation.z = Math.PI / 2;

    const cube9Geometry = new THREE.BoxGeometry(4.31, 0.21, 0.1);   
    const cube9 = new THREE.Mesh(cube9Geometry, cube1Material);
    cube9.position.set(0.6, 1.5, 0.5);
    cube9.rotation.y = Math.PI / 2;
    cube9.rotation.z = Math.PI / 2;
    const cube11 = new THREE.Mesh(cube9Geometry, cube1Material);
    cube11.position.set(-0.6, 1.5, 0.5);
    cube11.rotation.y = Math.PI / 2;
    cube11.rotation.z = Math.PI / 2;

    //Acabamento do arredondamento da base lateral
    const cube12Geometry = new THREE.BoxGeometry(0.7, 0.01, 0.11);   
    const cube12 = new THREE.Mesh(cube12Geometry, cubeMaterial);
    cube12.position.set(0.6, 2.15, -0.6);
    cube12.rotation.y = Math.PI / 2;
    cube12.rotation.z = Math.PI / 2;
    const cube14 = new THREE.Mesh(cube12Geometry, cubeMaterial);
    cube14.position.set(-0.6, 2.15, -0.6);
    cube14.rotation.y = Math.PI / 2;
    cube14.rotation.z = Math.PI / 2;

    const cube13Geometry = new THREE.BoxGeometry(0.71, 0.02, 0.1);   
    const cube13 = new THREE.Mesh(cube13Geometry, cube1Material);
    cube13.position.set(0.6, 2.155, -0.6);
    cube13.rotation.y = Math.PI / 2;
    cube13.rotation.z = Math.PI / 2;
    const cube15 = new THREE.Mesh(cube13Geometry, cube1Material);
    cube15.position.set(-0.6, 2.155, -0.6);
    cube15.rotation.y = Math.PI / 2;
    cube15.rotation.z = Math.PI / 2;

//Aciona partes da frente do suporte lateral
      
        const cube16Geometry = new THREE.BoxGeometry(0.9, 0.6, 0.11);   
        const cube16 = new THREE.Mesh(cube16Geometry, cubeMaterial);
        cube16.position.set(0.6, -0.2, 0.85);
        cube16.rotation.y = Math.PI / 2;
        cube16.rotation.z = Math.PI / 2;
        const cube18 = new THREE.Mesh(cube16Geometry, cubeMaterial);
        cube18.position.set(-0.6, -0.2, 0.85);
        cube18.rotation.y = Math.PI / 2;
        cube18.rotation.z = Math.PI / 2;
        const cube17Geometry = new THREE.BoxGeometry(0.91, 0.61, 0.1);   
        const cube17 = new THREE.Mesh(cube17Geometry, cube1Material);
        cube17.position.set(0.6, -0.2, 0.85);
        cube17.rotation.y = Math.PI / 2;
        cube17.rotation.z = Math.PI / 2;
        const cube19 = new THREE.Mesh(cube17Geometry, cube1Material);
        cube19.position.set(-0.6, -0.2, 0.85);
        cube19.rotation.y = Math.PI / 2;
        cube19.rotation.z = Math.PI / 2;

    //Cria encaixes da parte superior
    const cube20Geometry = new THREE.BoxGeometry(1.7, 0.6, 0.11);   
        const cube20 = new THREE.Mesh(cube20Geometry, cubeMaterial);
        cube20.position.set(0.6, 2.8, 0.85);
        cube20.rotation.y = Math.PI / 2;
        cube20.rotation.z = Math.PI / 2;
        const cube22 = new THREE.Mesh(cube20Geometry, cubeMaterial);
        cube22.position.set(-0.6, 2.8, 0.85);
        cube22.rotation.y = Math.PI / 2;
        cube22.rotation.z = Math.PI / 2;
    const cube21Geometry = new THREE.BoxGeometry(1.71, 0.61, 0.1);   
        const cube21 = new THREE.Mesh(cube21Geometry, cube1Material);
        cube21.position.set(0.6, 2.8, 0.85);
        cube21.rotation.y = Math.PI / 2;
        cube21.rotation.z = Math.PI / 2;
        const cube23 = new THREE.Mesh(cube21Geometry, cube1Material);
        cube23.position.set(-0.6, 2.8, 0.85);
        cube23.rotation.y = Math.PI / 2;
        cube23.rotation.z = Math.PI / 2;
//Cria meio das bases laterais  
        const cube24Geometry = new THREE.BoxGeometry(1.8, 0.5, 0.11);   
        const cube24 = new THREE.Mesh(cube24Geometry, cubeMaterial);
        cube24.position.set(0.6, 1.1, 0.7);
        cube24.rotation.y = Math.PI / 2;
        cube24.rotation.z = Math.PI / 2;
        const cube26 = new THREE.Mesh(cube24Geometry, cubeMaterial);
        cube26.position.set(-0.6, 1.1, 0.7);
        cube26.rotation.y = Math.PI / 2;
        cube26.rotation.z = Math.PI / 2;

        const cube25Geometry = new THREE.BoxGeometry(1.81, 0.51, 0.1);   
        const cube25 = new THREE.Mesh(cube25Geometry, cube1Material);
        cube25.position.set(0.6, 1.1, 0.7);
        cube25.rotation.y = Math.PI / 2;
        cube25.rotation.z = Math.PI / 2;
        const cube27 = new THREE.Mesh(cube25Geometry, cube1Material);
        cube27.position.set(-0.6, 1.1, 0.7);
        cube27.rotation.y = Math.PI / 2;
        cube27.rotation.z = Math.PI / 2;

//Cria suporte do botão
        const cube28Geometry = new THREE.BoxGeometry(1.1, 0.8, 0.11);  
        const cube29Geometry = new THREE.BoxGeometry(1.11, 0.81, 0.1);  
        const cube28Material = new THREE.MeshBasicMaterial({ color: 0x7A4A1E });
        const cube29Material = new THREE.MeshBasicMaterial({ color: 0x3F250E });
        const cube28 = new THREE.Mesh(cube28Geometry, cube28Material);
        cube28.position.set(0, 3.4, 0.95);
        cube28.rotation.y = Math.PI / 1;
        cube28.rotation.z = Math.PI / 1;
        cube28.rotation.x = Math.PI / 2;
        const cube29 = new THREE.Mesh(cube29Geometry, cube29Material);
        cube29.position.set(0, 3.4, 0.95);
        cube29.rotation.y = Math.PI / 1;
        cube29.rotation.z = Math.PI / 1;
        cube29.rotation.x = Math.PI / 2;
        const cube30 = new THREE.Mesh(cube28Geometry, cube28Material);
        cube30.position.set(0, 2.8, 0.95);
        cube30.rotation.y = Math.PI / 1;
        cube30.rotation.z = Math.PI / 1;
        cube30.rotation.x = Math.PI / 2;
        const cube31 = new THREE.Mesh(cube29Geometry, cube29Material);
        cube31.position.set(0, 2.8, 0.95);
        cube31.rotation.y = Math.PI / 1;
        cube31.rotation.z = Math.PI / 1;
        cube31.rotation.x = Math.PI / 2;
        const cube32Geometry = new THREE.BoxGeometry(1.4, 0.5, 0.11);  
        const cube33Geometry = new THREE.BoxGeometry(1.41, 0.51, 0.1);  
        const cube32 = new THREE.Mesh(cube32Geometry, cube28Material);
        cube32.position.set(0, 2.8, 0.8);
        cube32.rotation.y = Math.PI / 1;
        cube32.rotation.z = Math.PI / 1;
        cube32.rotation.x = Math.PI / 2;
        const cube34 = new THREE.Mesh(cube33Geometry, cube29Material);
        cube34.position.set(0, 2.8, 0.8);
        cube34.rotation.y = Math.PI / 1;
        cube34.rotation.z = Math.PI / 1;
        cube34.rotation.x = Math.PI / 2;
        const cube33 = new THREE.Mesh(cube32Geometry, cube28Material);
        cube33.position.set(0, 3.4, 0.8);
        cube33.rotation.y = Math.PI / 1;
        cube33.rotation.z = Math.PI / 1;
        cube33.rotation.x = Math.PI / 2;
        const cube35 = new THREE.Mesh(cube33Geometry, cube29Material);
        cube35.position.set(0, 3.4, 0.8);
        cube35.rotation.y = Math.PI / 1;
        cube35.rotation.z = Math.PI / 1;
        cube35.rotation.x = Math.PI / 2;  
        const cube36 = new THREE.Mesh(cube32Geometry, cube28Material);
        cube36.position.set(0, -0.5, 0.8);
        cube36.rotation.y = Math.PI / 1;
        cube36.rotation.z = Math.PI / 1;
        cube36.rotation.x = Math.PI / 2;
        const cube37 = new THREE.Mesh(cube33Geometry, cube29Material);
        cube37.position.set(0, -0.5, 0.8);
        cube37.rotation.y = Math.PI / 1;
        cube37.rotation.z = Math.PI / 1;
        cube37.rotation.x = Math.PI / 2;   
        
    //Cria parte de baixo
        const cube38Geometry = new THREE.BoxGeometry(1.1, 4.8, 0.11);  
        const cube39Geometry = new THREE.BoxGeometry(1.11, 4.81, 0.1);  
        const cube38 = new THREE.Mesh(cube38Geometry, cube28Material);
        cube38.position.set(0, -0.5, 3);
        cube38.rotation.y = Math.PI / 1;
        cube38.rotation.z = Math.PI / 1;
        cube38.rotation.x = Math.PI /2;
        const cube39 = new THREE.Mesh(cube39Geometry, cube29Material);
        cube39.position.set(0, -0.5, 3);
        cube39.rotation.y = Math.PI / 1;
        cube39.rotation.z = Math.PI / 1;
        cube39.rotation.x = Math.PI /2;

//Cria rodas grandes
const cylinderMaterialEscuro = new THREE.MeshBasicMaterial({ color: 0x3F250E }); // Marrom escuro Roda2
const cylinderMaterialClaro = new THREE.MeshBasicMaterial({ color: 0x7A4A1E }); // Marrom escuro Roda2
        
// Roda1 (original)
const cylinderGeometry = new THREE.CylinderGeometry(2.2, 2.2, 0.11, 32);
const cylinder1Geometry = new THREE.CylinderGeometry(2.21, 2.21, 0.1, 32);
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterialClaro);
    cylinder.position.set(0.8, 0.2, 0);
    cylinder.rotation.x = Math.PI / 2;
    cylinder.rotation.z = Math.PI / 2;
    const cylinder1 = new THREE.Mesh(cylinder1Geometry, cylinderMaterialEscuro);
    cylinder1.position.set(0.8, 0.2, 0);
    cylinder1.rotation.x = Math.PI / 2;
    cylinder1.rotation.z = Math.PI / 2;
const cylinder2 = new THREE.Mesh(cylinderGeometry, cylinderMaterialClaro);
    cylinder2.position.set(-0.8, 0.2, 0);
    cylinder2.rotation.x = Math.PI / 2;
    cylinder2.rotation.z = Math.PI / 2;
    const cylinder3 = new THREE.Mesh(cylinder1Geometry, cylinderMaterialEscuro);
    cylinder3.position.set(-0.8, 0.2, 0);
    cylinder3.rotation.x = Math.PI / 2;
    cylinder3.rotation.z = Math.PI / 2;
   
   
   


    // --- Adiciona todos os componentes ao grupo ---
    group.add(motor, motor1, motor2, motor3, motor4, motor5, gearbox, leftShaft, rightShaft, 
              terminal1, terminal2, cube, cube1, cube2, cube3, quarterCylinder, quarterCylinder1,quarterCylinder2, quarterCylinder3, quarterCylinder4, quarterCylinder5,quarterCylinder6, quarterCylinder7, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18, cube19, cube20, cube21, cube22, cube23, cube24, cube25, cube26, cube27, cube28, cube29, cube30, cube31, cube32, cube33, cube34, cube35, cube36, cube37, cube38,cube39, cylinder, cylinder1, cylinder2, cylinder3);

    // Ajuste final da posição do grupo no espaço
    group.position.y = -0.2;
    group.position.z = -1;
    group.rotation.y = -1;

    return group;
}
