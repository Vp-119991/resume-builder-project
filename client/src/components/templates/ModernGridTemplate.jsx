import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ModernGridTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  // ✅ One consistent heading style
  const sectionHeading = "text-xl font-semibold mb-6";

  return (
    <div className="max-w-6xl mx-auto bg-gray-50 p-10">

      {/* Header Card */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        {data.personal_info?.profession && (
          <p
            className="text-lg font-medium mb-4"
            style={{ color: accentColor }}
          >
            {data.personal_info.profession}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail size={16} color={accentColor} />
              <span>{data.personal_info.email}</span>
            </div>
          )}

          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone size={16} color={accentColor} />
              <span>{data.personal_info.phone}</span>
            </div>
          )}

          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} color={accentColor} />
              <span>{data.personal_info.location}</span>
            </div>
          )}

          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-2 break-all">
              <Linkedin size={16} color={accentColor} />
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
              <Globe size={16} color={accentColor} />
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

      {/* Professional Summary */}
      {data.professional_summary && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2
            className={sectionHeading}
            style={{ color: accentColor }}
          >
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {data.professional_summary}
          </p>
        </div>
      )}

      {/* Two Column Grid */}
      <div className="grid grid-cols-2 gap-8">

        {/* Experience */}
        {data.experience?.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2
              className={sectionHeading}
              style={{ color: accentColor }}
            >
              Experience
            </h2>

            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{exp.position}</h3>
                    <span className="text-sm text-gray-500">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    {exp.company}
                  </p>
                  {exp.description && (
                    <p className="text-gray-700 text-sm whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2
              className={sectionHeading}
              style={{ color: accentColor }}
            >
              Education
            </h2>

            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {formatDate(edu.graduation_date)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {edu.institution}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-500">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Projects */}
      {data.project && data.project.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h2
            className={sectionHeading}
            style={{ color: accentColor }}
          >
            Projects
          </h2>

          <div className="space-y-6">
            {data.project.map((proj, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-800">
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
                  <p className="text-gray-700 text-sm mt-2">
                    {proj.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills?.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h2
            className={sectionHeading}
            style={{ color: accentColor }}
          >
            Skills
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="text-center border rounded-lg py-2 text-sm"
                style={{ borderColor: accentColor }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ModernGridTemplate;
