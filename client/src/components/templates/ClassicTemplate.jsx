import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  // ✅ Common Section Heading Style
  const sectionHeading =
    "text-lg font-bold mb-4 uppercase tracking-wider border-b pb-1";

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
      
      {/* ================= HEADER ================= */}
      <header
        className="text-center mb-8 pb-6 border-b-2"
        style={{ borderColor: accentColor }}
      >
        <h1
          className="text-3xl font-bold mb-1"
          style={{ color: accentColor }}
        >
          {data.personal_info?.full_name ||
            data.full_name ||
            "Your Name"}
        </h1>

        {(data.personal_info?.profession || data.profession) && (
          <p className="text-sm font-medium text-gray-600">
            {data.personal_info?.profession || data.profession}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mt-3">
          {data.personal_info?.email && (
            <div className="flex items-center gap-1">
              <Mail className="size-4" />
              <span>{data.personal_info.email}</span>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-1">
              <Phone className="size-4" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-1">
              <MapPin className="size-4" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="size-4" />
              <span className="break-all">
                {data.personal_info.linkedin}
              </span>
            </div>
          )}
          {data.personal_info?.website && (
            <div className="flex items-center gap-1">
              <Globe className="size-4" />
              <span className="break-all">
                {data.personal_info.website}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* ================= SUMMARY ================= */}
      {data.professional_summary && (
        <section className="mb-6">
          <h2
            className={sectionHeading}
            style={{
              color: accentColor,
              borderColor: accentColor,
            }}
          >
            PROFESSIONAL SUMMARY
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* ================= EXPERIENCE ================= */}
      {data.experience?.length > 0 && (
        <section className="mb-6">
          <h2
            className={sectionHeading}
            style={{
              color: accentColor,
              borderColor: accentColor,
            }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-5">
            {data.experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 pl-4"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-sm text-gray-600 text-right">
                    {formatDate(exp.start_date)} –{" "}
                    {exp.is_current
                      ? "Present"
                      : formatDate(exp.end_date)}
                  </div>
                </div>

                {exp.description && (
                  <p className="text-gray-700 mt-2 whitespace-pre-line">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= PROJECTS ================= */}
      {data.project?.length > 0 && (
        <section className="mb-6">
          <h2
            className={sectionHeading}
            style={{
              color: accentColor,
              borderColor: accentColor,
            }}
          >
            PROJECTS
          </h2>

          <div className="space-y-5">
            {data.project.map((proj, index) => (
              <div
                key={index}
                className="border-l-4 pl-4"
                style={{ borderColor: accentColor }}
              >
                <h3 className="font-semibold text-gray-900">
                  {proj.name}
                </h3>

                {proj.type && (
                  <p
                    className="text-sm font-medium mt-1"
                    style={{ color: accentColor }}
                  >
                    {proj.type}
                  </p>
                )}

                {proj.description && (
                  <p className="text-gray-700 mt-2">
                    {proj.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= EDUCATION ================= */}
      {data.education?.length > 0 && (
        <section className="mb-6">
          <h2
            className={sectionHeading}
            style={{
              color: accentColor,
              borderColor: accentColor,
            }}
          >
            EDUCATION
          </h2>

          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {edu.degree}{" "}
                    {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-700">
                    {edu.institution}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>

                <div className="text-sm text-gray-600">
                  {formatDate(edu.graduation_date)}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= SKILLS ================= */}
      {data.skills?.length > 0 && (
        <section className="mb-6">
          <h2
            className={sectionHeading}
            style={{
              color: accentColor,
              borderColor: accentColor,
            }}
          >
            CORE SKILLS
          </h2>

          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="text-gray-700"
              >
                • {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
