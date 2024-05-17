import {a,  useSprings } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";

// É um gancho usado para definir a animação em diferentes itens

const items = [

  // {
  //   position: [-1.5, 0 , 0],
  // },
  // {
  //   position: [0, 0 , 0],
  // },
  // {
  //   position: [1.5, 0 , 0],
  // },

  // Podemos especificá-los em um array separado e então fazer um loop nesse array.

  { 
  initialPosition: [-3.5, 0, 0],
  finalPosition: [ -1.5, 0, 0],
  },

  { 
    initialPosition: [ 0, 3.5, 0],
    finalPosition: [0, 0, 0],
  },
  
  { 
    initialPosition: [ 3.5, 0, 0],
    finalPosition: [ 1.5, 0, 0],
  },


]; 


const Scene = () => {

  const springs = useSprings(
    // items.length, 
    // [
    // { 
    //   from: {position: [ -3.5, 0, 0]},
    //   to: {position: [ -1.5, 0, 0]},
    // },
    // { 
    //   from: {position: [ 0, 3.5, 0]},
    //   to: {position: [ 0, 0, 0]},
    // },
    // { 
    //   from: {position: [ 3.5, 0, 0]},
    //   to: {position: [ 1.5, 0, 0]},
    // },
    items.length, 
    items.map((item) => ({
      from: { position: item.initialPosition},
      to: { position: item.finalPosition},
    }))); 

   // Aceita duas coias 1. Número de elementos que você deseja animar. 2. podemos passar um array ou uma função.
  // const items = [1, 2, 3];

  console.log(springs);
  
  

  return (
    <>
      <OrbitControls />

      {springs.map((item , i) => ( 
        <a.mesh 
        key={Math.random()}
        scale={0.5}
        // position-x={item}
        position={item.position}
        >
          <boxGeometry />
          <meshBasicMaterial color="gray"/>
        </a.mesh>
      ))}

    </>
  );
};

export default Scene;
