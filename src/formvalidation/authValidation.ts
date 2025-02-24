import * as yup from "yup";

export const firstInputValidations = yup.object({
  title: yup
    .string()
    .required("Please enter the title of the job")
    .min(5, "Title must be at least 5 characters long")
    .max(20, "Title cannot exceed 20 characters"),
  description: yup
    .string()
    .required("Please enter the job description")
    .min(3, "Description must be at least 3 characters long"),
  type: yup.string().required("Please enter the job type"),
  company: yup.string().required("Please enter the company name"),
});

export const secondInputValidation = yup.object({
  logo: yup
    .mixed<FileList>()
    .test("fileType", "Only image files (PNG, JPG, JPEG) are allowed", (value) => {
      if (!value || !(value instanceof FileList) || value.length === 0) return false;
      return ["image/png", "image/jpg", "image/jpeg"].includes(value[0].type);
    })
    .required("Please upload a logo"),
  salary: yup.string().required("Please enter the salary of the job"),
  location: yup
    .string()
    .required("Please enter the location")
    .min(5, "Location must be at least 5 characters long")
    .max(40, "Location cannot exceed 40 characters"),
});
