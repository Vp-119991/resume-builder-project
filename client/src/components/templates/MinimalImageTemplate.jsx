import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const profileImage =
    data.personal_info?.image &&
    (typeof data.personal_info.image === "string"
      ? data.personal_info.image
      : URL.createObjectURL(data.personal_info.image));

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800 shadow-xl rounded-2xl overflow-hidden">
      <div className="grid grid-cols-3">

        {/* Image column */}
        <div className="col-span-1 flex justify-center items-start pt-12">
          {profileImage && (
            <div
              className="p-1 rounded-full"
              style={{ backgroundColor: accentColor }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover bg-white"
              />
            </div>
          )}
        </div>

        {/* Name + title */}
        <div className="col-span-2 flex flex-col justify-center pt-12 px-10">
          <h1 className="text-4xl font-semibold tracking-wide">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="mt-1 text-sm uppercase tracking-widest text-zinc-500">
            {data.personal_info?.profession}
          </p>

          <div
            className="mt-5 h-px w-20"
            style={{ backgroundColor: accentColor }}
          />
        </div>

        {/* Sidebar */}
        <aside className="col-span-1 border-r border-zinc-200 px-6 py-10 space-y-10">

          {/* Contact */}
          <div className="space-y-2 w-full">

            {data.personal_info?.phone && (
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} color={accentColor} />
                {data.personal_info.phone}
              </div>
            )}

                   {data.personal_info?.email && (
  <div className="flex items-start gap-2">
    <Mail size={14} color={accentColor} className="shrink-0" />
    <span className="break-all">
      {data.personal_info.email}
    </span>
  </div>
)}

            {data.personal_info?.location && (
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} color={accentColor} />
                {data.personal_info.location}
              </div>
            )}

            {data.personal_info?.linkedin && (
              <div className="flex items-center gap-2 text-sm break-all">
                <Linkedin size={14} color={accentColor} />
                <a
                  href={data.personal_info.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {data.personal_info.linkedin}
                </a>
              </div>
            )}

            {data.personal_info?.website && (
              <div className="flex items-center gap-2 text-sm break-all">
                <Globe size={14} color={accentColor} />
                <a
                  href={data.personal_info.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {data.personal_info.website}
                </a>
              </div>
            )}

          </div>

          {data.education?.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold tracking-[0.25em] mb-4"
                style={{ color: accentColor }}
              >
                EDUCATION
              </h2>

              <div className="space-y-4 text-sm">
                {data.education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-medium">
                      {edu.degree}
                    </p>

                    <p className="text-zinc-500">
                      {edu.institution}
                    </p>

                    <p className="text-xs text-zinc-400">
                      {formatDate(edu.graduation_date)}
                      {edu.gpa && (
                        <span
                          className="ml-2 px-2 py-0.5 rounded text-[10px] font-medium"
                          style={{ backgroundColor: accentColor + "20", color: accentColor }}
                        >
                          GPA {edu.gpa}
                        </span>
                      )}

                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}


          {/* Skills */}
          {data.skills?.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold tracking-[0.25em] mb-4"
                style={{ color: accentColor }}
                x>
                SKILLS
              </h2>
              <ul className="space-y-2 text-sm text-zinc-700">
                {data.skills.map((skill, i) => (
                  <li key={i}>• {skill}</li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* Main content */}
        <main className="col-span-2 px-10 py-10 space-y-10">

          {/* Summary */}
          {data.professional_summary && (
            <section>
              <h2
                className="text-xs font-semibold tracking-[0.25em] mb-4"
                style={{ color: accentColor }}
              >
                SUMMARY
              </h2>
              <p className="text-zinc-700 leading-relaxed max-w-2xl">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience?.length > 0 && (
            <section>
              <h2
                className="text-xs font-semibold tracking-[0.25em] mb-6"
                style={{ color: accentColor }}
              >
                EXPERIENCE
              </h2>

              <div className="space-y-8">
                {data.experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium text-zinc-900">
                        {exp.position}
                      </h3>
                      <span className="text-xs text-zinc-400">
                        {formatDate(exp.start_date)} –{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>

                    <p
                      className="text-sm mt-1"
                      style={{ color: accentColor }}
                    >
                      {exp.company}
                    </p>

                    {exp.description && (
                      <ul className="mt-3 list-disc list-inside text-sm text-zinc-700 space-y-1">
                        {exp.description.split("\n").map((line, j) => (
                          <li key={j}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.project && data.project.length > 0 && (
            <section>
              <h2
                className="text-xs font-semibold tracking-[0.25em] mb-4"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h2>

              <div className="space-y-6">
                {data.project.map((proj, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-zinc-900">
                      {proj.name}
                    </h3>

                    {proj.type && (
                      <p
                        className="text-sm mt-1"
                        style={{ color: accentColor }}
                      >
                        {proj.type}
                      </p>
                    )}

                    {proj.description && (
                      <p className="text-sm text-zinc-700 mt-2">
                        {proj.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;
