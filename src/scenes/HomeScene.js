// src/ThreeScene.js
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { BokehPass } from "three/examples/jsm/postprocessing/BokehPass";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import px from "./textures/px.jpg";
import nx from "./textures/nx.jpg";
import py from "./textures/py.jpg";
import ny from "./textures/ny.jpg";
import pz from "./textures/pz.jpg";
import nz from "./textures/nz.jpg";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 1, 3000);
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const urls = [px, nx, py, ny, pz, nz];
    const textureCube = new THREE.CubeTextureLoader().load(urls);

    const parameters = { color: 0xff4900, envMap: textureCube };

    const materials = [],
      objects = [];
    const geo = new THREE.SphereGeometry(1, 20, 10);
    const s = 60,
      xgrid = 14,
      ygrid = 9,
      zgrid = 14;
    let count = 0;

    for (let i = 0; i < xgrid; i++) {
      for (let j = 0; j < ygrid; j++) {
        for (let k = 0; k < zgrid; k++) {
          const mesh = new THREE.Mesh(
            geo,
            new THREE.MeshBasicMaterial(parameters)
          );
          materials[count] = mesh.material;
          mesh.position.set(
            200 * (i - xgrid / 2),
            200 * (j - ygrid / 2),
            200 * (k - zgrid / 2)
          );
          mesh.scale.set(s, s, s);
          mesh.updateMatrix();
          scene.add(mesh);
          objects.push(mesh);
          count++;
        }
      }
    }

    // post processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bokehPass = new BokehPass(scene, camera, {
      focus: 500.0,
      aperture: 0.00025,
      maxblur: 0.01,
    });
    composer.addPass(bokehPass);
    composer.addPass(new OutputPass());

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };
    window.addEventListener("resize", onWindowResize);

    const animate = () => {
      const time = Date.now() * 0.00005;
      camera.lookAt(scene.position);
      materials.forEach((material, i) => {
        const h = ((360 * (i / materials.length + time)) % 360) / 360;
        material.color.setHSL(h, 1, 0.5);
      });
      composer.render();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      mountNode.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1 }}
    />
  );
};

export default ThreeScene;
