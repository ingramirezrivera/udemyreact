import React from 'react';
import PropTypes from 'prop-types';

const otherMessage = {
  nombre: 'Daniel',
  apellido: 'Rami'
}

const getResult = (a,b) =>  {
  return a+b;
}



export const FirstApp = ({ title, subTitle='LA tierra explota', name }) => {

  

  const newMessage = 'Fernando';

  return (
    <>
    <h1>{ title }</h1>
    <h1>{ subTitle }</h1>
    <h1>{ name }</h1>


      {/* <h1>
          Daniel Ramírez
      </h1>
      <h2>{ newMessage }</h2>
      <code>{ JSON.stringify(otherMessage) }</code>
      <h2>{ getResult(1,2) }</h2>
      <p>
        Este es mi párrafo.
      </p> */}
    </>
  )
}

FirstApp.defaultProps = {
  name: 'Pablo RAmirez',
  subTitle: 'No hay subtitulo',
  title: 'No hay titulo',
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}
