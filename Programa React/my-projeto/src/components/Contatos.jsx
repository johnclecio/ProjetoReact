import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Contato() {
  return (
    <section id="contato" className="py-20 bg-linear-to-r from-gray-900 to-blue-900 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Contato</h2>

        <ul className="text-xl font-bold text-center space-y-4">
          <li className="flex justify-center items-center gap-2">
            <img src={github} alt="GitHub" className="w-6 h-6" />
            <a
              className="text-blue-600 hover:text-indigo-600"
              href="https://github.com/johnclecio"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>

          <li className="flex justify-center items-center">
            <img src={linkedin} alt="Linkedin" className="w-6 h-6 mx-2"/>
            <a
              className="text-blue-600 hover:text-indigo-600"
              href="https://www.linkedin.com/in/john-fideles/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contato;