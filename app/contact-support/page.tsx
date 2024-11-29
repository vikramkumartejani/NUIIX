"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FiChevronDown, FiPaperclip } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  issueType: z.string().min(1, "Please select an issue type"),
  description: z.string().min(10, "Please describe your problem in detail"),
  files: z.any(),
  isAudioLarger: z.string(),
  isImageLarger: z.string(),
  browser: z.string().min(1, "Please select your browser"),
  region: z.string().min(1, "Please select your region"),
});

type FormData = z.infer<typeof formSchema>;

const issueTypes = [
  "Please Select",
  "Technical Issue",
  "Account Problem",
  "Billing Question",
  "Feature Request",
  "Other",
];
const browsers = [
  "Please Select",
  "Chrome",
  "Firefox",
  "Safari",
  "Edge",
  "Opera",
  "Other",
];
const regions = [
  "Please Select",
  "North America",
  "South America",
  "Europe",
  "Asia",
  "Africa",
  "Oceania",
];
const sizeOptions = ["Please Select", "Yes", "No"];

const ContactSupport = () => {
  const [files, setFiles] = useState<FileList | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    console.log(files);
  };

  return (
    <div className="w-full">
      <div className="bg-black py-5 md:py-10">
        <Header />
      </div>

      {/* Add here Support Request */}
      <div className="mt-14 mb-10 md:mb-20 px-3">
        <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-md border py-5 px-4 md:p-6">
          <div className="flex items-center gap-2 mb-10">
            <div>
              <img src="/assets/black-logo.png" alt="black-logo" width={120} className="md:w-[120px] w-[80px]" />
            </div>
            <h1 className="text-xl md:text-2xl font-semibold">Support Request</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="">
                <label
                  htmlFor="firstName"
                  className="block text-sm md:text-lg font-medium text-gray-700 mb-1"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("firstName")}
                  id="firstName"
                  type="text"
                  className="w-full px-3 py-2 md:py-3 text-sm md:text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm md:text-lg text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm md:text-lg font-medium text-gray-700 mb-1"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("lastName")}
                  id="lastName"
                  type="text"
                  className="w-full px-3 py-2 md:py-3 text-sm md:text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm md:text-lg text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-lg font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className="w-full px-3 py-2 md:py-3 text-sm md:text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm md:text-lg text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="issueType"
                className="block text-sm md:text-lg font-medium text-gray-700 mb-1"
              >
                Issue <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  {...register("issueType")}
                  id="issueType"
                  className="w-full px-3 py-2 md:py-3 text-sm md:text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                >
                  {issueTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.issueType && (
                <p className="mt-1 text-sm md:text-lg text-red-500">
                  {errors.issueType.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm md:text-lg font-medium text-gray-700 mb-1"
              >
                Please describe the problem <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("description")}
                id="description"
                rows={4}
                className="w-full px-3 py-2 md:py-3 text-sm md:text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-sm md:text-lg text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="files"
                className="block text-sm md:text-lg font-medium text-gray-700 mb-1"
              >
                Image and audio files used. If inputting test scripts, please
                upload as a doc. *
              </label>
              <div className="flex items-center space-x-2">
                <label
                  htmlFor="files"
                  className="cursor-pointer bg-white px-4 py-2 md:py-3 text-sm md:text-lg border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className="text-sm md:text-lg font-medium text-gray-600">
                    Choose Files
                  </span>
                  <input
                    type="file"
                    id="files"
                    multiple
                    className="hidden"
                    onChange={(e) => setFiles(e.target.files)}
                  />
                </label>
                <span className="text-sm md:text-lg text-gray-500">
                  {files
                    ? `${files.length} file(s) selected`
                    : "No file chosen"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="isAudioLarger"
                  className="block text-sm md:text-lg font-medium text-gray-700 mb-1"
                >
                  Is your audio file larger than 15MB? *
                </label>
                <div className="relative">
                  <select
                    {...register("isAudioLarger")}
                    id="isAudioLarger"
                    className="w-full px-3 py-2 md:py-3 text-sm md:text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    {sizeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="isImageLarger"
                  className="block text-sm md:text-lg font-medium text-gray-700 mb-1"
                >
                  Is your image larger than 10MB? *
                </label>
                <div className="relative">
                  <select
                    {...register("isImageLarger")}
                    id="isImageLarger"
                    className="w-full px-3 py-2 md:py-3 text-sm md:text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    {sizeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="browser"
                  className="block text-sm md:text-lg font-medium text-gray-700 mb-1"
                >
                  Which browser are you using? *
                </label>
                <div className="relative">
                  <select
                    {...register("browser")}
                    id="browser"
                    className="w-full px-3 py-2 md:py-3 text-sm md:text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    {browsers.map((browser) => (
                      <option key={browser} value={browser}>
                        {browser}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                {errors.browser && (
                  <p className="mt-1 text-sm md:text-lg text-red-500">
                    {errors.browser.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="region"
                  className="block text-sm md:text-lg font-medium text-gray-700 mb-1"
                >
                  Country/Region
                </label>
                <div className="relative">
                  <select
                    {...register("region")}
                    id="region"
                    className="w-full px-3 py-2 md:py-3 border text-sm md:text-lg border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    {regions.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                {errors.region && (
                  <p className="mt-1 text-sm md:text-lg text-red-500">
                    {errors.region.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div
                className="g-recaptcha"
                data-sitekey="your-recaptcha-site-key"
              ></div>
              <button
                type="submit"
                className="w-full md:w-[100px] px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSupport;
