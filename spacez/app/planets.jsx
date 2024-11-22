"use client";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


export function BasedPlanet(url, scale){
  const myimagerRef = useRef(null);
  const [isScene, setIsScene] = useState(false)
  useEffect(() => {
    if (isScene){
      return
    }
    const scene = new THREE.Scene();
    setIsScene(true)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
    camera.position.set(-4, -1, 300);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // scene.background = new THREE.Color(0xff0000);
    const dmodel = myimagerRef.current;
    if (dmodel) {
      dmodel.appendChild(renderer.domElement);
    }
    renderer.setClearColor(0x000000, 0);

    const loader = new GLTFLoader();
    let model; // Переменная для хранения загруженной модели

    loader.load(url, function (gltf) {
      model = gltf.scene;
      scene.add(model);
      

      if (window.innerWidth >= 1920){
        model.position.set(innerWidth/9, 0, 0);
        model.scale.set(scale[0], scale[1], scale[2]);
        model.rotation.set(0.15, 0, -0.08);
      } else if (window.innerWidth >= 1441){
        model.position.set(innerWidth/9, 0, 0);
        model.scale.set(scale[0]/1.2, scale[1]/1.2, scale[2]/1.2);
        model.rotation.set(0.15, 0, -0.08);
      } else if (window.innerWidth >= 1025){
        model.position.set(innerWidth/12, 0, 0);
        model.scale.set(scale[0]/1.4, scale[1]/1.4, scale[2]/1.4);
        model.rotation.set(0.15, 0, -0.08);
      } else if (window.innerWidth >= 769) {
        model.position.set(innerWidth/12, 0, 0);
        model.scale.set(scale[0]/1.6, scale[1]/1.6, scale[2]/1.6);
        model.rotation.set(0.15, 0, -0.08);
      } else if (window.innerWidth >= 481) {
        model.position.set(-10, 30, 0);
        model.scale.set(scale[0]/1.5, scale[1]/1.7, scale[2]/1.5);
        model.rotation.set(0.15, 0, -0.08);
      } else if (window.innerWidth >= 320){
        model.position.set(0, innerHeight/32, 0);
        model.scale.set(scale[0]/2.4, scale[1]/2.8, scale[2]/2.4);
        model.rotation.set(0.6, 0, -0.08);
      }
      // Добавляем освещение
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
      directionalLight.position.set(-2.7, 1.5, -0);
      scene.add(directionalLight);

      animate();
    }, undefined, function (error) {
      console.error(error);
    });

    // Функция анимации
    function animate() {
      requestAnimationFrame(animate);

      if (model) {
        // Вращение модели
        model.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    }
  }, [url, scale]);

  return (
    <>
      <div ref={myimagerRef} className='myImager'></div>
    </>
  );
};

// export function earth(){
//     return basedPlanet("/3dmodels/ia/untitled.gltf"); 
// }

// export function mars(){
//     return basedPlanet("/3dmodels/Mars.gltf"); 
// }

