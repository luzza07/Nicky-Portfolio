const About = () => {
  return (
    <div
      id="about"
      className="relative w-full px-6 py-20 overflow-hidden text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:px-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 bg-yellow-400 rounded-full w-96 h-96 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 bg-blue-400 rounded-full w-96 h-96 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
            <span className="text-sm font-medium tracking-wider text-yellow-400 uppercase">
              Get to know me
            </span>
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"></div>
          </div>
          <h2 className="mb-4 text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text">
            About Me
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Passionate developer crafting digital experiences with modern
            technologies
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-start gap-20 lg:flex-row">
          {/* Left: Frontend Developer Section */}
          <div className="space-y-8 lg:w-1/2">
            <div className="relative">
              <div className="absolute w-8 h-8 rounded-full -top-2 -left-2 bg-yellow-400/20 blur-sm"></div>
              <h3 className="relative text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                Software Developer
              </h3>
            </div>

            <div className="relative p-8 border shadow-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border-white/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-t-2xl"></div>

              <p className="text-lg leading-relaxed text-gray-300">
                Motivated Bachelor of Information Management (BIM) student with
                hands-on experience in Java, Python, and SQL, seeking a Data
                Engineering Trainee role. Experienced in building backend
                systems, managing structured data, and supporting AI-driven
                solutions. Familiar with data pipelines, RESTful APIs, and
                working collaboratively in Agile teams. Quick to learn new tools
                and concepts, with a strong interest in Big Data technologies
                and scalable data pipelines. Enthusiastic about applying
                technical knowledge to real-world challenges and growing within
                a collaborative engineering team.
              </p>
            </div>
          </div>

          {/* Right: Education Section */}
          <div className="space-y-8 lg:w-1/2">
            <div className="relative">
              <div className="absolute w-8 h-8 rounded-full -top-2 -left-2 bg-blue-400/20 blur-sm"></div>
              <h3 className="relative text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  degree: "Bachelors of Information Management (BIM)",
                  University: "Tribhuvan University(TU)",
                  institution: "National College of Computer Studies (NCCS)",
                  period: "2020 - 2025",
                  status: "current",
                },
                {
                  degree: "Higher Secondary Examination Board",
                  institution: "Prime International School",
                  period: "2018 - 2020",
                  status: "completed",
                },
                {
                  degree: "Secondary Education Examination",
                  institution: "Dallu Awasiya Vidhyalaya",
                  period: "2005 - 2018",
                  status: "completed",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] shadow-lg hover:shadow-2xl"
                >
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4">
                    {edu.status === "current" ? (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-green-400">
                          Current
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-xs font-medium text-blue-400">
                          Completed
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <h4 className="pr-20 mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-yellow-300">
                    {edu.degree}
                  </h4>
                   <p className="mb-2 font-medium text-gray-400">
                    {edu.University}
                  </p>
                  <p className="mb-2 font-medium text-gray-400">
                    {edu.institution}
                  </p>{" "}
                 
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-4 text-gray-500">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                  </div>
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 bg-gradient-to-r from-blue-400 to-purple-400 rounded-b-2xl group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8 mt-20 md:grid-cols-4">
          {[
            { number: "15+", label: "Projects Completed" },
            { number: "1+", label: "Professional Experience" },
            { number: "5+", label: "Technologies" },
           
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center border bg-white/5 rounded-xl backdrop-blur-sm border-white/10"
            >
              <div className="mb-2 text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-20">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
