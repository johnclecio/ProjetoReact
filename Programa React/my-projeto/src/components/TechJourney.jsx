function TechJourney() {
  return (
    <section className="bg-linear-to-r from-gray-900 to-blue-700 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Desenvolvedor em formação apaixonado por tecnologia e inovação  💻   
          </h1>
          

          <p className="mt-6 text-lg text-white/90">
            Estudante de Engenharia de Software focado em desenvolvimento web, 
            criando aplicações modernas e aprendendo novas tecnologias todos os dias.
          </p>

         
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://i.pinimg.com/1200x/7e/34/a0/7e34a08ec6f2d54c3da70cbd74449d4f.jpg"
            alt="imagem-perfil"
            className="w-80 md:w-112.5 drop-shadow-2xl rounded-4xl"
            />
        </div>

      </div>
    </section>
  );
}

export default TechJourney;