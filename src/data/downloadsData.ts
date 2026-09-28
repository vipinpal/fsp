export interface DownloadItem {
  id: string;
  title: string;
  category: "Admissions" | "Academic" | "Policies" | "General";
  fileUrl: string;
  fileSize: string;
  fileType: string;
  dateAdded: string;
}

export const downloadsData: DownloadItem[] = [
  {
    id: "doc-1",
    title: "School Prospectus & Information Brochure 2026–27",
    category: "Admissions",
    fileUrl: "/branding/logo.svg",
    fileSize: "4.2 MB",
    fileType: "PDF",
    dateAdded: "Jan 2026",
  },
  {
    id: "doc-2",
    title: "CBSE Mandatory Public Disclosure Notice",
    category: "General",
    fileUrl: "/branding/logo.svg",
    fileSize: "1.1 MB",
    fileType: "PDF",
    dateAdded: "Feb 2026",
  },
  {
    id: "doc-3",
    title: "Annual Academic Curriculum & Assessment Scheme",
    category: "Academic",
    fileUrl: "/branding/logo.svg",
    fileSize: "2.8 MB",
    fileType: "PDF",
    dateAdded: "Jan 2026",
  },
  {
    id: "doc-4",
    title: "Student Code of Conduct & Anti-Bullying Policy",
    category: "Policies",
    fileUrl: "/branding/logo.svg",
    fileSize: "850 KB",
    fileType: "PDF",
    dateAdded: "Mar 2026",
  },
  {
    id: "doc-5",
    title: "School Bus Route & Transport Schedule",
    category: "General",
    fileUrl: "/branding/logo.svg",
    fileSize: "1.5 MB",
    fileType: "PDF",
    dateAdded: "Jan 2026",
  },
  {
    id: "doc-6",
    title: "Sample Transfer Certificate (TC) Format",
    category: "Admissions",
    fileUrl: "/branding/logo.svg",
    fileSize: "420 KB",
    fileType: "PDF",
    dateAdded: "Jan 2026",
  },
];
