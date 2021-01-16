
import React from 'react'
//assets
import episodio1Img from '../assets/images/podcast/episodio1.jpg'
import episodio2Img from '../assets/images/podcast/episodio2.jpg'
import episodio3Img from '../assets/images/podcast/episodio3.jpg'
import episodio4Img from '../assets/images/podcast/episodio4.jpg'

const PodcastData = [
  {
    image: episodio1Img,
    podcast: <iframe src="https://open.spotify.com/embed-podcast/episode/7aTZecU9k0xlx9KOGqkW2A" width="100%" height="250px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
    title: 'Placeholder 1',
    text: 'Se abren las cajas que contienen el material y aparecen las primeras piezas de un rompecabezas disperso. Tocar el material físicamente provoca emociones y reactiva las memorias. En esta primera aproximación a las fotografías, los apuntes y las grabaciones del archivo, las motivaciones se presentan inciertas, pero las distintas voces develan el componente humano detrás de este archivo de arte que estuvo a punto de perderse para siempre.',
    link: 'https://open.spotify.com/show/5fOh3buYtXsrU1K7214fwns'
  },
  {
    image: episodio2Img,
    podcast: null,
    title: 'Placeholder 2',
    text: '¿Qué contienen las cajas encontradas en Puerto Plata? ¿Por qué plantean nuevas preguntas a la historia del arte dominicano? Central Marginal conversa con quien dirige las investigaciones académicas del archivo. El encuentro describe la arquitectura del archivo, traza los primeros contactos con la región e introduce el proyecto de una escuela de arte en el Caribe que sobrepasa los límites de su tiempo.',
    link: 'https://open.spotify.com/show/5fOh3buYtXsrU1K7214fwns'
  }, {
    image: episodio3Img,
    podcast: null,
    title: 'Placeholder 3',
    text: 'Profundizamos en las biografías personales de los cuatro artistas del colectivo Sincrético revisitando sus proyectos y desdoblando las implicaciones de sus obras y por qué desafían aún hoy las convenciones sociales de República Dominicana. Reimaginemos una visión del arte que navega entre la utopía y la acción, abriendo nuevas preguntas sobre el archivo.',
    link: 'https://open.spotify.com/show/5fOh3buYtXsrU1K7214fwns'
  }, {
    image: episodio4Img,
    podcast: null,
    title: 'Placeholder 4',
    text: 'Central Marginal invita a pensar siguiendo la metodología creativa del archivo Sincrético. A través de un collage sonoro que recopila distintas voces rompemos las líneas del tiempo y las distancias de mar entre las islas. Una experiencia lúdico-colectiva que imagina el futuro que queremos para el arte desde nuestro presente convulso. El arte es el lugar de la posibilidad.',
    link: 'https://open.spotify.com/show/5fOh3buYtXsrU1K7214fwns'
  },
]

export default PodcastData