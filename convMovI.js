function createConvMovI() {
    const group = new THREE.Group();
    
    // Definir cores
    const mdfColor = 0x8B5A2B; // Marrom original parecido com MDF
    const darkerMdfColor = 0x5C3A1B; // Marrom mais escuro para a duplicação
    
    // Corpo Original
    const cubeGeometry = new THREE.BoxGeometry(3, 1.5, 0.1);    
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: mdfColor });    
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);    
    cube.position.set(0, 0, 0);    
    const cube1Geometry = new THREE.BoxGeometry(2.6, 0.47, 0.1);
    const cube1Material = new THREE.MeshBasicMaterial({ color: mdfColor });
    const cube1 = new THREE.Mesh(cube1Geometry, cube1Material);
    cube1.position.set(0.2, 0.97, 0);    
    const cube2Geometry = new THREE.BoxGeometry(1.5, 1, 0.1);
    const cube2Material = new THREE.MeshBasicMaterial({ color: mdfColor });
    const cube2 = new THREE.Mesh(cube2Geometry, cube2Material);
    cube2.position.set(0.75, 1, 0);       
    const cube3Geometry = new THREE.BoxGeometry(1, 3, 0.1);
    const cube3Material = new THREE.MeshBasicMaterial({ color: mdfColor });
    const cube3 = new THREE.Mesh(cube3Geometry, cube3Material);
    cube3.position.set(0.75, 1.5, 0);
        //Base horizontal
    const cube4Geometry = new THREE.BoxGeometry(3, 0.1, 2);   
    const cube4Material = new THREE.MeshBasicMaterial({ color: 0x7A4A1E  }); 
    const cube4 = new THREE.Mesh(cube4Geometry, cube4Material);
    cube4.position.set(0, -0.8, 0);
    const cube5Geometry = new THREE.BoxGeometry(3.01, 0.09, 2.01);   
    const cube5Material = new THREE.MeshBasicMaterial({ color: 0x3F250E});  
    const cube5 = new THREE.Mesh(cube5Geometry, cube5Material);
    cube5.position.set(0, -0.8, 0);
    
    // Corpo Duplicado (tamanhos +0.01, largura 0.09, cor mais escura)
    const cubeDupGeometry = new THREE.BoxGeometry(3.01, 1.51, 0.09);    
    const cubeDupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });    
    const cubeDup = new THREE.Mesh(cubeDupGeometry, cubeDupMaterial);    
    cubeDup.position.set(0, 0, 0);    
    const cube1DupGeometry = new THREE.BoxGeometry(2.61, 0.48, 0.09);
    const cube1DupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });
    const cube1Dup = new THREE.Mesh(cube1DupGeometry, cube1DupMaterial);
    cube1Dup.position.set(0.2, 0.97, 0);    
    const cube2DupGeometry = new THREE.BoxGeometry(1.51, 1.01, 0.09);
    const cube2DupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });
    const cube2Dup = new THREE.Mesh(cube2DupGeometry, cube2DupMaterial);
    cube2Dup.position.set(0.75, 1, 0);       
    const cube3DupGeometry = new THREE.BoxGeometry(1.01, 3.01, 0.09);
    const cube3DupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });
    const cube3Dup = new THREE.Mesh(cube3DupGeometry, cube3DupMaterial);
    cube3Dup.position.set(0.75, 1.5, 0);
    
    // Adicionar cubos ao grupo (original e duplicado)
    group.add(cube, cube1, cube2, cube3, cube4, cube5, cubeDup, cube1Dup, cube2Dup, cube3Dup);

    // Cilindros Originais
    const cylinderGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 32);    
    const cylinderMaterial = new THREE.MeshBasicMaterial({ color: mdfColor });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.set(-1.1, 0.8, 0);
    cylinder.rotation.x = Math.PI / 2;    
    const cylinder1 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder1.position.set(0.4, 1.5, 0);
    cylinder1.rotation.x = Math.PI / 2;
    const cylinder2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder2.position.set(1.1, 1.5, 0);
    cylinder2.rotation.x = Math.PI / 2;

    // Cilindros Duplicados (tamanhos +0.01, largura 0.09, cor mais escura)
    const cylinderDupGeometry = new THREE.CylinderGeometry(0.41, 0.41, 0.09, 32);    
    const cylinderDupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });
    const cylinderDup = new THREE.Mesh(cylinderDupGeometry, cylinderDupMaterial);
    cylinderDup.position.set(-1.1, 0.8, 0);
    cylinderDup.rotation.x = Math.PI / 2;    
    const cylinder1Dup = new THREE.Mesh(cylinderDupGeometry, cylinderDupMaterial);
    cylinder1Dup.position.set(0.4, 1.5, 0);
    cylinder1Dup.rotation.x = Math.PI / 2;
    const cylinder2Dup = new THREE.Mesh(cylinderDupGeometry, cylinderDupMaterial);
    cylinder2Dup.position.set(1.1, 1.5, 0);
    cylinder2Dup.rotation.x = Math.PI / 2;

    // Adicionar cilindros ao grupo (original e duplicado)
    group.add(cylinder, cylinder1, cylinder2, cylinderDup, cylinder1Dup, cylinder2Dup);

    // Furos
    const cylinder1Geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.101, 32);
    const cylinder1Material = new THREE.MeshBasicMaterial({ 
        color: 0x000000 
    });
    const cylinder3 = new THREE.Mesh(cylinder1Geometry, cylinder1Material);
    cylinder3.position.set(0.75, 0.3, 0);
    cylinder3.rotation.x = Math.PI / 2;
    const cylinder4 = new THREE.Mesh(cylinder1Geometry, cylinder1Material);
    cylinder4.position.set(-0.7, 0.3, 0);
    cylinder4.rotation.x = Math.PI / 2;

    const cylinder2Geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.101, 32);
    const cylinder2Material = new THREE.MeshBasicMaterial({ 
        color: 0x000000 
    });
    const cylinder5 = new THREE.Mesh(cylinder2Geometry, cylinder2Material);
    cylinder5.position.set(1, 2.8, 0);
    cylinder5.rotation.x = Math.PI / 2;
    const cylinder6 = new THREE.Mesh(cylinder2Geometry, cylinder2Material);
    cylinder6.position.set(0.55, 2.8, 0);
    cylinder6.rotation.x = Math.PI / 2;     

    // Rodas
    // Materiais para as laterais (eixo Z) com cor original
    const cylinder3MaterialLateral = new THREE.MeshBasicMaterial({ color: 0x3F250E }); // Cor original Roda1 e Roda3
    const cylinder4MaterialLateral = new THREE.MeshBasicMaterial({ color: 0x3F250E }); // Cor original Roda2

    // Materiais para as faces superior/inferior (marrom mais escuro)
    const cylinder3MaterialEscuro = new THREE.MeshBasicMaterial({ color: 0x7A4A1E }); // Marrom escuro Roda1 e Roda3
    const cylinder4MaterialEscuro = new THREE.MeshBasicMaterial({ color: 0x7A4A1E }); // Marrom escuro Roda2

    // Roda1 (original)
    const cylinder3Geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32);
    const cylinder7Lateral = new THREE.Mesh(cylinder3Geometry, cylinder3MaterialLateral);
    cylinder7Lateral.position.set(0.75, 0.3, 0.12);
    cylinder7Lateral.rotation.x = Math.PI / 2;
    const cylinder3GeometryFace = new THREE.CylinderGeometry(0.49, 0.49, 0.11, 32);
    const cylinder7Face = new THREE.Mesh(cylinder3GeometryFace, cylinder3MaterialEscuro);
    cylinder7Face.position.set(0.75, 0.3, 0.12);
    cylinder7Face.rotation.x = Math.PI / 2;

    // Roda3 (original)
    const cylinder9Lateral = new THREE.Mesh(cylinder3Geometry, cylinder3MaterialLateral);
    cylinder9Lateral.position.set(0.75, 0.3, 0.32);
    cylinder9Lateral.rotation.x = Math.PI / 2;
    const cylinder9Face = new THREE.Mesh(cylinder3GeometryFace, cylinder3MaterialEscuro);
    cylinder9Face.position.set(0.75, 0.3, 0.32);
    cylinder9Face.rotation.x = Math.PI / 2;

    // Roda2 (original)
    const cylinder4Geometry = new THREE.CylinderGeometry(0.46, 0.46, 0.1, 32);
    const cylinder8Lateral = new THREE.Mesh(cylinder4Geometry, cylinder4MaterialLateral);
    cylinder8Lateral.position.set(0.75, 0.3, 0.22);
    cylinder8Lateral.rotation.x = Math.PI / 2;
    const cylinder4GeometryFace = new THREE.CylinderGeometry(0.45, 0.45, 0.11, 32);
    const cylinder8Face = new THREE.Mesh(cylinder4GeometryFace, cylinder4MaterialEscuro);
    cylinder8Face.position.set(0.75, 0.3, 0.22);
    cylinder8Face.rotation.x = Math.PI / 2;

    // Rodas duplicadas (metade do tamanho)
    // Roda1 duplicada
    const cylinder3GeometrySmall = new THREE.CylinderGeometry(0.25, 0.25, 0.09, 32); // Metade do tamanho
    const cylinder7LateralSmall = new THREE.Mesh(cylinder3GeometrySmall, cylinder3MaterialLateral);
    cylinder7LateralSmall.position.set(-0.7, 0.3, 0.12);
    cylinder7LateralSmall.rotation.x = Math.PI / 2;
    const cylinder3GeometryFaceSmall = new THREE.CylinderGeometry(0.245, 0.245, 0.1, 32); // Metade do tamanho
    const cylinder7FaceSmall = new THREE.Mesh(cylinder3GeometryFaceSmall, cylinder3MaterialEscuro);
    cylinder7FaceSmall.position.set(-0.7, 0.3, 0.12);
    cylinder7FaceSmall.rotation.x = Math.PI / 2;

    // Roda3 duplicada
    const cylinder9LateralSmall = new THREE.Mesh(cylinder3GeometrySmall, cylinder3MaterialLateral);
    cylinder9LateralSmall.position.set(-0.7, 0.3, 0.32);
    cylinder9LateralSmall.rotation.x = Math.PI / 2;
    const cylinder9FaceSmall = new THREE.Mesh(cylinder3GeometryFaceSmall, cylinder3MaterialEscuro);
    cylinder9FaceSmall.position.set(-0.7, 0.3, 0.32);
    cylinder9FaceSmall.rotation.x = Math.PI / 2;

    // Roda2 duplicada
    const cylinder4GeometrySmall = new THREE.CylinderGeometry(0.216, 0.216, 0.1, 32); // Metade do tamanho
    const cylinder8LateralSmall = new THREE.Mesh(cylinder4GeometrySmall, cylinder4MaterialLateral);
    cylinder8LateralSmall.position.set(-0.7, 0.3, 0.22);
    cylinder8LateralSmall.rotation.x = Math.PI / 2;
    const cylinder4GeometryFaceSmall = new THREE.CylinderGeometry(0.215, 0.215, 0.09, 32); // Metade do tamanho
    const cylinder8FaceSmall = new THREE.Mesh(cylinder4GeometryFaceSmall, cylinder4MaterialEscuro);
    cylinder8FaceSmall.position.set(-0.7, 0.3, 0.22);
    cylinder8FaceSmall.rotation.x = Math.PI / 2;

    // Adicionar os cilindros ao grupo
    group.add(cylinder, cylinder1, cylinder2, cylinder3, cylinder4, cylinder5, cylinder6, 
             cylinder7Lateral, cylinder7Face, cylinder8Lateral, cylinder8Face, cylinder9Lateral, cylinder9Face,
             cylinder7LateralSmall, cylinder7FaceSmall, cylinder8LateralSmall, cylinder8FaceSmall, 
             cylinder9LateralSmall, cylinder9FaceSmall);

    return group;
}
