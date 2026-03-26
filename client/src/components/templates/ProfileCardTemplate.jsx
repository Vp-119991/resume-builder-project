import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ProfileCardTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">

      {/* Header */}
      <div className="p-8 text-center bg-linear-to-b from-gray-300 to-gray-100">
        {data.personal_info?.image && (
          <img
            src={
              typeof data.personal_info.image === "string"
                ? data.personal_info.image
                : URL.createObjectURL(data.personal_info.image)
            }
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow"
          />
        )}

        <h1
          className="text-2xl font-bold mt-4"
          style={{ color: accentColor }}
        >
          {data.personal_info?.full_name}
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          {data.personal_info?.profession}
        </p>

        {/* Contact */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-700">
          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone size={14} color={accentColor} />
              <span>{data.personal_info.phone}</span>
            </div>
          )}

          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail size={14} color={accentColor} />
              <span>{data.personal_info.email}</span>
            </div>
          )}

          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin size={14} color={accentColor} />
              <span>{data.personal_info.location}</span>
            </div>
          )}

          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-2 break-all">
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
            <div className="flex items-center gap-2 break-all">
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
      </div>

      {/* Body */}
      <div className="p-8 space-y-8">

        {/* Summary */}
        {data.professional_summary && (
          <section>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: accentColor }}
            >
              Professional Summary
            </h3>
            <p className="text-zinc-700">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <section>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: accentColor }}
            >
              Experience
            </h3>

            <div className="space-y-4">
              {data.experience.map((exp, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <div className="flex justify-between flex-wrap">
                    <h4 className="font-semibold">
                      {exp.position}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {formatDate(exp.start_date)} –{" "}
                      {exp.is_current
                        ? "Present"
                        : formatDate(exp.end_date)}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600">
                    {exp.company}
                  </p>

                  {exp.description && (
                    <p className="text-sm text-zinc-700 mt-2 whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills?.length > 0 && (
          <section>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: accentColor }}
            >
              Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project?.length > 0 && (
          <section>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: accentColor }}
            >
              Projects
            </h3>

            <div className="space-y-4">
              {data.project.map((proj, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-800">
                    {proj.name}
                  </h4>

                  {proj.type && (
                    <p
                      className="text-sm font-medium mt-1"
                      style={{ color: accentColor }}
                    >
                      {proj.type}
                    </p>
                  )}

                  {proj.description && (
                    <p className="text-sm text-gray-600 mt-2">
                      {proj.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <section>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: accentColor }}
            >
              Education
            </h3>

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
                    {edu.gpa && ` • GPA: ${edu.gpa}`}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default ProfileCardTemplate;
