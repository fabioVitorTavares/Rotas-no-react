import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const DadosUsuario = ({route}) => {
  const [perfil, setPerfil] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    setPerfil(route.perfil)
    console.log('route :>> ', route);
    console.log('id :>> ', id);
  }, [])
  return (
      <>
        {perfil === 'CTV' ? (
          <h1 style={{ margin: 0 }}>dados CTV {id}</h1>
        ) : (
            <h1 style={{ margin: 0 }}>dados PRODUTOR {id}</h1>
        )}
      </>

  );
};

export default DadosUsuario;