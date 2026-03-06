import { useEffect, useState } from "react";

function GithubRepos(){

  const [repos, setRepos] = useState([]);

  useEffect(() => {

    fetch("https://api.github.com/users/johnclecio/repos")
      .then(res => res.json())
      .then(data => setRepos(data));

  }, []);

  return(
    <section id="projetos" className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Meus Projetos no GitHub
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {repos.map(repo => (

            <div 
              key={repo.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >

              <h3 className="text-xl font-semibold mb-2">
                {repo.name}
              </h3>

              <p className="text-gray-600 mb-4">
                {repo.description || "Projeto sem descrição"}
              </p>

              <div className="flex justify-between text-sm text-gray-500">

                <span>
                  {repo.language || "N/A"}
                </span>

                <span>
                  ⭐ {repo.stargazers_count}
                </span>

              </div>

              <a
                href={repo.html_url}
                target="_blank"
                className="mt-4 inline-block text-indigo-600 hover:underline"
              >
                Ver no GitHub →
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default GithubRepos;