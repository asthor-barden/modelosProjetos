function createConvMovI() {
    const group = new THREE.Group();
    
    // Definir a cor de MDF
    const mdfColor = 0x8B5A2B; // Marrom parecido com MDF
    
 // Corpo
    // Cubo1
    const cubeGeometry = new THREE.BoxGeometry(3, 1.5, 0.1);    
    // Criar material básico para o cubo com cor MDF
    const cubeMaterial = new THREE.MeshBasicMaterial({ 
        color: mdfColor 
    });    
    // Criar o cubo
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);    
    // Posicionar o cubo
    cube.position.set(0, 0, 0);    
    // Segundo cubo
    const cube1Geometry = new THREE.BoxGeometry(2.6, 0.47, 0.1);
    const cube1Material = new THREE.MeshBasicMaterial({ 
        color: mdfColor 
    });
    const cube1 = new THREE.Mesh(cube1Geometry, cube1Material);
    cube1.position.set(0.2, 0.97, 0);    
    // Terceiro cubo
    const cube2Geometry = new THREE.BoxGeometry(1.5, 1, 0.1);
    const cube2Material = new THREE.MeshBasicMaterial({ 
        color: mdfColor 
    });
    const cube2 = new THREE.Mesh(cube2Geometry, cube2Material);
    cube2.position.set(0.75, 1, 0);       
    // Quinto cubo
    const cube3Geometry = new THREE.BoxGeometry(1, 3, 0.1);
    const cube3Material = new THREE.MeshBasicMaterial({ 
        color: mdfColor 
    });
    const cube3 = new THREE.Mesh(cube3Geometry, cube3Material);
    cube3.position.set(0.75, 1.5, 0);
    
    // Adicionar todos os cubos ao grupo
    group.add(cube, cube1, cube2,  cube3);

// Cilindros para arredondamento
    // Criar geometria do cilindro
    const cylinderGeometry = new THREE.CylinderGeometry(
        0.4,  // raio superior
        0.4,  // raio inferior
        0.1,  // altura
        32    // segmentos
    );    
    // Criar material para os cilindros com cor MDF
    const cylinderMaterial = new THREE.MeshBasicMaterial({ 
        color: mdfColor
    });
    // Primeiro cilindro
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.set(-1.1, 0.8, 0);
    cylinder.rotation.x = Math.PI / 2;    
    // Segundo cilindro
    const cylinder1 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder1.position.set(0.4, 1.5, 0);
    cylinder1.rotation.x = Math.PI / 2;
    // Quarto cilindro
    const cylinder2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder2.position.set(1.1, 1.5, 0);
    cylinder2.rotation.x = Math.PI / 2;
    
// Furos
    // Padrão de furos 1
    const cylinder1Geometry = new THREE.CylinderGeometry(
        0.08,  // raio superior
        0.08,  // raio inferior
        0.101,  // altura
        32    // segmentos
    );
    const cylinder1Material = new THREE.MeshBasicMaterial({ 
        color: 0x000000
    });
    // Furo 1
     const cylinder3 = new THREE.Mesh(cylinder1Geometry, cylinder1Material);
     cylinder3.position.set(0.75, 0.3, 0);
     cylinder3.rotation.x = Math.PI / 2;
     const cylinder4 = new THREE.Mesh(cylinder1Geometry, cylinder1Material);
     cylinder4.position.set(-0.5, 0.3, 0);
     cylinder4.rotation.x = Math.PI / 2;

    // Padrãos de furos 2
    const cylinder2Geometry = new THREE.CylinderGeometry(
        0.04,  // raio superior
        0.04,  // raio inferior
        0.101,  // altura
        32    // segmentos
    );
    const cylinder2Material = new THREE.MeshBasicMaterial({ 
        color: 0x000000
    });
    // Furo1
    const cylinder5 = new THREE.Mesh(cylinder2Geometry, cylinder2Material);
    cylinder5.position.set(1, 2.8, 0);
    cylinder5.rotation.x = Math.PI / 2;
    // Furo2
    const cylinder6 = new THREE.Mesh(cylinder2Geometry, cylinder2Material);
    cylinder6.position.set(0.55, 2.8, 0);
    cylinder6.rotation.x = Math.PI / 2;     

// Rodas
    //Roda1
    const cylinder3Geometry = new THREE.CylinderGeometry(
        0.5,  // raio superior
        0.5,  // raio inferior
        0.1,  // altura
        32    // segmentos
    );
    const cylinder3Material = new THREE.MeshBasicMaterial({ 
        color: 0x7A4A1E
    });
    // Roda1
    const cylinder7 = new THREE.Mesh(cylinder3Geometry, cylinder3Material);
    cylinder7.position.set(0.75, 0.3, 0.12);
    cylinder7.rotation.x = Math.PI / 2;
     // Roda3
     const cylinder9 = new THREE.Mesh(cylinder3Geometry, cylinder3Material);
     cylinder9.position.set(0.75, 0.3, 0.32);
     cylinder9.rotation.x = Math.PI / 2;

    //Roda2
    const cylinder4Geometry = new THREE.CylinderGeometry(
        0.48,  // raio superior
        0.48,  // raio inferior
        0.1,  // altura
        32    // segmentos
    );
    const cylinder4Material = new THREE.MeshBasicMaterial({ 
        color: 0x6F4118
    });
    // Roda2
    const cylinder8 = new THREE.Mesh(cylinder4Geometry, cylinder4Material);
    cylinder8.position.set(0.75, 0.3, 0.22);
    cylinder8.rotation.x = Math.PI / 2;
  
    // Adicionar os cilindros ao grupo
    group.add(cylinder, cylinder1, cylinder2, cylinder3, cylinder4, cylinder5, cylinder6, cylinder7, cylinder8, cylinder9);

    return group;
}
