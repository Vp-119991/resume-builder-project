import {
  FilePenLineIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloudIcon,
  Search,
  XIcon,
  LoaderCircleIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../configs/api";
import toast from "react-hot-toast";
import pdfToText from "react-pdftotext";

const Dashboard = () => {
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [allResumes, setAllResumes] = useState([]);
  const [search, setSearch] = useState("");
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

useEffect(()=>{
  loadAllResumes()
},[])

  const loadAllResumes = async () => {
 try {
   const { data } = await api.get(
        "/api/users/resumes",
        { headers: { Authorization: `Bearer ${token}` } }
      );
     setAllResumes(data.resumes)
 } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
  
 } }

  const filteredResumes = allResumes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  const createResume = async (e) => {
    e.preventDefault();
    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }
    try {
      const { data } = await api.post(
        "/api/resumes/create",
        { title },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAllResumes([...allResumes, data.resume]);
      setTitle("");
      setShowCreateResume(false);
      navigate(`/app/builder/${data.resume._id}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

const uploadResume = async (event) => {
  event.preventDefault();
  setIsLoading(true);

  try {
    if (!resume || !title) {
      toast.error("All fields required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("resume", resume);

    const { data } = await api.post(
      "/api/ai/upload-resume",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setTitle("");
    setResume(null);
    setShowUploadResume(false);
    navigate(`/app/builder/${data.resumeId}`);

  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
  }

  setIsLoading(false);
};

  const deleteResume = async (resumeId) => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this resume?')
    if (confirm) {
      const {data} = await api.delete(`/api/resumes/delete/${resumeId}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  }})
  setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
  toast.success(data.message)
}
    } catch (error) {
    toast.error(error?.response?.data?.message || error.message); 
    }
  };

  const editTitle = async (event) => {
    try {
          event.preventDefault();
          const {data} = await api.put(`/api/resumes/update/`,{resumeId: editResumeId, resumeData: {title}}, {
  headers: {
    Authorization: `Bearer ${token}`,
  }})
  setAllResumes(allResumes.map(resume => resume._id === editResumeId ? { ...resume,title }: resume))
  setTitle('')
  setEditResumeId('')
  toast.success(data.message)
    } catch (error) {
       toast.error(error?.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-32 -left-32 w-125 h-125 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-125 h-125 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div>
            <h1 className="text-5xl font-extrabold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Resume Dashboard
            </h1>
            <p className="text-slate-500 mt-3 text-lg">
              Manage your resumes professionally
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative mt-8 lg:mt-0">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search resumes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11 pr-5 py-3 w-80 rounded-2xl border border-slate-200 bg-white shadow-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-8 mb-20 flex-wrap">
          <button
            onClick={() => setShowCreateResume(true)}
            className="flex items-center gap-3 px-10 py-5 text-lg rounded-2xl bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold shadow-2xl hover:shadow-indigo-400/40 hover:scale-105 transition-all duration-300"
          >
            <PlusIcon size={24} />
            Create Resume
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="flex items-center gap-3 px-10 py-5 text-lg rounded-2xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <UploadCloudIcon size={24} className="text-indigo-600" />
            {isLoading && <LoaderCircleIcon className="animate-spin size-4 text-white"/>}
            {isLoading ? 'Uploading...' : 'Upload Resume'}
          </button>
        </div>

        {/* RESUME CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResumes.map((resume, idx) => {
            const gradients = ["from-indigo-500 to-purple-500","from-pink-500 to-rose-500","from-blue-500 to-cyan-500"];
            const lightGradients = ["from-indigo-50 to-purple-50","from-pink-50 to-rose-50","from-blue-50 to-cyan-50"];
            const gradient = gradients[idx % gradients.length];
            const lightGradient = lightGradients[idx % lightGradients.length];

            return (
              <div
                key={resume._id}
                onClick={() => navigate(`/app/builder/${resume._id}`)}
                className={`group relative rounded-2xl p-0.5 bg-linear-to-r ${gradient} shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                <div className={`bg-linear-to-br ${lightGradient} rounded-2xl p-6 h-full`}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`p-3 rounded-xl bg-linear-to-r ${gradient} text-white shadow-md`}>
                      <FilePenLineIcon size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-slate-800">{resume.title}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        Updated {new Date(resume.updatedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div onClick={(e) => e.stopPropagation()} className="absolute top-4 right-4 hidden group-hover:flex gap-3">
                    <TrashIcon
                      size={18}
                      onClick={() => deleteResume(resume._id)}
                      className="cursor-pointer text-slate-400 hover:text-red-500 transition"
                    />
                    <PencilIcon
                      size={18}
                      onClick={() => {
                        setEditResumeId(resume._id);
                        setTitle(resume.title);
                      }}
                      className="cursor-pointer text-slate-400 hover:text-indigo-500 transition"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MODAL */}
        {(showCreateResume || showUploadResume || editResumeId) && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
            <form
              onSubmit={showCreateResume ? createResume : editResumeId ? editTitle : uploadResume}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-12"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-10">
                {showCreateResume ? "Create Resume" : editResumeId ? "Edit Resume" : "Upload Resume"}
              </h2>

              <input
                type="text"
                placeholder="Enter Resume Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-6 py-4 mb-8 border border-slate-200 rounded-2xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              />

              {showUploadResume && (
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setResume(e.target.files[0])}
                  className="mb-8 text-sm"
                />
              )}

              <button className="w-full py-4 rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:scale-105 transition">
                Submit
              </button>

              <XIcon
                size={24}
                onClick={() => {
                  setShowCreateResume(false);
                  setShowUploadResume(false);
                  setEditResumeId("");
                  setTitle("");
                }}
                className="absolute top-8 right-8 cursor-pointer text-slate-400 hover:text-slate-700"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;