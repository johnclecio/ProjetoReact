import React from "react";
import perfilImg from "../img/John.png"; // ajuste para o seu caminho correto

function Sobre() {
  return (
    <section id="sobre" className="bg-linear-to-r from-gray-900 to-blue-700 py-20 pt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start gap-10">

        {/* Texto */}
        <div className="md:w-1/2 space-y-4 text-white">
          <div className="md:text-5xl font-extrabold drop-shadow-lg">
            <span className="text-2xl">32 anos</span>{" "} 
            <span className="text-2xl ">Estudante de Engenharia de Software</span>{" "} 
            <span className="text-2xl ">Foco em Desenvolvimento Java</span>


        
          </div>
            <p className="text-base/8 text-justify">
                Sou estudante de Engenharia de Software com uma forte paixão por tecnologia e desenvolvimento
                de sistemas. Tenho direcionado minha carreira para o desenvolvimento back-end utilizando Java,
                buscando criar aplicações seguras, eficientes e escaláveis.
            
                Minha jornada na área de tecnologia é guiada pelo aprendizado contínuo e pela vontade de evoluir
                todos os dias. Dedico meu tempo ao estudo de boas práticas de programação, orientação a objetos,
                estrutura de dados e arquitetura de software, sempre com o objetivo de escrever códigos limpos,
                organizados e de fácil manutenção.
            
                Possuo conhecimentos em APIs REST, bancos de dados relacionais e não relacionais, controle de
                versão com Git e metodologias modernas de desenvolvimento. Além disso, estou constantemente
                desenvolvendo projetos próprios para fortalecer minhas habilidades e transformar teoria em prática.
            
                Sou uma pessoa disciplinada, curiosa e motivada por desafios. Acredito que a tecnologia tem o
                poder de transformar realidades, e quero fazer parte dessa transformação criando soluções que
                gerem impacto positivo. Atualmente, busco uma oportunidade de estágio ou posição júnior onde
                eu possa contribuir com minhas habilidades, aprender com profissionais experientes e crescer
                dentro de um ambiente colaborativo e inovador.
           </p>

          
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={perfilImg} 
            alt="Foto de perfil" 
            className="w-80 md:w-112.5 drop-shadow-2xl rounded-4xl"
          />
        </div>
      </div>
       
    </section>
  );
}

export default Sobre;