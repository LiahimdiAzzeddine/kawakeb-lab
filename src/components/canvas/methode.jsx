 {/* <Planet
          texturePath="./textures/mars-4k.jpg"
          size={1}
          position={[-18, 1.6, -35]}
          rotationSpeed={0.008}
          planetRef={MarsRef}
        />
        <Planet
          texturePath="./textures/neptune.jpeg"
          size={1.8}
          position={[2, 24, -160]}
          rotationSpeed={0.003}
          planetRef={NeptuneRef}
        />
        <PlanetWithRings
          planetTexture="./textures/8k_jupiter.jpg"
          ringTexture="./textures/Rings_Tex.jpeg"
          size={2.5}
          ringInner={3}
          ringOuter={5}
          position={[80, 30, -150]}
          rotationSpeed={0.0003}
          groupRef={JupiterRef}
        />

        <CameraScrollAnimation
          earthRef={EarthRef}
          marsRef={MarsRef}
          neptuneRef={NeptuneRef}
          jupiterRef={JupiterRef}
        /> */}
        function PlanetWithRings({
  planetTexture,
  ringTexture,
  size = 2,
  ringInner = 2.5,
  ringOuter = 4,
  position = [0, 0, 0],
  rotationSpeed = 0.0005,
  groupRef,
}) {
  const planetRef = useRef();
  const ringRef = useRef();
  const axialTilt = (30.4 * Math.PI) / 180;

  const planetMap = useLoader(THREE.TextureLoader, planetTexture);
  const ringMap = useLoader(THREE.TextureLoader, ringTexture);

  useFrame(() => {
    planetRef.current.rotation.y += rotationSpeed;
    ringRef.current.rotation.z += rotationSpeed * 0.2;
  });

  return (
    <group ref={groupRef} rotation-x={axialTilt} position={position}>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial map={planetMap} />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[ringInner, ringOuter, 128]} />
        <meshBasicMaterial
          map={ringMap}
          side={THREE.DoubleSide}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

function Planet({ texturePath, size = 1, position = [0, 0, 0], rotationSpeed = 0.0005, planetRef }) {
  const ref = planetRef || useRef();
  const map = useLoader(THREE.TextureLoader, texturePath);
  useFrame(() => {
    ref.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
}
function CameraScrollAnimation({ earthRef, marsRef, neptuneRef, jupiterRef }) {
  const { camera } = useThree();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-sections",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        pin: false,
      },
    });

    tl.to(camera.position, { x: 0, y: 0.1, z: 5, duration: 0.5 });

    tl.to(
      camera.position,
      { x: -4, y: 0, z: 6, duration: 1 }
    );
    tl.to(
      earthRef.current.position,
      { x: -2, y: -2.5, z: 0, duration: 1 },
      "<"
    );
    tl.to(
      marsRef.current.position,
      { x: -4, y: 0, z: 0, duration: 1 },
      "<"
    );

    tl.to(camera.position, { x: 4, y: -1, z: 6, duration: 1 });
    tl.to(
      marsRef.current.position,
      { x: 20, y: 0, z: -10, duration: 1 },
      "<"
    );
    tl.to(
      neptuneRef.current.position,
      { x: 5, y: -1, z: 0, duration: 1 },
      "<"
    );

    tl.to(camera.position, { x: 0, y: 2, z: 10, duration: 1.2 });
    tl.to(
      neptuneRef.current.position,
      { x: -20, y: -1, z: -10, duration: 1.2 },
      "<"
    );
    tl.to(
      jupiterRef.current.position,
      { x: 0, y: 2, z: -5, duration: 1.2 },
      "<"
    );

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, [camera, earthRef, marsRef, neptuneRef, jupiterRef]);

  return null;
}