function createConvMovI() {
    const group = new THREE.Group();

    // Definir cores
    const mdfColor = 0x8B5A2B; // Marrom original parecido com MDF (mantido para a base)
    const darkerMdfColor = 0x5C3A1B; // Marrom mais escuro (mantido como base para duplicação)
    const gearColor = 0x7A4A1E; // Tom mais escuro baseado em mdfColor (original das engrenagens)
    const darkerGearColor = 0x3C2510; // Tom mais escuro baseado em darkerMdfColor (duplicação das engrenagens)

    // Base vertical (original)
    const baseGeometry = new THREE.BoxGeometry(0.1, 3.8, 2.5);
    const baseMaterial = new THREE.MeshBasicMaterial({ color: mdfColor });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.set(0, 1.5, 0);

    // Base vertical duplicada (tamanhos +0.01, profundidade 0.09, cor mais escura)
    const baseDupGeometry = new THREE.BoxGeometry(0.09, 3.81, 2.51);
    const baseDupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });
    const baseDup = new THREE.Mesh(baseDupGeometry, baseDupMaterial);
    baseDup.position.set(0, 1.5, 0);

    // Função auxiliar para criar engrenagens trapezoidais
    function createTrapezoidalGear(radius, teeth, thickness, material) {
        const shape = new THREE.Shape();
        const toothHeight = radius * 0.1;
        const toothBaseWidth = (2 * Math.PI * radius) / teeth * 0.6;

        shape.absarc(0, 0, radius - toothHeight, 0, 2 * Math.PI, false);

        for (let i = 0; i < teeth; i++) {
            const angle = (i / teeth) * 2 * Math.PI;
            const nextAngle = ((i + 0.5) / teeth) * 2 * Math.PI;

            const x1 = (radius - toothHeight) * Math.cos(angle);
            const y1 = (radius - toothHeight) * Math.sin(angle);
            const x2 = radius * Math.cos(angle);
            const y2 = radius * Math.sin(angle);
            const x3 = radius * Math.cos(nextAngle);
            const y3 = radius * Math.sin(nextAngle);
            const x4 = (radius - toothHeight) * Math.cos(nextAngle);
            const y4 = (radius - toothHeight) * Math.sin(nextAngle);

            shape.moveTo(x1, y1);
            shape.lineTo(x2, y2);
            shape.lineTo(x3, y3);
            shape.lineTo(x4, y4);
        }

        const extrudeSettings = { depth: thickness, bevelEnabled: false };
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        return new THREE.Mesh(geometry, material);
    }

    // Engrenagem grande (30 dentes, original)
    const largeGearRadius = 0.75;
    const largeGearMaterial = new THREE.MeshBasicMaterial({ color: gearColor });
    const largeGear = createTrapezoidalGear(largeGearRadius, 30, 0.1, largeGearMaterial);
    largeGear.position.set(0.05, 0.5, 0);
    largeGear.rotation.x = Math.PI;
    largeGear.rotation.y = Math.PI / 2;

    // Engrenagem grande duplicada (tamanhos +0.01, espessura 0.09, cor mais escura)
    const largeGearDupMaterial = new THREE.MeshBasicMaterial({ color: darkerGearColor });
    const largeGearDup = createTrapezoidalGear(largeGearRadius + 0.01, 30, 0.09, largeGearDupMaterial);
    largeGearDup.position.set(0.05, 0.5, 0);
    largeGearDup.rotation.x = Math.PI;
    largeGearDup.rotation.y = Math.PI / 2;
    const largeGearDup1 = createTrapezoidalGear(largeGearRadius + 0.01, 30.05, 0.09, largeGearDupMaterial);
    largeGearDup1.position.set(0.05, 0.5, 0);
    largeGearDup1.rotation.x = Math.PI;
    largeGearDup1.rotation.y = Math.PI / 2;
    const largeGearDup2 = createTrapezoidalGear(largeGearRadius + 0.01, 29.95, 0.09, largeGearDupMaterial);
    largeGearDup2.position.set(0.05, 0.5, 0);
    largeGearDup2.rotation.x = Math.PI;
    largeGearDup2.rotation.y = Math.PI / 2;

    // Engrenagem pequena (14 dentes, original)
    const smallGearRadius = 0.35;
    const smallGearMaterial = new THREE.MeshBasicMaterial({ color: gearColor });
    const smallGear = createTrapezoidalGear(smallGearRadius, 14, 0.1, smallGearMaterial);
    smallGear.position.set(0.05, 1.6, 0);
    smallGear.rotation.x = Math.PI;
    smallGear.rotation.y = Math.PI / 2;

    // Engrenagem pequena duplicada (tamanhos +0.01, espessura 0.09, cor mais escura)
    const smallGearDupMaterial = new THREE.MeshBasicMaterial({ color: darkerGearColor });
    const smallGearDup = createTrapezoidalGear(smallGearRadius + 0.01, 14, 0.09, smallGearDupMaterial);
    smallGearDup.position.set(0.05, 1.6, 0);
    smallGearDup.rotation.x = Math.PI;
    smallGearDup.rotation.y = Math.PI / 2;
    const smallGearDup1 = createTrapezoidalGear(smallGearRadius + 0.01, 13.95, 0.09, smallGearDupMaterial);
    smallGearDup1.position.set(0.05, 1.6, 0);
    smallGearDup1.rotation.x = Math.PI;
    smallGearDup1.rotation.y = Math.PI / 2;
    const smallGearDup2 = createTrapezoidalGear(smallGearRadius + 0.01, 14.05, 0.09, smallGearDupMaterial);
    smallGearDup2.position.set(0.05, 1.6, 0);
    smallGearDup2.rotation.x = Math.PI;
    smallGearDup2.rotation.y = Math.PI / 2;

    // Adicionar rodas "Tiny" do createConvMovII na posição (1, 1, 1)
    const tinyWheelGeometry = new THREE.CylinderGeometry(0.108, 0.108, 0.09, 32); // Lateral
    const tinyWheelFaceGeometry = new THREE.CylinderGeometry(0.107, 0.107, 0.1, 32); // Face
    const tinyWheelMaterialLateral = new THREE.MeshBasicMaterial({ color: darkerGearColor }); // 0x3C2510
    const tinyWheelMaterialFace = new THREE.MeshBasicMaterial({ color: gearColor }); // 0x7A4A1E

    // Roda 1
    const tinyWheel1Lateral = new THREE.Mesh(tinyWheelGeometry, tinyWheelMaterialLateral);
    tinyWheel1Lateral.position.set(0.2, 0.5, 0);
    tinyWheel1Lateral.rotation.x = Math.PI / 2;
    tinyWheel1Lateral.rotation.z = Math.PI / 2;
    const tinyWheel1Face = new THREE.Mesh(tinyWheelFaceGeometry, baseMaterial);
    tinyWheel1Face.position.set(0.2, 0.5, 0);
    tinyWheel1Face.rotation.x = Math.PI / 2;
    tinyWheel1Face.rotation.z = Math.PI / 2;

    // Roda 2
    const tinyWheel2Lateral = new THREE.Mesh(tinyWheelGeometry, tinyWheelMaterialLateral);
    tinyWheel2Lateral.position.set(-0.1, 1.6, 0);
    tinyWheel2Lateral.rotation.x = Math.PI / 2;
    tinyWheel2Lateral.rotation.z = Math.PI / 2;
    const tinyWheel2Face = new THREE.Mesh(tinyWheelFaceGeometry, tinyWheelMaterialFace);
    tinyWheel2Face.position.set(-0.1, 1.6, 0);
    tinyWheel2Face.rotation.x = Math.PI / 2;
    tinyWheel2Face.rotation.z = Math.PI / 2;

    // Roda 3
    const tinyWheel3Lateral = new THREE.Mesh(tinyWheelGeometry, tinyWheelMaterialLateral);
    tinyWheel3Lateral.position.set(-0.21, 0.5, 0);
    tinyWheel3Lateral.rotation.x = Math.PI / 2;
    tinyWheel3Lateral.rotation.z = Math.PI / 2;
    const tinyWheel3Face = new THREE.Mesh(tinyWheelFaceGeometry, baseMaterial);
    tinyWheel3Face.position.set(-0.21, 0.5, 0);
    tinyWheel3Face.rotation.x = Math.PI / 2;
    tinyWheel3Face.rotation.z = Math.PI / 2;

    // Nova roda com diâmetro 2 (raio 1)
    const largeWheelGeometry = new THREE.CylinderGeometry(0.75, 0.75, 0.09, 32); // Raio 1, altura 0.09
    const largeWheelFaceGeometry = new THREE.CylinderGeometry(0.749, 0.749, 0.1, 32); // Raio ligeiramente menor para a face
    const largeWheelMaterialLateral = new THREE.MeshBasicMaterial({ color: darkerGearColor });
    const largeWheelMaterialFace = new THREE.MeshBasicMaterial({ color: gearColor });

    const largeWheelLateral = new THREE.Mesh(largeWheelGeometry, largeWheelMaterialLateral);
    largeWheelLateral.position.set(-0.11, 0.5, 0); // Mesma posição inicial das "Tiny"
    largeWheelLateral.rotation.x = Math.PI / 2;
    largeWheelLateral.rotation.z = Math.PI / 2;
    const largeWheelFace = new THREE.Mesh(largeWheelFaceGeometry, largeWheelMaterialFace);
    largeWheelFace.position.set(-0.11, 0.5, 0);
    largeWheelFace.rotation.x = Math.PI / 2;
    largeWheelFace.rotation.z = Math.PI / 2;

    // Adicionar todos os objetos ao grupo
    group.add(base, baseDup, largeGear, largeGearDup, largeGearDup1, largeGearDup2, smallGear, smallGearDup, smallGearDup1, smallGearDup2,
              tinyWheel1Lateral, tinyWheel1Face, tinyWheel2Lateral, tinyWheel2Face, tinyWheel3Lateral, tinyWheel3Face,
              largeWheelLateral, largeWheelFace);

    // Girar todo o grupo -90 graus no eixo Y
    group.rotation.y = -Math.PI / 2;

    // Mover todo o grupo 1 unidade para baixo no eixo Y
    group.position.y = -0.9;

    return group;
}
