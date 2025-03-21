export default function OurTeam() {
  const Team = [
    {
      name: "Manoj K Shanmugam",
      role: "CEO / Founder",
      image: "/mathin_portrait.jfif",
      linkedin: "#",
      insta: "#",
    },
    {
      name: "Mathinraj Ramasamy",
      role: "IT Team",
      image: "/mathin_portrait.jfif",
      linkedin: "#",
      insta: "#",
    },
  ];
  return (
    <div>
      <div className="mx-auto px-40 sm:container">
        <div className="border-b border-stroke dark:border-dark-3">
          <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
            Our Team
          </h2>
        </div>
      </div>
      <div className="px-20 py-10 flex align-middle justify-around">
        {Team.map((person) => (
          <div className="w-96 bg-white rounded-lg shadow-md">
            {/* Card Header */}
            <div className="h-80 overflow-hidden rounded-t-lg">
              <img
                src={person.image}
                alt="profile-picture"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Body */}
            <div className="text-center p-4">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                {person.name}
              </h4>
              <p className="text-gray-500 font-medium">{person.role}</p>
            </div>

            {/* Card Footer */}
            <div className="flex justify-center gap-7 p-4">
              <a
                href={person.linkedin}
                className="text-blue-600 text-xl hover:text-blue-800"
                aria-label="Like"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href={person.insta}
                className="text-purple-600 text-xl hover:text-purple-800"
                aria-label="Follow"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
