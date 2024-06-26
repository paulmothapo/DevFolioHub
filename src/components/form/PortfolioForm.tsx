"use client";
import React, { useState } from "react";

const PortfolioForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [email, setEmail] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [newTechnology, setNewTechnology] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);
    setSubmitError(false);
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("website", website);
    if (thumbnail) {
      formData.append("thumbnail", thumbnail); 
    }
    formData.append("github", github);
    formData.append("twitter", twitter);
    formData.append("email", email);
    formData.append("technologies", JSON.stringify(technologies));
  
    try {
      const response = await fetch("/api/portfolios/create", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        console.log("Portfolio submitted successfully");
        setIsSubmitted(true);
        setName("");
        setDescription("");
        setWebsite("");
        setThumbnail(null);
        setGithub("");
        setTwitter("");
        setEmail("");
        setTechnologies([]);
        setNewTechnology("");
      } else {
        console.error("Failed to submit portfolio");
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Error submitting portfolio:", error);
      setSubmitError(true);
    }
  };
  
  
  

  const handleTechnologyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value) {
      if (e.target.checked) {
        setTechnologies([...technologies, value]);
      } else {
        setTechnologies(technologies.filter((tech) => tech !== value));
      }
    }
  };

  const addNewTechnology = () => {
    const value = newTechnology.trim();
    if (value && !technologies.includes(value)) {
      setTechnologies([...technologies, value]);
      setNewTechnology("");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="website"
            className="block text-gray-700 font-bold mb-2"
          >
            Website
          </label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Technologies
          </label>
          <div>
            {technologies.map((tech, index) => (
              <label key={index} className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  value={tech}
                  checked={technologies.includes(tech)}
                  onChange={handleTechnologyChange}
                  className="form-checkbox"
                />
                <span className="ml-2">{tech}</span>
              </label>
            ))}
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={newTechnology}
              onChange={(e) => setNewTechnology(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              placeholder="Add new technology"
            />
            <button
              type="button"
              onClick={addNewTechnology}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="thumbnail"
            className="block text-gray-700 font-bold mb-2"
          >
            Thumbnail Image
          </label>
          <input
            type="file"
            id="thumbnail"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files?.[0] ?? null)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="github"
            className="block text-gray-700 font-bold mb-2"
          >
            GitHub Profile
          </label>
          <input
            type="text"
            id="github"
            value={github}
            required
            onChange={(e) => setGithub(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="twitter"
            className="block text-gray-700 font-bold mb-2"
          >
            Twitter Profile{" "}
            <span className="font-normal text-sm">(Optional)</span>
          </label>
          <input
            type="text"
            id="twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>

      {isSubmitted && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
          role="alert"
        >
          <strong>Success!</strong> Your portfolio has been submitted.
        </div>
      )}

      {submitError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          role="alert"
        >
          <strong>Error!</strong> Failed to submit your portfolio. Please try
          again.
        </div>
      )}
    </div>
  );
};

export default PortfolioForm;


